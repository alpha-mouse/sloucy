export class VocabularyItem {
  constructor(word: string, images: any[], comment?:string) {
    this.word = word;
    this.images = images;
    this.isEnabled = comment === undefined;
    this.comment = comment;
  }

  word: string;
  images: any[];
  isEnabled: boolean;
  comment?: string;
}

const vocabulary = [
  new VocabularyItem('абрус', [], 'Не знайшоў фоткі'),
  new VocabularyItem('абцас', [], 'Не знайшоў фоткі'),
  new VocabularyItem('абцужкі', [], 'Не знайшоў фоткі'),
  new VocabularyItem('агрэст', [
    require('./data/агрэст-gooseberry1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/агрэст-gooseberry2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/агрэст-gooseberry3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ажыны', [
    require('./data/ажыны-blackberry1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ажыны-blackberry2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ажыны-blackberry3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('алей', [], 'Не прыдумаў як наогул адлюстраваць, каб не было блытаніны з усімі магчымымі жоўтымі вадкасьцямі'),
  new VocabularyItem('аловак', [
    require('./data/аловак-pencil1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/аловак-pencil2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/аловак-pencil3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('анёл', [
    require('./data/анёл-angel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/анёл-angel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/анёл-angel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('апалонік', [], 'Двухсэнсоўнае слова, не прыдумаў што зрабіць'),
  new VocabularyItem('арэлі', [
    require('./data/арэлі-swing1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/арэлі-swing2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/арэлі-swing3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('аскепак', [
    require('./data/аскепак-shard1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/аскепак-shard2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/аскепак-shard3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('асадка', [
    require('./data/асадка-pen1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/асадка-pen2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/асадка-pen3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('багоўка', [
    require('./data/багоўка-ladybug1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/багоўка-ladybug2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/багоўка-ladybug3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бзьдзюль', [], 'Не знайшоў фоткі'),
  new VocabularyItem('бізун', [], 'Не знайшоў фоткі'),
  new VocabularyItem('бірулька', [
    require('./data/бірулька-keychain1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бірулька-keychain2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бірулька-keychain3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('блазан', [
    require('./data/блазан-jester1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/блазан-jester2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/блазан-jester3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бліскавіца', [], 'Як адрозьніць ад "маланкі"?'),
  new VocabularyItem('боты', [
    require('./data/боты-boots1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/боты-boots2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/боты-boots3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бохан', [
    require('./data/бохан-loaf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бохан-loaf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бохан-loaf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бразготка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('бросьня', [], 'Не знайшоў фоткі'),
  new VocabularyItem('брыль', [], 'Не знайшоў фоткі'),
  new VocabularyItem('бульба', [
    require('./data/бульба-potatoes1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бульба-potatoes2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бульба-potatoes3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бурак', [
    require('./data/бурак-beetroot1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурак-beetroot2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурак-beetroot3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бурбалкі', [
    require('./data/бурбалкі-bubbles1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурбалкі-bubbles2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурбалкі-bubbles3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бурштын', [
    require('./data/бурштын-amber1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурштын-amber2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурштын-amber3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бусел', [
    require('./data/бусел-stork1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бусел-stork2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бусел-stork3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бэз', [
    require('./data/бэз-lilac1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бэз-lilac2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бэз-lilac3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вавёрка', [
    require('./data/вавёрка-squirrel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вавёрка-squirrel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вавёрка-squirrel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вазок', [
    require('./data/вазок-pram1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вазок-pram2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вазок-pram3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('валізка', [
    require('./data/валізка-suitcase1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/валізка-suitcase2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/валізка-suitcase3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('валошка', [
    require('./data/валошка-cornflower1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/валошка-cornflower2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/валошка-cornflower3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вандроўнік', [], 'Не знайшоў фоткі'),
  new VocabularyItem('вежа', [
    require('./data/вежа-tower1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вежа-tower2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вежа-tower3.jpg'), // Da voli https://creativecommons.org/licenses/by-sa/3.0/ (cropped and resized)
  ]),
  new VocabularyItem('вейкі', [], 'Не знайшоў фоткі'),
  new VocabularyItem('ветразь', [
    require('./data/ветразь-sail1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ветразь-sail2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ветразь-sail3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('відэлец', [
    require('./data/відэлец-fork1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/відэлец-fork2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/відэлец-fork3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вогнішча', [
    require('./data/вогнішча-bonfire1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вогнішча-bonfire2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вогнішча-bonfire3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вопратка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('вэлюм', [], 'Не знайшоў фоткі'),
  new VocabularyItem('вясёлка', [
    require('./data/вясёлка-rainbow1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вясёлка-rainbow2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вясёлка-rainbow3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вяхотка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('гаманец', [
    require('./data/гаманец-wallet1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гаманец-wallet2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гаманец-wallet3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ганак', [], 'Не знайшоў фоткі'),
  new VocabularyItem('гарбуз', [
    require('./data/гарбуз-pumpkin1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гарбуз-pumpkin2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гарбуз-pumpkin3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('гіль', [
    require('./data/гіль-bullfinch1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гіль-bullfinch2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гіль-bullfinch3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('груца', [], 'Не знайшоў фоткі'),
  new VocabularyItem('гузік', [
    require('./data/гузік-button1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гузік-button2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гузік-button3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('гумка', [
    require('./data/гумка-eraser1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гумка-eraser2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гумка-eraser3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('гэбель', [
    require('./data/гэбель-planer1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гэбель-planer2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гэбель-planer3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('дзьмухавец', [
    require('./data/дзьмухавец-dandelion1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/дзьмухавец-dandelion2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/дзьмухавец-dandelion3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('дзяга', [], 'Канфлікт з "пас", "папруга", "рэмень"'),
  new VocabularyItem('драбіны', [
    require('./data/драбіны-ladder1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/драбіны-ladder2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/драбіны-ladder3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('дыван', [
    require('./data/дыван-carpet1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/дыван-carpet2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/дыван-carpet3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('жаўнер', [], 'Не знайшоў фотка якія б мне спадабаліся'),
  new VocabularyItem('жвір', [
    require('./data/жвір-gravel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/жвір-gravel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/жвір-gravel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('журавіны', [
    require('./data/журавіны-cranberries1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/журавіны-cranberries2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/журавіны-cranberries3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('Завея', [], 'Канфлікт з "завіруха"'),
  new VocabularyItem('Завіруха', [], 'Канфлікт з "завея"'),
  new VocabularyItem('запалка', [
    require('./data/запалка-match1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/запалка-match2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/запалка-match3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('заплечнік', [
    require('./data/заплечнік-backpack1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/заплечнік-backpack2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/заплечнік-backpack3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('збан', [
    require('./data/збан-jug1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/збан-jug2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/збан-jug3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('зеўра', [], 'Не прыдумаў як перадаць'),
  new VocabularyItem('зрэнка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('зьнічка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('зэдлік', [
    require('./data/зэдлік-stool1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/зэдлік-stool2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/зэдлік-stool3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('імбрык', [], 'Я больш ня ўпэўнены што знычыць гэтае слова'),
  new VocabularyItem('ірты', [], 'Ці сапраўды слова ўжываецца?'),
  new VocabularyItem('кавадла', [
    require('./data/кавадла-anvil1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кавадла-anvil2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кавадла-anvil3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кавун', [
    require('./data/кавун-watermelon1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кавун-watermelon2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кавун-watermelon3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кажан', [
    require('./data/кажан-bat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кажан-bat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кажан-bat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('камізэлька', [], 'Не знайшоў фоткі'),
  new VocabularyItem('канапа', [
    require('./data/канапа-sofa1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/канапа-sofa2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/канапа-sofa3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('капялюш', [
    require('./data/капялюш-hat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/капялюш-hat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/капялюш-hat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('карак', [], 'Не знайшоў фоткі'),
  new VocabularyItem('каралі', [
    require('./data/каралі-necklace1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/каралі-necklace2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/каралі-necklace3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('карункі', [
    require('./data/карункі-lace1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/карункі-lace2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/карункі-lace3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('каўка', [
    require('./data/каўка-jackdaw1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/каўка-jackdaw2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/каўка-jackdaw3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('каўнер', [], 'Не знайшоў фоткі'),
  new VocabularyItem('кафля', [
    require('./data/кафля-tiles1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кафля-tiles2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кафля-tiles3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('качалка', [
    require('./data/качалка-rolling-pin1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/качалка-rolling-pin2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/качалка-rolling-pin3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('качка', [
    require('./data/качка-duck1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/качка-duck2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/качка-duck3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('келіх', [
    require('./data/келіх-glass1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/келіх-glass2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/келіх-glass3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ківач', [], 'Не знайшоў фоткі'),
  new VocabularyItem('кіпцюры', [
    require('./data/кіпцюры-claws1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кіпцюры-claws2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кіпцюры-claws3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кішэня', [
    require('./data/кішэня-pocket1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кішэня-pocket2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кішэня-pocket3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кіёк', [], 'Не знайшоў фоткі'),
  new VocabularyItem('кнот', [], 'Не знайшоў фоткі'),
  new VocabularyItem('конаўка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('конік', [
    require('./data/конік-grasshopper1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/конік-grasshopper2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/конік-grasshopper3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('корак', [
    require('./data/корак-cork1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/корак-cork2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/корак-cork3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('коўдра', [], 'Не знайшоў фоткі'),
  new VocabularyItem('кошык', [
    require('./data/кошык-basket1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кошык-basket2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кошык-basket3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('краткі', [], 'Не знайшоў фоткі'),
  new VocabularyItem('кружэлка', [
    require('./data/кружэлка-disk1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кружэлка-disk2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кружэлка-disk3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('крыгаход', [], 'Не знайшоў фоткі'),
  new VocabularyItem('крэйда', [
    require('./data/крэйда-chalk1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/крэйда-chalk2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/крэйда-chalk3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('куфаль', [], 'Не знайшоў фоткі'),
  new VocabularyItem('куфар', [
    require('./data/куфар-chest1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/куфар-chest2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/куфар-chest3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('лазьня', [
    require('./data/лазьня-sauna1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лазьня-sauna2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лазьня-sauna3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ланцуг', [
    require('./data/ланцуг-chain1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ланцуг-chain2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ланцуг-chain3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ласунка', [], 'Як наогул можна відавочна паказаць?'),
  new VocabularyItem('лінарка', [
    require('./data/лінарка-ruler1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лінарка-ruler2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лінарка-ruler3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ліхтар', [
    require('./data/ліхтар-lantern1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ліхтар-lantern2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ліхтар-lantern3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('локшына', [
    require('./data/локшына-noodles1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/локшына-noodles2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/локшына-noodles3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('луска', [
    require('./data/луска-scales-a1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/луска-scales-a2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/луска-scales-a3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('луста', [
    require('./data/луста-slice1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/луста-slice2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/луста-slice3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('люстэрка', [
    require('./data/люстэрка-mirror1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/люстэрка-mirror2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/люстэрка-mirror3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('лядзяк', [
    require('./data/лядзяк-icicle1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лядзяк-icicle2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лядзяк-icicle3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('лязо', [], 'Не знайшоў фоткі / як перадаць'),
  new VocabularyItem('лялька', [
    require('./data/лялька-doll1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лялька-doll2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лялька-doll3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('маладзік', [], 'Не знайшоў фоткі'),
  new VocabularyItem('маланка', [], 'Канфлікт з бліскавіцай'),
  new VocabularyItem('майткі', [], 'Не знайшоў фоткі'),
  new VocabularyItem('матузкі', [], 'Не знайшоў фоткі'),
  new VocabularyItem('мураш', [
    require('./data/мураш-ant1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/мураш-ant2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/мураш-ant3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('мутэрка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('мыліца', [], 'Не знайшоў фоткі'),
  new VocabularyItem('мятлік', [], 'Не знайшоў фоткі'),
  new VocabularyItem('навальніца', [], 'Не знайшоў фоткі, і магчымы канфлікт з "бліскавіцай"/"маланкай"'),
  new VocabularyItem('намёт', [
    require('./data/намёт-tent1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/намёт-tent2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/намёт-tent3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('немаўля', [
    require('./data/немаўля-infant1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/немаўля-infant2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/немаўля-infant3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('паліца', [
    require('./data/паліца-shelf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/паліца-shelf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/паліца-shelf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('панчохі', [], 'Не знайшоў фоткі'),
  new VocabularyItem('папруга', [], 'Канфлікт шмат з чым'),
  new VocabularyItem('парасон', [
    require('./data/парасон-umbrella1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парасон-umbrella2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парасон-umbrella3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('парэнчы', [
    require('./data/парэнчы-railings1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парэнчы-railings2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парэнчы-railings3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('парэчкі', [
    require('./data/парэчкі-currant1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парэчкі-currant2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парэчкі-currant3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пастарунак', [], 'Не знайшоў фоткі'),
  new VocabularyItem('патыліца', [], 'Не знайшоў фоткі'),
  new VocabularyItem('патэльня', [
    require('./data/патэльня-pan1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/патэльня-pan2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/патэльня-pan3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пацеркі', [
    require('./data/пацеркі-beads1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пацеркі-beads2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пацеркі-beads3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пацук', [
    require('./data/пацук-rat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пацук-rat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пацук-rat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('паштоўка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('певень', [
    require('./data/певень-rooster1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/певень-rooster2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/певень-rooster3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('парнік', [], 'Не знайшоў фоткі'),
  new VocabularyItem('пігулка', [
    require('./data/пігулка-pill1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пігулка-pill2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пігулка-pill3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('плот', [
    require('./data/плот-fence1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/плот-fence2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/плот-fence3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пляшка', [
    require('./data/пляшка-canteen1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пляшка-canteen2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пляшка-canteen3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('полымя', [], 'Не знайшоў фоткі, каб не канфліктавалі з "вогнішчам"'),
  new VocabularyItem('попел', [], 'Не знайшоў фоткі'),
  new VocabularyItem('порткі', [], 'Не знайшоў фоткі, і што наконт "нагавіцаў"?'),
  new VocabularyItem('поўня', [
    require('./data/поўня-fullmoon1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/поўня-fullmoon2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/поўня-fullmoon3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('поўсьць', [
    require('./data/поўсьць-wool1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/поўсьць-wool2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/поўсьць-wool3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('прас', [
    require('./data/прас-iron1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/прас-iron2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/прас-iron3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('прывід', [], 'Не знайшоў фоткі, і што наконт "здані"?'),
  new VocabularyItem('прынада', [
    require('./data/прынада-bait1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/прынада-bait2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/прынада-bait3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пухір', [], 'Не знайшоў фоткі'),
  new VocabularyItem('пыса', [], 'Не знайшоў фоткі'),
  new VocabularyItem('пэндзаль', [
    require('./data/пэндзаль-brush1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пэндзаль-brush2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пэндзаль-brush3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пялёсткі', [
    require('./data/пялёсткі-petals1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пялёсткі-petals2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пялёсткі-petals3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пярліна', [], 'Не знайшоў фотак асобных каб не канйліктавалі з "карáлямі"'),
  new VocabularyItem('рагоз', [], 'Не знайшоў фоткі'),
  new VocabularyItem('раёк', [], 'Не знайшоў фоткі, ды й як паказаць адназначна паказаць наогул?'),
  new VocabularyItem('разынкі', [
    require('./data/разынкі-raisins1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/разынкі-raisins2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/разынкі-raisins3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ровар', [
    require('./data/ровар-bicycle1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ровар-bicycle2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ровар-bicycle3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('рондаль', [
    require('./data/рондаль-pot1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рондаль-pot2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рондаль-pot3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('рыдлёўка', [
    require('./data/рыдлёўка-spade1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рыдлёўка-spade2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рыдлёўка-spade3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('рызьзё', [], 'todo'),
  new VocabularyItem('рысунак', [], 'Не знайшоў фоткі'),
  new VocabularyItem('рэйкі', [
    require('./data/рэйкі-rails1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рэйкі-rails2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рэйкі-rails3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('скалкі', [], 'Не знайшоў фоткі'),
  new VocabularyItem('скарбонка', [
    require('./data/скарбонка-piggybank1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/скарбонка-piggybank2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/скарбонка-piggybank3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сківіца', [], 'Не знайшоў фоткі'),
  new VocabularyItem('скронь', [], 'Не знайшоў фоткі'),
  new VocabularyItem('скрыня', [
    require('./data/скрыня-box1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/скрыня-box2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/скрыня-box3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сланечнік', [
    require('./data/сланечнік-sunflower1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сланечнік-sunflower2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сланечнік-sunflower3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('слімак', [
    require('./data/слімак-snail1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/слімак-snail2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/слімак-snail3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('слоік', [
    require('./data/слоік-jar1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/слоік-jar2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/слоік-jar3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('смагард', [
    require('./data/смагард-emerald1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/смагард-emerald2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/смагард-emerald3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('спадніца', [], 'Не знайшоў фоткі'),
  new VocabularyItem('сподак', [
    require('./data/сподак-saucer1.jpg'), // Unsplash https://unsplash.com/license
    require('./data/сподак-saucer2.jpg'), // Unsplash https://unsplash.com/license
    require('./data/сподак-saucer3.jpg'), // Unsplash https://unsplash.com/license
  ]),
  new VocabularyItem('станік', [
    require('./data/станік-bra1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/станік-bra2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/станік-bra3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('стос', [
    require('./data/стос-stack1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стос-stack2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стос-stack3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('строй', [], 'Не знайшоў фоткі'),
  new VocabularyItem('стужка', [
    require('./data/стужка-ribbon1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стужка-ribbon2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стужка-ribbon3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('стырно', [
    require('./data/стырно-steering-wheel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стырно-steering-wheel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стырно-steering-wheel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сукенка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('сумёт', [
    require('./data/сумёт-snowdrift1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сумёт-snowdrift2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сумёт-snowdrift3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('суніцы', [
    require('./data/суніцы-wild-strawberries1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/суніцы-wild-strawberries2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/суніцы-wild-strawberries3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сходы', [], 'Не знайшоў фоткі'),
  new VocabularyItem('сшытак', [], 'Не знайшоў фоткі'),
  new VocabularyItem('сьвердзел', [
    require('./data/сьвердзел-drill1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сьвердзел-drill2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сьвердзел-drill3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сьцізорык', [
    require('./data/сьцізорык-pen-knife1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сьцізорык-pen-knife2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сьцізорык-pen-knife3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сьцягно', [], 'Не знайшоў фоткі'),
  new VocabularyItem('сякера', [
    require('./data/сякера-axe1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сякера-axe2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сякера-axe3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('тарка', [
    require('./data/тарка-grater1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/тарка-grater2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/тарка-grater3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('трус', [
    require('./data/трус-rabbit1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/трус-rabbit2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/трус-rabbit3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('трускаўка', [
    require('./data/трускаўка-strawberry1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/трускаўка-strawberry2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/трускаўка-strawberry3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('трысьнёг', [], 'Канфлікт з "чаротам"?'),
  new VocabularyItem('фатэль', [
    require('./data/фатэль-armchair1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/фатэль-armchair2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/фатэль-armchair3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('фіранкі', [
    require('./data/фіранкі-curtains1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/фіранкі-curtains2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/фіранкі-curtains3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('футра', [], 'Не знайшоў фоткі'),
  new VocabularyItem('халява', [], 'Не знайшоў фоткі'),
  new VocabularyItem('хваля', [
    require('./data/хваля-wave1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/хваля-wave2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/хваля-wave3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('хмарачос', [
    require('./data/хмарачос-skyscraper1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/хмарачос-skyscraper2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/хмарачос-skyscraper3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('хрушч', [], 'Не знайшоў фоткі'),
  new VocabularyItem('цукерка', [
    require('./data/цукерка-candy1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цукерка-candy2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цукерка-candy3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цыбуля', [
    require('./data/цыбуля-onion1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цыбуля-onion2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цыбуля-onion3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цьвік', [
    require('./data/цьвік-nail1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цьвік-nail2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цьвік-nail3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цьвіль', [
    require('./data/цьвіль-mold1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цьвіль-mold2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цьвіль-mold3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цэгла', [
    require('./data/цэгла-brick1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цэгла-brick2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цэгла-brick3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цэтлік', [
    require('./data/цэтлік-tag1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цэтлік-tag2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цэтлік-tag3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цягнік', [
    require('./data/цягнік-train1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цягнік-train2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цягнік-train3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цяля', [
    require('./data/цяля-calf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цяля-calf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цяля-calf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('чаравікі', [
    require('./data/чаравікі-shoes1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/чаравікі-shoes2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/чаравікі-shoes3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('чарга', [], 'Не знайшоў фоткі'),
  new VocabularyItem('чарот', [], 'Канфлікт з "трысьнягом"?'),
  new VocabularyItem('човен', [
    require('./data/човен-boat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/човен-boat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/човен-boat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шалі', [
    require('./data/шалі-scales-b1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шалі-scales-b2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шалі-scales-b3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шалік', [
    require('./data/шалік-scarf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шалік-scarf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шалік-scarf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шашок', [], 'Чым дакладна адрозьніваецца ад "тхара"?'),
  new VocabularyItem('шкарпэткі', [
    require('./data/шкарпэткі-socks1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шкарпэткі-socks2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шкарпэткі-socks3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шпалеры', [
    require('./data/шпалеры-wallpapers1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шпалеры-wallpapers2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шпалеры-wallpapers3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шруба', [
    require('./data/шруба-screw1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шруба-screw2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шруба-screw3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шуфлік', [
    require('./data/шуфлік-shovel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шуфлік-shovel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шуфлік-shovel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шуфлядка', [
    require('./data/шуфлядка-drawer1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шуфлядка-drawer2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шуфлядка-drawer3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шчамлётка', [
    require('./data/шчамлётка-clothespin1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шчамлётка-clothespin2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шчамлётка-clothespin3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шыба', [], 'Не знайшоў фоткі'),
  new VocabularyItem('шэрань', [
    require('./data/шэрань-rime1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шэрань-rime2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шэрань-rime3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('электравік', [], 'Не знайшоў фоткі'),
  new VocabularyItem('ядваб', [], 'Не знайшоў як перадаць'),
  new VocabularyItem('ялавец', [], 'Не знайшоў як перадаць'),
  new VocabularyItem('яліна', [], 'Не знайшоў фоткі'),
];

export default vocabulary.filter(x => x.isEnabled);

export const fullVocabulary = vocabulary;
