export class VocabularyItem {
  constructor(word: string, images: any[]) {
    this.word = word;
    this.images = images;
  }

  word: string;
  images: any[];
}

const vocabulary = [
  new VocabularyItem('агрэст', [
    require('./data/gooseberry1.jpg'),
    require('./data/gooseberry2.jpg'),
    require('./data/gooseberry3.jpg'),
  ]),
  new VocabularyItem('ажыны', [
    require('./data/blackberries1.jpg'),
    require('./data/blackberries2.jpg'),
    require('./data/blackberries3.jpg'),
  ]),
  new VocabularyItem('аловак', [
    require('./data/pencil1.jpg'),
    require('./data/pencil2.jpg'),
    require('./data/pencil3.jpg'),
  ]),
  new VocabularyItem('анёл', [
    require('./data/angel1.jpg'),
    require('./data/angel2.jpg'),
    require('./data/angel3.jpg'),
  ]),
  new VocabularyItem('арэлі', [
    require('./data/swing1.jpg'),
    require('./data/swing2.jpg'),
    require('./data/swing3.jpg'),
  ]),
  new VocabularyItem('асадка', [
    require('./data/pen1.jpg'),
    require('./data/pen2.jpg'),
    require('./data/pen3.jpg'),
  ]),
  new VocabularyItem('багоўка', [
    require('./data/ladybug1.jpg'),
    require('./data/ladybug2.jpg'),
    require('./data/ladybug3.jpg'),
  ]),
  new VocabularyItem('блазан', [
    require('./data/jester1.jpg'),
    require('./data/jester2.jpg'),
    require('./data/jester3.jpg'),
  ]),
  new VocabularyItem('боты', [
    require('./data/boots1.jpg'),
    require('./data/boots2.jpg'),
    require('./data/boots3.jpg'),
  ]),
  new VocabularyItem('бохан', [
    require('./data/loaf1.jpg'),
    require('./data/loaf2.jpg'),
    require('./data/loaf3.jpg'),
  ]),
  new VocabularyItem('бусел', [
    require('./data/stork1.jpg'),
    require('./data/stork2.jpg'),
    require('./data/stork3.jpg'),
  ]),
  new VocabularyItem('бэз', [
    require('./data/lilac1.jpg'),
    require('./data/lilac2.jpg'),
    require('./data/lilac3.jpg'),
  ]),
];

export default vocabulary;
