Прасьценькая праграмка для вывучэньня словаў беларускай мовы.

Я аніразу не распрацоўшчык мабільных праграмак, таму яна вельмі прымітыўная, калі хтось захоча зрабіць лепш, я буду рады.

Увесь слоўнік можна пабачыць у файле [vocabulary.md](vocabulary.md)

Ідэі і прапановы прымаюцца ў [issues](https://github.com/alpha-mouse/sloucy/issues).

Каб запусьціць лякальна - `npx expo start -a`. А перад тым напэўна трэба паставіць ды наладзіць тое expo, ды Android Studio, ды можа яшчэ штось.

Каб сабраць _vocabulary.md_
 * `npx tsc .\buildVocabularyMd.ts`
 * у файле _vocabulary.js_ стварыць функцыю `function require(x) { return x }`
 * `node .\buildVocabularyMd.js`
