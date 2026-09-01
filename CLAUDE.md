# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Sloucy (Слоўцы) - an Expo / React Native app for learning Belarusian vocabulary through two mirrored matching games, picked from the home screen:

- **выбар малюнка** ([imageSelection/](imageSelection/)) - a word is shown, six images appear, you tap the right one.
- **выбар слова** ([wordSelection/](wordSelection/)) - an image is shown, six words appear, you tap the right one.

Ten questions per run either way, then a shared completion screen. The two modes share the vocabulary, the run generator and the answer-tile animation, but keep **separate** progress.

All user-facing text is in Belarusian (Taraškievica orthography). Keep it that way when adding UI strings. Source comments and the readme are Belarusian too; new code comments in English are fine.

## Commands

```bash
npx expo start -a        # run on Android emulator/device (the usual dev loop)
npx expo start           # Metro bundler, pick platform interactively
npx tsc --noEmit         # typecheck (strict is on; there is no `build` script)
```

There are no tests, no linter, and no CI. Don't go looking for them, and don't add a test harness unless asked.

Builds and store submissions go through EAS (`eas.json` defines `development`/`preview`/`production` profiles). `publish/apple/` and `publish/play/` hold store screenshots; both are excluded from EAS uploads via `.easignore`.

Releasing means bumping three fields in [app.json](app.json) together: `expo.version`, `expo.ios.buildNumber`, `expo.android.versionCode`.

### Rebuilding vocabulary.md

[vocabulary.md](vocabulary.md) is a generated catalogue of every entry with its images. Regenerate after editing the vocabulary (per [readme.md](readme.md)):

1. `npx tsc ./scaffolding/buildVocabularyMd.ts`
2. In the emitted `vocabulary.js` (at the repo root, next to the .ts), hand-add `function require(x) { return x }` - the script runs under plain Node, which has no Metro asset resolver, so `require('./data/x.jpg')` must be stubbed to return the path string.
3. `node ./buildVocabularyMd.js`

## Architecture

Entry point is [App.tsx](App.tsx) (via `node_modules/expo/AppEntry.js`), not a routes directory. Navigation is **@react-navigation native-stack**, with the five screens declared inline and typed by [Routes.tsx](Routes.tsx). There is no file-based routing and no `expo-router`; the two external links in [Statistics.tsx](Statistics.tsx) use `Linking.openURL`.

Startup blocks on **both** modes' `initializationPromise`s before hiding the splash screen, so that stats are in memory before any screen renders. Add a mode, add its promise to that `Promise.all`.

Mode-agnostic modules sit at the repo root ([vocabulary.ts](vocabulary.ts), [gameRun.ts](gameRun.ts), [gameStats.ts](gameStats.ts), [randomization.ts](randomization.ts), [theme.ts](theme.ts), [utils.ts](utils.ts), [linguistics.tsx](linguistics.tsx)), as do the shared screens ([Home.tsx](Home.tsx), [Completion.tsx](Completion.tsx), [Statistics.tsx](Statistics.tsx)). Each `*Selection/` directory holds only what is specific to that game.

### The vocabulary (the heart of the repo)

[vocabulary.ts](vocabulary.ts) is a hand-maintained ~1500-line array of ~350 `VocabularyItem`s, shared by both modes. Understanding its conventions matters more than anything else in this codebase:

- **A backtick marks stress.** `'абр\`оць'` means the character right after the backtick is the stressed vowel, rendered red by `TextStyle.stressed`. `VocabularyEntry.fromString` does the parsing; `canonical` is the backtick-stripped word, and `key` (backticks intact) is the stable identity used in persisted stats - **changing a word's stress marks resets that word's progress for existing users.**
- **Images are `require()`d from [data/](data/), three per word**, each with a source-attribution comment giving the stock URL/licence. New images: 400×400, JPEG quality 80.
- **Asset filenames must be ASCII.** Cyrillic filenames break iOS builds (see commits `0fae351`, `a273a3f`). Name files after the English gloss: `bridle1.jpg`, `tablecloth2.jpg`.
- **An item with a `comment` is disabled** (typically `'Не знайшоў фоткі'` - no picture found). The default export is `vocabulary.filter(x => x.isEnabled)` and is what both games and the statistics denominator use; the named `fullVocabulary` export includes disabled entries and exists for the markdown builder.
- **`exclusion` lists prevent confusable distractors.** `['пыса']` on `абр`оць` keeps "muzzle" out of the same six-item set as "bridle". `exclusionChecker` in [gameRun.ts](gameRun.ts) applies this in both directions, comparing against `canonical`, and it does the same job in both modes - keeping a confusable *picture* out of the picture game and a confusable *word* out of the word game.

### Game flow and selection

Both games build a run of 10 questions up front and share `generateQuestions` in [gameRun.ts](gameRun.ts), which uses the helpers in [randomization.ts](randomization.ts): `electManyWeighted` picks the answers, `electManyExceptFor` picks five non-confusable distractors, `randomInsert` slots the answer in at a random position. Each mode's own thin `generateRun` then attaches what it displays - six images for the picture game, one image of the answer for the word game.

Each game screen holds its run in **per-mount state** - `const [currentRun] = useState(generateRun)`. The lazy initializer runs once per mount, so the run is stable across re-renders (rotation, wrong taps) but never outlives the screen: **every entry into a game screen is a fresh run**, and backing out mid-run discards it. Completion pops the game screen (`navigation.replace('Completion', …)`), so the next visit builds a new run anyway.

`vocabularyItemWeight` weights each word: perfected words get 1, seen-but-unperfected 3, unseen 2 - so words you have met but not mastered come up most often, and mastered ones least. It reads the *calling mode's* stats, so the two games steer independently.

[components/SelectionTile.tsx](components/SelectionTile.tsx) owns the tap feedback for both games: correct answers pulse-scale with a green border, wrong ones shake with a red one. It knows nothing about its contents - [imageSelection/ImagesSection.tsx](imageSelection/ImagesSection.tsx) puts an `Image` inside it, [wordSelection/WordsSection.tsx](wordSelection/WordsSection.tsx) a `Text`. All animations use `useNativeDriver` and fire their callback in `.start()`, so state advances only after the animation finishes.

Each section keeps its own `frontIndex` state, doing two jobs: it says which tile is raised via `zIndex`/`elevation`, and `frontIndex !== null` means an animation is running, which `disable`s every tile. That lock matters - without it a second fast tap fires the answer callback twice and double-counts the click stats. The `.start()` callbacks also check `finished`, because an interrupted animation still invokes them. Both sections are keyed by `runIndex` from their game screen so tiles remount per question rather than carrying animation state across.

### Persistence

[gameStats.ts](gameStats.ts) exports `createStatsStore(key)`; each mode's `persistence.ts` is one call to it. **Two independent AsyncStorage keys, `ImageSelectionStats` and `WordSelectionStats`**, each holding a JSON `GameStats` - a plain interface, not a class, because `JSON.parse` strips prototypes anyway (`version = 1`, run/click counters, and `seenWords`/`perfectedWords` arrays of vocabulary keys). Progress is deliberately **not** shared: recognising a picture from a word and a word from a picture are different skills. Each store loads once into a module-level `currentStats` so `getStats()` is synchronous everywhere; `mutateStats` takes a copy-producing mutator (use the exported `copyStats`) and fires the async write without awaiting it.

Everything on the read path goes through `normalize`, which returns fresh defaults for absent, corrupt, or wrong-`version` data - `getStats()` must never return `undefined`, or every screen crashes on first read. If you change the shape, bump `version`; unmigrated data then falls back to defaults rather than half-loading - **which wipes every existing user's progress in both modes**, since the two stores share the `version` constant.

"Perfected" means answered correctly on the first attempt in some run; "seen" means answered correctly at all.

### Design system

[theme.ts](theme.ts) is the single source of truth for the look: `color` (brand red plus a warm neutral ramp), `space`, `radius`, `type` (a fixed scale, each entry carrying its `fontFamily`), and one `shadow` preset. Screens should not hardcode colours, font sizes or spacing - there is no `constants.ts` any more.

The app is set in **Noto Serif**, loaded in [App.tsx](App.tsx) via `Font.loadAsync(fontAssets)`, which is `Promise.all`'d with `initializationPromise` so nothing renders before the font is ready. `fontAssets` in [theme.ts](theme.ts) `require()`s the .ttf files by path on purpose: importing from the `@expo-google-fonts/noto-serif` root drags all 18 weights (~11.5 MB) into the bundle. React Native does not inherit `fontFamily`, so every `Text` needs a `type.*` style (nested `Text` inside a styled `Text` does inherit - that is how the stressed vowel works).

**Only two weights exist**, `regular` (400) and `semiBold` (600), and every `type.*` entry uses one of them - hierarchy otherwise comes from size, colour and `letterSpacing`. Weight is never set with `fontWeight`; it is always carried by the family name. Keep it to two: each weight is a separate ~500 KB file in the bundle.

Noto Serif's ascent + descent is **1.362 em** (its `hhea` and OS/2 typo metrics agree, and `USE_TYPO_METRICS` is set), which is taller than Inter's used to be. **A `lineHeight` below `1.362 * fontSize` clips ascenders and descenders on Android** - every value in the `type` scale is that minimum rounded up, so raise them together when changing a `fontSize`. The one place that sets `fontSize` without a `lineHeight` is the game prompt in [imageSelection/ImageSelectionGame.tsx](imageSelection/ImageSelectionGame.tsx), which is fine because an unset `lineHeight` gets the font's natural box - but its container is `height: '10%'`, so that box is what has to fit.

Belarusian coverage is not a worry: everything the app renders is 55 codepoints in U+0406-U+045E, inside the basic `cyrillic` subset. `Ў` is the glyph to eyeball after any font change - it is the wordmark and the icon, and a bolted-on Cyrillic extension usually shows there first. In Noto Serif its breve reaches 0.925 em against a 0.714 em cap height, matching `Й`.

Shared components live in [components/](components/): `Screen` (SafeAreaView + background + `edges`), `Button` (`Pressable`-based, `primary`/`secondary`/`ghost`), `ProgressBar`, `StatTile`, `SelectionTile` (the animated answer tile), and `GameSketches` (the two schematics on the home buttons). Use `Pressable`, not `TouchableHighlight` - it gives Android ripple and a real pressed state.

The home-screen sketches in [components/GameSketches.tsx](components/GameSketches.tsx) are drawn with `react-native-svg` as deliberately wobbly pencil strokes - `sketchRect`/`sketchLine` build the path data from a **deterministic** `wobble()`, so the outlines never jitter between renders. Each schematic shows its game's portrait layout with the answer element in brand red; `.svg` files are not importable (there is no SVG transformer), so inline `<Path>` is the pattern here and in `Completion`.

### Layout conventions

Screens switch between paired `*Portrait`/`*Landscape` style objects off the `useIsPortrait()` hook in [utils.ts](utils.ts) - the image grid is 2×3 in portrait and 3×2 in landscape; the word game stacks its image above the six word rows in portrait and puts it to their left in landscape; Home stacks the two mode buttons in portrait and sets them side by side in landscape. Both hooks there are built on `useWindowDimensions()` - deliberately window aspect, not device orientation, so they are right on the first frame and right in split-screen. (`expo-screen-orientation` was removed: it was a native module answering "is width less than height", and its async initial read rendered one portrait frame when the app launched in landscape.) `useResponsiveFontSize`, also there, is a local port of the abandoned `react-native-responsive-fontsize`; it is used only for the vocabulary word on the game screen, which must scale to the viewport, and because it is a hook the size is applied inline rather than in `StyleSheet.create`. All other text comes from the `type` scale.

Every screen roots in the `Screen` component, which wraps `SafeAreaView` from `react-native-safe-area-context` (under the `SafeAreaProvider` in [App.tsx](App.tsx)) because edge-to-edge is mandatory at `targetSdk` 36 - content otherwise draws under the status bar and the gesture pill. `Screen` always paints a `backgroundColor`, or the inset strips render as bare window background. Screens under a navigation header pass `edges={['bottom', 'left', 'right']}` so the top inset is not applied twice.

Headers are off by default (`headerShown: false`); Statistics is the exception and gets a native header, which is where its back button comes from.

[linguistics.tsx](linguistics.tsx) has `pluralize` for Belarusian number agreement (one/few/many) - use it for any counted noun in the UI.
