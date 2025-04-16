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
    require('./../data/bridle1.jpg'), // https://pixabay.com/photos/clydesdale-halter-tack-bridle-2463892/
    require('./../data/bridle2.jpg'), // https://pixabay.com/photos/animal-bridle-equestrianism-1280572/
    require('./../data/bridle3.jpg'), // https://pixabay.com/photos/horse-nose-nostril-pony-denture-3389361/
  ], ['пыса']),
  new VocabularyItem('абр`ус', [
    require('./../data/tablecloth1.jpg'), // https://unsplash.com/photos/a-table-topped-with-a-white-plate-and-a-red-napkin-tZSGRrxn2uU
    require('./../data/tablecloth2.jpg'), // https://unsplash.com/photos/white-teapot-and-cups-on-white-table-inside-room-5IbARp5FFI4
    require('./../data/tablecloth3.jpg'), // https://unsplash.com/photos/dish-and-fruits-on-dining-table-ZIo3XDnA1e4
  ], ['талерка']),
  new VocabularyItem('абц`ас', [
    require('./../data/heel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/heel2.jpg'), // https://unsplash.com/photos/person-wearing-pair-of-brown-leather-dress-shoes-q4ExhrHaSLY
    require('./../data/heel3.jpg'), // https://unsplash.com/photos/woman-wearing-black-peep-toe-heeled-shoes-1gDjwOzjEcU
  ], ['боты']),
  new VocabularyItem('абцуг`і', [
    require('./../data/pliers1.jpg'), // https://unsplash.com/photos/three-black-handled-pliers-on-brown-surface-VdOO4_HFTWM
    require('./../data/pliers2.jpg'), // https://unsplash.com/photos/grey-and-red-metal-hand-tool-dwlxTSpfKXg
    require('./../data/pliers3.jpg'), // https://unsplash.com/photos/red-and-silver-scissors-on-brown-wooden-table-GamuDTVm02g
  ]),
  new VocabularyItem('агр`эст', [
    require('./../data/gooseberry1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/gooseberry2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/gooseberry3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('агур`ок', [
    require('./../data/cucumber1.jpg'), // https://www.freepik.com/free-photo/cucumber-isolated_21061430.htm
    require('./../data/cucumber2.jpg'), // https://www.freepik.com/free-photo/vertical-photo-fresh-organic-cucumber-black-backround_15736881.htm
    require('./../data/cucumber3.jpg'), // https://unsplash.com/photos/cucumber-lot-2GiRcLP_jkI
  ]),
  new VocabularyItem('адр`ына', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('аж`ыны', [
    require('./../data/blackberry1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/blackberry2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/blackberry3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('акул`яры', [
    require('./../data/glasses1.jpg'), // https://www.freepik.com/free-photo/glasses-office-desktop_4608903.htm
    require('./../data/glasses2.jpg'), // https://www.freepik.com/free-photo/glasses-with-slightly-rounded-frame_58425698.htm
    require('./../data/glasses3.jpg'), // https://unsplash.com/photos/person-holding-brown-eyeglasses-with-green-trees-background-kqguzgvYrtM
  ]),
  new VocabularyItem('ал`ей', [
    require('./../data/vegetable-oil1.jpg'), // https://www.freepik.com/free-photo/plate-with-healthy-salad_34135152.htm
    require('./../data/vegetable-oil2.jpg'), // https://unsplash.com/photos/clear-glass-cruet-bottle-uOBApnN_K7w
    require('./../data/vegetable-oil3.jpg'), // https://unsplash.com/photos/person-holding-green-glass-bottle-pouring-white-rice-on-stainless-steel-bowl-4_sLDSttDCc
  ]),
  new VocabularyItem('ал`овак', [
    require('./../data/pencil1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pencil2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pencil3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('альт`анка', [
    require('./../data/gazebo1.jpg'), // https://pixabay.com/photos/snow-gazebo-winter-cold-white-616319/
    require('./../data/gazebo2.jpg'), // https://pixabay.com/photos/gazebo-spring-flowering-trees-pink-3404746/
    require('./../data/gazebo3.jpg'), // https://pixabay.com/photos/landscape-gazebo-park-green-pond-5000094/
  ]),
  new VocabularyItem('ан`ёл', [
    require('./../data/angel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/angel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/angel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('апал`онік', [
    require('./../data/tadpole1.jpg'), // https://pixabay.com/photos/tadpole-hand-detail-pond-take-1694372/
    require('./../data/ladle2.jpg'), // https://www.freepik.com/free-photo/chef-enjoying-aroma-soup-ladle_2690399.htm
    require('./../data/ladle3.jpg'), // https://unsplash.com/photos/hanging-spatulas-m3jtY6EobzM
  ]),
  new VocabularyItem('`аркуш', [
    require('./../data/sheet-of-paper1.jpg'), // https://unsplash.com/photos/white-printer-paper-4JxV3Gs42Ks
    require('./../data/sheet-of-paper2.jpg'), // https://unsplash.com/photos/white-paper-on-black-textile-BpuZCbAOhnw
    require('./../data/sheet-of-paper3.jpg'), // https://unsplash.com/photos/white-printer-paper-LZMDLa8rFYg
  ], ['асадка']),
  new VocabularyItem('ар`элі', [
    require('./../data/swing1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/swing2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/swing3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ас`адка', [
    require('./../data/pen1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pen2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pen3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['аркуш']),
  new VocabularyItem('аск`епак', [
    require('./../data/shard1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/shard2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/shard3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('баг`оўка', [
    require('./../data/ladybug1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ladybug2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ladybug3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бзьдз`юль', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('біз`ун', [
    require('./../data/whip1.jpg'), // https://pixabay.com/photos/act-performance-hungary-horse-whip-6837149/
    require('./../data/whip2.jpg'), // https://pixabay.com/photos/horse-drawn-carriage-transportation-952688/
    require('./../data/whip3.jpg'), // https://www.freepik.com/free-photo/cowboy-background-concept_25969974.htm
  ], ['кола']),
  new VocabularyItem('бір`улька', [
    require('./../data/keychain1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/keychain2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/keychain3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бл`азан', [
    require('./../data/jester1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/jester2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/jester3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бліскав`іца', [], [], 'Як адрозьніць ад "маланкі"?'),
  new VocabularyItem('б`оты', [
    require('./../data/boots1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/boots2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/boots3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('б`охан', [
    require('./../data/loaf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/loaf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/loaf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бразг`отка', [
    require('./../data/rattle1.jpg'), // https://www.freepik.com/premium-photo/wooden-toys-rattles-teethers-nipple-holder-baby-development-fine-motor-skills-children-newborn-products-accessories-kids-clothes-wish-list-pregnancy-baby-shower_20726371.htm
    require('./../data/rattle2.jpg'), // https://www.freepik.com/premium-photo/colorful-baby-rattle-white-horizontal-background_20249855.htm
    require('./../data/rattle3.jpg'), // https://www.freepik.com/premium-photo/hobbies-handicrafts-knitted-beanie-with-handmade-embroidery-wooden-toys-rattles-teethers-nipple-holder-baby-development-fine-motor-skills-children-newborn-products-accessories_20726881.htm
  ]),
  new VocabularyItem('бр`осьня', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('бр`уд', [
    require('./../data/dirt1.jpg'), // https://www.freepik.com/premium-photo/dirty-dishes-isolated-white_43270510.htm
    require('./../data/dirt2.jpg'), // https://unsplash.com/photos/a-man-with-his-hands-covered-with-mud-IdjxBF_StBk
    require('./../data/dirt3.jpg'), // https://unsplash.com/photos/child-in-gray-jacket-and-red-pants-riding-red-bicycle-on-brown-sand-during-daytime-UGCgoVmFZC0
  ], ['талерка', 'ровар']),
  new VocabularyItem('бр`ыль', [
    require('./../data/cap-peak1.jpg'), // https://pixabay.com/photos/cap-macro-man-person-sitting-1835571/
    require('./../data/canopy2.jpg'), // https://www.freepik.com/premium-photo/tiny-french-shop-cafe-created-inside-botanical-gardens-with-glass-ceiling_38992894.htm
    require('./../data/straw-hat3.jpg'), // https://www.freepik.com/free-photo/fedora-hat-studio-still-life_63842938.htm
  ]),
  new VocabularyItem('б`ульба', [
    require('./../data/potatoes1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/potatoes2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/potatoes3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бур`ак', [
    require('./../data/beetroot1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/beetroot2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/beetroot3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('б`урбалкі', [
    require('./../data/bubbles1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/bubbles2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/bubbles3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('буршт`ын', [
    require('./../data/amber1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/amber2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/amber3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('б`усел', [
    require('./../data/stork1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/stork2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/stork3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('б`эз', [
    require('./../data/lilac1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/lilac2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/lilac3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вав`ёрка', [
    require('./../data/squirrel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/squirrel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/squirrel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ваз`ок', [
    require('./../data/pram1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pram2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pram3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вал`ізка', [
    require('./../data/suitcase1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/suitcase2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/suitcase3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вал`ошка', [
    require('./../data/cornflower1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/cornflower2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/cornflower3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вандр`оўнік', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('в`ежа', [
    require('./../data/tower1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/tower2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/tower3.jpg'), // Da voli https://creativecommons.org/licenses/by-sa/3.0/ (cropped and resized)
  ]),
  new VocabularyItem('в`ейкі', [
    require('./../data/eyelashes1.jpg'), // https://www.freepik.com/free-photo/macro-shot-female-eye-with-long-false-eyelashes_10881118.htm
    require('./../data/eyelashes2.jpg'), // https://unsplash.com/photos/person-holding-black-and-silver-scissors-sRSRuxkOuzI
    require('./../data/eyelashes3.jpg'), // https://unsplash.com/photos/woman-showing-black-eyelashes-y_VhmHCZ8FY
  ]),
  new VocabularyItem('в`етразь', [
    require('./../data/sail1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/sail2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/sail3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('від`элец', [
    require('./../data/fork1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/fork2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/fork3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('в`огнішча', [
    require('./../data/bonfire1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/bonfire2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/bonfire3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['полымя', 'грубка']),
  new VocabularyItem('в`ока', [
    require('./../data/eye1.jpg'), // https://www.freepik.com/premium-photo/macro-image-human-eye_4195379.htm
    require('./../data/eye2.jpg'), // https://www.freepik.com/free-photo/macro-shot-young-man-showing-brown-eyes-camera-blinking-looking-reflection-person-with-eyebrows-eyelashes-healthy-eyesight-having-good-vision-optical-focus-close-up_25858461.htm
    require('./../data/eye3.jpg'), // https://www.freepik.com/free-photo/gold-bengal-cat-black-background_8924011.htm
  ], ['раёк', 'зрэнка']),
  new VocabularyItem('в`опратка', [
    require('./../data/clothes1.jpg'), // https://www.freepik.com/premium-photo/colorful-women39s-dresses-hangers-retail-shop_40901510.htm
    require('./../data/clothes2.jpg'), // https://unsplash.com/photos/five-jackets-on-clothes-rack-zw_oaDbfzyE
    require('./../data/clothes3.jpg'), // https://unsplash.com/photos/hanged-top-on-brown-and-white-clothes-horse-TS--uNw-JqE
  ]),
  new VocabularyItem('в`усы', [
    require('./../data/mustache1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/mustache2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/mustache3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('в`ыспа', [
    require('./../data/island1.jpg'), // https://www.freepik.com/premium-photo/scenic-aerial-view-14-island-lake-saint-hippolyte-quebec-canada_59084834.htm
    require('./../data/island2.jpg'), // https://unsplash.com/photos/green-trees-on-island-surrounded-by-water-during-daytime-hZ6tMbkAIMk
    require('./../data/island3.jpg'), // https://unsplash.com/photos/aerial-photography-of-a-green-island-vh0FucFJ7pw
  ]),
  new VocabularyItem('выцін`анка', [
    require('./../data/paper-decoration1.jpg'), // https://be-tarask.wikipedia.org/wiki/%D0%92%D1%8B%D1%86%D1%96%D0%BD%D0%B0%D0%BD%D0%BA%D0%B0#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Wystroj-chaty-kurpie.JPG
    require('./../data/paper-decoration2.jpg'), // https://en.wikipedia.org/wiki/Vytynanky_(Wycinanki)#/media/File:Wycinanka_lubelska,_1915.jpg
    require('./../data/paper-decoration3.jpg'), // https://www.freepik.com/free-photo/laser-cut-ornament-wall-decorative-element-design_78033997.htm
  ]),
  new VocabularyItem('в`элюм', [
    require('./../data/veil1.jpg'), // https://www.freepik.com/free-photo/close-view-serious-attractive-woman-long-white-gown-raising-hand-hiding-face-veil-looking-away-while-sitting-background-modern-building_27037668.htm
    require('./../data/veil2.jpg'), // https://unsplash.com/photos/woman-in-black-shirt-in-grayscale-photography-El-roodgN3s
    require('./../data/veil3.jpg'), // https://unsplash.com/photos/woman-in-white-floral-wedding-dress-Sd-u1RmqWHg
  ]),
  new VocabularyItem('вяс`ёлка', [
    require('./../data/rainbow1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/rainbow2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/rainbow3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вях`отка', [
    require('./../data/washcloth1.jpg'), // https://unsplash.com/photos/three-pieces-of-crocheted-fabric-hanging-from-hooks-nvU0TjYQoBY
    require('./../data/washcloth2.jpg'), // https://www.freepik.com/free-photo/spa-towels-stone-oils_7021047.htm
    require('./../data/washcloth3.jpg'), // https://www.freepik.com/premium-photo/female-hands-holding-round-soft-synthetic-washcloth-bath-with-water-hands-closeup-spa-treatment_193007775.htm
  ]),
  new VocabularyItem('габл`юшка', [
    require('./../data/shavings1.jpg'), // https://unsplash.com/photos/selective-photography-sawdust-on-plank-hdW4rZPHe2g
    require('./../data/shavings2.jpg'), // https://www.freepik.com/free-photo/high-angle-artisan-jobs-equipment-assortment_10890939.htm
    require('./../data/shavings3.jpg'), // https://www.freepik.com/premium-photo/metallic-swarf-lathe-metal-fragments-with-metal-springsclose-up_123034279.htm
  ]),
  new VocabularyItem('гадз`іньнік', [
    require('./../data/clock1.jpg'), // https://www.freepik.com/free-photo/flat-lay-wall-clock-still-life_42952365.htm
    require('./../data/clock2.jpg'), // https://www.freepik.com/premium-photo/retro-alarm-clock-wood-desk-with-white-textured-background-with-copy-space_25720668.htm
    require('./../data/clock3.jpg'), // https://www.freepik.com/free-photo/simple-watch-face-mockup_162123375.htm
  ]),
  new VocabularyItem('г`альштук', [
    require('./../data/necktie1.jpg'), // https://www.freepik.com/free-photo/business-man-young-cute-man-dark-blue-suit-with-tie-showing-biceps-off_24920221.htm
    require('./../data/necktie2.jpg'), // https://www.freepik.com/premium-photo/body-businessman-wearing-formal-business-suit-uds_179689847.htm
    require('./../data/necktie3.jpg'), // https://www.freepik.com/free-photo/stylish-young-portrait-handsome-young-man-sunglasses-formalwear-looking-camera-while-standing-against-grey-background_17242275.htm
  ]),
  new VocabularyItem('гаман`ец', [
    require('./../data/wallet1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/wallet2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/wallet3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('г`анак', [
    require('./../data/porch1.jpg'), // ШІ
    require('./../data/porch2.jpg'), // ШІ
    require('./../data/porch3.jpg'), // ШІ
  ]),
  new VocabularyItem('гарб`ата', [
    require('./../data/tea1.jpg'), // https://pixabay.com/photos/cup-tee-porcelain-drink-decor-829527/
    require('./../data/tea2.jpg'), // https://pixabay.com/photos/tea-drink-cup-mug-herbal-tea-6680090/
    require('./../data/tea3.jpg'), // https://www.freepik.com/premium-photo/herbal-tea-with-medicinal-herbs-flowers-selective-focus_39876898.htm
  ]),
  new VocabularyItem('гарб`уз', [
    require('./../data/pumpkin1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pumpkin2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pumpkin3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('гарл`ачык', [
    require('./../data/water-lily1.jpg'), // https://pixabay.com/photos/water-lily-aquatic-plant-5370781/
    require('./../data/water-lily2.jpg'), // https://pixabay.com/photos/water-lily-blossom-bloom-petals-7233788/
    require('./../data/water-lily3.jpg'), // https://pixabay.com/photos/water-lily-white-aquatic-plant-140727/
  ], ['кветка']),
  new VocabularyItem('гар`одніна', [
    require('./../data/vegetables1.jpg'), // https://www.freepik.com/free-photo/top-view-fruits-vegetables-bell-peppers-apples-carrot-coriander-cauliflower-persimmon-radish-cherry-tomatoes-red-cabbage-tomatoes-green-hot-pepper_17233567.htm
    require('./../data/vegetables2.jpg'), // https://www.freepik.com/free-photo/healthy-vegetables-wooden-table_13013675.htm
    require('./../data/vegetables3.jpg'), // https://www.freepik.com/free-photo/top-view-fresh-vegetables-with-seasonings-dark-surface-ripe-salad-health-food_16924759.htm
  ]),
  new VocabularyItem('гарс`эт', [
    require('./../data/corset1.jpg'), // https://www.freepik.com/free-photo/full-portrait-beautiful-young-woman-with-long-black-hair-posing-studio-dressed-jeans-corset_11228452.htm
    require('./../data/corset2.jpg'), // https://unsplash.com/photos/woman-in-blue-tube-dress-standing-on-brown-soil-during-daytime-T-j1GNkJTw8
    require('./../data/corset3.jpg'), // https://www.freepik.com/premium-photo/beautiful-sexy-woman-posing-corset_181205517.htm
  ]),
  new VocabularyItem('г`іль', [
    require('./../data/bullfinch1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/bullfinch2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/bullfinch3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('гл`яйцар', [
    require('./../data/corkscrew1.jpg'), // https://www.freepik.com/free-photo/close-up-wine-stain-detail_31049956.htm
    require('./../data/corkscrew2.jpg'), // https://www.freepik.com/premium-photo/wine-grape-wooden-table-against-light-background_193408258.htm
    require('./../data/corkscrew3.jpg'), // https://www.freepik.com/free-photo/top-view-wine-stoppers-corkscrew_6596197.htm
  ], ['корак']),
  new VocabularyItem('гр`ошы', [
    require('./../data/money1.jpg'), // https://www.freepik.com/free-photo/money-finance-woman-with-heap-coins_6190569.htm
    require('./../data/money2.jpg'), // https://unsplash.com/photos/man-holding-clear-glass-jar-76HIoI5Ni1E
    require('./../data/money3.jpg'), // https://www.freepik.com/free-photo/person-placing-coin-pile-coins_11433292.htm
  ], ['слоік']),
  new VocabularyItem('гр`убка', [
    require('./../data/cast-iron-oven1.jpg'), // https://unsplash.com/photos/cast-iron-teapot-on-wood-burner-DsQU3n5o3Sg
    require('./../data/cast-iron-oven2.jpg'), // https://unsplash.com/photos/brown-clay-pot-on-black-wood-burner-YQ0hCwyIgUU
    require('./../data/cast-iron-oven3.jpg'), // https://pixabay.com/photos/nostalgia-oven-old-historical-4353096/
  ], ['полымя', 'вогнішча']),
  new VocabularyItem('гр`уца', [
    require('./../data/barley1.jpg'), // https://www.freepik.com/free-photo/front-view-cooked-pearl-barley-inside-plate-dark-surface_15718071.htm
    require('./../data/barley2.jpg'), // https://pixabay.com/photos/pearl-barley-rye-seeds-mung-beans-5678882/
    require('./../data/barley3.jpg'), // https://www.freepik.com/premium-photo/bowl-cooked-peeled-barley-grains-porridge_119336994.htm
  ]),
  new VocabularyItem('г`узік', [
    require('./../data/button1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/button2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/button3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('г`умка', [
    require('./../data/eraser1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/eraser2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/eraser3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('г`эбель', [
    require('./../data/planer1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/planer2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/planer3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('д`ах', [
    require('./../data/roof1.jpg'), // https://www.freepik.com/free-photo/aerial-panorama-view-chernobyl-exclusion-zone-with-ruins-abandoned-pripyat-city-zone-radioactivity-ghost-town-with-empty-building_27001723.htm
    require('./../data/roof2.jpg'), // https://pixabay.com/photos/roof-shingles-old-house-window-4275783/
    require('./../data/roof3.jpg'), // https://unsplash.com/photos/birds-eye-view-of-assorted-color-roof-tiles-YVNlVJ8F_Ok
  ]),
  new VocabularyItem('дз`ежка', [
    require('./../data/bucket1.jpg'), // https://www.freepik.com/premium-photo/traditional-wooden-bucket-isolated-white-background_12621419.htm
    require('./../data/bucket2.jpg'), // https://www.freepik.com/premium-photo/wooden-bucket-isolated-white-background-clipping-path-included_34806299.htm
    require('./../data/bucket3.jpg'), // https://www.freepik.com/premium-photo/bucket-bath-brick-surface-equipment-saunas_18337590.htm
  ]),
  new VocabularyItem('дз`ёньнік', [], [], 'як недвухсэнсоўна паказаць?'),
  new VocabularyItem('дз`ік', [
    require('./../data/boar1.jpg'), // https://www.freepik.com/free-photo/wild-boar-nature-habitat-dangerous-animal-forest-czech-republic-nature-sus-scrofa_16206151.htm
    require('./../data/boar2.jpg'), // https://www.freepik.com/premium-photo/dangerous-wild-boar-approaching-from-front-glade-springtime_278604645.htm
    require('./../data/boar3.jpg'), // https://www.freepik.com/free-photo/wild-boar-nature-habitat-dangerous-animal-forest-czech-republic-nature-sus-scrofa_16205979.htm
  ]),
  new VocabularyItem('дзьмухав`ец', [
    require('./../data/dandelion1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/dandelion2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/dandelion3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('дз`яга', [], [], 'Канфлікт з "пас", "папруга", "рэмень"'),
  new VocabularyItem('драб`іны', [
    require('./../data/ladder1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ladder2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ladder3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('др`от', [
    require('./../data/wire1.jpg'), // https://www.freepik.com/free-photo/black-aux-wire-isolated-white_21128524.htm
    require('./../data/wire2.jpg'), // https://www.freepik.com/free-photo/black-power-cable-with-plug-socket-isolated-white_21128298.htm
    require('./../data/wire3.jpg'), // https://www.freepik.com/free-photo/electrical-cable-energy-technology-equipment-isolated-white_20989627.htm
  ]),
  new VocabularyItem('друк`арка', [
    require('./../data/printer1.jpg'), // https://www.freepik.com/free-photo/side-view-printer-desk-office_30955545.htm
    require('./../data/printer2.jpg'), // https://www.freepik.com/premium-photo/printer-office_6514711.htm
    require('./../data/printer3.jpg'), // https://www.freepik.com/premium-photo/printer-that-is-white-black-color_41808373.htm
  ]),
  new VocabularyItem('друк`арня', [], [], 'не знайшоў фота'),
  new VocabularyItem('дрыгв`а', [
    require('./../data/swamp1.jpg'), // https://www.freepik.com/premium-photo/beautiful-scenery-wetland-lakes-natural-park-vepsian-forest_30802192.htm
    require('./../data/swamp2.jpg'), // https://www.freepik.com/premium-photo/estonian-local-famous-landmark-observation-tower-nature-viru-swamp-photo-view-from-drone_315733746.htm
    require('./../data/swamp3.jpg'), // https://www.freepik.com/premium-photo/scenic-view-lake-against-sky_124165007.htm
  ]),
  new VocabularyItem('дыв`ан', [
    require('./../data/carpet1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/carpet2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/carpet3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('дыям`энт', [
    require('./../data/diamond1.jpg'), // https://www.freepik.com/premium-photo/diamond-black-leather-background_273093259.htm
    require('./../data/diamond2.jpg'), // https://www.freepik.com/premium-photo/close-up-elegant-diamond-white-shining-bokeh-background-concept-choosing-best-diamond-gem-design-3d-render_149477329.htm
    require('./../data/diamond3.jpg'), // https://www.freepik.com/premium-photo/round-diamonds-isolated-deep-blue-background-3d-rendering_25474785.htm
  ]),
  new VocabularyItem('жаўн`ер', [], [], 'Не знайшоў фотка якія б мне спадабаліся'),
  new VocabularyItem('жв`ір', [
    require('./../data/gravel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/gravel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/gravel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('журав`іны', [
    require('./../data/cranberries1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/cranberries2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/cranberries3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('жыранд`оль', [
    require('./../data/chandelier1.jpg'), // https://www.freepik.com/free-photo/white-chandelier_1254291.htm
    require('./../data/chandelier2.jpg'), // https://www.freepik.com/free-photo/beautiful-luxury-chandelier-decoration-interior_3531890.htm
    require('./../data/chandelier3.jpg'), // https://www.freepik.com/free-photo/golden-chandelier-hangs-from-ceiling-church_3712855.htm
  ]),
  new VocabularyItem('зав`ея', [], [], 'Канфлікт з "завіруха"'),
  new VocabularyItem('завір`уха', [], [], 'Канфлікт з "завея"'),
  new VocabularyItem('зап`алка', [
    require('./../data/match1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/match2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/match3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['полымя']),
  new VocabularyItem('запальн`ічка', [
    require('./../data/lighter1.jpg'), // https://www.freepik.com/free-photo/lighter-orange-background-macro-detail_16423501.htm
    require('./../data/lighter2.jpg'), // https://www.freepik.com/premium-photo/lighter-fire-isolated-white-background_88595826.htm
    require('./../data/lighter3.jpg'), // https://www.freepik.com/premium-photo/metal-lighter-isolated-white-background_20293928.htm
  ], ['полымя']),
  new VocabularyItem('запл`ечнік', [
    require('./../data/backpack1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/backpack2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/backpack3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('зб`ан', [
    require('./../data/jug1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/jug2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/jug3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('зб`ожжа', [
    require('./../data/wheatfield1.jpg'), // https://www.freepik.com/free-photo/wheat-field-ready-harvest_11133925.htm
    require('./../data/wheatfield2.jpg'), // https://www.freepik.com/free-photo/brown-wheatfield_12685687.htm
    require('./../data/wheatfield3.jpg'), // https://www.freepik.com/free-photo/wheat-field-with-spikelets-gold-tones_27469552.htm
  ], ['груца']),
  new VocabularyItem('збр`оя', [
    require('./../data/weapon1.jpg'), // https://www.freepik.com/free-photo/close-up-gun-surrounded-by-gun-powder-after-shooting_66984348.htm
    require('./../data/weapon2.jpg'), // https://www.freepik.com/free-photo/vertical-shot-sword-sandy-beach_13235899.htm
    require('./../data/weapon3.jpg'), // https://www.freepik.com/free-photo/hand-grenade-powerful-mass-destroying-weapon-with-brown-lever_7916400.htm
  ]),
  new VocabularyItem('згр`ая', [
    require('./../data/wolves-pack1.jpg'), // https://www.freepik.com/premium-photo/pack-hungry-wolves-hunting-winter_45030489.htm
    require('./../data/wolves-pack2.jpg'), // https://www.freepik.com/premium-photo/wolf-pack-pack-wolves-wolf-pack-forest_82338871.htm
    require('./../data/wolves-pack3.jpg'), // https://www.freepik.com/premium-photo/wolf-pack-pack-wolves-wolf-pack-forest_82338570.htm
  ]),
  new VocabularyItem('зд`ань', [
    require('./../data/ghost1.jpg'), // ШІ
    require('./../data/ghost2.jpg'), // ШІ
    require('./../data/ghost3.jpg'), // ШІ
  ]),
  new VocabularyItem('з`еўра', [], [], 'Не прыдумаў як перадаць'),
  new VocabularyItem('з`ёлкі', [
    require('./../data/herbs1.jpg'), // https://www.freepik.com/free-photo/top-view-natural-medicinal-spices-herbs_11375837.htm
    require('./../data/herbs2.jpg'), // https://www.freepik.com/free-photo/flat-lay-cup-herbal-tea-with-plants_5906727.htm
    require('./../data/herbs3.jpg'), // https://www.freepik.com/premium-photo/collection-different-herbs-including-basil-basil-other-herbs_39153767.htm
  ]),
  new VocabularyItem('з`орка', [
    require('./../data/star1.jpg'), // https://www.freepik.com/free-photo/star-made-from-garland-wall_3390908.htm
    require('./../data/star2.jpg'), // https://www.freepik.com/premium-photo/close-up-lizard-against-blue-background_112862760.htm
    require('./../data/star3.jpg'), // https://www.freepik.com/premium-photo/sun-cosmic-rays-from-sun-solar-flare-explosion-emissions-from-nuclear-fusion-radiation_44658432.htm
  ]),
  new VocabularyItem('зр`энка', [
    require('./../data/eye-pupil1.jpg'), // https://www.freepik.com/free-photo/human-s-deep-eye_8024229.htm
    require('./../data/eye-pupil2.jpg'), // https://www.freepik.com/free-photo/closeup-female-human-s-deep-eyes_8024295.htm
    require('./../data/eye-pupil3.jpg'), // https://www.freepik.com/premium-photo/male-gray-blue-colored-eye-extreme-close-up_7894406.htm
  ], ['раёк', 'вока']),
  new VocabularyItem('зьн`ічка', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('з`эдлік', [
    require('./../data/stool1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/stool2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/stool3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('`імбрык', [], [], 'Я больш ня ўпэўнены што знычыць гэтае слова'),
  new VocabularyItem('`ірты', [], [], 'Ці сапраўды слова ўжываецца?'),
  new VocabularyItem('к`ава', [
    require('./../data/coffee1.jpg'), // https://www.freepik.com/free-photo/person-serving-cup-coffee_1039907.htm
    require('./../data/coffee2.jpg'), // https://www.freepik.com/free-photo/high-angle-coffee-cup-table_29301201.htm
    require('./../data/coffee3.jpg'), // https://www.freepik.com/premium-photo/close-up-roasted-coffee-beans-table_109941067.htm
  ]),
  new VocabularyItem('кав`адла', [
    require('./../data/anvil1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/anvil2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/anvil3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кав`ун', [
    require('./../data/watermelon1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/watermelon2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/watermelon3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('каж`ан', [
    require('./../data/bat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/bat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/bat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`айстра', [], [], '? як адрозьніць ад іншых торбаў?'),
  new VocabularyItem('калаўр`от', [
    require('./../data/spinning-wheel1.jpg'), // https://en.wikipedia.org/wiki/Spinning_wheel
    require('./../data/spinning-wheel2.jpg'), // https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D0%B0%D1%9E%D1%80%D0%BE%D1%82
    require('./../data/spinning-wheel3.jpg'), // https://en.wikipedia.org/wiki/Spinning_wheel
  ]),
  new VocabularyItem('кал`яды', [
    require('./../data/christmas1.jpg'), // https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D1%8F%D0%B4%D1%8B
    require('./../data/christmas2.jpg'), // https://be.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D1%8F%D0%B4%D1%8B	
    require('./../data/christmas3.jpg'), // фота
  ]),
  new VocabularyItem('кам`ель', [
    require('./../data/trunk1.jpg'), // https://www.freepik.com/free-photo/closeup-tree-trunk-with-white-bark_10303726.htm
    require('./../data/trunk2.jpg'), // https://www.freepik.com/free-photo/close-up-girl-s-hand-touching-tree-bark_4743137.htm
    require('./../data/trunk3.jpg'), // https://www.freepik.com/free-photo/closeup-shot-tree-trunk-with-lichens-moss_10303754.htm
  ]),
  new VocabularyItem('каміз`элька', [
    require('./../data/vest1.jpg'), // https://www.freepik.com/premium-photo/construction-site-orange-safety-vest-wall_240150705.htm
    require('./../data/vest2.jpg'), // https://www.freepik.com/premium-photo/with-blue-patterned-vest-mens-wedding-suit-groom-isolated-white-background_12996193.htm
    require('./../data/vest3.jpg'), // https://www.freepik.com/premium-photo/vest-that-has-brown-band-around-waist_268754900.htm
  ]),
  new VocabularyItem('кам`ін', [
    require('./../data/chimney1.jpg'), // https://www.freepik.com/premium-photo/close-up-illuminated-light-bulb_122867092.htm
    require('./../data/chimney2.jpg'), // https://www.freepik.com/premium-photo/modern-room-concept-interior-style-chair-fireplace-frame-wicker-carpet-decoration-grey-stone-wal_267192686.htm
    require('./../data/chimney3.jpg'), // https://www.freepik.com/premium-photo/creating-cozy-atmosphere-importance-chimney-maintenance_119563419.htm
  ], ['полымя']),
  new VocabularyItem('кан`апа', [
    require('./../data/sofa1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/sofa2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/sofa3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('капял`юш', [
    require('./../data/hat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/hat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/hat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['брыль']),
  new VocabularyItem('караг`од', [
    require('./../data/round-dance1.jpg'), // https://pixabay.com/photos/round-dance-to-dance-hobby-2464228/
    require('./../data/round-dance2.jpg'), // ШІ
    require('./../data/round-dance3.jpg'), // ШІ
  ]),
  new VocabularyItem('к`арак', [
    require('./../data/back-neck1.jpg'), // https://www.freepik.com/free-photo/faceless-woman-with-dark-skin-suffers-from-nape-pain-holds-hand-neck-with-red-spot-has-problems-with-health-spine-disease-wears-sport-bra-isolated-white-background-pain-syndroms_12697825.htm
    require('./../data/back-neck2.jpg'), // https://www.freepik.com/free-photo/young-man-training-bodybuilding_29806264.htm
    require('./../data/back-neck3.jpg'), // https://www.freepik.com/premium-photo/young-woman-topless-back-view-arms-shoulders-isolate-gray-wall_12480719.htm
  ]),
  new VocabularyItem('кар`алі', [
    require('./../data/necklace1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/necklace2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/necklace3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кар`ункі', [
    require('./../data/lace1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/lace2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/lace3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`аўка', [
    require('./../data/jackdaw1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/jackdaw2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/jackdaw3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('каўн`ер', [
    require('./../data/collar1.jpg'), // https://www.freepik.com/free-photo/closeup-person-wearing-light-blue-shirt_7841769.htm
    require('./../data/collar2.jpg'), // https://www.freepik.com/free-photo/close-up-senior-priest-church-with-costume_25776003.htm
    require('./../data/collar3.jpg'), // https://www.freepik.com/free-photo/shirt-clothes_1135481.htm
  ]),
  new VocabularyItem('к`афля', [
    require('./../data/tiles1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/tiles2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/tiles3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кач`алка', [
    require('./../data/rolling-pin1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/rolling-pin2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/rolling-pin3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`ачка', [
    require('./../data/duck1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/duck2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/duck3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кв`етка', [
    require('./../data/flower1.jpg'), // https://www.freepik.com/free-photo/close-up-pretty-gerbera_1722189.htm
    require('./../data/flower2.jpg'), // https://www.freepik.com/free-photo/flowers-against-sky_26583294.htm
    require('./../data/flower3.jpg'), // https://www.freepik.com/free-photo/close-up-beautiful-blooming-flower_23669143.htm
  ]),
  new VocabularyItem('к`еліх', [
    require('./../data/glass1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/glass2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/glass3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ків`ач', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('кі`ёк', [
    require('./../data/stick1.jpg'), // https://www.freepik.com/free-photo/blind-person-getting-ready-walk-with-blind-stick_22632862.htm
    require('./../data/stick2.jpg'), // https://www.freepik.com/premium-photo/elegant-wooden-walking-canes-white-background_39235212.htm
    require('./../data/stick3.jpg'), // https://www.freepik.com/premium-photo/close-up-view-suffering-elderly-man-walking-with-help-cane_15986283.htm
  ]),
  new VocabularyItem('кіпцюр`ы', [
    require('./../data/claws1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/claws2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/claws3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кіш`эня', [
    require('./../data/pocket1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pocket2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pocket3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кі`ях', [
    require('./../data/corn1.jpg'), // https://www.freepik.com/free-photo/fresh-corns-white-table_16903893.htm
    require('./../data/corn2.jpg'), // https://www.freepik.com/free-photo/fresh-sweet-ears-corn-isolated-white-plate_13342541.htm
    require('./../data/corn3.jpg'), // https://www.freepik.com/free-photo/top-view-fresh-yellow-corns-dark-background_17063122.htm
  ]),
  new VocabularyItem('км`ін', [], [], 'цяжка перадаць малюнкам'),
  new VocabularyItem('кн`от', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('к`ола', [
    require('./../data/wheel1.jpg'), // https://www.freepik.com/free-photo/car-tires-showcased-inside-automobile-workshop_135010571.htm
    require('./../data/wheel2.jpg'), // https://www.freepik.com/free-photo/high-angle-female-mechanic-replacing-car-wheel_5851573.htm
    require('./../data/wheel3.jpg'), // https://www.freepik.com/free-photo/closeup-old-wooden-wheel-ground-against-fences-lights_10758863.htm
  ]),
  new VocabularyItem('к`омін', [
    require('./../data/chimney-smoke1.jpg'), // https://www.freepik.com/premium-photo/closeup-smoke-coming-out-chimney-building-sunlight-daytime_43052165.htm
    require('./../data/chimney-smoke2.jpg'), // https://www.freepik.com/premium-photo/old-brick-chimney-roof-covered-with-snow_26731799.htm
    require('./../data/chimney-smoke3.jpg'), // https://www.freepik.com/premium-photo/modern-metal-chimney-ventilation_291639730.htm
  ]),
  new VocabularyItem('к`онаўка', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('к`онік', [
    require('./../data/grasshopper1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/grasshopper2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/grasshopper3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`орак', [
    require('./../data/cork1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/cork2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/cork3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`оўдра', [
    require('./../data/blanket1.jpg'), // https://www.freepik.com/free-photo/portrait-happy-calm-woman-bedroom-gray-stripped-blanket-black-beige-body-home-sleep-wear_11687632.htm
    require('./../data/blanket2.jpg'), // https://www.freepik.com/premium-photo/young-happy-woman-wrapped-blanket-sitting-bed-by-christmas-tree-festive-cozy-morning-home_67070192.htm
    require('./../data/blanket3.jpg'), // https://www.freepik.com/premium-photo/classic-mens-shaving-machine-shaving-accessories-safety-razor-black-background-with-wooden-branches_335485169.htm
  ], ['ложак']),
  new VocabularyItem('к`оўзанка', [
    require('./../data/rink1.jpg'), // https://www.freepik.com/free-photo/female-ice-skating_8507058.htm
    require('./../data/rink2.jpg'), // https://www.freepik.com/free-photo/cute-couple-ice-arena_4050214.htm
    require('./../data/rink3.jpg'), // https://www.freepik.com/premium-photo/salzburg-austria-december-31-2015-people-skating-town_58507731.htm
  ]),
  new VocabularyItem('к`ошык', [
    require('./../data/basket1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/basket2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/basket3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кр`аткі', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('кр`ок', [], [], 'цяжка перадаць малюнкам'),
  new VocabularyItem('кр`опка', [], [], 'не знайшоў малюнкаў'),
  new VocabularyItem('круж`элка', [
    require('./../data/disk1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/disk2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/disk3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кр`ыга', [
    require('./../data/ice1.jpg'), // https://www.freepik.com/free-photo/cloudy-nature-landscape-by-lake_26324445.htm
    require('./../data/ice2.jpg'), // https://www.freepik.com/premium-photo/details-broken-ice-river-dnieper_19027341.htm
    require('./../data/ice3.jpg'), // https://www.freepik.com/premium-photo/movement-ice-floes-river-influence-current-wind_12476348.htm
  ]),
  new VocabularyItem('крыгах`од', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('кр`эйда', [
    require('./../data/chalk1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/chalk2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/chalk3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('к`убак', [
    require('./../data/mug1.jpg'), // https://www.freepik.com/premium-photo/woman-hands-grey-sweater-holding-white-coffee-mug_245939296.htm
    require('./../data/mug2.jpg'), // https://www.freepik.com/premium-photo/scandinavian-christmas-cup-with-pattern-isolated-white-background_33550871.htm
    require('./../data/mug3.jpg'), // https://www.freepik.com/premium-photo/blue-mug-wooden-table_44659289.htm
  ]),
  new VocabularyItem('кудз`еркі', [
    require('./../data/curls1.jpg'), // https://www.freepik.com/free-photo/likeable-woman-with-shiny-shadows-dressed-shirt-with-silver-sequins-dark-pants-dancing-purple-background_23667545.htm
    require('./../data/curls2.jpg'), // https://www.freepik.com/free-photo/fashionable-curly-woman-golden-earrings-standing-white-wall-adorable-stylish-girl-laughing_12018236.htm
    require('./../data/curls3.jpg'), // https://www.freepik.com/premium-photo/portrait-young-beautiful-smiling-women-with-curly-hair_8520594.htm
  ]),
  new VocabularyItem('к`уфаль', [
    require('./../data/beer-mug1.jpg'), // https://www.freepik.com/free-photo/glass-beer-with-spike-barley-wooden-table_5083485.htm
    require('./../data/beer-mug2.jpg'), // https://www.freepik.com/free-photo/close-up-blonde-beer-table-with-pretzels_5325181.htm
    require('./../data/beer-mug3.jpg'), // https://www.freepik.com/free-photo/closeup-shot-glass-cold-beer-wooden-surface_11541141.htm
  ]),
  new VocabularyItem('к`уфар', [
    require('./../data/chest1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/chest2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/chest3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('л`азьня', [
    require('./../data/sauna1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/sauna2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/sauna3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ланц`уг', [
    require('./../data/chain1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/chain2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/chain3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('лас`унак', [], [], 'Як наогул можна відавочна паказаць?'),
  new VocabularyItem('лін`арка', [
    require('./../data/ruler1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ruler2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ruler3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('літ`ара', [
    require('./../data/letter1.jpg'), // 
    require('./../data/letter2.jpg'), // 
    require('./../data/letter3.jpg'), // 
  ]),
  new VocabularyItem('ліхам`анка', [], [], 'цяжка перадаць малюнкам'),
  new VocabularyItem('ліхт`ар', [
    require('./../data/lantern1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/lantern2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/lantern3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ліхт`арык', [
    require('./../data/flashlight1.jpg'), // https://www.freepik.com/premium-photo/handheld-led-flashlight-white-background-insulation_255650267.htm
    require('./../data/flashlight2.jpg'), // https://www.freepik.com/premium-photo/pocket-silver-flashlight-isolated-blue-background-with-copy-space-minimal-think-minimal-thing_125996414.htm
    require('./../data/flashlight3.jpg'), // https://www.freepik.com/premium-photo/beam-light-from-portable-flashlight-gray-background-copy-space_47581478.htm
  ], ['прамень']),
  new VocabularyItem('л`ожак', [
    require('./../data/bed1.jpg'), // https://www.freepik.com/free-photo/beautiful-bed-middle-bedroom_14601080.htm
    require('./../data/bed2.jpg'), // https://www.freepik.com/premium-photo/white-arched-window-bedroom-corner-with-king-size-bed-bedside-table-attached-wall-top-view-3d-rendering-mock-up_62524273.htm
    require('./../data/bed3.jpg'), // https://www.freepik.com/premium-photo/3d-images-isolated-double-bed-with-stunning-design-colorful-gray-solid-background-generative-ai-illustration_37022091.htm
  ]),
  new VocabularyItem('л`окшына', [
    require('./../data/noodles1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/noodles2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/noodles3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('луск`а', [
    require('./../data/scales-a1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/scales-a2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/scales-a3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('л`уста', [
    require('./../data/slice1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/slice2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/slice3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('люст`эрка', [
    require('./../data/mirror1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/mirror2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/mirror3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('лядз`як', [
    require('./../data/icicle1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/icicle2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/icicle3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ляз`о', [
    require('./../data/blade1.jpg'), // https://www.freepik.com/premium-photo/sharp-metal-knife-macro-edge-blade_50604058.htm
    require('./../data/blade2.jpg'), // https://www.freepik.com/premium-photo/japanese-sword-blade-white-background-soft-focus-wavy-pattern-blade-edge-is-line-hardness-that-blacksmith-makes-so-that-blade-doesn-t-break-each-piece-is-unique_32608788.htm
    require('./../data/blade3.jpg'), // https://www.freepik.com/free-photo/still-life-with-razor-blade_144643245.htm
  ]),
  new VocabularyItem('л`ялька', [
    require('./../data/doll1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/doll2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/doll3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('л`ямец', [
    require('./../data/felt1.jpg'), // https://www.freepik.com/free-photo/view-felt-fabric-gray-tones_27641018.htm
    require('./../data/felt2.jpg'), // https://www.freepik.com/free-photo/view-felt-fabric-different-colors_27641362.htm
    require('./../data/felt3.jpg'), // https://www.freepik.com/free-photo/view-felt-fabric-stacked-layers_27640825.htm
  ]),
  new VocabularyItem('м`айткі', [
    require('./../data/pants1.jpg'), // https://www.freepik.com/premium-photo/women-s-hand-holding-beautiful-cotton-panties-pink-background-woman-underwear-set-top-view_18882975.htm
    require('./../data/pants2.jpg'), // https://www.freepik.com/premium-photo/womens-panties-pink-background-with-copy-space_343421909.htm
    require('./../data/pants3.jpg'), // https://www.freepik.com/free-photo/underwear_1026774.htm
  ]),
  new VocabularyItem('маладз`ік', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('мал`анка', [], [], 'Канфлікт з бліскавіцай'),
  new VocabularyItem('мал`юнак', [
    require('./../data/painting1.jpg'), // https://www.freepik.com/free-photo/artist-woman-painting-canvas-from-shot_11750917.htm
    require('./../data/painting2.jpg'), // https://www.freepik.com/premium-photo/midsection-man-painting-book_127801877.htm
    require('./../data/painting3.jpg'), // https://www.freepik.com/free-photo/braless-woman-working-indoor_49639472.htm
  ]),
  new VocabularyItem('м`апа', [
    require('./../data/map1.jpg'), // https://www.freepik.com/free-photo/high-angle-view-different-maps_2544016.htm
    require('./../data/map2.jpg'), // https://www.freepik.com/premium-photo/world-map-image_251453399.htm
    require('./../data/map3.jpg'), // https://www.freepik.com/free-photo/unrecognizable-navigating-tourist-city_1291702.htm
  ]),
  new VocabularyItem('матузк`і', [
    require('./../data/shoelaces1.jpg'), // https://www.freepik.com/free-photo/young-backpacker-woman-tying-shoelaces-while-go-hiking-forest_1088855.htm
    require('./../data/shoelaces2.jpg'), // https://www.freepik.com/free-photo/hands-tying-trainers-shoelaces-fall-pave_1281743.htm
    require('./../data/shoelaces3.jpg'), // https://www.freepik.com/premium-photo/brides-back-wedding-white-dress-with-lace_22999883.htm
  ]),
  new VocabularyItem('м`огілкі', [
    require('./../data/cemetery1.jpg'), // https://www.freepik.com/premium-photo/lviv-ukraine-apr-27-2016-old-graves-lychakivskyj-cemetery-lviv-ukraine-officially-state-history-culture-museum-preserve-lychakiv-cemetery_17330855.htm
    require('./../data/cemetery2.jpg'), // https://www.freepik.com/free-photo/world-war-i-cemetery_9760840.htm
    require('./../data/cemetery3.jpg'), // https://www.freepik.com/premium-photo/tombstones-josefov-cemetery-old-ghetto-prague-czech-republic_143519424.htm
  ]),
  new VocabularyItem('мур`аш', [
    require('./../data/ant1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ant2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ant3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('мут`эрка', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('м`ыліца', [
    require('./../data/crutches1.jpg'), // https://www.freepik.com/premium-photo/crutches-front-wall_32522628.htm
    require('./../data/crutches2.jpg'), // https://www.freepik.com/premium-photo/elderly-woman-with-crutch-walking-corridor_10726642.htm
    require('./../data/crutches3.jpg'), // https://www.freepik.com/free-photo/front-view-young-man-using-crutches-due-broken-foot-grey-wall-leg-accident-disable-broke-damage-broken_16909826.htm
  ]),
  new VocabularyItem('м`ятлік', [
    require('./../data/butterfly1.jpg'), // https://www.freepik.com/free-photo/close-up-view-beautiful-butterfly-concept_11383021.htm
    require('./../data/butterfly2.jpg'), // https://www.freepik.com/free-photo/vertical-shot-moth-trying-drink-nectar-lilac-syringa-flower_20386454.htm
    require('./../data/butterfly3.jpg'), // https://www.freepik.com/premium-photo/cropped-image-man-with-bow_110161045.htm
  ]),
  new VocabularyItem('навальн`іца', [], [], 'Не знайшоў фоткі, і магчымы канфлікт з "бліскавіцай"/"маланкай"'),
  new VocabularyItem('нажн`іцы', [
    require('./../data/scissors1.jpg'), // https://www.freepik.com/free-photo/school-supplies-wooden-surface_4888012.htm
    require('./../data/scissors2.jpg'), // https://www.freepik.com/free-photo/front-closed-up-view-silver-hair-scissors-womans-hand-yellow-background-color-body-hair_9159073.htm
    require('./../data/scissors3.jpg'), // https://www.freepik.com/free-photo/top-view-orange-scissors-dark-background_13465854.htm
  ]),
  new VocabularyItem('нал`епка', [], [], ''),
  new VocabularyItem('нам`ёт', [
    require('./../data/tent1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/tent2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/tent3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('нам`ызьнік', [
    require('./../data/muzzle1.jpg'), // https://www.freepik.com/free-photo/adorable-husky-dog-with-muzzle-outdoors_20828524.htm
    require('./../data/muzzle2.jpg'), // https://www.freepik.com/free-photo/adorable-dalmatian-dog-with-muzzle-outdoors_20828516.htm
    require('./../data/muzzle3.jpg'), // https://www.freepik.com/free-photo/adorable-german-shepherd-with-muzzle-outdoors_20828533.htm
  ], ['пыса']),
  new VocabularyItem('нач`оўка', [], [], 'двухсэнсоўнае?'),
  new VocabularyItem('немаўл`я', [
    require('./../data/infant1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/infant2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/infant3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('н`ітніца', [
    require('./../data/gauze1.jpg'), // https://www.freepik.com/premium-photo/concept-first-aid-supplies-bandag-close-up_39223659.htm
    require('./../data/gauze2.jpg'), // https://www.freepik.com/free-photo/white-medical-bandage-marble-table_11333110.htm
    require('./../data/gauze3.jpg'), // https://www.freepik.com/premium-photo/roll-medical-bandage_11493655.htm
  ]),
  new VocabularyItem('няб`ожчык', [], [], ''),
  new VocabularyItem('падаб`айка', [
    require('./../data/like1.jpg'), // https://www.freepik.com/free-photo/blue-bubble-like-button-icon-thumbs-up-like-sign-feedback-concept-white-background-3d-rendering_22405791.htm
    require('./../data/like2.jpg'), // https://www.freepik.com/premium-photo/middle-age-caucasian-man_37205347.htm
    require('./../data/like3.jpg'), // https://www.freepik.com/free-photo/women-holding-thumbs-up-symbol_2861223.htm
  ]),
  new VocabularyItem('падар`унак', [
    require('./../data/gift1.jpg'), // https://www.freepik.com/free-photo/hand-holding-gift_11373156.htm
    require('./../data/gift2.jpg'), // https://www.freepik.com/free-photo/happy-woman-opening-gift_17298128.htm
    require('./../data/gift3.jpg'), // https://www.freepik.com/free-photo/woman-hands-holding-wrapped-white-box-with-golden-bow-focus-box_13083288.htm
  ]),
  new VocabularyItem('падр`учнік', [
    require('./../data/workbook1.jpg'), // у тэчцы
    require('./../data/workbook2.jpg'), // https://pixabay.com/photos/book-textbook-college-learning-845280/
    require('./../data/workbook3.jpg'), // https://unsplash.com/photos/a-stack-of-books-sitting-on-top-of-a-wooden-table-4o3FFu9jenw
  ], ['стос']),
  new VocabularyItem('пал`іца', [
    require('./../data/shelf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/shelf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/shelf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['вопратка', 'шафа']),
  new VocabularyItem('пальч`аткі', [
    require('./../data/gloves1.jpg'), // https://www.freepik.com/free-photo/medium-shot-woman-wearing-gloves_12060730.htm
    require('./../data/gloves2.jpg'), // https://www.freepik.com/free-photo/motorcycle-driver-wears-leather-gloves_11048785.htm
    require('./../data/gloves3.jpg'), // https://www.freepik.com/premium-photo/gray-exfoliating-gloves-shower-use-black-stone-background_5392331.htm
  ]),
  new VocabularyItem('панч`охі', [
    require('./../data/stockings1.jpg'), // https://www.freepik.com/premium-photo/beautiful-female-legs-black-stockings_6315057.htm
    require('./../data/stockings2.jpg'), // https://www.freepik.com/premium-photo/low-section-woman-lying-bed-home_123807415.htm
    require('./../data/stockings3.jpg'), // https://www.freepik.com/free-photo/knitting-tools-close-up_12245207.htm
  ]),
  new VocabularyItem('пап`ера', [], [], 'канфлікт з аркушом'),
  new VocabularyItem('папр`уга', [], [], 'Канфлікт шмат з чым'),
  new VocabularyItem('парас`он', [
    require('./../data/umbrella1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/umbrella2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/umbrella3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пар`энчы', [
    require('./../data/railings1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/railings2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/railings3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пар`эчкі', [
    require('./../data/currant1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/currant2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/currant3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пастар`унак', [], [], 'acab'),
  new VocabularyItem('пат`ыліца', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('пат`ыліца', [
    require('./../data/head-back1.jpg'), // https://www.freepik.com/free-ai-image/world-cancer-day-awareness_137112045.htm
    require('./../data/head-back2.jpg'), // https://www.freepik.com/free-photo/medium-shot-man-with-dandruff-issues_23676534.htm
    require('./../data/head-back3.jpg'), // https://www.freepik.com/premium-photo/rear-view-woman-against-white-background_120064160.htm
  ]),
  new VocabularyItem('пат`эльня', [
    require('./../data/pan1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pan2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pan3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пацал`унак', [
    require('./../data/kiss1.jpg'), // https://www.freepik.com/premium-photo/close-up-man-kissing-his-girlfriend_1557684.htm
    require('./../data/kiss2.jpg'), // https://www.freepik.com/free-photo/beautiful-intimacy-moment-couple_20032338.htm
    require('./../data/kiss3.jpg'), // https://www.freepik.com/free-photo/young-couple-hugging-kissing_12736207.htm
  ]),
  new VocabularyItem('п`ацеркі', [
    require('./../data/beads1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/beads2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/beads3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пац`ук', [
    require('./../data/rat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/rat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/rat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('п`ашпарт', [
    require('./../data/passport1.jpg'), // ШІ
    require('./../data/passport2.jpg'), // ШІ
    require('./../data/passport3.jpg'), // ШІ
  ]),
  new VocabularyItem('пашт`оўка', [
    require('./../data/postcard1.jpg'), // https://pixabay.com/photos/postcard-old-old-fashioned-write-1897985/
    require('./../data/postcard2.jpg'), // https://pixabay.com/photos/postcards-souvenir-souvenir-products-7865295/
    require('./../data/postcard3.jpg'), // у тэчцы
  ]),
  new VocabularyItem('п`евень', [
    require('./../data/rooster1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/rooster2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/rooster3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('п`ернік', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('піг`улка', [
    require('./../data/pill1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pill2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pill3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пл`от', [
    require('./../data/fence1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/fence2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/fence3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пл`яма', [
    require('./../data/stain1.jpg'), // https://www.freepik.com/premium-photo/white-shirt-with-blue-ink-stain_134905207.htm
    require('./../data/stain2.jpg'), // https://www.freepik.com/free-photo/watercolour-liquid-black-splashes-white-background_5576041.htm
    require('./../data/stain3.jpg'), // https://www.freepik.com/premium-photo/young-redhead-woman-holding-dirty-t-shirt-laundry-room_61118485.htm
  ], ['бруд']),
  new VocabularyItem('пл`яшка', [
    require('./../data/canteen1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/canteen2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/canteen3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('п`олымя', [
    require('./../data/fire1.jpg'), // https://www.freepik.com/free-photo/fire-flames-black-background-abstract-blaze-fire-flame-texture-background_233174356.htm
    require('./../data/fire2.jpg'), // https://pixabay.com/photos/firefighters-fire-firefighting-115800/
    require('./../data/fire3.jpg'), // https://unsplash.com/photos/person-standing-in-front-of-fire-wCKzi8nDkw8
  ], ['вогнішча', 'грубка']),
  new VocabularyItem('п`опел', [
    require('./../data/ash1.jpg'), // https://www.freepik.com/free-photo/burning-coals-covered-with-ash_5217541.htm
    require('./../data/ash2.jpg'), // https://pixabay.com/photos/fire-flames-wood-charred-ash-burn-4365567/
    require('./../data/ash3.jpg'), // https://pixabay.com/photos/campfire-ash-wood-ash-grilling-3344827/
  ], ['вогнішча']),
  new VocabularyItem('п`оплаў', [], [], ''),
  new VocabularyItem('п`орткі', [], [], 'Не знайшоў фоткі, і што наконт "нагавіцаў"?'),
  new VocabularyItem('п`оўдзень', [], [], ''),
  new VocabularyItem('п`оўнач', [], [], ''),
  new VocabularyItem('п`оўня', [
    require('./../data/fullmoon1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/fullmoon2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/fullmoon3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('п`оўсьць', [
    require('./../data/wool1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/wool2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/wool3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['футра']),
  new VocabularyItem('прам`ень', [
    require('./../data/ray1.jpg'), // https://www.freepik.com/premium-photo/color-floodlight-illuminate-glow-dark-equipment-show-programs_18419416.htm
    require('./../data/ray2.jpg'), // https://pixabay.com/photos/night-photograph-flashlight-ray-2183637/
    require('./../data/ray3.jpg'), // https://pixabay.com/photos/sunbeams-autumn-fog-autumn-forest-2761911/
  ]),
  new VocabularyItem('пр`ас', [
    require('./../data/iron1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/iron2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/iron3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('прын`ада', [
    require('./../data/bait1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/bait2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/bait3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пуст`эльня', [
    require('./../data/desert1.jpg'), // https://www.freepik.com/free-photo/beautiful-view-tranquil-desert-clear-sky-captured-morocco_9283219.htm
    require('./../data/desert2.jpg'), // https://www.freepik.com/free-photo/beautiful-scenery-mesquite-flat-sand-dunes-death-valley-california_10606375.htm
    require('./../data/desert3.jpg'), // https://www.freepik.com/premium-photo/scenic-view-desert-against-sky_120891189.htm
  ]),
  new VocabularyItem('пух`ір', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('п`ыса', [
    require('./../data/snout1.jpg'), // https://www.freepik.com/premium-photo/close-up-animal-sleeping_114220058.htm
    require('./../data/snout2.jpg'), // https://www.freepik.com/premium-photo/close-up-dog_105450378.htm
    require('./../data/snout3.jpg'), // https://unsplash.com/photos/brown-and-white-cat-eye-fBAYzxQz9Io
  ], ['дзік']),
  new VocabularyItem('п`эндзаль', [
    require('./../data/brush1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/brush2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/brush3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пял`ёсткі', [
    require('./../data/petals1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/petals2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/petals3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пярл`іна', [], [], 'Не знайшоў фотак асобных каб не канйліктавалі з "карáлямі"'),
  new VocabularyItem('пярсьц`ёнак', [
    require('./../data/ring1.jpg'), // https://pixabay.com/photos/jewel-diamond-ring-fashion-jewelry-7389356/
    require('./../data/ring2.jpg'), // https://pixabay.com/photos/ring-jewellery-sliver-ring-woman-1175529/
    require('./../data/ring3.jpg'), // https://pixabay.com/photos/ring-jewel-womens-clothing-653435/
  ]),
  new VocabularyItem('рабац`іньне', [
    require('./../data/freckles1.jpg'), // https://pixabay.com/photos/redheads-model-hair-girl-fashion-4606475/
    require('./../data/freckles2.jpg'), // https://pixabay.com/photos/face-eye-girl-freckles-portrait-863663/
    require('./../data/freckles3.jpg'), // https://pixabay.com/photos/young-freckles-blue-eyes-person-971538/
  ], ['вока', 'раёк']),
  new VocabularyItem('раг`оз', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('ра`ёк', [
    require('./../data/iris1.jpg'), // https://pixabay.com/photos/eye-vision-daughter-iris-woman-3899904/
    require('./../data/iris2.jpg'), // https://pixabay.com/photos/eye-green-portrait-iris-tabs-1236389/
    require('./../data/iris3.jpg'), // https://pixabay.com/photos/eye-face-human-green-blue-2154384/
  ], ['вока', 'зрэнка']),
  new VocabularyItem('раз`ынкі', [
    require('./../data/raisins1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/raisins2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/raisins3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('р`овар', [
    require('./../data/bicycle1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/bicycle2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/bicycle3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('р`ондаль', [
    require('./../data/pot1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pot2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pot3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('рыдл`ёўка', [
    require('./../data/spade1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/spade2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/spade3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('рызьз`ё', [], [], 'todo'),
  new VocabularyItem('рыс`унак', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('р`эйкі', [
    require('./../data/rails1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/rails2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/rails3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('с`ажалка', [
    require('./../data/pond1.jpg'), // https://www.freepik.com/free-photo/beautiful-view-still-water-pond-surrounded-by-trees-plants_10399736.htm
    require('./../data/pond2.jpg'), // https://www.freepik.com/free-photo/lake-with-reflection-clouds-park-surrounded-by-lot-green-trees_11062600.htm
    require('./../data/pond3.jpg'), // https://www.freepik.com/free-photo/beautiful-shot-cute-mallard-swimming-river_11697194.htm
  ], ['качка']),
  new VocabularyItem('с`енцы', [], [], ''),
  new VocabularyItem('ск`алкі', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('ск`арб', [
    require('./../data/treasure1.jpg'), // https://pixabay.com/photos/chest-treasure-pirate-money-box-4051166/
    require('./../data/treasure2.jpg'), // https://pixabay.com/photos/sea-water-treasure-skull-ocean-5165146/
    require('./../data/treasure3.jpg'), // https://pixabay.com/photos/appetite-bank-box-buried-business-1238323/
  ], ['куфар', 'бульба']),
  new VocabularyItem('скарб`онка', [
    require('./../data/piggybank1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/piggybank2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/piggybank3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ск`івіца', [
    require('./../data/jaw1.jpg'), // https://www.freepik.com/premium-photo/viscerocranium-is-collection-bones-that-make-up-face-skeleton_146481799.htm
    require('./../data/jaw2.jpg'), // https://pixabay.com/photos/teeth-jaw-3d-model-orthodontics-2833414/
    require('./../data/jaw3.jpg'), // https://pixabay.com/photos/skeleton-animal-big-bite-danger-20746/
  ]),
  new VocabularyItem('скр`онь', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('скр`ыня', [
    require('./../data/box1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/box2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/box3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('слан`ечнік', [
    require('./../data/sunflower1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/sunflower2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/sunflower3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сьлім`ак', [
    require('./../data/snail1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/snail2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/snail3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сл`оік', [
    require('./../data/jar1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/jar2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/jar3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сл`оўнік', [
    require('./../data/dictionary1.jpg'), // https://pixabay.com/photos/dictionary-book-learn-learning-613910/
    require('./../data/dictionary2.jpg'), // https://pixabay.com/photos/a-book-dictionary-swedish-german-3101450/
    require('./../data/dictionary3.jpg'), // сфотаць Байкова-Некрашэвіча
  ]),
  new VocabularyItem('смар`агд', [
    require('./../data/emerald1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/emerald2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/emerald3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('спадар`ожнік', [
    require('./../data/satellite1.jpg'), // https://unsplash.com/photos/a-satellite-satellite-flying-over-the-earth-HsqBGASgXJA
    require('./../data/satellite2.jpg'), // https://pixabay.com/photos/technology-aeronautics-space-travel-2609356/
    require('./../data/satellite3.jpg'), // https://pixabay.com/photos/space-satellite-dark-black-science-2578154/
  ]),
  new VocabularyItem('спадн`іца', [
    require('./../data/skirt1.jpg'), // https://pixabay.com/photos/skirt-fashion-woman-clothes-5052288/
    require('./../data/skirt2.jpg'), // https://unsplash.com/photos/woman-in-black-and-white-dress-pUY4bhUYnK4
    require('./../data/skirt3.jpg'), // https://unsplash.com/photos/woman-standing-on-focus-photography-TRdBgw-ulNA
  ]),
  new VocabularyItem('сп`одак', [
    require('./../data/saucer1.jpg'), // Unsplash https://unsplash.com/license
    require('./../data/saucer2.jpg'), // Unsplash https://unsplash.com/license
    require('./../data/saucer3.jpg'), // Unsplash https://unsplash.com/license
  ]),
  new VocabularyItem('ст`анік', [
    require('./../data/bra1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/bra2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/bra3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ст`атак', [
    require('./../data/herd1.jpg'), // https://www.freepik.com/premium-photo/horses-standing-lake_102505591.htm
    require('./../data/herd2.jpg'), // https://pixabay.com/photos/sheep-flock-of-sheep-7286385/
    require('./../data/herd3.jpg'), // https://pixabay.com/photos/herd-drink-cow-pasture-lawn-1648141/
  ]),
  new VocabularyItem('ст`ос', [
    require('./../data/stack1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/stack2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/stack3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('стр`аўнік', [
    require('./../data/stomach1.jpg'), // ШІ
    require('./../data/stomach2.jpg'), // ШІ
    require('./../data/stomach3.jpg'), // ШІ
  ]),
  new VocabularyItem('страх`а', [
    require('./../data/straw-roof1.jpg'), // https://unsplash.com/photos/a-house-with-a-thatched-roof-and-windows-jeha7b1xJjU
    require('./../data/straw-roof2.jpg'), // https://unsplash.com/photos/a-building-with-a-thatched-roof-and-a-window-glq1e2sclZc
    require('./../data/straw-roof3.jpg'), // https://www.freepik.com/premium-photo/trees-landscape_101382945.htm
  ], ['дах']),
  new VocabularyItem('стр`ой', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('стр`ома', [
    require('./../data/cliff1.jpg'), // https://www.freepik.com/free-photo/beautiful-shot-high-rock-sea_7590429.htm
    require('./../data/cliff2.jpg'), // https://pixabay.com/photos/amalfi-amalfi-coast-cliff-rock-2241861/
    require('./../data/cliff3.jpg'), // https://unsplash.com/photos/brown-rock-formation-near-body-of-water-during-daytime-FUw82vSFs5Q
  ]),
  new VocabularyItem('стр`эмка', [], [], ''),
  new VocabularyItem('ст`удня', [], [], 'калодзеж?'),
  new VocabularyItem('ст`ужка', [
    require('./../data/ribbon1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ribbon2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/ribbon3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('стырн`о', [
    require('./../data/steering-wheel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/steering-wheel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/steering-wheel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('суз`ор\'е', [
    require('./../data/constellation1.jpg'), // https://pixabay.com/photos/stars-constellation-universe-bull-2630050/
    require('./../data/constellation2.jpg'), // https://pixabay.com/photos/milky-way-orion-nebula-7062243/
    require('./../data/constellation3.jpg'), // https://www.freepik.com/free-vector/astrological-star-signs-set_16396851.htm
  ], ['зорка']),
  new VocabularyItem('сук`енка', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('сум`ёт', [
    require('./../data/snowdrift1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/snowdrift2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/snowdrift3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['комін']),
  new VocabularyItem('сун`іцы', [
    require('./../data/wild-strawberries1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/wild-strawberries2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/wild-strawberries3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сут`ока', [], [], ''),
  new VocabularyItem('сх`оды', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('сш`ытак', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('сьв`едка', [], [], ''),
  new VocabularyItem('сьв`ердзел', [
    require('./../data/drill1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/drill2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/drill3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сьм`ецьце', [
    require('./../data/garbage1.jpg'), // https://pixabay.com/photos/garbage-can-garbage-recycle-trash-65661/
    require('./../data/garbage2.jpg'), // https://pixabay.com/photos/garbage-trash-recycling-bin-3305433/
    require('./../data/garbage3.jpg'), // https://unsplash.com/photos/person-standing-beside-garbage-bin-c-R885Oc7k0
  ]),
  new VocabularyItem('сьціз`орык', [
    require('./../data/pen-knife1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pen-knife2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/pen-knife3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['лязо']),
  new VocabularyItem('сьцягн`о', [
    require('./../data/thigh1.jpg'), // https://www.freepik.com/free-photo/happy-woman-basic-underwear-measuring-herself-isolated_13363857.htm
    require('./../data/thigh2.jpg'), // https://pixabay.com/photos/chicken-recipe-flat-grill-barbecue-3447081/
    require('./../data/thigh3.jpg'), // https://pixabay.com/photos/legs-man-quadriceps-thighs-cyclist-1574404/
  ]),
  new VocabularyItem('с`эрца', [
    require('./../data/heart1.jpg'), // https://www.freepik.com/free-vector/hand-drawn-heart-drawing-illustration_181234895.htm
    require('./../data/heart2.jpg'), // https://unsplash.com/photos/heart-shaped-red-and-beige-pendant-jcc8sxK2Adw
    require('./../data/heart3.jpg'), // https://unsplash.com/photos/red-and-yellow-bird-figurine-MEbT27ZrtdE
  ]),
  new VocabularyItem('с`ябар', [], [], ''),
  new VocabularyItem('сяк`ера', [
    require('./../data/axe1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/axe2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/axe3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('тал`ерка', [
    require('./../data/plate1.jpg'), // https://www.freepik.com/premium-photo/empty-plate-top-view_8230166.htm
    require('./../data/plate2.jpg'), // https://pixabay.com/photos/stack-of-plates-terller-stack-629987/
    require('./../data/plate3.jpg'), // https://unsplash.com/photos/six-assorted-color-plate-on-white-surface-rWsH0jnYSoM
  ], ['сподак']),
  new VocabularyItem('т`арка', [
    require('./../data/grater1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/grater2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/grater3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('трун`а', [
    require('./../data/coffin1.jpg'), // https://www.freepik.com/premium-photo/people-mourning-concept-woman-with-white-lily-flowers-coffin-funeral-church_134220270.htm
    require('./../data/coffin2.jpg'), // https://www.freepik.com/premium-photo/coffins-are-presented-shop-undertaker_27382255.htm
    require('./../data/coffin3.jpg'), // https://pixabay.com/photos/coffins-burial-oaxaca-mexico-5109094/
  ]),
  new VocabularyItem('тр`ус', [
    require('./../data/rabbit1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/rabbit2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/rabbit3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('тр`ускаўка', [
    require('./../data/strawberry1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/strawberry2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/strawberry3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('трысьн`ёг', [], [], 'Канфлікт з "чаротам"?'),
  new VocabularyItem('усх`од', [], [], ''),
  new VocabularyItem('фа`ерка', [
    require('./../data/stove-burner1.jpg'), // https://www.freepik.com/premium-photo/natural-gas-burning-kitchen-gas-stove-dark_7280474.htm
    require('./../data/stove-burner2.jpg'), // https://www.freepik.com/premium-photo/high-angle-view-burning-gas-stove_104644647.htm
    require('./../data/stove-burner3.jpg'), // https://www.freepik.com/free-photo/polished-gas-cooker-after-washingperfectly-clean-gas-cooker-after-being-washed-with-polishing-chemicals-result-washing-burners_25232665.htm
  ]),
  new VocabularyItem('фат`эль', [
    require('./../data/armchair1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/armchair2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/armchair3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('фір`анкі', [
    require('./../data/curtains1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/curtains2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/curtains3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('футар`ал', [
    require('./../data/case1.jpg'), // https://www.freepik.com/premium-photo/high-angle-view-empty-paper-white-background_99966104.htm
    require('./../data/case2.jpg'), // https://www.freepik.com/premium-photo/close-up-guitar-case-footpath_101987565.htm
    require('./../data/case3.jpg'), // https://www.freepik.com/premium-photo/guitar-bag-isolated_361329211.htm
  ]),
  new VocabularyItem('ф`утра', [
    require('./../data/furs1.jpg'), // https://www.freepik.com/free-photo/woman-model-demonstrating-winter-cloths_5852101.htm
    require('./../data/furs2.jpg'), // https://www.freepik.com/free-photo/portrair-fashionable-woman-walking-city-warm-fur-coat-winter-season-cold-weather-wearing-black-cap-street-fashion-trend_10687582.htm
    require('./../data/furs3.jpg'), // https://www.freepik.com/premium-photo/portrait-beautiful-woman-wearing-fur-coat_108806750.htm
  ], ['поўсьць', 'пальчаткі']),
  new VocabularyItem('хал`ява', [
    require('./../data/boot-top1.jpg'), // https://www.freepik.com/free-photo/vertical-shot-woman-wearing-fashionable-brown-leather-kneehigh-boots-outdoors_27573082.htm
    require('./../data/boot-top2.jpg'), // https://www.freepik.com/free-photo/good-looking-sexy-blond-model-white-blouse-leather-skrt-knitted-block-thigh-high-boots-beige_10310209.htm
    require('./../data/boot-top3.jpg'), // https://pixabay.com/photos/rubber-boots-rain-shoes-human-2626461/
  ], ['боты']),
  new VocabularyItem('хв`аля', [
    require('./../data/wave1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/wave2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/wave3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('хмарач`ос', [
    require('./../data/skyscraper1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/skyscraper2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/skyscraper3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('хр`ушч', [
    require('./../data/cockchafer1.jpg'), // https://www.freepik.com/premium-photo/cockchafer-summer-chafer-macro_4702368.htm
    require('./../data/cockchafer2.jpg'), // https://www.freepik.com/premium-photo/cockchafer-summer-chafer-macro_4702366.htm
    require('./../data/cockchafer3.jpg'), // https://www.freepik.com/premium-photo/may-beetle-sitting-twig_157255109.htm
  ]),
  new VocabularyItem('х`устка', [
    require('./../data/shawl1.jpg'), // https://www.freepik.com/premium-ai-image/green-silk-shawl-isolated-white-background-female-accessory_238663991.htm
    require('./../data/shawl2.jpg'), // https://www.freepik.com/free-photo/flamenca-dancer-with-manila-shawl-looking-camera_5228326.htm
    require('./../data/shawl3.jpg'), // https://www.freepik.com/free-photo/businesswoman-black-dress-with-evening-makeup-colorful-lips-red-shawl_7091897.htm
  ]),
  new VocabularyItem('царкв`а', [], [], 'не знайшоў фоткі'),
  new VocabularyItem('цм`ок', [
    require('./../data/dragon1.jpg'), // https://pixabay.com/photos/dragon-steampunk-fantasy-history-5450084/
    require('./../data/dragon2.jpg'), // https://pixabay.com/photos/sculpture-dragon-golden-thailand-177021/
    require('./../data/dragon3.jpg'), // ШІ
  ]),
  new VocabularyItem('ц`укар', [], [], 'не знайшоў фоткі'),
  new VocabularyItem('цук`ерка', [
    require('./../data/candy1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/candy2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/candy3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цыб`уля', [
    require('./../data/onion1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/onion2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/onion3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цыр`ата', [
    require('./../data/plastic-tablecloth1.jpg'), // https://unsplash.com/photos/red-and-white-checkered-table-cloth-bEE5s1M2XIY
    require('./../data/plastic-tablecloth2.jpg'), // https://unsplash.com/photos/brown-wooden-chairs-and-table-c9tYWbe_PH4
    require('./../data/plastic-tablecloth3.jpg'), // https://unsplash.com/photos/white-kitchen-towel-on-table-pdyNBY0WJHA
  ], ['абрус']),
  new VocabularyItem('цьв`ік', [
    require('./../data/nail1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/nail2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/nail3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цьв`іль', [
    require('./../data/mold1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/mold2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/mold3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ц`эгла', [
    require('./../data/brick1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/brick2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/brick3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ц`этлік', [
    require('./../data/tag1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/tag2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/tag3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цягн`ік', [
    require('./../data/train1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/train2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/train3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цял`я', [
    require('./../data/calf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/calf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/calf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цясьн`іна', [
    require('./../data/gorge1.jpg'), // https://www.freepik.com/premium-photo/narrow-gorge-canyon-with-sky_82555633.htm
    require('./../data/gorge2.jpg'), // https://www.freepik.com/premium-photo/scenic-view-black-canyon-gunisson-national-park-montrose-colorado-usa_172751897.htm
    require('./../data/gorge3.jpg'), // https://pixabay.com/photos/mountain-river-ravine-nature-7011475/
  ]),
  new VocabularyItem('чарав`ікі', [
    require('./../data/shoes1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/shoes2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/shoes3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('чарадзей:ка', [
    require('./../data/wizard1.jpg'), // ШІ
    require('./../data/wizard2.jpg'), // ШІ
    require('./../data/wizard3.jpg'), // ШІ
  ]),
  new VocabularyItem('чарг`а', [
    require('./../data/queue1.jpg'), // https://www.freepik.com/premium-photo/people-queue-line-selective-focus_112401206.htm
    require('./../data/queue2.jpg'), // https://unsplash.com/photos/people-standing-on-gray-concrete-floor-during-daytime-ZAbIO5eas9Q
    require('./../data/queue3.jpg'), // https://unsplash.com/photos/people-walking-on-a-shopping-mall-JWEwaHqSAHU
  ]),
  new VocabularyItem('чар`от', [], [], 'Канфлікт з "трысьнягом"?'),
  new VocabularyItem('ч`овен', [
    require('./../data/boat1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/boat2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/boat3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ш`алі', [
    require('./../data/scales-b1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/scales-b2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/scales-b3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ш`алік', [
    require('./../data/scarf1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/scarf2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/scarf3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ], ['хустка']),
  new VocabularyItem('шалуп`іньне', [
    require('./../data/peels1.jpg'), // https://pixabay.com/photos/kitchen-vegetable-knife-food-4869867/
    require('./../data/peels2.jpg'), // https://pixabay.com/photos/lemon-lemon-peel-peeled-citrus-1313643/
    require('./../data/peels3.jpg'), // https://pixabay.com/photos/banana-peel-banana-meal-fruit-1735083/
  ], ['бульба']),
  new VocabularyItem('ш`афа', [
    require('./../data/wardrobe1.jpg'), // https://www.freepik.com/free-photo/wardrobe-renovation-concept_20825379.htm
    require('./../data/wardrobe2.jpg'), // https://www.freepik.com/premium-photo/wooden-shelf-with-white-shirt-hanging-it-pair-white-towels-hanging-wooden-shelf_272484631.htm
    require('./../data/wardrobe3.jpg'), // https://unsplash.com/photos/a-white-closet-with-a-shoe-rack-and-a-handbag-O3ZeDMslEJw
  ], ['паліца', 'вопратка']),
  new VocabularyItem('шаш`ок', [], [], 'Чым дакладна адрозьніваецца ад "тхара"?'),
  new VocabularyItem('шв`о', [
    require('./../data/seam1.jpg'), // https://www.freepik.com/free-photo/fabric-texture-with-seam_1163960.htm
    require('./../data/seam2.jpg'), // https://www.freepik.com/premium-photo/blue-fabric-inner-seam-with-white-threads-background-structure-close-up-macro-view_18159813.htm
    require('./../data/seam3.jpg'), // https://pixabay.com/photos/seam-thread-yarn-twisted-sew-3065051/
  ]),
  new VocabularyItem('шв`орка', [
    require('./../data/leash1.jpg'), // https://www.freepik.com/premium-photo/scene-dog-photoshoot_137673539.htm
    require('./../data/leash2.jpg'), // https://www.freepik.com/premium-photo/portrait-dog-looking-away-footpath_102348100.htm
    require('./../data/leash3.jpg'), // https://www.freepik.com/free-photo/close-up-dog-leash_82342213.htm
  ]),
  new VocabularyItem('шкарп`эткі', [
    require('./../data/socks1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/socks2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/socks3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шкл`о', [], [], ''),
  new VocabularyItem('шпал`еры', [
    require('./../data/wallpapers1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/wallpapers2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/wallpapers3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шр`уба', [
    require('./../data/screw1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/screw2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/screw3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ш`уфлік', [
    require('./../data/shovel1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/shovel2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/shovel3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шуфл`ядка', [
    require('./../data/drawer1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/drawer2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/drawer3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шчамл`ётка', [
    require('./../data/clothespin1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/clothespin2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/clothespin3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ш`ыба', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('ш`ыбеніца', [
    require('./../data/gallows1.jpg'), // https://www.freepik.com/premium-photo/close-up-metallic-structure-against-white-background_126340231.htm
    require('./../data/gallows2.jpg'), // https://pixabay.com/photos/gallows-blue-sky-wooden-frame-rope-858572/
    require('./../data/gallows3.jpg'), // https://unsplash.com/photos/a-rope-tied-to-a-wooden-post-in-front-of-a-building-DX-mB1caQz4
  ]),
  new VocabularyItem('шыд`элак', [
    require('./../data/crochet-hook1.jpg'), // https://www.freepik.com/premium-photo/high-angle-view-crochet-hook-white-background_130832034.htm
    require('./../data/crochet-hook2.jpg'), // https://www.freepik.com/free-photo/close-up-female-knitting_9755048.htm
    require('./../data/crochet-hook3.jpg'), // https://www.freepik.com/premium-photo/two-knitting-multicolored-crochet-hooks-blue-background_16954661.htm
  ]),
  new VocabularyItem('шыпш`ына', [
    require('./../data/dog-rose1.jpg'), // https://www.freepik.com/free-photo/front-view-red-berries-inside-plate-green-background-berry-wild-fruit-health-color_15295664.htm
    require('./../data/dog-rose2.jpg'), // https://www.freepik.com/free-photo/rosehip-bushes-healthy-fresh-red-autumn-fruits-from-nature_23458399.htm
    require('./../data/dog-rose3.jpg'), // https://www.freepik.com/premium-photo/rosehip-isolated-white-background_8422165.htm
  ]),
  new VocabularyItem('ш`эрань', [
    require('./../data/rime1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/rime2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./../data/rime3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('электрав`ік', [], [], 'Не знайшоў фоткі'),
  new VocabularyItem('ядв`аб', [], [], 'Не знайшоў як перадаць'),
  new VocabularyItem('`яйка', [
    require('./../data/egg1.jpg'), // https://www.freepik.com/free-photo/front-view-white-chicken-eggs-bowl-with-copy-space_10989514.htm
    require('./../data/egg2.jpg'), // https://www.freepik.com/free-photo/close-up-eggs-grey-cloth_5598147.htm
    require('./../data/egg3.jpg'), // https://www.freepik.com/free-photo/eggs_3567280.htm
  ]),
  new VocabularyItem('ялав`ец', [], [], 'Не знайшоў як перадаць'),
  new VocabularyItem('ял`іна', [], [], 'Не знайшоў фоткі'),
]

export default vocabulary.filter(x => x.isEnabled);

export const fullVocabulary = vocabulary;
