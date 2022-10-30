export class VocabularyItem {
  constructor(word: string, images: any[], comment?: string) {
    this.key = word;
    this.entry = VocabularyEntry.fromString(word);
    this.images = images;
    this.isEnabled = comment === undefined;
    this.comment = comment;
  }

  key: string;
  entry: VocabularyEntry;
  images: any[];
  isEnabled: boolean;
  comment?: string;
}

export enum TextStyle {
  regular,
  stressed
}

export class StyledTextPart {
  constructor(text: string, style: TextStyle = TextStyle.regular) {
    this.text = text;
    this.style = style;
  }

  text: string;
  style: TextStyle;
}

export class VocabularyEntry {
  static fromString(text: string): VocabularyEntry {
    const parts = text.split('`');
    const styledParts: StyledTextPart[] = [];
    for (let i = 0; i < parts.length; ++i) {
      const part = parts[i];
      if (part === '') continue;
      if (i === 0)
        styledParts.push(new StyledTextPart(part));
      else {
        styledParts.push(new StyledTextPart(part[0], TextStyle.stressed));
        if (part.length > 1) {
          styledParts.push(new StyledTextPart(part.slice(1)));
        }
      }
    }
    return new VocabularyEntry(styledParts);
  }

  constructor(heading: StyledTextPart[]) {
    this.heading = heading;
  }

  heading: StyledTextPart[];
}

function toVocabularyEntry(text: string): StyledTextPart {
  return new StyledTextPart(text, TextStyle.stressed);
}

const vocabulary = [
  new VocabularyItem('абр`ус', [], 'Не знайшоў фоткі'),
  new VocabularyItem('абц`ас', [], 'Не знайшоў фоткі'),
  new VocabularyItem('абцужк`і', [], 'Не знайшоў фоткі'),
  new VocabularyItem('агр`эст', [
    require('./data/агрэст-gooseberry1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/агрэст-gooseberry2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/агрэст-gooseberry3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('аж`ыны', [
    require('./data/ажыны-blackberry1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ажыны-blackberry2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ажыны-blackberry3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ал`ей', [], 'Не прыдумаў як наогул адлюстраваць, каб не было блытаніны з усімі магчымымі жоўтымі вадкасьцямі'),
  new VocabularyItem('ал`овак', [
    require('./data/аловак-pencil1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/аловак-pencil2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/аловак-pencil3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ан`ёл', [
    require('./data/анёл-angel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/анёл-angel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/анёл-angel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('апал`онік', [], 'Двухсэнсоўнае слова, не прыдумаў што зрабіць'),
  new VocabularyItem('ар`элі', [
    require('./data/арэлі-swing1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/арэлі-swing2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/арэлі-swing3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('аск`епак', [
    require('./data/аскепак-shard1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/аскепак-shard2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/аскепак-shard3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ас`адка', [
    require('./data/асадка-pen1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/асадка-pen2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/асадка-pen3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('баг`оўка', [
    require('./data/багоўка-ladybug1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/багоўка-ladybug2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/багоўка-ladybug3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бзьдз`юль', [], 'Не знайшоў фоткі'),
  new VocabularyItem('біз`ун', [], 'Не знайшоў фоткі'),
  new VocabularyItem('бір`улька', [
    require('./data/бірулька-keychain1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бірулька-keychain2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бірулька-keychain3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бл`азан', [
    require('./data/блазан-jester1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/блазан-jester2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/блазан-jester3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бліскав`іца', [], 'Як адрозьніць ад "маланкі"?'),
  new VocabularyItem('б`оты', [
    require('./data/боты-boots1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/боты-boots2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/боты-boots3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('б`охан', [
    require('./data/бохан-loaf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бохан-loaf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бохан-loaf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бразг`отка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('бр`осьня', [], 'Не знайшоў фоткі'),
  new VocabularyItem('бр`ыль', [], 'Не знайшоў фоткі'),
  new VocabularyItem('б`ульба', [
    require('./data/бульба-potatoes1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бульба-potatoes2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бульба-potatoes3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бур`ак', [
    require('./data/бурак-beetroot1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурак-beetroot2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурак-beetroot3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('б`урбалкі', [
    require('./data/бурбалкі-bubbles1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурбалкі-bubbles2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурбалкі-bubbles3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('буршт`ын', [
    require('./data/бурштын-amber1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурштын-amber2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурштын-amber3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('б`усел', [
    require('./data/бусел-stork1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бусел-stork2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бусел-stork3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('б`эз', [
    require('./data/бэз-lilac1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бэз-lilac2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бэз-lilac3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вав`ёрка', [
    require('./data/вавёрка-squirrel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вавёрка-squirrel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вавёрка-squirrel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ваз`ок', [
    require('./data/вазок-pram1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вазок-pram2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вазок-pram3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вал`ізка', [
    require('./data/валізка-suitcase1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/валізка-suitcase2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/валізка-suitcase3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вал`ошка', [
    require('./data/валошка-cornflower1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/валошка-cornflower2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/валошка-cornflower3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вандр`оўнік', [], 'Не знайшоў фоткі'),
  new VocabularyItem('в`ежа', [
    require('./data/вежа-tower1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вежа-tower2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вежа-tower3.jpg'), // Da voli https://creativecommons.org/licenses/by-sa/3.0/ (cropped and resized)
  ]),
  new VocabularyItem('в`ейкі', [], 'Не знайшоў фоткі'),
  new VocabularyItem('в`етразь', [
    require('./data/ветразь-sail1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ветразь-sail2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ветразь-sail3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('від`элец', [
    require('./data/відэлец-fork1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/відэлец-fork2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/відэлец-fork3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('в`огнішча', [
    require('./data/вогнішча-bonfire1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вогнішча-bonfire2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вогнішча-bonfire3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('в`опратка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('в`элюм', [], 'Не знайшоў фоткі'),
  new VocabularyItem('вяс`ёлка', [
    require('./data/вясёлка-rainbow1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вясёлка-rainbow2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вясёлка-rainbow3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вях`отка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('гаман`ец', [
    require('./data/гаманец-wallet1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гаманец-wallet2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гаманец-wallet3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('г`анак', [], 'Не знайшоў фоткі'),
  new VocabularyItem('гарб`уз', [
    require('./data/гарбуз-pumpkin1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гарбуз-pumpkin2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гарбуз-pumpkin3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('г`іль', [
    require('./data/гіль-bullfinch1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гіль-bullfinch2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гіль-bullfinch3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('гр`уца', [], 'Не знайшоў фоткі'),
  new VocabularyItem('г`узік', [
    require('./data/гузік-button1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гузік-button2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гузік-button3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('г`умка', [
    require('./data/гумка-eraser1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гумка-eraser2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гумка-eraser3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('г`эбель', [
    require('./data/гэбель-planer1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гэбель-planer2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гэбель-planer3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('дзьмухав`ец', [
    require('./data/дзьмухавец-dandelion1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/дзьмухавец-dandelion2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/дзьмухавец-dandelion3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('дз`яга', [], 'Канфлікт з "пас", "папруга", "рэмень"'),
  new VocabularyItem('драб`іны', [
    require('./data/драбіны-ladder1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/драбіны-ladder2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/драбіны-ladder3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('дыв`ан', [
    require('./data/дыван-carpet1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/дыван-carpet2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/дыван-carpet3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('жаўн`ер', [], 'Не знайшоў фотка якія б мне спадабаліся'),
  new VocabularyItem('жв`ір', [
    require('./data/жвір-gravel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/жвір-gravel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/жвір-gravel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('журав`іны', [
    require('./data/журавіны-cranberries1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/журавіны-cranberries2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/журавіны-cranberries3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('зав`ея', [], 'Канфлікт з "завіруха"'),
  new VocabularyItem('завір`уха', [], 'Канфлікт з "завея"'),
  new VocabularyItem('зап`алка', [
    require('./data/запалка-match1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/запалка-match2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/запалка-match3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('запл`ечнік', [
    require('./data/заплечнік-backpack1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/заплечнік-backpack2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/заплечнік-backpack3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('зб`ан', [
    require('./data/збан-jug1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/збан-jug2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/збан-jug3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('з`еўра', [], 'Не прыдумаў як перадаць'),
  new VocabularyItem('зр`энка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('зьн`ічка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('з`эдлік', [
    require('./data/зэдлік-stool1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/зэдлік-stool2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/зэдлік-stool3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('`імбрык', [], 'Я больш ня ўпэўнены што знычыць гэтае слова'),
  new VocabularyItem('`ірты', [], 'Ці сапраўды слова ўжываецца?'),
  new VocabularyItem('кав`адла', [
    require('./data/кавадла-anvil1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кавадла-anvil2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кавадла-anvil3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кав`ун', [
    require('./data/кавун-watermelon1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кавун-watermelon2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кавун-watermelon3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('каж`ан', [
    require('./data/кажан-bat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кажан-bat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кажан-bat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('каміз`элька', [], 'Не знайшоў фоткі'),
  new VocabularyItem('кан`апа', [
    require('./data/канапа-sofa1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/канапа-sofa2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/канапа-sofa3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('капял`юш', [
    require('./data/капялюш-hat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/капялюш-hat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/капялюш-hat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`арак', [], 'Не знайшоў фоткі'),
  new VocabularyItem('кар`алі', [
    require('./data/каралі-necklace1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/каралі-necklace2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/каралі-necklace3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кар`ункі', [
    require('./data/карункі-lace1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/карункі-lace2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/карункі-lace3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`аўка', [
    require('./data/каўка-jackdaw1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/каўка-jackdaw2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/каўка-jackdaw3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('каўн`ер', [], 'Не знайшоў фоткі'),
  new VocabularyItem('к`афля', [
    require('./data/кафля-tiles1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кафля-tiles2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кафля-tiles3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кач`алка', [
    require('./data/качалка-rolling-pin1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/качалка-rolling-pin2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/качалка-rolling-pin3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`ачка', [
    require('./data/качка-duck1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/качка-duck2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/качка-duck3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`еліх', [
    require('./data/келіх-glass1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/келіх-glass2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/келіх-glass3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ків`ач', [], 'Не знайшоў фоткі'),
  new VocabularyItem('кіпцюр`ы', [
    require('./data/кіпцюры-claws1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кіпцюры-claws2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кіпцюры-claws3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кіш`эня', [
    require('./data/кішэня-pocket1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кішэня-pocket2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кішэня-pocket3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кі`ёк', [], 'Не знайшоў фоткі'),
  new VocabularyItem('кн`от', [], 'Не знайшоў фоткі'),
  new VocabularyItem('к`онаўка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('к`онік', [
    require('./data/конік-grasshopper1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/конік-grasshopper2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/конік-grasshopper3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`орак', [
    require('./data/корак-cork1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/корак-cork2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/корак-cork3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`оўдра', [], 'Не знайшоў фоткі'),
  new VocabularyItem('к`ошык', [
    require('./data/кошык-basket1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кошык-basket2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кошык-basket3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кр`аткі', [], 'Не знайшоў фоткі'),
  new VocabularyItem('круж`элка', [
    require('./data/кружэлка-disk1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кружэлка-disk2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кружэлка-disk3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('крыгах`од', [], 'Не знайшоў фоткі'),
  new VocabularyItem('кр`эйда', [
    require('./data/крэйда-chalk1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/крэйда-chalk2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/крэйда-chalk3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`уфаль', [], 'Не знайшоў фоткі'),
  new VocabularyItem('к`уфар', [
    require('./data/куфар-chest1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/куфар-chest2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/куфар-chest3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('л`азьня', [
    require('./data/лазьня-sauna1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лазьня-sauna2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лазьня-sauna3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ланц`уг', [
    require('./data/ланцуг-chain1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ланцуг-chain2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ланцуг-chain3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('лас`унка', [], 'Як наогул можна відавочна паказаць?'),
  new VocabularyItem('лін`арка', [
    require('./data/лінарка-ruler1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лінарка-ruler2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лінарка-ruler3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ліхт`ар', [
    require('./data/ліхтар-lantern1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ліхтар-lantern2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ліхтар-lantern3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('л`окшына', [
    require('./data/локшына-noodles1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/локшына-noodles2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/локшына-noodles3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('луск`а', [
    require('./data/луска-scales-a1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/луска-scales-a2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/луска-scales-a3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('л`уста', [
    require('./data/луста-slice1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/луста-slice2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/луста-slice3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('люст`эрка', [
    require('./data/люстэрка-mirror1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/люстэрка-mirror2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/люстэрка-mirror3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('лядз`як', [
    require('./data/лядзяк-icicle1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лядзяк-icicle2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лядзяк-icicle3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ляз`о', [], 'Не знайшоў фоткі / як перадаць'),
  new VocabularyItem('л`ялька', [
    require('./data/лялька-doll1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лялька-doll2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лялька-doll3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('маладз`ік', [], 'Не знайшоў фоткі'),
  new VocabularyItem('мал`анка', [], 'Канфлікт з бліскавіцай'),
  new VocabularyItem('майтк`і', [], 'Не знайшоў фоткі'),
  new VocabularyItem('матузк`і', [], 'Не знайшоў фоткі'),
  new VocabularyItem('мур`аш', [
    require('./data/мураш-ant1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/мураш-ant2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/мураш-ant3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('мут`эрка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('м`ыліца', [], 'Не знайшоў фоткі'),
  new VocabularyItem('м`ятлік', [], 'Не знайшоў фоткі'),
  new VocabularyItem('навальн`іца', [], 'Не знайшоў фоткі, і магчымы канфлікт з "бліскавіцай"/"маланкай"'),
  new VocabularyItem('нам`ёт', [
    require('./data/намёт-tent1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/намёт-tent2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/намёт-tent3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('немаўл`я', [
    require('./data/немаўля-infant1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/немаўля-infant2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/немаўля-infant3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пал`іца', [
    require('./data/паліца-shelf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/паліца-shelf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/паліца-shelf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('панч`охі', [], 'Не знайшоў фоткі'),
  new VocabularyItem('папр`уга', [], 'Канфлікт шмат з чым'),
  new VocabularyItem('парас`он', [
    require('./data/парасон-umbrella1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парасон-umbrella2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парасон-umbrella3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пар`энчы', [
    require('./data/парэнчы-railings1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парэнчы-railings2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парэнчы-railings3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пар`эчкі', [
    require('./data/парэчкі-currant1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парэчкі-currant2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парэчкі-currant3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пастар`унак', [], 'Не знайшоў фоткі'),
  new VocabularyItem('пат`ыліца', [], 'Не знайшоў фоткі'),
  new VocabularyItem('пат`эльня', [
    require('./data/патэльня-pan1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/патэльня-pan2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/патэльня-pan3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('п`ацеркі', [
    require('./data/пацеркі-beads1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пацеркі-beads2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пацеркі-beads3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пац`ук', [
    require('./data/пацук-rat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пацук-rat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пацук-rat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пашт`оўка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('п`евень', [
    require('./data/певень-rooster1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/певень-rooster2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/певень-rooster3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('п`ернік', [], 'Не знайшоў фоткі'),
  new VocabularyItem('піг`улка', [
    require('./data/пігулка-pill1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пігулка-pill2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пігулка-pill3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пл`от', [
    require('./data/плот-fence1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/плот-fence2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/плот-fence3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пл`яшка', [
    require('./data/пляшка-canteen1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пляшка-canteen2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пляшка-canteen3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('п`олымя', [], 'Не знайшоў фоткі, каб не канфліктавалі з "вогнішчам"'),
  new VocabularyItem('п`опел', [], 'Не знайшоў фоткі'),
  new VocabularyItem('п`орткі', [], 'Не знайшоў фоткі, і што наконт "нагавіцаў"?'),
  new VocabularyItem('п`оўня', [
    require('./data/поўня-fullmoon1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/поўня-fullmoon2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/поўня-fullmoon3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('п`оўсьць', [
    require('./data/поўсьць-wool1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/поўсьць-wool2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/поўсьць-wool3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пр`ас', [
    require('./data/прас-iron1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/прас-iron2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/прас-iron3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пр`ывід', [], 'Не знайшоў фоткі, і што наконт "здані"?'),
  new VocabularyItem('прын`ада', [
    require('./data/прынада-bait1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/прынада-bait2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/прынада-bait3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пух`ір', [], 'Не знайшоў фоткі'),
  new VocabularyItem('п`ыса', [], 'Не знайшоў фоткі'),
  new VocabularyItem('п`эндзаль', [
    require('./data/пэндзаль-brush1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пэндзаль-brush2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пэндзаль-brush3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пял`ёсткі', [
    require('./data/пялёсткі-petals1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пялёсткі-petals2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пялёсткі-petals3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пярл`іна', [], 'Не знайшоў фотак асобных каб не канйліктавалі з "карáлямі"'),
  new VocabularyItem('раг`оз', [], 'Не знайшоў фоткі'),
  new VocabularyItem('ра`ёк', [], 'Не знайшоў фоткі, ды й як паказаць адназначна паказаць наогул?'),
  new VocabularyItem('раз`ынкі', [
    require('./data/разынкі-raisins1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/разынкі-raisins2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/разынкі-raisins3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('р`овар', [
    require('./data/ровар-bicycle1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ровар-bicycle2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ровар-bicycle3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('р`ондаль', [
    require('./data/рондаль-pot1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рондаль-pot2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рондаль-pot3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('рыдл`ёўка', [
    require('./data/рыдлёўка-spade1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рыдлёўка-spade2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рыдлёўка-spade3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('рызьз`ё', [], 'todo'),
  new VocabularyItem('рыс`унак', [], 'Не знайшоў фоткі'),
  new VocabularyItem('р`эйкі', [
    require('./data/рэйкі-rails1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рэйкі-rails2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рэйкі-rails3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ск`алкі', [], 'Не знайшоў фоткі'),
  new VocabularyItem('скарб`онка', [
    require('./data/скарбонка-piggybank1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/скарбонка-piggybank2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/скарбонка-piggybank3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ск`івіца', [], 'Не знайшоў фоткі'),
  new VocabularyItem('скр`онь', [], 'Не знайшоў фоткі'),
  new VocabularyItem('скр`ыня', [
    require('./data/скрыня-box1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/скрыня-box2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/скрыня-box3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('слан`ечнік', [
    require('./data/сланечнік-sunflower1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сланечнік-sunflower2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сланечнік-sunflower3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('слім`ак', [
    require('./data/слімак-snail1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/слімак-snail2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/слімак-snail3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сл`оік', [
    require('./data/слоік-jar1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/слоік-jar2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/слоік-jar3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('смаг`ард', [
    require('./data/смагард-emerald1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/смагард-emerald2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/смагард-emerald3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('спадн`іца', [], 'Не знайшоў фоткі'),
  new VocabularyItem('сп`одак', [
    require('./data/сподак-saucer1.jpg'), // Unsplash https://unsplash.com/license
    require('./data/сподак-saucer2.jpg'), // Unsplash https://unsplash.com/license
    require('./data/сподак-saucer3.jpg'), // Unsplash https://unsplash.com/license
  ]),
  new VocabularyItem('ст`анік', [
    require('./data/станік-bra1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/станік-bra2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/станік-bra3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ст`ос', [
    require('./data/стос-stack1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стос-stack2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стос-stack3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('стр`ой', [], 'Не знайшоў фоткі'),
  new VocabularyItem('ст`ужка', [
    require('./data/стужка-ribbon1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стужка-ribbon2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стужка-ribbon3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('стырн`о', [
    require('./data/стырно-steering-wheel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стырно-steering-wheel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стырно-steering-wheel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сук`енка', [], 'Не знайшоў фоткі'),
  new VocabularyItem('сум`ёт', [
    require('./data/сумёт-snowdrift1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сумёт-snowdrift2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сумёт-snowdrift3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сун`іцы', [
    require('./data/суніцы-wild-strawberries1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/суніцы-wild-strawberries2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/суніцы-wild-strawberries3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сх`оды', [], 'Не знайшоў фоткі'),
  new VocabularyItem('сш`ытак', [], 'Не знайшоў фоткі'),
  new VocabularyItem('сьв`ердзел', [
    require('./data/сьвердзел-drill1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сьвердзел-drill2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сьвердзел-drill3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сьціз`орык', [
    require('./data/сьцізорык-pen-knife1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сьцізорык-pen-knife2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сьцізорык-pen-knife3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сьцягн`о', [], 'Не знайшоў фоткі'),
  new VocabularyItem('сяк`ера', [
    require('./data/сякера-axe1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сякера-axe2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сякера-axe3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('т`арка', [
    require('./data/тарка-grater1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/тарка-grater2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/тарка-grater3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('тр`ус', [
    require('./data/трус-rabbit1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/трус-rabbit2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/трус-rabbit3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('тр`ускаўка', [
    require('./data/трускаўка-strawberry1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/трускаўка-strawberry2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/трускаўка-strawberry3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('трысьн`ёг', [], 'Канфлікт з "чаротам"?'),
  new VocabularyItem('фат`эль', [
    require('./data/фатэль-armchair1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/фатэль-armchair2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/фатэль-armchair3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('фір`анкі', [
    require('./data/фіранкі-curtains1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/фіранкі-curtains2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/фіранкі-curtains3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ф`утра', [], 'Не знайшоў фоткі'),
  new VocabularyItem('хал`ява', [], 'Не знайшоў фоткі'),
  new VocabularyItem('хв`аля', [
    require('./data/хваля-wave1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/хваля-wave2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/хваля-wave3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('хмарач`ос', [
    require('./data/хмарачос-skyscraper1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/хмарачос-skyscraper2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/хмарачос-skyscraper3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('хр`ушч', [], 'Не знайшоў фоткі'),
  new VocabularyItem('цук`ерка', [
    require('./data/цукерка-candy1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цукерка-candy2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цукерка-candy3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цыб`уля', [
    require('./data/цыбуля-onion1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цыбуля-onion2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цыбуля-onion3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цьв`ік', [
    require('./data/цьвік-nail1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цьвік-nail2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цьвік-nail3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цьв`іль', [
    require('./data/цьвіль-mold1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цьвіль-mold2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цьвіль-mold3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ц`эгла', [
    require('./data/цэгла-brick1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цэгла-brick2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цэгла-brick3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ц`этлік', [
    require('./data/цэтлік-tag1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цэтлік-tag2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цэтлік-tag3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цягн`ік', [
    require('./data/цягнік-train1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цягнік-train2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цягнік-train3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цял`я', [
    require('./data/цяля-calf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цяля-calf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цяля-calf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('чарав`ікі', [
    require('./data/чаравікі-shoes1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/чаравікі-shoes2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/чаравікі-shoes3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('чарг`а', [], 'Не знайшоў фоткі'),
  new VocabularyItem('чар`от', [], 'Канфлікт з "трысьнягом"?'),
  new VocabularyItem('ч`овен', [
    require('./data/човен-boat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/човен-boat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/човен-boat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ш`алі', [
    require('./data/шалі-scales-b1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шалі-scales-b2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шалі-scales-b3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ш`алік', [
    require('./data/шалік-scarf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шалік-scarf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шалік-scarf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шаш`ок', [], 'Чым дакладна адрозьніваецца ад "тхара"?'),
  new VocabularyItem('шкарп`эткі', [
    require('./data/шкарпэткі-socks1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шкарпэткі-socks2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шкарпэткі-socks3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шпал`еры', [
    require('./data/шпалеры-wallpapers1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шпалеры-wallpapers2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шпалеры-wallpapers3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шр`уба', [
    require('./data/шруба-screw1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шруба-screw2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шруба-screw3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ш`уфлік', [
    require('./data/шуфлік-shovel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шуфлік-shovel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шуфлік-shovel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шуфл`ядка', [
    require('./data/шуфлядка-drawer1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шуфлядка-drawer2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шуфлядка-drawer3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шчамл`ётка', [
    require('./data/шчамлётка-clothespin1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шчамлётка-clothespin2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шчамлётка-clothespin3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ш`ыба', [], 'Не знайшоў фоткі'),
  new VocabularyItem('ш`эрань', [
    require('./data/шэрань-rime1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шэрань-rime2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шэрань-rime3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('электрав`ік', [], 'Не знайшоў фоткі'),
  new VocabularyItem('ядв`аб', [], 'Не знайшоў як перадаць'),
  new VocabularyItem('ялав`ец', [], 'Не знайшоў як перадаць'),
  new VocabularyItem('ял`іна', [], 'Не знайшоў фоткі'),
];

export default vocabulary.filter(x => x.isEnabled);

export const fullVocabulary = vocabulary;
