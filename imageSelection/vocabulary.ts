export class VocabularyItem {
  constructor(word: string, images: any[], exclusion?: string[], comment?: string) {
    this.key = word;
    this.canonical = word.replace(/`/g, '');
    this.entry = VocabularyEntry.fromString(word);
    this.images = images;
    this.isEnabled = comment === undefined;
    this.exclusion = exclusion;
    this.comment = comment;
  }

  key: string;
  canonical: string;
  entry: VocabularyEntry;
  images: any[];
  isEnabled: boolean;
  exclusion?: string[];
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
  new VocabularyItem('абр`оць', [
    require('./../data/аброць-bridle1.jpg'), // https://pixabay.com/photos/clydesdale-halter-tack-bridle-2463892/
    require('./../data/аброць-bridle2.jpg'), // https://pixabay.com/photos/animal-bridle-equestrianism-1280572/
    require('./../data/аброць-bridle3.jpg'), // https://pixabay.com/photos/horse-nose-nostril-pony-denture-3389361/
  ], ['пыса']),
  new VocabularyItem('абр`ус', [
    require('./../data/абрус-tablecloth1.jpg'), // https://unsplash.com/photos/a-table-topped-with-a-white-plate-and-a-red-napkin-tZSGRrxn2uU
    require('./../data/абрус-tablecloth2.jpg'), // https://unsplash.com/photos/white-teapot-and-cups-on-white-table-inside-room-5IbARp5FFI4
    require('./../data/абрус-tablecloth3.jpg'), // https://unsplash.com/photos/dish-and-fruits-on-dining-table-ZIo3XDnA1e4
  ], ['талерка']),
  new VocabularyItem('абц`ас', [
    require('./../data/абцас-heel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/абцас-heel2.jpg'), // https://unsplash.com/photos/person-wearing-pair-of-brown-leather-dress-shoes-q4ExhrHaSLY
    require('./../data/абцас-heel3.jpg'), // https://unsplash.com/photos/woman-wearing-black-peep-toe-heeled-shoes-1gDjwOzjEcU
  ], ['боты']),
  new VocabularyItem('абцуг`і', [
    require('./../data/абцугі-pliers1.jpg'), // https://unsplash.com/photos/three-black-handled-pliers-on-brown-surface-VdOO4_HFTWM
    require('./../data/абцугі-pliers2.jpg'), // https://unsplash.com/photos/grey-and-red-metal-hand-tool-dwlxTSpfKXg
    require('./../data/абцугі-pliers3.jpg'), // https://unsplash.com/photos/red-and-silver-scissors-on-brown-wooden-table-GamuDTVm02g
  ]),
  new VocabularyItem('агр`эст', [
    require('./../data/агрэст-gooseberry1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/агрэст-gooseberry2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/агрэст-gooseberry3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('агур`ок', [
    require('./../data/агурок-cucumber1.jpg'), // https://www.freepik.com/free-photo/cucumber-isolated_21061430.htm
    require('./../data/агурок-cucumber2.jpg'), // https://www.freepik.com/free-photo/vertical-photo-fresh-organic-cucumber-black-backround_15736881.htm
    require('./../data/агурок-cucumber3.jpg'), // https://unsplash.com/photos/cucumber-lot-2GiRcLP_jkI
  ]),
  new VocabularyItem('адр`ына', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('аж`ыны', [
    require('./../data/ажыны-blackberry1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ажыны-blackberry2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ажыны-blackberry3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('акул`яры', [
    require('./../data/акуляры-glasses1.jpg'), // https://www.freepik.com/free-photo/glasses-office-desktop_4608903.htm
    require('./../data/акуляры-glasses2.jpg'), // https://www.freepik.com/free-photo/glasses-with-slightly-rounded-frame_58425698.htm
    require('./../data/акуляры-glasses3.jpg'), // https://unsplash.com/photos/person-holding-brown-eyeglasses-with-green-trees-background-kqguzgvYrtM
  ]),
  new VocabularyItem('ал`ей', [
    require('./../data/алей-vegetable-oil1.jpg'), // https://www.freepik.com/free-photo/plate-with-healthy-salad_34135152.htm
    require('./../data/алей-vegetable-oil2.jpg'), // https://unsplash.com/photos/clear-glass-cruet-bottle-uOBApnN_K7w
    require('./../data/алей-vegetable-oil3.jpg'), // https://unsplash.com/photos/person-holding-green-glass-bottle-pouring-white-rice-on-stainless-steel-bowl-4_sLDSttDCc
  ]),
  new VocabularyItem('ал`овак', [
    require('./../data/аловак-pencil1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/аловак-pencil2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/аловак-pencil3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('альт`анка', [
    require('./../data/альтанка-gazebo1.jpg'), // https://pixabay.com/photos/snow-gazebo-winter-cold-white-616319/
    require('./../data/альтанка-gazebo2.jpg'), // https://pixabay.com/photos/gazebo-spring-flowering-trees-pink-3404746/
    require('./../data/альтанка-gazebo3.jpg'), // https://pixabay.com/photos/landscape-gazebo-park-green-pond-5000094/
  ]),
  new VocabularyItem('ан`ёл', [
    require('./../data/анёл-angel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/анёл-angel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/анёл-angel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('апал`онік', [
    require('./../data/апалонік-tadpole1.jpg'), // https://pixabay.com/photos/tadpole-hand-detail-pond-take-1694372/
    require('./../data/апалонік-ladle2.jpg'), // https://www.freepik.com/free-photo/chef-enjoying-aroma-soup-ladle_2690399.htm
    require('./../data/апалонік-ladle3.jpg'), // https://unsplash.com/photos/hanging-spatulas-m3jtY6EobzM
  ]),
  new VocabularyItem('`аркуш', [
    require('./../data/аркуш-sheet-of-paper1.jpg'), // https://unsplash.com/photos/white-printer-paper-4JxV3Gs42Ks
    require('./../data/аркуш-sheet-of-paper2.jpg'), // https://unsplash.com/photos/white-paper-on-black-textile-BpuZCbAOhnw
    require('./../data/аркуш-sheet-of-paper3.jpg'), // https://unsplash.com/photos/white-printer-paper-LZMDLa8rFYg
  ], ['асадка']),
  new VocabularyItem('ар`элі', [
    require('./../data/арэлі-swing1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/арэлі-swing2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/арэлі-swing3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ас`адка', [
    require('./../data/асадка-pen1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/асадка-pen2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/асадка-pen3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['аркуш']),
  new VocabularyItem('аск`епак', [
    require('./../data/аскепак-shard1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/аскепак-shard2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/аскепак-shard3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('баг`оўка', [
    require('./../data/багоўка-ladybug1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/багоўка-ladybug2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/багоўка-ladybug3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бзьдз`юль', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('біз`ун', [
    require('./../data/бізун-whip1.jpg'), // https://pixabay.com/photos/act-performance-hungary-horse-whip-6837149/
    require('./../data/бізун-whip2.jpg'), // https://pixabay.com/photos/horse-drawn-carriage-transportation-952688/
    require('./../data/бізун-whip3.jpg'), // https://www.freepik.com/free-photo/cowboy-background-concept_25969974.htm
  ], ['кола']),
  new VocabularyItem('бір`улька', [
    require('./../data/бірулька-keychain1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бірулька-keychain2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бірулька-keychain3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бл`азан', [
    require('./../data/блазан-jester1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/блазан-jester2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/блазан-jester3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бліскав`іца', [], [], 'Як адрозьніць ад "маланкі"?'),
  new VocabularyItem('б`оты', [
    require('./../data/боты-boots1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/боты-boots2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/боты-boots3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('б`охан', [
    require('./../data/бохан-loaf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бохан-loaf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бохан-loaf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бразг`отка', [
    require('./../data/бразготка-rattle1.jpg'), // https://www.freepik.com/premium-photo/wooden-toys-rattles-teethers-nipple-holder-baby-development-fine-motor-skills-children-newborn-products-accessories-kids-clothes-wish-list-pregnancy-baby-shower_20726371.htm
    require('./../data/бразготка-rattle2.jpg'), // https://www.freepik.com/premium-photo/colorful-baby-rattle-white-horizontal-background_20249855.htm
    require('./../data/бразготка-rattle3.jpg'), // https://www.freepik.com/premium-photo/hobbies-handicrafts-knitted-beanie-with-handmade-embroidery-wooden-toys-rattles-teethers-nipple-holder-baby-development-fine-motor-skills-children-newborn-products-accessories_20726881.htm
  ]),
  new VocabularyItem('бр`осьня', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('бр`уд', [
    require('./../data/бруд-dirt1.jpg'), // https://www.freepik.com/premium-photo/dirty-dishes-isolated-white_43270510.htm
    require('./../data/бруд-dirt2.jpg'), // https://unsplash.com/photos/a-man-with-his-hands-covered-with-mud-IdjxBF_StBk
    require('./../data/бруд-dirt3.jpg'), // https://unsplash.com/photos/child-in-gray-jacket-and-red-pants-riding-red-bicycle-on-brown-sand-during-daytime-UGCgoVmFZC0
  ], ['талерка', 'ровар']),
  new VocabularyItem('бр`ыль', [
    require('./../data/брыль-cap-peak1.jpg'), // https://pixabay.com/photos/cap-macro-man-person-sitting-1835571/
    require('./../data/брыль-canopy2.jpg'), // https://www.freepik.com/premium-photo/tiny-french-shop-cafe-created-inside-botanical-gardens-with-glass-ceiling_38992894.htm
    require('./../data/брыль-straw-hat3.jpg'), // https://www.freepik.com/free-photo/fedora-hat-studio-still-life_63842938.htm
  ]),
  new VocabularyItem('б`ульба', [
    require('./../data/бульба-potatoes1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бульба-potatoes2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бульба-potatoes3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бур`ак', [
    require('./../data/бурак-beetroot1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бурак-beetroot2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бурак-beetroot3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('б`урбалкі', [
    require('./../data/бурбалкі-bubbles1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бурбалкі-bubbles2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бурбалкі-bubbles3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('буршт`ын', [
    require('./../data/бурштын-amber1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бурштын-amber2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бурштын-amber3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('б`усел', [
    require('./../data/бусел-stork1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бусел-stork2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бусел-stork3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('б`эз', [
    require('./../data/бэз-lilac1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бэз-lilac2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/бэз-lilac3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вав`ёрка', [
    require('./../data/вавёрка-squirrel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/вавёрка-squirrel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/вавёрка-squirrel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ваз`ок', [
    require('./../data/вазок-pram1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/вазок-pram2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/вазок-pram3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вал`ізка', [
    require('./../data/валізка-suitcase1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/валізка-suitcase2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/валізка-suitcase3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вал`ошка', [
    require('./../data/валошка-cornflower1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/валошка-cornflower2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/валошка-cornflower3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вандр`оўнік', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('в`ежа', [
    require('./../data/вежа-tower1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/вежа-tower2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/вежа-tower3.jpg'), // Da voli https://creativecommons.org/licenses/by-sa/3.0/ (cropped and resized)
  ]),
  new VocabularyItem('в`ейкі', [
    require('./../data/вейкі-eyelashes1.jpg'), // https://www.freepik.com/free-photo/macro-shot-female-eye-with-long-false-eyelashes_10881118.htm
    require('./../data/вейкі-eyelashes2.jpg'), // https://unsplash.com/photos/person-holding-black-and-silver-scissors-sRSRuxkOuzI
    require('./../data/вейкі-eyelashes3.jpg'), // https://unsplash.com/photos/woman-showing-black-eyelashes-y_VhmHCZ8FY
  ]),
  new VocabularyItem('в`етразь', [
    require('./../data/ветразь-sail1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ветразь-sail2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ветразь-sail3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('від`элец', [
    require('./../data/відэлец-fork1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/відэлец-fork2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/відэлец-fork3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('в`огнішча', [
    require('./../data/вогнішча-bonfire1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/вогнішча-bonfire2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/вогнішча-bonfire3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['полымя', 'грубка']),
  new VocabularyItem('в`ока', [
    require('./../data/вока-eye1.jpg'), // https://www.freepik.com/premium-photo/macro-image-human-eye_4195379.htm
    require('./../data/вока-eye2.jpg'), // https://www.freepik.com/free-photo/macro-shot-young-man-showing-brown-eyes-camera-blinking-looking-reflection-person-with-eyebrows-eyelashes-healthy-eyesight-having-good-vision-optical-focus-close-up_25858461.htm
    require('./../data/вока-eye3.jpg'), // https://www.freepik.com/free-photo/gold-bengal-cat-black-background_8924011.htm
  ], ['раёк', 'зрэнка']),
  new VocabularyItem('в`опратка', [
    require('./../data/вопратка-clothes1.jpg'), // https://www.freepik.com/premium-photo/colorful-women39s-dresses-hangers-retail-shop_40901510.htm
    require('./../data/вопратка-clothes2.jpg'), // https://unsplash.com/photos/five-jackets-on-clothes-rack-zw_oaDbfzyE
    require('./../data/вопратка-clothes3.jpg'), // https://unsplash.com/photos/hanged-top-on-brown-and-white-clothes-horse-TS--uNw-JqE
  ]),
  new VocabularyItem('в`усы', [
    require('./../data/вусы-mustache1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/вусы-mustache2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/вусы-mustache3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('в`ыспа', [
    require('./../data/выспа-island1.jpg'), // https://www.freepik.com/premium-photo/scenic-aerial-view-14-island-lake-saint-hippolyte-quebec-canada_59084834.htm
    require('./../data/выспа-island2.jpg'), // https://unsplash.com/photos/green-trees-on-island-surrounded-by-water-during-daytime-hZ6tMbkAIMk
    require('./../data/выспа-island3.jpg'), // https://unsplash.com/photos/aerial-photography-of-a-green-island-vh0FucFJ7pw
  ]),
  new VocabularyItem('выцін`анка', [
    require('./../data/выцінанка-paper-decoration1.jpg'), // https://be-tarask.wikipedia.org/wiki/%D0%92%D1%8B%D1%86%D1%96%D0%BD%D0%B0%D0%BD%D0%BA%D0%B0#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Wystroj-chaty-kurpie.JPG
    require('./../data/выцінанка-paper-decoration2.jpg'), // https://en.wikipedia.org/wiki/Vytynanky_(Wycinanki)#/media/File:Wycinanka_lubelska,_1915.jpg
    require('./../data/выцінанка-paper-decoration3.jpg'), // https://www.freepik.com/free-photo/laser-cut-ornament-wall-decorative-element-design_78033997.htm
  ]),
  new VocabularyItem('в`элюм', [
    require('./../data/вэлюм-veil1.jpg'), // https://www.freepik.com/free-photo/close-view-serious-attractive-woman-long-white-gown-raising-hand-hiding-face-veil-looking-away-while-sitting-background-modern-building_27037668.htm
    require('./../data/вэлюм-veil2.jpg'), // https://unsplash.com/photos/woman-in-black-shirt-in-grayscale-photography-El-roodgN3s
    require('./../data/вэлюм-veil3.jpg'), // https://unsplash.com/photos/woman-in-white-floral-wedding-dress-Sd-u1RmqWHg
  ]),
  new VocabularyItem('вяс`ёлка', [
    require('./../data/вясёлка-rainbow1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/вясёлка-rainbow2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/вясёлка-rainbow3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вях`отка', [
    require('./../data/вяхотка-washcloth1.jpg'), // https://unsplash.com/photos/three-pieces-of-crocheted-fabric-hanging-from-hooks-nvU0TjYQoBY
    require('./../data/вяхотка-washcloth2.jpg'), // https://www.freepik.com/free-photo/spa-towels-stone-oils_7021047.htm
    require('./../data/вяхотка-washcloth3.jpg'), // https://www.freepik.com/premium-photo/female-hands-holding-round-soft-synthetic-washcloth-bath-with-water-hands-closeup-spa-treatment_193007775.htm
  ]),
  new VocabularyItem('габл`юшка', [
    require('./../data/габлюшка-shavings1.jpg'), // https://unsplash.com/photos/selective-photography-sawdust-on-plank-hdW4rZPHe2g
    require('./../data/габлюшка-shavings2.jpg'), // https://www.freepik.com/free-photo/high-angle-artisan-jobs-equipment-assortment_10890939.htm
    require('./../data/габлюшка-shavings3.jpg'), // https://www.freepik.com/premium-photo/metallic-swarf-lathe-metal-fragments-with-metal-springsclose-up_123034279.htm
  ]),
  new VocabularyItem('гадз`іньнік', [
    require('./../data/гадзіньнік-clock1.jpg'), // https://www.freepik.com/free-photo/flat-lay-wall-clock-still-life_42952365.htm
    require('./../data/гадзіньнік-clock2.jpg'), // https://www.freepik.com/premium-photo/retro-alarm-clock-wood-desk-with-white-textured-background-with-copy-space_25720668.htm
    require('./../data/гадзіньнік-clock3.jpg'), // https://www.freepik.com/free-photo/simple-watch-face-mockup_162123375.htm
  ]),
  new VocabularyItem('г`альштук', [
    require('./../data/гальштук-necktie1.jpg'), // https://www.freepik.com/free-photo/business-man-young-cute-man-dark-blue-suit-with-tie-showing-biceps-off_24920221.htm
    require('./../data/гальштук-necktie2.jpg'), // https://www.freepik.com/premium-photo/body-businessman-wearing-formal-business-suit-uds_179689847.htm
    require('./../data/гальштук-necktie3.jpg'), // https://www.freepik.com/free-photo/stylish-young-portrait-handsome-young-man-sunglasses-formalwear-looking-camera-while-standing-against-grey-background_17242275.htm
  ]),
  new VocabularyItem('гаман`ец', [
    require('./../data/гаманец-wallet1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/гаманец-wallet2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/гаманец-wallet3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('г`анак', [
    require('./../data/ганак-porch1.jpg'), // ШІ
    require('./../data/ганак-porch2.jpg'), // ШІ
    require('./../data/ганак-porch3.jpg'), // ШІ
  ]),
  new VocabularyItem('гарб`ата', [
    require('./../data/гарбата-tea1.jpg'), // https://pixabay.com/photos/cup-tee-porcelain-drink-decor-829527/
    require('./../data/гарбата-tea2.jpg'), // https://pixabay.com/photos/tea-drink-cup-mug-herbal-tea-6680090/
    require('./../data/гарбата-tea3.jpg'), // https://www.freepik.com/premium-photo/herbal-tea-with-medicinal-herbs-flowers-selective-focus_39876898.htm
  ]),
  new VocabularyItem('гарб`уз', [
    require('./../data/гарбуз-pumpkin1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/гарбуз-pumpkin2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/гарбуз-pumpkin3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('гарл`ачык', [
    require('./../data/гарлачык-water-lily1.jpg'), // https://pixabay.com/photos/water-lily-aquatic-plant-5370781/
    require('./../data/гарлачык-water-lily2.jpg'), // https://pixabay.com/photos/water-lily-blossom-bloom-petals-7233788/
    require('./../data/гарлачык-water-lily3.jpg'), // https://pixabay.com/photos/water-lily-white-aquatic-plant-140727/
  ]),
  new VocabularyItem('гар`одніна', [
    require('./../data/гародніна-vegetables1.jpg'), // https://www.freepik.com/free-photo/top-view-fruits-vegetables-bell-peppers-apples-carrot-coriander-cauliflower-persimmon-radish-cherry-tomatoes-red-cabbage-tomatoes-green-hot-pepper_17233567.htm
    require('./../data/гародніна-vegetables2.jpg'), // https://www.freepik.com/free-photo/healthy-vegetables-wooden-table_13013675.htm
    require('./../data/гародніна-vegetables3.jpg'), // https://www.freepik.com/free-photo/top-view-fresh-vegetables-with-seasonings-dark-surface-ripe-salad-health-food_16924759.htm
  ]),
  new VocabularyItem('гарс`эт', [
    require('./../data/гарсэт-corset1.jpg'), // https://www.freepik.com/free-photo/full-portrait-beautiful-young-woman-with-long-black-hair-posing-studio-dressed-jeans-corset_11228452.htm
    require('./../data/гарсэт-corset2.jpg'), // https://unsplash.com/photos/woman-in-blue-tube-dress-standing-on-brown-soil-during-daytime-T-j1GNkJTw8
    require('./../data/гарсэт-corset3.jpg'), // https://www.freepik.com/premium-photo/beautiful-sexy-woman-posing-corset_181205517.htm
  ]),
  new VocabularyItem('г`іль', [
    require('./../data/гіль-bullfinch1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/гіль-bullfinch2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/гіль-bullfinch3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('гл`яйцар', [
    require('./../data/гляйцар-corkscrew1.jpg'), // https://www.freepik.com/free-photo/close-up-wine-stain-detail_31049956.htm
    require('./../data/гляйцар-corkscrew2.jpg'), // https://www.freepik.com/premium-photo/wine-grape-wooden-table-against-light-background_193408258.htm
    require('./../data/гляйцар-corkscrew3.jpg'), // https://www.freepik.com/free-photo/top-view-wine-stoppers-corkscrew_6596197.htm
  ], ['корак']),
  new VocabularyItem('гр`ошы', [
    require('./../data/грошы-money1.jpg'), // https://www.freepik.com/free-photo/money-finance-woman-with-heap-coins_6190569.htm
    require('./../data/грошы-money2.jpg'), // https://unsplash.com/photos/man-holding-clear-glass-jar-76HIoI5Ni1E
    require('./../data/грошы-money3.jpg'), // https://www.freepik.com/free-photo/person-placing-coin-pile-coins_11433292.htm
  ], ['слоік']),
  new VocabularyItem('гр`убка', [
    require('./../data/грубка-cast-iron-oven1.jpg'), // https://unsplash.com/photos/cast-iron-teapot-on-wood-burner-DsQU3n5o3Sg
    require('./../data/грубка-cast-iron-oven2.jpg'), // https://unsplash.com/photos/brown-clay-pot-on-black-wood-burner-YQ0hCwyIgUU
    require('./../data/грубка-cast-iron-oven3.jpg'), // https://pixabay.com/photos/nostalgia-oven-old-historical-4353096/
  ], ['полымя', 'вогнішча']),
  new VocabularyItem('гр`уца', [
    require('./../data/груца-barley1.jpg'), // https://www.freepik.com/free-photo/front-view-cooked-pearl-barley-inside-plate-dark-surface_15718071.htm
    require('./../data/груца-barley2.jpg'), // https://pixabay.com/photos/pearl-barley-rye-seeds-mung-beans-5678882/
    require('./../data/груца-barley3.jpg'), // https://www.freepik.com/premium-photo/bowl-cooked-peeled-barley-grains-porridge_119336994.htm
  ]),
  new VocabularyItem('г`узік', [
    require('./../data/гузік-button1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/гузік-button2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/гузік-button3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('г`умка', [
    require('./../data/гумка-eraser1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/гумка-eraser2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/гумка-eraser3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('г`эбель', [
    require('./../data/гэбель-planer1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/гэбель-planer2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/гэбель-planer3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('д`ах', [
    require('./../data/дах-roof1.jpg'), // https://www.freepik.com/free-photo/aerial-panorama-view-chernobyl-exclusion-zone-with-ruins-abandoned-pripyat-city-zone-radioactivity-ghost-town-with-empty-building_27001723.htm
    require('./../data/дах-roof2.jpg'), // https://pixabay.com/photos/roof-shingles-old-house-window-4275783/
    require('./../data/дах-roof3.jpg'), // https://unsplash.com/photos/birds-eye-view-of-assorted-color-roof-tiles-YVNlVJ8F_Ok
  ]),
  new VocabularyItem('дз`ежка', [
    require('./../data/дзежка-bucket1.jpg'), // https://www.freepik.com/premium-photo/traditional-wooden-bucket-isolated-white-background_12621419.htm
    require('./../data/дзежка-bucket2.jpg'), // https://www.freepik.com/premium-photo/wooden-bucket-isolated-white-background-clipping-path-included_34806299.htm
    require('./../data/дзежка-bucket3.jpg'), // https://www.freepik.com/premium-photo/bucket-bath-brick-surface-equipment-saunas_18337590.htm
  ]),
  new VocabularyItem('дз`ёньнік', [], [], 'як недвухсэнсоўна паказаць?'),
  new VocabularyItem('дз`ік', [
    require('./../data/дзік-boar1.jpg'), // https://www.freepik.com/free-photo/wild-boar-nature-habitat-dangerous-animal-forest-czech-republic-nature-sus-scrofa_16206151.htm
    require('./../data/дзік-boar2.jpg'), // https://www.freepik.com/premium-photo/dangerous-wild-boar-approaching-from-front-glade-springtime_278604645.htm
    require('./../data/дзік-boar3.jpg'), // https://www.freepik.com/free-photo/wild-boar-nature-habitat-dangerous-animal-forest-czech-republic-nature-sus-scrofa_16205979.htm
  ]),
  new VocabularyItem('дзьмухав`ец', [
    require('./../data/дзьмухавец-dandelion1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/дзьмухавец-dandelion2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/дзьмухавец-dandelion3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('дз`яга', [], [], 'Канфлікт з "пас", "папруга", "рэмень"'),
  new VocabularyItem('драб`іны', [
    require('./../data/драбіны-ladder1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/драбіны-ladder2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/драбіны-ladder3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('др`от', [
    require('./../data/дрот-wire1.jpg'), // https://www.freepik.com/free-photo/black-aux-wire-isolated-white_21128524.htm
    require('./../data/дрот-wire2.jpg'), // https://www.freepik.com/free-photo/black-power-cable-with-plug-socket-isolated-white_21128298.htm
    require('./../data/дрот-wire3.jpg'), // https://www.freepik.com/free-photo/electrical-cable-energy-technology-equipment-isolated-white_20989627.htm
  ]),
  new VocabularyItem('друк`арка', [
    require('./../data/друкарка-printer1.jpg'), // https://www.freepik.com/free-photo/side-view-printer-desk-office_30955545.htm
    require('./../data/друкарка-printer2.jpg'), // https://www.freepik.com/premium-photo/printer-office_6514711.htm
    require('./../data/друкарка-printer3.jpg'), // https://www.freepik.com/premium-photo/printer-that-is-white-black-color_41808373.htm
  ]),
  new VocabularyItem('друк`арня', [], [], 'не знайшоў фота'),
  new VocabularyItem('дрыгв`а', [
    require('./../data/дрыгва-swamp1.jpg'), // https://www.freepik.com/premium-photo/beautiful-scenery-wetland-lakes-natural-park-vepsian-forest_30802192.htm
    require('./../data/дрыгва-swamp2.jpg'), // https://www.freepik.com/premium-photo/estonian-local-famous-landmark-observation-tower-nature-viru-swamp-photo-view-from-drone_315733746.htm
    require('./../data/дрыгва-swamp3.jpg'), // https://www.freepik.com/premium-photo/scenic-view-lake-against-sky_124165007.htm
  ]),
  new VocabularyItem('дыв`ан', [
    require('./../data/дыван-carpet1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/дыван-carpet2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/дыван-carpet3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('дыям`энт', [
    require('./../data/дыямэнт-diamond1.jpg'), // https://www.freepik.com/premium-photo/diamond-black-leather-background_273093259.htm
    require('./../data/дыямэнт-diamond2.jpg'), // https://www.freepik.com/premium-photo/close-up-elegant-diamond-white-shining-bokeh-background-concept-choosing-best-diamond-gem-design-3d-render_149477329.htm
    require('./../data/дыямэнт-diamond3.jpg'), // https://www.freepik.com/premium-photo/round-diamonds-isolated-deep-blue-background-3d-rendering_25474785.htm
  ]),
  new VocabularyItem('жаўн`ер', [], [], 'Не знайшоў фотка якія б мне спадабаліся'),
  new VocabularyItem('жв`ір', [
    require('./../data/жвір-gravel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/жвір-gravel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/жвір-gravel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('журав`іны', [
    require('./../data/журавіны-cranberries1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/журавіны-cranberries2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/журавіны-cranberries3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('жыранд`оль', [
    require('./../data/жырандоль-chandelier1.jpg'), // https://www.freepik.com/free-photo/white-chandelier_1254291.htm
    require('./../data/жырандоль-chandelier2.jpg'), // https://www.freepik.com/free-photo/beautiful-luxury-chandelier-decoration-interior_3531890.htm
    require('./../data/жырандоль-chandelier3.jpg'), // https://www.freepik.com/free-photo/golden-chandelier-hangs-from-ceiling-church_3712855.htm
  ]),
  new VocabularyItem('зав`ея', [], [], 'Канфлікт з "завіруха"'),
  new VocabularyItem('завір`уха', [], [], 'Канфлікт з "завея"'),
  new VocabularyItem('зап`алка', [
    require('./../data/запалка-match1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/запалка-match2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/запалка-match3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['полымя']),
  new VocabularyItem('запальн`ічка', [
    require('./../data/запальнічка-lighter1.jpg'), // https://www.freepik.com/free-photo/lighter-orange-background-macro-detail_16423501.htm
    require('./../data/запальнічка-lighter2.jpg'), // https://www.freepik.com/premium-photo/lighter-fire-isolated-white-background_88595826.htm
    require('./../data/запальнічка-lighter3.jpg'), // https://www.freepik.com/premium-photo/metal-lighter-isolated-white-background_20293928.htm
  ], ['полымя']),
  new VocabularyItem('запл`ечнік', [
    require('./../data/заплечнік-backpack1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/заплечнік-backpack2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/заплечнік-backpack3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('зб`ан', [
    require('./../data/збан-jug1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/збан-jug2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/збан-jug3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('зб`ожжа', [
    require('./../data/збожжа-wheatfield1.jpg'), // https://www.freepik.com/free-photo/wheat-field-ready-harvest_11133925.htm
    require('./../data/збожжа-wheatfield2.jpg'), // https://www.freepik.com/free-photo/brown-wheatfield_12685687.htm
    require('./../data/збожжа-wheatfield3.jpg'), // https://www.freepik.com/free-photo/wheat-field-with-spikelets-gold-tones_27469552.htm
  ], ['груца']),
  new VocabularyItem('збр`оя', [
    require('./../data/зброя-weapon1.jpg'), // https://www.freepik.com/free-photo/close-up-gun-surrounded-by-gun-powder-after-shooting_66984348.htm
    require('./../data/зброя-weapon2.jpg'), // https://www.freepik.com/free-photo/vertical-shot-sword-sandy-beach_13235899.htm
    require('./../data/зброя-weapon3.jpg'), // https://www.freepik.com/free-photo/hand-grenade-powerful-mass-destroying-weapon-with-brown-lever_7916400.htm
  ]),
  new VocabularyItem('згр`ая', [
    require('./../data/зграя-wolves-pack1.jpg'), // https://www.freepik.com/premium-photo/pack-hungry-wolves-hunting-winter_45030489.htm
    require('./../data/зграя-wolves-pack2.jpg'), // https://www.freepik.com/premium-photo/wolf-pack-pack-wolves-wolf-pack-forest_82338871.htm
    require('./../data/зграя-wolves-pack3.jpg'), // https://www.freepik.com/premium-photo/wolf-pack-pack-wolves-wolf-pack-forest_82338570.htm
  ]),
  new VocabularyItem('зд`ань', [
    require('./../data/здань-ghost1.jpg'), // ШІ
    require('./../data/здань-ghost2.jpg'), // ШІ
    require('./../data/здань-ghost3.jpg'), // ШІ
  ]),
  new VocabularyItem('з`еўра', [], [], 'Не прыдумаў як перадаць'),
  new VocabularyItem('з`ёлкі', [
    require('./../data/зёлкі-herbs1.jpg'), // https://www.freepik.com/free-photo/top-view-natural-medicinal-spices-herbs_11375837.htm
    require('./../data/зёлкі-herbs2.jpg'), // https://www.freepik.com/free-photo/flat-lay-cup-herbal-tea-with-plants_5906727.htm
    require('./../data/зёлкі-herbs3.jpg'), // https://www.freepik.com/premium-photo/collection-different-herbs-including-basil-basil-other-herbs_39153767.htm
  ]),
  new VocabularyItem('з`орка', [
    require('./../data/зорка-star1.jpg'), // https://www.freepik.com/free-photo/star-made-from-garland-wall_3390908.htm
    require('./../data/зорка-star2.jpg'), // https://www.freepik.com/premium-photo/close-up-lizard-against-blue-background_112862760.htm
    require('./../data/зорка-star3.jpg'), // https://www.freepik.com/premium-photo/sun-cosmic-rays-from-sun-solar-flare-explosion-emissions-from-nuclear-fusion-radiation_44658432.htm
  ]),
  new VocabularyItem('зр`энка', [
    require('./../data/зрэнка-eye-pupil1.jpg'), // https://www.freepik.com/free-photo/human-s-deep-eye_8024229.htm
    require('./../data/зрэнка-eye-pupil2.jpg'), // https://www.freepik.com/free-photo/closeup-female-human-s-deep-eyes_8024295.htm
    require('./../data/зрэнка-eye-pupil3.jpg'), // https://www.freepik.com/premium-photo/male-gray-blue-colored-eye-extreme-close-up_7894406.htm
  ], ['раёк', 'вока']),
  new VocabularyItem('зьн`ічка', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('з`эдлік', [
    require('./../data/зэдлік-stool1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/зэдлік-stool2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/зэдлік-stool3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('`імбрык', [], [], 'Я больш ня ўпэўнены што знычыць гэтае слова'),
  new VocabularyItem('`ірты', [], [], 'Ці сапраўды слова ўжываецца?'),
  new VocabularyItem('к`ава', [
    require('./../data/кава-coffee1.jpg'), // https://www.freepik.com/free-photo/person-serving-cup-coffee_1039907.htm
    require('./../data/кава-coffee2.jpg'), // https://www.freepik.com/free-photo/high-angle-coffee-cup-table_29301201.htm
    require('./../data/кава-coffee3.jpg'), // https://www.freepik.com/premium-photo/close-up-roasted-coffee-beans-table_109941067.htm
  ]),
  new VocabularyItem('кав`адла', [
    require('./../data/кавадла-anvil1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кавадла-anvil2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кавадла-anvil3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кав`ун', [
    require('./../data/кавун-watermelon1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кавун-watermelon2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кавун-watermelon3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('каж`ан', [
    require('./../data/кажан-bat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кажан-bat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кажан-bat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`айстра', [], [], '? як адрозьніць ад іншых торбаў?'),
  new VocabularyItem('калаўр`от', [
    require('./../data/калаўрот-spinning-wheel1.jpg'), // https://en.wikipedia.org/wiki/Spinning_wheel
    require('./../data/калаўрот-spinning-wheel2.jpg'), // https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D0%B0%D1%9E%D1%80%D0%BE%D1%82
    require('./../data/калаўрот-spinning-wheel3.jpg'), // https://en.wikipedia.org/wiki/Spinning_wheel
  ]),
  new VocabularyItem('кал`яды', [
    require('./../data/каляды-christmas1.jpg'), // https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D1%8F%D0%B4%D1%8B
    require('./../data/каляды-christmas2.jpg'), // https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D1%8F%D0%B4%D1%8B	
    require('./../data/каляды-christmas3.jpg'), // фота
  ]),
  new VocabularyItem('кам`ель', [
    require('./../data/камель-trunk1.jpg'), // https://www.freepik.com/free-photo/closeup-tree-trunk-with-white-bark_10303726.htm
    require('./../data/камель-trunk2.jpg'), // https://www.freepik.com/free-photo/close-up-girl-s-hand-touching-tree-bark_4743137.htm
    require('./../data/камель-trunk3.jpg'), // https://www.freepik.com/free-photo/closeup-shot-tree-trunk-with-lichens-moss_10303754.htm
  ]),
  new VocabularyItem('каміз`элька', [
    require('./../data/камізэлька-vest1.jpg'), // https://www.freepik.com/premium-photo/construction-site-orange-safety-vest-wall_240150705.htm
    require('./../data/камізэлька-vest2.jpg'), // https://www.freepik.com/premium-photo/with-blue-patterned-vest-mens-wedding-suit-groom-isolated-white-background_12996193.htm
    require('./../data/камізэлька-vest3.jpg'), // https://www.freepik.com/premium-photo/vest-that-has-brown-band-around-waist_268754900.htm
  ]),
  new VocabularyItem('кам`ін', [
    require('./../data/камін-chimney1.jpg'), // https://www.freepik.com/premium-photo/close-up-illuminated-light-bulb_122867092.htm
    require('./../data/камін-chimney2.jpg'), // https://www.freepik.com/premium-photo/modern-room-concept-interior-style-chair-fireplace-frame-wicker-carpet-decoration-grey-stone-wal_267192686.htm
    require('./../data/камін-chimney3.jpg'), // https://www.freepik.com/premium-photo/creating-cozy-atmosphere-importance-chimney-maintenance_119563419.htm
  ], ['полымя']),
  new VocabularyItem('кан`апа', [
    require('./../data/канапа-sofa1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/канапа-sofa2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/канапа-sofa3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('капял`юш', [
    require('./../data/капялюш-hat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/капялюш-hat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/капялюш-hat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['брыль']),
  new VocabularyItem('караг`од', [
    require('./../data/карагод-round-dance1.jpg'), // https://pixabay.com/photos/round-dance-to-dance-hobby-2464228/
    require('./../data/карагод-round-dance2.jpg'), // ШІ
    require('./../data/карагод-round-dance3.jpg'), // ШІ
  ]),
  new VocabularyItem('к`арак', [
    require('./../data/карак-back-neck1.jpg'), // https://www.freepik.com/free-photo/faceless-woman-with-dark-skin-suffers-from-nape-pain-holds-hand-neck-with-red-spot-has-problems-with-health-spine-disease-wears-sport-bra-isolated-white-background-pain-syndroms_12697825.htm
    require('./../data/карак-back-neck2.jpg'), // https://www.freepik.com/free-photo/young-man-training-bodybuilding_29806264.htm
    require('./../data/карак-back-neck3.jpg'), // https://www.freepik.com/premium-photo/young-woman-topless-back-view-arms-shoulders-isolate-gray-wall_12480719.htm
  ]),
  new VocabularyItem('кар`алі', [
    require('./../data/каралі-necklace1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/каралі-necklace2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/каралі-necklace3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кар`ункі', [
    require('./../data/карункі-lace1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/карункі-lace2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/карункі-lace3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`аўка', [
    require('./../data/каўка-jackdaw1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/каўка-jackdaw2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/каўка-jackdaw3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('каўн`ер', [
    require('./../data/каўнер-collar1.jpg'), // https://www.freepik.com/free-photo/closeup-person-wearing-light-blue-shirt_7841769.htm
    require('./../data/каўнер-collar2.jpg'), // https://www.freepik.com/free-photo/close-up-senior-priest-church-with-costume_25776003.htm
    require('./../data/каўнер-collar3.jpg'), // https://www.freepik.com/free-photo/shirt-clothes_1135481.htm
  ]),
  new VocabularyItem('к`афля', [
    require('./../data/кафля-tiles1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кафля-tiles2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кафля-tiles3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кач`алка', [
    require('./../data/качалка-rolling-pin1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/качалка-rolling-pin2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/качалка-rolling-pin3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`ачка', [
    require('./../data/качка-duck1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/качка-duck2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/качка-duck3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кв`етка', [
    require('./../data/кветка-flower1.jpg'), // https://www.freepik.com/free-photo/close-up-pretty-gerbera_1722189.htm
    require('./../data/кветка-flower2.jpg'), // https://www.freepik.com/free-photo/flowers-against-sky_26583294.htm
    require('./../data/кветка-flower3.jpg'), // https://www.freepik.com/free-photo/close-up-beautiful-blooming-flower_23669143.htm
  ]),
  new VocabularyItem('к`еліх', [
    require('./../data/келіх-glass1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/келіх-glass2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/келіх-glass3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ків`ач', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('кі`ёк', [
    require('./../data/кіёк-stick1.jpg'), // https://www.freepik.com/free-photo/blind-person-getting-ready-walk-with-blind-stick_22632862.htm
    require('./../data/кіёк-stick2.jpg'), // https://www.freepik.com/premium-photo/elegant-wooden-walking-canes-white-background_39235212.htm
    require('./../data/кіёк-stick3.jpg'), // https://www.freepik.com/premium-photo/close-up-view-suffering-elderly-man-walking-with-help-cane_15986283.htm
  ]),
  new VocabularyItem('кіпцюр`ы', [
    require('./../data/кіпцюры-claws1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кіпцюры-claws2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кіпцюры-claws3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кіш`эня', [
    require('./../data/кішэня-pocket1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кішэня-pocket2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кішэня-pocket3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кі`ях', [
    require('./../data/кіях-corn1.jpg'), // https://www.freepik.com/free-photo/fresh-corns-white-table_16903893.htm
    require('./../data/кіях-corn2.jpg'), // https://www.freepik.com/free-photo/fresh-sweet-ears-corn-isolated-white-plate_13342541.htm
    require('./../data/кіях-corn3.jpg'), // https://www.freepik.com/free-photo/top-view-fresh-yellow-corns-dark-background_17063122.htm
  ]),
  new VocabularyItem('км`ін', [], [], 'цяжка перадаць малюнкам'),
  new VocabularyItem('кн`от', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('к`ола', [
    require('./../data/кола-wheel1.jpg'), // https://www.freepik.com/free-photo/car-tires-showcased-inside-automobile-workshop_135010571.htm
    require('./../data/кола-wheel2.jpg'), // https://www.freepik.com/free-photo/high-angle-female-mechanic-replacing-car-wheel_5851573.htm
    require('./../data/кола-wheel3.jpg'), // https://www.freepik.com/free-photo/closeup-old-wooden-wheel-ground-against-fences-lights_10758863.htm
  ]),
  new VocabularyItem('к`омін', [
    require('./../data/комін-chimney-smoke1.jpg'), // https://www.freepik.com/premium-photo/closeup-smoke-coming-out-chimney-building-sunlight-daytime_43052165.htm
    require('./../data/комін-chimney-smoke2.jpg'), // https://www.freepik.com/premium-photo/old-brick-chimney-roof-covered-with-snow_26731799.htm
    require('./../data/комін-chimney-smoke3.jpg'), // https://www.freepik.com/premium-photo/modern-metal-chimney-ventilation_291639730.htm
  ]),
  new VocabularyItem('к`онаўка', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('к`онік', [
    require('./../data/конік-grasshopper1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/конік-grasshopper2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/конік-grasshopper3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`орак', [
    require('./../data/корак-cork1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/корак-cork2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/корак-cork3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`оўдра', [
    require('./../data/коўдра-blanket1.jpg'), // https://www.freepik.com/free-photo/portrait-happy-calm-woman-bedroom-gray-stripped-blanket-black-beige-body-home-sleep-wear_11687632.htm
    require('./../data/коўдра-blanket2.jpg'), // https://www.freepik.com/premium-photo/young-happy-woman-wrapped-blanket-sitting-bed-by-christmas-tree-festive-cozy-morning-home_67070192.htm
    require('./../data/коўдра-blanket3.jpg'), // https://www.freepik.com/premium-photo/classic-mens-shaving-machine-shaving-accessories-safety-razor-black-background-with-wooden-branches_335485169.htm
  ], ['ложак']),
  new VocabularyItem('к`оўзанка', [
    require('./../data/коўзанка-rink1.jpg'), // https://www.freepik.com/free-photo/female-ice-skating_8507058.htm
    require('./../data/коўзанка-rink2.jpg'), // https://www.freepik.com/free-photo/cute-couple-ice-arena_4050214.htm
    require('./../data/коўзанка-rink3.jpg'), // https://www.freepik.com/premium-photo/salzburg-austria-december-31-2015-people-skating-town_58507731.htm
  ]),
  new VocabularyItem('к`ошык', [
    require('./../data/кошык-basket1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кошык-basket2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кошык-basket3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кр`аткі', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('кр`ок', [], [], 'цяжка перадаць малюнкам'),
  new VocabularyItem('кр`опка', [], [], 'не знайшоў малюнкаў'),
  new VocabularyItem('круж`элка', [
    require('./../data/кружэлка-disk1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кружэлка-disk2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/кружэлка-disk3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кр`ыга', [
    require('./../data/крыга-ice1.jpg'), // https://www.freepik.com/free-photo/cloudy-nature-landscape-by-lake_26324445.htm
    require('./../data/крыга-ice2.jpg'), // https://www.freepik.com/premium-photo/details-broken-ice-river-dnieper_19027341.htm
    require('./../data/крыга-ice3.jpg'), // https://www.freepik.com/premium-photo/movement-ice-floes-river-influence-current-wind_12476348.htm
  ]),
  new VocabularyItem('крыгах`од', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('кр`эйда', [
    require('./../data/крэйда-chalk1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/крэйда-chalk2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/крэйда-chalk3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`убак', [
    require('./../data/кубак-mug1.jpg'), // https://www.freepik.com/premium-photo/woman-hands-grey-sweater-holding-white-coffee-mug_245939296.htm
    require('./../data/кубак-mug2.jpg'), // https://www.freepik.com/premium-photo/scandinavian-christmas-cup-with-pattern-isolated-white-background_33550871.htm
    require('./../data/кубак-mug3.jpg'), // https://www.freepik.com/premium-photo/blue-mug-wooden-table_44659289.htm
  ]),
  new VocabularyItem('кудз`еркі', [
    require('./../data/кудзеркі-curls1.jpg'), // https://www.freepik.com/free-photo/likeable-woman-with-shiny-shadows-dressed-shirt-with-silver-sequins-dark-pants-dancing-purple-background_23667545.htm
    require('./../data/кудзеркі-curls2.jpg'), // https://www.freepik.com/free-photo/fashionable-curly-woman-golden-earrings-standing-white-wall-adorable-stylish-girl-laughing_12018236.htm
    require('./../data/кудзеркі-curls3.jpg'), // https://www.freepik.com/premium-photo/portrait-young-beautiful-smiling-women-with-curly-hair_8520594.htm
  ]),
  new VocabularyItem('к`уфаль', [
    require('./../data/куфаль-beer-mug1.jpg'), // https://www.freepik.com/free-photo/glass-beer-with-spike-barley-wooden-table_5083485.htm
    require('./../data/куфаль-beer-mug2.jpg'), // https://www.freepik.com/free-photo/close-up-blonde-beer-table-with-pretzels_5325181.htm
    require('./../data/куфаль-beer-mug3.jpg'), // https://www.freepik.com/free-photo/closeup-shot-glass-cold-beer-wooden-surface_11541141.htm
  ]),
  new VocabularyItem('к`уфар', [
    require('./../data/куфар-chest1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/куфар-chest2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/куфар-chest3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('л`азьня', [
    require('./../data/лазьня-sauna1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/лазьня-sauna2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/лазьня-sauna3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ланц`уг', [
    require('./../data/ланцуг-chain1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ланцуг-chain2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ланцуг-chain3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('лас`унак', [], [], 'Як наогул можна відавочна паказаць?'),
  new VocabularyItem('лін`арка', [
    require('./../data/лінарка-ruler1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/лінарка-ruler2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/лінарка-ruler3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('літ`ара', [
    require('./../data/літара-letter1.jpg'), // 
    require('./../data/літара-letter2.jpg'), // 
    require('./../data/літара-letter3.jpg'), // 
  ]),
  new VocabularyItem('ліхам`анка', [], [], 'цяжка перадаць малюнкам'),
  new VocabularyItem('ліхт`ар', [
    require('./../data/ліхтар-lantern1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ліхтар-lantern2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ліхтар-lantern3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ліхт`арык', [
    require('./../data/ліхтарык-flashlight1.jpg'), // https://www.freepik.com/premium-photo/handheld-led-flashlight-white-background-insulation_255650267.htm
    require('./../data/ліхтарык-flashlight2.jpg'), // https://www.freepik.com/premium-photo/pocket-silver-flashlight-isolated-blue-background-with-copy-space-minimal-think-minimal-thing_125996414.htm
    require('./../data/ліхтарык-flashlight3.jpg'), // https://www.freepik.com/premium-photo/beam-light-from-portable-flashlight-gray-background-copy-space_47581478.htm
  ], ['прамень']),
  new VocabularyItem('л`ожак', [
    require('./../data/ложак-bed1.jpg'), // https://www.freepik.com/free-photo/beautiful-bed-middle-bedroom_14601080.htm
    require('./../data/ложак-bed2.jpg'), // https://www.freepik.com/premium-photo/white-arched-window-bedroom-corner-with-king-size-bed-bedside-table-attached-wall-top-view-3d-rendering-mock-up_62524273.htm
    require('./../data/ложак-bed3.jpg'), // https://www.freepik.com/premium-photo/3d-images-isolated-double-bed-with-stunning-design-colorful-gray-solid-background-generative-ai-illustration_37022091.htm
  ]),
  new VocabularyItem('л`окшына', [
    require('./../data/локшына-noodles1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/локшына-noodles2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/локшына-noodles3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('луск`а', [
    require('./../data/луска-scales-a1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/луска-scales-a2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/луска-scales-a3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('л`уста', [
    require('./../data/луста-slice1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/луста-slice2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/луста-slice3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('люст`эрка', [
    require('./../data/люстэрка-mirror1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/люстэрка-mirror2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/люстэрка-mirror3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('лядз`як', [
    require('./../data/лядзяк-icicle1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/лядзяк-icicle2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/лядзяк-icicle3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ляз`о', [
    require('./../data/лязо-blade1.jpg'), // https://www.freepik.com/premium-photo/sharp-metal-knife-macro-edge-blade_50604058.htm
    require('./../data/лязо-blade2.jpg'), // https://www.freepik.com/premium-photo/japanese-sword-blade-white-background-soft-focus-wavy-pattern-blade-edge-is-line-hardness-that-blacksmith-makes-so-that-blade-doesn-t-break-each-piece-is-unique_32608788.htm
    require('./../data/лязо-blade3.jpg'), // https://www.freepik.com/free-photo/still-life-with-razor-blade_144643245.htm
  ]),
  new VocabularyItem('л`ялька', [
    require('./../data/лялька-doll1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/лялька-doll2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/лялька-doll3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('л`ямец', [
    require('./../data/лямец-felt1.jpg'), // https://www.freepik.com/free-photo/view-felt-fabric-gray-tones_27641018.htm
    require('./../data/лямец-felt2.jpg'), // https://www.freepik.com/free-photo/view-felt-fabric-different-colors_27641362.htm
    require('./../data/лямец-felt3.jpg'), // https://www.freepik.com/free-photo/view-felt-fabric-stacked-layers_27640825.htm
  ]),
  new VocabularyItem('м`айткі', [
    require('./../data/майткі-pants1.jpg'), // https://www.freepik.com/premium-photo/women-s-hand-holding-beautiful-cotton-panties-pink-background-woman-underwear-set-top-view_18882975.htm
    require('./../data/майткі-pants2.jpg'), // https://www.freepik.com/premium-photo/womens-panties-pink-background-with-copy-space_343421909.htm
    require('./../data/майткі-pants3.jpg'), // https://www.freepik.com/free-photo/underwear_1026774.htm
  ]),
  new VocabularyItem('маладз`ік', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('мал`анка', [], [], 'Канфлікт з бліскавіцай'),
  new VocabularyItem('мал`юнак', [
    require('./../data/малюнак-painting1.jpg'), // https://www.freepik.com/free-photo/artist-woman-painting-canvas-from-shot_11750917.htm
    require('./../data/малюнак-painting2.jpg'), // https://www.freepik.com/premium-photo/midsection-man-painting-book_127801877.htm
    require('./../data/малюнак-painting3.jpg'), // https://www.freepik.com/free-photo/braless-woman-working-indoor_49639472.htm
  ]),
  new VocabularyItem('м`апа', [
    require('./../data/мапа-map1.jpg'), // https://www.freepik.com/free-photo/high-angle-view-different-maps_2544016.htm
    require('./../data/мапа-map2.jpg'), // https://www.freepik.com/premium-photo/world-map-image_251453399.htm
    require('./../data/мапа-map3.jpg'), // https://www.freepik.com/free-photo/unrecognizable-navigating-tourist-city_1291702.htm
  ]),
  new VocabularyItem('матузк`і', [
    require('./../data/матузкі-shoelaces1.jpg'), // https://www.freepik.com/free-photo/young-backpacker-woman-tying-shoelaces-while-go-hiking-forest_1088855.htm
    require('./../data/матузкі-shoelaces2.jpg'), // https://www.freepik.com/free-photo/hands-tying-trainers-shoelaces-fall-pave_1281743.htm
    require('./../data/матузкі-shoelaces3.jpg'), // https://www.freepik.com/premium-photo/brides-back-wedding-white-dress-with-lace_22999883.htm
  ]),
  new VocabularyItem('м`огілкі', [
    require('./../data/могілкі-cemetery1.jpg'), // https://www.freepik.com/premium-photo/lviv-ukraine-apr-27-2016-old-graves-lychakivskyj-cemetery-lviv-ukraine-officially-state-history-culture-museum-preserve-lychakiv-cemetery_17330855.htm
    require('./../data/могілкі-cemetery2.jpg'), // https://www.freepik.com/free-photo/world-war-i-cemetery_9760840.htm
    require('./../data/могілкі-cemetery3.jpg'), // https://www.freepik.com/premium-photo/tombstones-josefov-cemetery-old-ghetto-prague-czech-republic_143519424.htm
  ]),
  new VocabularyItem('мур`аш', [
    require('./../data/мураш-ant1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/мураш-ant2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/мураш-ant3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('мут`эрка', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('м`ыліца', [
    require('./../data/мыліца-crutches1.jpg'), // https://www.freepik.com/premium-photo/crutches-front-wall_32522628.htm
    require('./../data/мыліца-crutches2.jpg'), // https://www.freepik.com/premium-photo/elderly-woman-with-crutch-walking-corridor_10726642.htm
    require('./../data/мыліца-crutches3.jpg'), // https://www.freepik.com/free-photo/front-view-young-man-using-crutches-due-broken-foot-grey-wall-leg-accident-disable-broke-damage-broken_16909826.htm
  ]),
  new VocabularyItem('м`ятлік', [
    require('./../data/мятлік-butterfly1.jpg'), // https://www.freepik.com/free-photo/close-up-view-beautiful-butterfly-concept_11383021.htm
    require('./../data/мятлік-butterfly2.jpg'), // https://www.freepik.com/free-photo/vertical-shot-moth-trying-drink-nectar-lilac-syringa-flower_20386454.htm
    require('./../data/мятлік-butterfly3.jpg'), // https://www.freepik.com/premium-photo/cropped-image-man-with-bow_110161045.htm
  ]),
  new VocabularyItem('навальн`іца', [], [], 'Не знайшоў фоткі, і магчымы канфлікт з "бліскавіцай"/"маланкай"'),
  new VocabularyItem('нажн`іцы', [
    require('./../data/нажніцы-scissors1.jpg'), // https://www.freepik.com/free-photo/school-supplies-wooden-surface_4888012.htm
    require('./../data/нажніцы-scissors2.jpg'), // https://www.freepik.com/free-photo/front-closed-up-view-silver-hair-scissors-womans-hand-yellow-background-color-body-hair_9159073.htm
    require('./../data/нажніцы-scissors3.jpg'), // https://www.freepik.com/free-photo/top-view-orange-scissors-dark-background_13465854.htm
  ]),
  new VocabularyItem('нал`епка', [], [], ''),
  new VocabularyItem('нам`ёт', [
    require('./../data/намёт-tent1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/намёт-tent2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/намёт-tent3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('нам`ызьнік', [
    require('./../data/намызьнік-muzzle1.jpg'), // https://www.freepik.com/free-photo/adorable-husky-dog-with-muzzle-outdoors_20828524.htm
    require('./../data/намызьнік-muzzle2.jpg'), // https://www.freepik.com/free-photo/adorable-dalmatian-dog-with-muzzle-outdoors_20828516.htm
    require('./../data/намызьнік-muzzle3.jpg'), // https://www.freepik.com/free-photo/adorable-german-shepherd-with-muzzle-outdoors_20828533.htm
  ], ['пыса']),
  new VocabularyItem('нач`оўка', [], [], 'двухсэнсоўнае?'),
  new VocabularyItem('немаўл`я', [
    require('./../data/немаўля-infant1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/немаўля-infant2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/немаўля-infant3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('н`ітніца', [
    require('./../data/нітніца-gauze1.jpg'), // https://www.freepik.com/premium-photo/concept-first-aid-supplies-bandag-close-up_39223659.htm
    require('./../data/нітніца-gauze2.jpg'), // https://www.freepik.com/free-photo/white-medical-bandage-marble-table_11333110.htm
    require('./../data/нітніца-gauze3.jpg'), // https://www.freepik.com/premium-photo/roll-medical-bandage_11493655.htm
  ]),
  new VocabularyItem('няб`ожчык', [], [], ''),
  new VocabularyItem('падаб`айка', [
    require('./../data/падабайка-like1.jpg'), // https://www.freepik.com/free-photo/blue-bubble-like-button-icon-thumbs-up-like-sign-feedback-concept-white-background-3d-rendering_22405791.htm
    require('./../data/падабайка-like2.jpg'), // https://www.freepik.com/premium-photo/middle-age-caucasian-man_37205347.htm
    require('./../data/падабайка-like3.jpg'), // https://www.freepik.com/free-photo/women-holding-thumbs-up-symbol_2861223.htm
  ]),
  new VocabularyItem('падар`унак', [
    require('./../data/падарунак-gift1.jpg'), // https://www.freepik.com/free-photo/hand-holding-gift_11373156.htm
    require('./../data/падарунак-gift2.jpg'), // https://www.freepik.com/free-photo/happy-woman-opening-gift_17298128.htm
    require('./../data/падарунак-gift3.jpg'), // https://www.freepik.com/free-photo/woman-hands-holding-wrapped-white-box-with-golden-bow-focus-box_13083288.htm
  ]),
  new VocabularyItem('падр`учнік', [
    require('./../data/падручнік-workbook1.jpg'), // у тэчцы
    require('./../data/падручнік-workbook2.jpg'), // https://pixabay.com/photos/book-textbook-college-learning-845280/
    require('./../data/падручнік-workbook3.jpg'), // https://unsplash.com/photos/a-stack-of-books-sitting-on-top-of-a-wooden-table-4o3FFu9jenw
  ], ['стос']),
  new VocabularyItem('пал`іца', [
    require('./../data/паліца-shelf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/паліца-shelf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/паліца-shelf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['вопратка', 'шафа']),
  new VocabularyItem('пальч`аткі', [
    require('./../data/пальчаткі-gloves1.jpg'), // https://www.freepik.com/free-photo/medium-shot-woman-wearing-gloves_12060730.htm
    require('./../data/пальчаткі-gloves2.jpg'), // https://www.freepik.com/free-photo/motorcycle-driver-wears-leather-gloves_11048785.htm
    require('./../data/пальчаткі-gloves3.jpg'), // https://www.freepik.com/premium-photo/gray-exfoliating-gloves-shower-use-black-stone-background_5392331.htm
  ]),
  new VocabularyItem('панч`охі', [
    require('./../data/панчохі-stockings1.jpg'), // https://www.freepik.com/premium-photo/beautiful-female-legs-black-stockings_6315057.htm
    require('./../data/панчохі-stockings2.jpg'), // https://www.freepik.com/premium-photo/low-section-woman-lying-bed-home_123807415.htm
    require('./../data/панчохі-stockings3.jpg'), // https://www.freepik.com/free-photo/knitting-tools-close-up_12245207.htm
  ]),
  new VocabularyItem('пап`ера', [], [], 'канфлікт з аркушом'),
  new VocabularyItem('папр`уга', [], [], 'Канфлікт шмат з чым'),
  new VocabularyItem('парас`он', [
    require('./../data/парасон-umbrella1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/парасон-umbrella2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/парасон-umbrella3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пар`энчы', [
    require('./../data/парэнчы-railings1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/парэнчы-railings2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/парэнчы-railings3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пар`эчкі', [
    require('./../data/парэчкі-currant1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/парэчкі-currant2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/парэчкі-currant3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пастар`унак', [], [], 'acab'),
  new VocabularyItem('пат`ыліца', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('пат`ыліца', [
    require('./../data/патыліца-head-back1.jpg'), // https://www.freepik.com/free-ai-image/world-cancer-day-awareness_137112045.htm
    require('./../data/патыліца-head-back2.jpg'), // https://www.freepik.com/free-photo/medium-shot-man-with-dandruff-issues_23676534.htm
    require('./../data/патыліца-head-back3.jpg'), // https://www.freepik.com/premium-photo/rear-view-woman-against-white-background_120064160.htm
  ]),
  new VocabularyItem('пат`эльня', [
    require('./../data/патэльня-pan1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/патэльня-pan2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/патэльня-pan3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пацал`унак', [
    require('./../data/пацалунак-kiss1.jpg'), // https://www.freepik.com/premium-photo/close-up-man-kissing-his-girlfriend_1557684.htm
    require('./../data/пацалунак-kiss2.jpg'), // https://www.freepik.com/free-photo/beautiful-intimacy-moment-couple_20032338.htm
    require('./../data/пацалунак-kiss3.jpg'), // https://www.freepik.com/free-photo/young-couple-hugging-kissing_12736207.htm
  ]),
  new VocabularyItem('п`ацеркі', [
    require('./../data/пацеркі-beads1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/пацеркі-beads2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/пацеркі-beads3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пац`ук', [
    require('./../data/пацук-rat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/пацук-rat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/пацук-rat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('п`ашпарт', [
    require('./../data/пашпарт-passport1.jpg'), // ШІ
    require('./../data/пашпарт-passport2.jpg'), // ШІ
    require('./../data/пашпарт-passport3.jpg'), // ШІ
  ]),
  new VocabularyItem('пашт`оўка', [
    require('./../data/паштоўка-postcard1.jpg'), // https://pixabay.com/photos/postcard-old-old-fashioned-write-1897985/
    require('./../data/паштоўка-postcard2.jpg'), // https://pixabay.com/photos/postcards-souvenir-souvenir-products-7865295/
    require('./../data/паштоўка-postcard3.jpg'), // у тэчцы
  ]),
  new VocabularyItem('п`евень', [
    require('./../data/певень-rooster1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/певень-rooster2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/певень-rooster3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('п`ернік', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('піг`улка', [
    require('./../data/пігулка-pill1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/пігулка-pill2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/пігулка-pill3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пл`от', [
    require('./../data/плот-fence1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/плот-fence2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/плот-fence3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пл`яма', [
    require('./../data/пляма-stain1.jpg'), // https://www.freepik.com/premium-photo/white-shirt-with-blue-ink-stain_134905207.htm
    require('./../data/пляма-stain2.jpg'), // https://www.freepik.com/free-photo/watercolour-liquid-black-splashes-white-background_5576041.htm
    require('./../data/пляма-stain3.jpg'), // https://www.freepik.com/premium-photo/young-redhead-woman-holding-dirty-t-shirt-laundry-room_61118485.htm
  ], ['бруд']),
  new VocabularyItem('пл`яшка', [
    require('./../data/пляшка-canteen1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/пляшка-canteen2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/пляшка-canteen3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('п`олымя', [
    require('./../data/полымя-fire1.jpg'), // https://www.freepik.com/free-photo/fire-flames-black-background-abstract-blaze-fire-flame-texture-background_233174356.htm
    require('./../data/полымя-fire2.jpg'), // https://pixabay.com/photos/firefighters-fire-firefighting-115800/
    require('./../data/полымя-fire3.jpg'), // https://unsplash.com/photos/person-standing-in-front-of-fire-wCKzi8nDkw8
  ], ['вогнішча', 'грубка']),
  new VocabularyItem('п`опел', [
    require('./../data/попел-ash1.jpg'), // https://www.freepik.com/free-photo/burning-coals-covered-with-ash_5217541.htm
    require('./../data/попел-ash2.jpg'), // https://pixabay.com/photos/fire-flames-wood-charred-ash-burn-4365567/
    require('./../data/попел-ash3.jpg'), // https://pixabay.com/photos/campfire-ash-wood-ash-grilling-3344827/
  ], ['вогнішча']),
  new VocabularyItem('п`оплаў', [], [], ''),
  new VocabularyItem('п`орткі', [], [], 'Не знайшоў фоткі, і што наконт "нагавіцаў"?'),
  new VocabularyItem('п`оўдзень', [], [], ''),
  new VocabularyItem('п`оўнач', [], [], ''),
  new VocabularyItem('п`оўня', [
    require('./../data/поўня-fullmoon1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/поўня-fullmoon2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/поўня-fullmoon3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('п`оўсьць', [
    require('./../data/поўсьць-wool1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/поўсьць-wool2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/поўсьць-wool3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['футра']),
  new VocabularyItem('прам`ень', [
    require('./../data/прамень-ray1.jpg'), // https://www.freepik.com/premium-photo/color-floodlight-illuminate-glow-dark-equipment-show-programs_18419416.htm
    require('./../data/прамень-ray2.jpg'), // https://pixabay.com/photos/night-photograph-flashlight-ray-2183637/
    require('./../data/прамень-ray3.jpg'), // https://pixabay.com/photos/sunbeams-autumn-fog-autumn-forest-2761911/
  ]),
  new VocabularyItem('пр`ас', [
    require('./../data/прас-iron1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/прас-iron2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/прас-iron3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('прын`ада', [
    require('./../data/прынада-bait1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/прынада-bait2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/прынада-bait3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пуст`эльня', [
    require('./../data/пустэльня-desert1.jpg'), // https://www.freepik.com/free-photo/beautiful-view-tranquil-desert-clear-sky-captured-morocco_9283219.htm
    require('./../data/пустэльня-desert2.jpg'), // https://www.freepik.com/free-photo/beautiful-scenery-mesquite-flat-sand-dunes-death-valley-california_10606375.htm
    require('./../data/пустэльня-desert3.jpg'), // https://www.freepik.com/premium-photo/scenic-view-desert-against-sky_120891189.htm
  ]),
  new VocabularyItem('пух`ір', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('п`ыса', [
    require('./../data/пыса-snout1.jpg'), // https://www.freepik.com/premium-photo/close-up-animal-sleeping_114220058.htm
    require('./../data/пыса-snout2.jpg'), // https://www.freepik.com/premium-photo/close-up-dog_105450378.htm
    require('./../data/пыса-snout3.jpg'), // https://unsplash.com/photos/brown-and-white-cat-eye-fBAYzxQz9Io
  ], ['дзік']),
  new VocabularyItem('п`эндзаль', [
    require('./../data/пэндзаль-brush1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/пэндзаль-brush2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/пэндзаль-brush3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пял`ёсткі', [
    require('./../data/пялёсткі-petals1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/пялёсткі-petals2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/пялёсткі-petals3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пярл`іна', [], [], 'Не знайшоў фотак асобных каб не канйліктавалі з "карáлямі"'),
  new VocabularyItem('пярсьц`ёнак', [
    require('./../data/пярсьцёнак-ring1.jpg'), // https://pixabay.com/photos/jewel-diamond-ring-fashion-jewelry-7389356/
    require('./../data/пярсьцёнак-ring2.jpg'), // https://pixabay.com/photos/ring-jewellery-sliver-ring-woman-1175529/
    require('./../data/пярсьцёнак-ring3.jpg'), // https://pixabay.com/photos/ring-jewel-womens-clothing-653435/
  ]),
  new VocabularyItem('рабац`іньне', [
    require('./../data/рабаціньне-freckles1.jpg'), // https://pixabay.com/photos/redheads-model-hair-girl-fashion-4606475/
    require('./../data/рабаціньне-freckles2.jpg'), // https://pixabay.com/photos/face-eye-girl-freckles-portrait-863663/
    require('./../data/рабаціньне-freckles3.jpg'), // https://pixabay.com/photos/young-freckles-blue-eyes-person-971538/
  ], ['вока', 'раёк']),
  new VocabularyItem('раг`оз', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('ра`ёк', [
    require('./../data/раёк-iris1.jpg'), // https://pixabay.com/photos/eye-vision-daughter-iris-woman-3899904/
    require('./../data/раёк-iris2.jpg'), // https://pixabay.com/photos/eye-green-portrait-iris-tabs-1236389/
    require('./../data/раёк-iris3.jpg'), // https://pixabay.com/photos/eye-face-human-green-blue-2154384/
  ], ['вока', 'зрэнка']),
  new VocabularyItem('раз`ынкі', [
    require('./../data/разынкі-raisins1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/разынкі-raisins2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/разынкі-raisins3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('р`овар', [
    require('./../data/ровар-bicycle1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ровар-bicycle2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ровар-bicycle3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('р`ондаль', [
    require('./../data/рондаль-pot1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/рондаль-pot2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/рондаль-pot3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('рыдл`ёўка', [
    require('./../data/рыдлёўка-spade1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/рыдлёўка-spade2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/рыдлёўка-spade3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('рызьз`ё', [], [], 'todo'),
  new VocabularyItem('рыс`унак', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('р`эйкі', [
    require('./../data/рэйкі-rails1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/рэйкі-rails2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/рэйкі-rails3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('с`ажалка', [
    require('./../data/сажалка-pond1.jpg'), // https://www.freepik.com/free-photo/beautiful-view-still-water-pond-surrounded-by-trees-plants_10399736.htm
    require('./../data/сажалка-pond2.jpg'), // https://www.freepik.com/free-photo/lake-with-reflection-clouds-park-surrounded-by-lot-green-trees_11062600.htm
    require('./../data/сажалка-pond3.jpg'), // https://www.freepik.com/free-photo/beautiful-shot-cute-mallard-swimming-river_11697194.htm
  ], ['качка']),
  new VocabularyItem('с`енцы', [], [], ''),
  new VocabularyItem('ск`алкі', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('ск`арб', [
    require('./../data/скарб-treasure1.jpg'), // https://pixabay.com/photos/chest-treasure-pirate-money-box-4051166/
    require('./../data/скарб-treasure2.jpg'), // https://pixabay.com/photos/sea-water-treasure-skull-ocean-5165146/
    require('./../data/скарб-treasure3.jpg'), // https://pixabay.com/photos/appetite-bank-box-buried-business-1238323/
  ], ['куфар', 'бульба']),
  new VocabularyItem('скарб`онка', [
    require('./../data/скарбонка-piggybank1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/скарбонка-piggybank2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/скарбонка-piggybank3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ск`івіца', [
    require('./../data/сківіца-jaw1.jpg'), // https://www.freepik.com/premium-photo/viscerocranium-is-collection-bones-that-make-up-face-skeleton_146481799.htm
    require('./../data/сківіца-jaw2.jpg'), // https://pixabay.com/photos/teeth-jaw-3d-model-orthodontics-2833414/
    require('./../data/сківіца-jaw3.jpg'), // https://pixabay.com/photos/skeleton-animal-big-bite-danger-20746/
  ]),
  new VocabularyItem('скр`онь', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('скр`ыня', [
    require('./../data/скрыня-box1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/скрыня-box2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/скрыня-box3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('слан`ечнік', [
    require('./../data/сланечнік-sunflower1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/сланечнік-sunflower2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/сланечнік-sunflower3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('слім`ак', [
    require('./../data/слімак-snail1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/слімак-snail2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/слімак-snail3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сл`оік', [
    require('./../data/слоік-jar1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/слоік-jar2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/слоік-jar3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сл`оўнік', [
    require('./../data/слоўнік-dictionary1.jpg'), // https://pixabay.com/photos/dictionary-book-learn-learning-613910/
    require('./../data/слоўнік-dictionary2.jpg'), // https://pixabay.com/photos/a-book-dictionary-swedish-german-3101450/
    require('./../data/слоўнік-dictionary3.jpg'), // сфотаць Байкова-Некрашэвіча
  ]),
  new VocabularyItem('смар`агд', [
    require('./../data/смарагд-emerald1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/смарагд-emerald2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/смарагд-emerald3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('спадар`ожнік', [
    require('./../data/спадарожнік-satellite1.jpg'), // https://unsplash.com/photos/a-satellite-satellite-flying-over-the-earth-HsqBGASgXJA
    require('./../data/спадарожнік-satellite2.jpg'), // https://pixabay.com/photos/technology-aeronautics-space-travel-2609356/
    require('./../data/спадарожнік-satellite3.jpg'), // https://pixabay.com/photos/space-satellite-dark-black-science-2578154/
  ]),
  new VocabularyItem('спадн`іца', [
    require('./../data/спадніца-skirt1.jpg'), // https://pixabay.com/photos/skirt-fashion-woman-clothes-5052288/
    require('./../data/спадніца-skirt2.jpg'), // https://unsplash.com/photos/woman-in-black-and-white-dress-pUY4bhUYnK4
    require('./../data/спадніца-skirt3.jpg'), // https://unsplash.com/photos/woman-standing-on-focus-photography-TRdBgw-ulNA
  ]),
  new VocabularyItem('сп`одак', [
    require('./../data/сподак-saucer1.jpg'), // Unsplash https://unsplash.com/license
    require('./../data/сподак-saucer2.jpg'), // Unsplash https://unsplash.com/license
    require('./../data/сподак-saucer3.jpg'), // Unsplash https://unsplash.com/license
  ]),
  new VocabularyItem('ст`анік', [
    require('./../data/станік-bra1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/станік-bra2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/станік-bra3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ст`атак', [
    require('./../data/статак-herd1.jpg'), // https://www.freepik.com/premium-photo/horses-standing-lake_102505591.htm
    require('./../data/статак-herd2.jpg'), // https://pixabay.com/photos/sheep-flock-of-sheep-7286385/
    require('./../data/статак-herd3.jpg'), // https://pixabay.com/photos/herd-drink-cow-pasture-lawn-1648141/
  ]),
  new VocabularyItem('ст`ос', [
    require('./../data/стос-stack1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/стос-stack2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/стос-stack3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('стр`аўнік', [
    require('./../data/страўнік-stomach1.jpg'), // ШІ
    require('./../data/страўнік-stomach2.jpg'), // ШІ
    require('./../data/страўнік-stomach3.jpg'), // ШІ
  ]),
  new VocabularyItem('страх`а', [
    require('./../data/страха-straw-roof1.jpg'), // https://unsplash.com/photos/a-house-with-a-thatched-roof-and-windows-jeha7b1xJjU
    require('./../data/страха-straw-roof2.jpg'), // https://unsplash.com/photos/a-building-with-a-thatched-roof-and-a-window-glq1e2sclZc
    require('./../data/страха-straw-roof3.jpg'), // https://www.freepik.com/premium-photo/trees-landscape_101382945.htm
  ], ['дах']),
  new VocabularyItem('стр`ой', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('стр`ома', [
    require('./../data/строма-cliff1.jpg'), // https://www.freepik.com/free-photo/beautiful-shot-high-rock-sea_7590429.htm
    require('./../data/строма-cliff2.jpg'), // https://pixabay.com/photos/amalfi-amalfi-coast-cliff-rock-2241861/
    require('./../data/строма-cliff3.jpg'), // https://unsplash.com/photos/brown-rock-formation-near-body-of-water-during-daytime-FUw82vSFs5Q
  ]),
  new VocabularyItem('стр`эмка', [], [], ''),
  new VocabularyItem('ст`удня', [], [], 'калодзеж?'),
  new VocabularyItem('ст`ужка', [
    require('./../data/стужка-ribbon1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/стужка-ribbon2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/стужка-ribbon3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('стырн`о', [
    require('./../data/стырно-steering-wheel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/стырно-steering-wheel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/стырно-steering-wheel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('суз`ор\'е', [
    require('./../data/сузор\'е-constellation1.jpg'), // https://pixabay.com/photos/stars-constellation-universe-bull-2630050/
    require('./../data/сузор\'е-constellation2.jpg'), // https://pixabay.com/photos/milky-way-orion-nebula-7062243/
    require('./../data/сузор\'е-constellation3.jpg'), // https://www.freepik.com/free-vector/astrological-star-signs-set_16396851.htm
  ], ['зорка']),
  new VocabularyItem('сук`енка', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('сум`ёт', [
    require('./../data/сумёт-snowdrift1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/сумёт-snowdrift2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/сумёт-snowdrift3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['комін']),
  new VocabularyItem('сун`іцы', [
    require('./../data/суніцы-wild-strawberries1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/суніцы-wild-strawberries2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/суніцы-wild-strawberries3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сут`ока', [], [], ''),
  new VocabularyItem('сх`оды', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('сш`ытак', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('сьв`едка', [], [], ''),
  new VocabularyItem('сьв`ердзел', [
    require('./../data/сьвердзел-drill1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/сьвердзел-drill2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/сьвердзел-drill3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сьм`ецьце', [
    require('./../data/сьмецьце-garbage1.jpg'), // https://pixabay.com/photos/garbage-can-garbage-recycle-trash-65661/
    require('./../data/сьмецьце-garbage2.jpg'), // https://pixabay.com/photos/garbage-trash-recycling-bin-3305433/
    require('./../data/сьмецьце-garbage3.jpg'), // https://unsplash.com/photos/person-standing-beside-garbage-bin-c-R885Oc7k0
  ]),
  new VocabularyItem('сьціз`орык', [
    require('./../data/сьцізорык-pen-knife1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/сьцізорык-pen-knife2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/сьцізорык-pen-knife3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['лязо']),
  new VocabularyItem('сьцягн`о', [
    require('./../data/сьцягно-thigh1.jpg'), // https://www.freepik.com/free-photo/happy-woman-basic-underwear-measuring-herself-isolated_13363857.htm
    require('./../data/сьцягно-thigh2.jpg'), // https://pixabay.com/photos/chicken-recipe-flat-grill-barbecue-3447081/
    require('./../data/сьцягно-thigh3.jpg'), // https://pixabay.com/photos/legs-man-quadriceps-thighs-cyclist-1574404/
  ]),
  new VocabularyItem('с`эрца', [
    require('./../data/сэрца-heart1.jpg'), // https://www.freepik.com/free-vector/hand-drawn-heart-drawing-illustration_181234895.htm
    require('./../data/сэрца-heart2.jpg'), // https://unsplash.com/photos/heart-shaped-red-and-beige-pendant-jcc8sxK2Adw
    require('./../data/сэрца-heart3.jpg'), // https://unsplash.com/photos/red-and-yellow-bird-figurine-MEbT27ZrtdE
  ]),
  new VocabularyItem('с`ябар', [], [], ''),
  new VocabularyItem('сяк`ера', [
    require('./../data/сякера-axe1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/сякера-axe2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/сякера-axe3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('тал`ерка', [
    require('./../data/талерка-plate1.jpg'), // https://www.freepik.com/premium-photo/empty-plate-top-view_8230166.htm
    require('./../data/талерка-plate2.jpg'), // https://pixabay.com/photos/stack-of-plates-terller-stack-629987/
    require('./../data/талерка-plate3.jpg'), // https://unsplash.com/photos/six-assorted-color-plate-on-white-surface-rWsH0jnYSoM
  ], ['сподак']),
  new VocabularyItem('т`арка', [
    require('./../data/тарка-grater1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/тарка-grater2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/тарка-grater3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('трун`а', [
    require('./../data/труна-coffin1.jpg'), // https://www.freepik.com/premium-photo/people-mourning-concept-woman-with-white-lily-flowers-coffin-funeral-church_134220270.htm
    require('./../data/труна-coffin2.jpg'), // https://www.freepik.com/premium-photo/coffins-are-presented-shop-undertaker_27382255.htm
    require('./../data/труна-coffin3.jpg'), // https://pixabay.com/photos/coffins-burial-oaxaca-mexico-5109094/
  ]),
  new VocabularyItem('тр`ус', [
    require('./../data/трус-rabbit1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/трус-rabbit2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/трус-rabbit3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('тр`ускаўка', [
    require('./../data/трускаўка-strawberry1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/трускаўка-strawberry2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/трускаўка-strawberry3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('трысьн`ёг', [], [], 'Канфлікт з "чаротам"?'),
  new VocabularyItem('усх`од', [], [], ''),
  new VocabularyItem('фа`ерка', [
    require('./../data/фаерка-stove-burner1.jpg'), // https://www.freepik.com/premium-photo/natural-gas-burning-kitchen-gas-stove-dark_7280474.htm
    require('./../data/фаерка-stove-burner2.jpg'), // https://www.freepik.com/premium-photo/high-angle-view-burning-gas-stove_104644647.htm
    require('./../data/фаерка-stove-burner3.jpg'), // https://www.freepik.com/free-photo/polished-gas-cooker-after-washingperfectly-clean-gas-cooker-after-being-washed-with-polishing-chemicals-result-washing-burners_25232665.htm
  ]),
  new VocabularyItem('фат`эль', [
    require('./../data/фатэль-armchair1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/фатэль-armchair2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/фатэль-armchair3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('фір`анкі', [
    require('./../data/фіранкі-curtains1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/фіранкі-curtains2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/фіранкі-curtains3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('футар`ал', [
    require('./../data/футарал-case1.jpg'), // https://www.freepik.com/premium-photo/high-angle-view-empty-paper-white-background_99966104.htm
    require('./../data/футарал-case2.jpg'), // https://www.freepik.com/premium-photo/close-up-guitar-case-footpath_101987565.htm
    require('./../data/футарал-case3.jpg'), // https://www.freepik.com/premium-photo/guitar-bag-isolated_361329211.htm
  ]),
  new VocabularyItem('ф`утра', [
    require('./../data/футра-furs1.jpg'), // https://www.freepik.com/free-photo/woman-model-demonstrating-winter-cloths_5852101.htm
    require('./../data/футра-furs2.jpg'), // https://www.freepik.com/free-photo/portrair-fashionable-woman-walking-city-warm-fur-coat-winter-season-cold-weather-wearing-black-cap-street-fashion-trend_10687582.htm
    require('./../data/футра-furs3.jpg'), // https://www.freepik.com/premium-photo/portrait-beautiful-woman-wearing-fur-coat_108806750.htm
  ], ['поўсьць', 'пальчаткі']),
  new VocabularyItem('хал`ява', [
    require('./../data/халява-boot-top1.jpg'), // https://www.freepik.com/free-photo/vertical-shot-woman-wearing-fashionable-brown-leather-kneehigh-boots-outdoors_27573082.htm
    require('./../data/халява-boot-top2.jpg'), // https://www.freepik.com/free-photo/good-looking-sexy-blond-model-white-blouse-leather-skrt-knitted-block-thigh-high-boots-beige_10310209.htm
    require('./../data/халява-boot-top3.jpg'), // https://pixabay.com/photos/rubber-boots-rain-shoes-human-2626461/
  ], ['боты']),
  new VocabularyItem('хв`аля', [
    require('./../data/хваля-wave1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/хваля-wave2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/хваля-wave3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('хмарач`ос', [
    require('./../data/хмарачос-skyscraper1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/хмарачос-skyscraper2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/хмарачос-skyscraper3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('хр`ушч', [
    require('./../data/хрушч-cockchafer1.jpg'), // https://www.freepik.com/premium-photo/cockchafer-summer-chafer-macro_4702368.htm
    require('./../data/хрушч-cockchafer2.jpg'), // https://www.freepik.com/premium-photo/cockchafer-summer-chafer-macro_4702366.htm
    require('./../data/хрушч-cockchafer3.jpg'), // https://www.freepik.com/premium-photo/may-beetle-sitting-twig_157255109.htm
  ]),
  new VocabularyItem('х`устка', [
    require('./../data/хустка-shawl1.jpg'), // https://www.freepik.com/premium-ai-image/green-silk-shawl-isolated-white-background-female-accessory_238663991.htm
    require('./../data/хустка-shawl2.jpg'), // https://www.freepik.com/free-photo/flamenca-dancer-with-manila-shawl-looking-camera_5228326.htm
    require('./../data/хустка-shawl3.jpg'), // https://www.freepik.com/free-photo/businesswoman-black-dress-with-evening-makeup-colorful-lips-red-shawl_7091897.htm
  ]),
  new VocabularyItem('царкв`а', [], [], 'не знайшоў фоткі'),
  new VocabularyItem('цм`ок', [
    require('./../data/цмок-dragon1.jpg'), // https://pixabay.com/photos/dragon-steampunk-fantasy-history-5450084/
    require('./../data/цмок-dragon2.jpg'), // https://pixabay.com/photos/sculpture-dragon-golden-thailand-177021/
    require('./../data/цмок-dragon3.jpg'), // ШІ
  ]),
  new VocabularyItem('ц`укар', [], [], 'не знайшоў фоткі'),
  new VocabularyItem('цук`ерка', [
    require('./../data/цукерка-candy1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цукерка-candy2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цукерка-candy3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цыб`уля', [
    require('./../data/цыбуля-onion1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цыбуля-onion2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цыбуля-onion3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цыр`ата', [
    require('./../data/цырата-plastic-tablecloth1.jpg'), // https://unsplash.com/photos/red-and-white-checkered-table-cloth-bEE5s1M2XIY
    require('./../data/цырата-plastic-tablecloth2.jpg'), // https://unsplash.com/photos/brown-wooden-chairs-and-table-c9tYWbe_PH4
    require('./../data/цырата-plastic-tablecloth3.jpg'), // https://unsplash.com/photos/white-kitchen-towel-on-table-pdyNBY0WJHA
  ], ['абрус']),
  new VocabularyItem('цьв`ік', [
    require('./../data/цьвік-nail1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цьвік-nail2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цьвік-nail3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цьв`іль', [
    require('./../data/цьвіль-mold1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цьвіль-mold2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цьвіль-mold3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ц`эгла', [
    require('./../data/цэгла-brick1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цэгла-brick2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цэгла-brick3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ц`этлік', [
    require('./../data/цэтлік-tag1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цэтлік-tag2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цэтлік-tag3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цягн`ік', [
    require('./../data/цягнік-train1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цягнік-train2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цягнік-train3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цял`я', [
    require('./../data/цяля-calf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цяля-calf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/цяля-calf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цясьн`іна', [
    require('./../data/цясьніна-gorge1.jpg'), // https://www.freepik.com/premium-photo/narrow-gorge-canyon-with-sky_82555633.htm
    require('./../data/цясьніна-gorge2.jpg'), // https://www.freepik.com/premium-photo/scenic-view-black-canyon-gunisson-national-park-montrose-colorado-usa_172751897.htm
    require('./../data/цясьніна-gorge3.jpg'), // https://pixabay.com/photos/mountain-river-ravine-nature-7011475/
  ]),
  new VocabularyItem('чарав`ікі', [
    require('./../data/чаравікі-shoes1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/чаравікі-shoes2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/чаравікі-shoes3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('чарадзей:ка', [
    require('./../data/чарадзей-wizard1.jpg'), // ШІ
    require('./../data/чарадзей-wizard2.jpg'), // ШІ
    require('./../data/чарадзей-wizard3.jpg'), // ШІ
  ]),
  new VocabularyItem('чарг`а', [
    require('./../data/чарга-queue1.jpg'), // https://www.freepik.com/premium-photo/people-queue-line-selective-focus_112401206.htm
    require('./../data/чарга-queue2.jpg'), // https://unsplash.com/photos/people-standing-on-gray-concrete-floor-during-daytime-ZAbIO5eas9Q
    require('./../data/чарга-queue3.jpg'), // https://unsplash.com/photos/people-walking-on-a-shopping-mall-JWEwaHqSAHU
  ]),
  new VocabularyItem('чар`от', [], [], 'Канфлікт з "трысьнягом"?'),
  new VocabularyItem('ч`овен', [
    require('./../data/човен-boat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/човен-boat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/човен-boat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ш`алі', [
    require('./../data/шалі-scales-b1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шалі-scales-b2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шалі-scales-b3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ш`алік', [
    require('./../data/шалік-scarf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шалік-scarf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шалік-scarf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['хустка']),
  new VocabularyItem('шалуп`іньне', [
    require('./../data/шалупіньне-peels1.jpg'), // https://pixabay.com/photos/kitchen-vegetable-knife-food-4869867/
    require('./../data/шалупіньне-peels2.jpg'), // https://pixabay.com/photos/lemon-lemon-peel-peeled-citrus-1313643/
    require('./../data/шалупіньне-peels3.jpg'), // https://pixabay.com/photos/banana-peel-banana-meal-fruit-1735083/
  ], ['бульба']),
  new VocabularyItem('ш`афа', [
    require('./../data/шафа-wardrobe1.jpg'), // https://www.freepik.com/free-photo/wardrobe-renovation-concept_20825379.htm
    require('./../data/шафа-wardrobe2.jpg'), // https://www.freepik.com/premium-photo/wooden-shelf-with-white-shirt-hanging-it-pair-white-towels-hanging-wooden-shelf_272484631.htm
    require('./../data/шафа-wardrobe3.jpg'), // https://unsplash.com/photos/a-white-closet-with-a-shoe-rack-and-a-handbag-O3ZeDMslEJw
  ], ['паліца', 'вопратка']),
  new VocabularyItem('шаш`ок', [], [], 'Чым дакладна адрозьніваецца ад "тхара"?'),
  new VocabularyItem('шв`о', [
    require('./../data/шво-seam1.jpg'), // https://www.freepik.com/free-photo/fabric-texture-with-seam_1163960.htm
    require('./../data/шво-seam2.jpg'), // https://www.freepik.com/premium-photo/blue-fabric-inner-seam-with-white-threads-background-structure-close-up-macro-view_18159813.htm
    require('./../data/шво-seam3.jpg'), // https://pixabay.com/photos/seam-thread-yarn-twisted-sew-3065051/
  ]),
  new VocabularyItem('шв`орка', [
    require('./../data/шворка-leash1.jpg'), // https://www.freepik.com/premium-photo/scene-dog-photoshoot_137673539.htm
    require('./../data/шворка-leash2.jpg'), // https://www.freepik.com/premium-photo/portrait-dog-looking-away-footpath_102348100.htm
    require('./../data/шворка-leash3.jpg'), // https://www.freepik.com/free-photo/close-up-dog-leash_82342213.htm
  ]),
  new VocabularyItem('шкарп`эткі', [
    require('./../data/шкарпэткі-socks1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шкарпэткі-socks2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шкарпэткі-socks3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шкл`о', [], [], ''),
  new VocabularyItem('шпал`еры', [
    require('./../data/шпалеры-wallpapers1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шпалеры-wallpapers2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шпалеры-wallpapers3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шр`уба', [
    require('./../data/шруба-screw1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шруба-screw2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шруба-screw3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ш`уфлік', [
    require('./../data/шуфлік-shovel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шуфлік-shovel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шуфлік-shovel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шуфл`ядка', [
    require('./../data/шуфлядка-drawer1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шуфлядка-drawer2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шуфлядка-drawer3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шчамл`ётка', [
    require('./../data/шчамлётка-clothespin1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шчамлётка-clothespin2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шчамлётка-clothespin3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ш`ыба', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('ш`ыбеніца', [
    require('./../data/шыбеніца-gallows1.jpg'), // https://www.freepik.com/premium-photo/close-up-metallic-structure-against-white-background_126340231.htm
    require('./../data/шыбеніца-gallows2.jpg'), // https://pixabay.com/photos/gallows-blue-sky-wooden-frame-rope-858572/
    require('./../data/шыбеніца-gallows3.jpg'), // https://unsplash.com/photos/a-rope-tied-to-a-wooden-post-in-front-of-a-building-DX-mB1caQz4
  ]),
  new VocabularyItem('шыд`элак', [
    require('./../data/шыдэлак-crochet-hook1.jpg'), // https://www.freepik.com/premium-photo/high-angle-view-crochet-hook-white-background_130832034.htm
    require('./../data/шыдэлак-crochet-hook2.jpg'), // https://www.freepik.com/free-photo/close-up-female-knitting_9755048.htm
    require('./../data/шыдэлак-crochet-hook3.jpg'), // https://www.freepik.com/premium-photo/two-knitting-multicolored-crochet-hooks-blue-background_16954661.htm
  ]),
  new VocabularyItem('шыпш`ына', [
    require('./../data/шыпшына-dog-rose1.jpg'), // https://www.freepik.com/free-photo/front-view-red-berries-inside-plate-green-background-berry-wild-fruit-health-color_15295664.htm
    require('./../data/шыпшына-dog-rose2.jpg'), // https://www.freepik.com/free-photo/rosehip-bushes-healthy-fresh-red-autumn-fruits-from-nature_23458399.htm
    require('./../data/шыпшына-dog-rose3.jpg'), // https://www.freepik.com/premium-photo/rosehip-isolated-white-background_8422165.htm
  ]),
  new VocabularyItem('ш`эрань', [
    require('./../data/шэрань-rime1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шэрань-rime2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/шэрань-rime3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('электрав`ік', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('ядв`аб', [], [], 'Не знайшоў як перадаць'),
  new VocabularyItem('`яйка', [
    require('./../data/яйка-egg1.jpg'), // https://www.freepik.com/free-photo/front-view-white-chicken-eggs-bowl-with-copy-space_10989514.htm
    require('./../data/яйка-egg2.jpg'), // https://www.freepik.com/free-photo/close-up-eggs-grey-cloth_5598147.htm
    require('./../data/яйка-egg3.jpg'), // https://www.freepik.com/free-photo/eggs_3567280.htm
  ]),
  new VocabularyItem('ялав`ец', [], [], 'Не знайшоў як перадаць'),
  new VocabularyItem('ял`іна', [], [], 'Не знайшоў фоткі'),
]

export default vocabulary.filter(x => x.isEnabled);

export const fullVocabulary = vocabulary;
