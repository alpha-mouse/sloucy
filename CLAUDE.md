# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Sloucy (Слоўцы) - an Expo / React Native app for learning Belarusian vocabulary through a picture-matching game. A word is shown, six images appear, you tap the right one. Ten questions per run, then a completion screen.

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
2. In the emitted `vocabulary.js`, hand-add `function require(x) { return x }` - the script runs under plain Node, which has no Metro asset resolver, so `require('./../data/x.jpg')` must be stubbed to return the path string.
3. `node ./buildVocabularyMd.js`

## Architecture

Entry point is [App.tsx](App.tsx) (via `node_modules/expo/AppEntry.js`), not a routes directory. Navigation is **@react-navigation native-stack**, with the four screens declared inline and typed by [Routes.tsx](Routes.tsx). There is no file-based routing and no `expo-router`; the two external links in [Statistics.tsx](Statistics.tsx) use `Linking.openURL`.

Startup blocks on `initializationPromise` from [imageSelection/persistence.ts](imageSelection/persistence.ts) before hiding the splash screen, so that stats are in memory before any screen renders.

### The vocabulary (the heart of the repo)

[imageSelection/vocabulary.ts](imageSelection/vocabulary.ts) is a hand-maintained ~1500-line array of ~350 `VocabularyItem`s. Understanding its conventions matters more than anything else in this codebase:

- **A backtick marks stress.** `'абр\`оць'` means the character right after the backtick is the stressed vowel, rendered red by `TextStyle.stressed`. `VocabularyEntry.fromString` does the parsing; `canonical` is the backtick-stripped word, and `key` (backticks intact) is the stable identity used in persisted stats - **changing a word's stress marks resets that word's progress for existing users.**
- **Images are `require()`d from [data/](data/), three per word**, each with a source-attribution comment giving the stock URL/licence. New images: 400×400, JPEG quality 80.
- **Asset filenames must be ASCII.** Cyrillic filenames break iOS builds (see commits `0fae351`, `a273a3f`). Name files after the English gloss: `bridle1.jpg`, `tablecloth2.jpg`.
- **An item with a `comment` is disabled** (typically `'Не знайшоў фоткі'` - no picture found). The default export is `vocabulary.filter(x => x.isEnabled)` and is what the game and the statistics denominator use; the named `fullVocabulary` export includes disabled entries and exists for the markdown builder.
- **`exclusion` lists prevent confusable distractors.** `['пыса']` on `абр`оць` keeps "muzzle" out of the same six-image set as "bridle". `exclusionChecker` in [ImageSelectionGame.tsx](imageSelection/ImageSelectionGame.tsx) applies this in both directions, comparing against `canonical`.

### Game flow and selection

[imageSelection/ImageSelectionGame.tsx](imageSelection/ImageSelectionGame.tsx) builds a run of 10 questions up front via `generateRun`, using the helpers in [randomization.ts](randomization.ts): `electManyWeighted` picks the answers, `electManyExceptFor` picks five non-confusable distractors, `randomInsert` slots the answer in at a random position.

`run` is a **module-level mutable variable**, deliberately - it survives screen unmount so returning from the completion screen doesn't reshuffle mid-run. It is regenerated when a run completes.

`vocabularyItemWeight` weights each word: perfected words get 1, seen-but-unperfected 3, unseen 2 - so words you have met but not mastered come up most often, and mastered ones least.

[imageSelection/ImagesSection.tsx](imageSelection/ImagesSection.tsx) owns the tap feedback: correct answers pulse-scale with a green border, wrong ones shake with a red one, and the tapped tile is raised via `zIndex`/`elevation` for the duration of the animation. All animations use `useNativeDriver` and fire their callback in `.start()`, so state advances only after the animation finishes.

A single `frontIndex` state does two jobs: it says which tile is raised, and `frontIndex !== null` means an animation is running, which `disable`s every tile. That lock matters - without it a second fast tap fires the answer callback twice and double-counts the click stats. The `.start()` callbacks also check `finished`, because an interrupted animation still invokes them. `ImagesSection` is keyed by `runIndex` from the game screen so tiles remount per question rather than carrying animation state across.

### Persistence

A single AsyncStorage key, `ImageSelectionStats`, holding a JSON `ImageSelectionGameStats` - a plain interface, not a class, because `JSON.parse` strips prototypes anyway (`version = 1`, run/click counters, and `seenWords`/`perfectedWords` arrays of vocabulary keys). The module loads it once into a module-level `currentStats` so `getStats()` is synchronous everywhere; `mutateStats` takes a copy-producing mutator (use the exported `copyStats`) and fires the async write without awaiting it.

Everything on the read path goes through `normalize`, which returns fresh defaults for absent, corrupt, or wrong-`version` data - `getStats()` must never return `undefined`, or every screen crashes on first read. If you change the shape, bump `version`; unmigrated data then falls back to defaults rather than half-loading.

"Perfected" means answered correctly on the first attempt in some run; "seen" means answered correctly at all.

### Design system

[theme.ts](theme.ts) is the single source of truth for the look: `color` (brand red plus a warm neutral ramp), `space`, `radius`, `type` (a fixed scale, each entry carrying its `fontFamily`), and one `shadow` preset. Screens should not hardcode colours, font sizes or spacing - there is no `constants.ts` any more.

The app is set in **Inter**, loaded in [App.tsx](App.tsx) via `Font.loadAsync(fontAssets)`, which is `Promise.all`'d with `initializationPromise` so nothing renders before the font is ready. `fontAssets` in [theme.ts](theme.ts) `require()`s the four .ttf files by path on purpose: importing from the `@expo-google-fonts/inter` root drags all 18 weights (~6 MB) into the bundle. React Native does not inherit `fontFamily`, so every `Text` needs a `type.*` style (nested `Text` inside a styled `Text` does inherit - that is how the stressed vowel works).

Four shared components live in [components/](components/): `Screen` (SafeAreaView + background + `edges`), `Button` (`Pressable`-based, `primary`/`secondary`/`ghost`), `ProgressBar`, `StatTile`. Use `Pressable`, not `TouchableHighlight` - it gives Android ripple and a real pressed state.

### Layout conventions

Screens switch between paired `*Portrait`/`*Landscape` style objects (the image grid is 2×3 in portrait, 3×2 in landscape) off the `useIsPortrait()` hook in [utils.ts](utils.ts). Both hooks there are built on `useWindowDimensions()` - deliberately window aspect, not device orientation, so they are right on the first frame and right in split-screen. (`expo-screen-orientation` was removed: it was a native module answering "is width less than height", and its async initial read rendered one portrait frame when the app launched in landscape.) `useResponsiveFontSize`, also there, is a local port of the abandoned `react-native-responsive-fontsize`; it is used only for the vocabulary word on the game screen, which must scale to the viewport, and because it is a hook the size is applied inline rather than in `StyleSheet.create`. All other text comes from the `type` scale.

Every screen roots in the `Screen` component, which wraps `SafeAreaView` from `react-native-safe-area-context` (under the `SafeAreaProvider` in [App.tsx](App.tsx)) because edge-to-edge is mandatory at `targetSdk` 36 - content otherwise draws under the status bar and the gesture pill. `Screen` always paints a `backgroundColor`, or the inset strips render as bare window background. Screens under a navigation header pass `edges={['bottom', 'left', 'right']}` so the top inset is not applied twice.

Headers are off by default (`headerShown: false`); Statistics is the exception and gets a native header, which is where its back button comes from.

[linguistics.tsx](linguistics.tsx) has `pluralize` for Belarusian number agreement (one/few/many) - use it for any counted noun in the UI.
