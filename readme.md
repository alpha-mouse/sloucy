Прасьценькая прылада для вывучэньня словаў беларускай мовы.

Я а ні разу не распрацоўшчык мабільных прыкладаньняў, таму прылада вельмі прымітыўная, калі хтось захоча зрабіць лепш, я буду рады.

Увесь слоўнік можна пабачыць у файле [vocabulary.md](vocabulary.md)

Ідэі і прапановы прымаюцца ў [issues](https://github.com/alpha-mouse/sloucy/issues).

Каб запусьціць лякальна - `expo start -a`. А перад тым напэўна трэба паставіць ды наладзіць тое expo, ды Android Studio, ды можа яшчэ штось.

Каб сабраць _vocabulary.md_
 * `npx tsc .\buildVocabularyMd.ts`
 * у файле _vocabulary.js_ стварыць функцыю `function require(x) { return x }`
 * `node .\buildVocabularyMd.js`
