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
    require('./data/агрэст1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/агрэст2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/агрэст3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ажыны', [
    require('./data/ажыны1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ажыны2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ажыны3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('аловак', [
    require('./data/аловак1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/аловак2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/аловак3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('анёл', [
    require('./data/анёл1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/анёл2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/анёл3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('арэлі', [
    require('./data/арэлі1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/арэлі2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/арэлі3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('асадка', [
    require('./data/асадка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/асадка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/асадка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('багоўка', [
    require('./data/багоўка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/багоўка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/багоўка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('блазан', [
    require('./data/блазан1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/блазан2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/блазан3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('боты', [
    require('./data/боты1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/боты2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/боты3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бохан', [
    require('./data/бохан1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бохан2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бохан3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бульба', [
    require('./data/бульба1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бульба2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бульба3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бурак', [
    require('./data/бурак1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурак2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурак3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бурштын', [
    require('./data/бурштын1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурштын2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бурштын3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бусел', [
    require('./data/бусел1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бусел2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бусел3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('бэз', [
    require('./data/бэз1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бэз2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/бэз3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вазок', [
    require('./data/вазок1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вазок2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вазок3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('валізка', [
    require('./data/валізка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/валізка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/валізка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('валошка', [
    require('./data/валошка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/валошка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/валошка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('вежа', [
    require('./data/вежа1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вежа2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вежа3.jpg'), // Da voli https://creativecommons.org/licenses/by-sa/3.0/ (cropped and resized)
  ]),
  new VocabularyItem('вогнішча', [
    require('./data/вогнішча1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вогнішча2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/вогнішча3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('гаманец', [
    require('./data/гаманец1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гаманец2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гаманец3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('гіль', [
    require('./data/гіль1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гіль2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гіль3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('гузік', [
    require('./data/гузік1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гузік2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гузік3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('гумка', [
    require('./data/гумка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гумка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гумка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('гэбель', [
    require('./data/гэбель1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гэбель2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/гэбель3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('дзьмухавец', [
    require('./data/дзьмухавец1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/дзьмухавец2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/дзьмухавец3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('драбіны', [
    require('./data/драбіны1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/драбіны2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/драбіны3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('дыван', [
    require('./data/дыван1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/дыван2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/дыван3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('журавіны', [
    require('./data/журавіны1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/журавіны2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/журавіны3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('запалка', [
    require('./data/запалка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/запалка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/запалка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('зэдлік', [
    require('./data/зэдлік1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/зэдлік2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/зэдлік3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кавадла', [
    require('./data/кавадла1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кавадла2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кавадла3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кавун', [
    require('./data/кавун1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кавун2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кавун3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кажан', [
    require('./data/кажан1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кажан2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кажан3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('канапа', [
    require('./data/канапа1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/канапа2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/канапа3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('капялюш', [
    require('./data/капялюш1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/капялюш2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/капялюш3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('каралі', [
    require('./data/каралі1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/каралі2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/каралі3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('карункі', [
    require('./data/карункі1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/карункі2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/карункі3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('каўка', [
    require('./data/каўка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/каўка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/каўка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кафля', [
    require('./data/кафля1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кафля2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кафля3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('келіх', [
    require('./data/келіх1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/келіх2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/келіх3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кіпцюры', [
    require('./data/кіпцюры1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кіпцюры2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кіпцюры3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кішэня', [
    require('./data/кішэня1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кішэня2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кішэня3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('конік', [
    require('./data/конік1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/конік2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/конік3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('корак', [
    require('./data/корак1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/корак2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/корак3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кошык', [
    require('./data/кошык1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кошык2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кошык3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('кружэлка', [
    require('./data/кружэлка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кружэлка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/кружэлка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('крэйда', [
    require('./data/крэйда1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/крэйда2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/крэйда3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('куфар', [
    require('./data/куфар1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/куфар2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/куфар3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('лазьня', [
    require('./data/лазьня1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лазьня2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лазьня3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ланцуг', [
    require('./data/ланцуг1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ланцуг2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ланцуг3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('лінарка', [
    require('./data/лінарка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лінарка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лінарка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ліхтар', [
    require('./data/ліхтар1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ліхтар2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ліхтар3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('локшына', [
    require('./data/локшына1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/локшына2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/локшына3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('луска', [
    require('./data/луска1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/луска2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/луска3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('луста', [
    require('./data/луста1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/луста2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/луста3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('люстэрка', [
    require('./data/люстэрка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/люстэрка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/люстэрка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('лядзяк', [
    require('./data/лядзяк1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лядзяк2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лядзяк3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('лялька', [
    require('./data/лялька1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лялька2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/лялька3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('мураш', [
    require('./data/мураш1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/мураш2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/мураш3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('намёт', [
    require('./data/намёт1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/намёт2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/намёт3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('немаўля', [
    require('./data/немаўля1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/немаўля2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/немаўля3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('паліца', [
    require('./data/паліца1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/паліца2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/паліца3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('парасон', [
    require('./data/парасон1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парасон2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парасон3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('парэнчы', [
    require('./data/парэнчы1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парэнчы2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парэнчы3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('парэчкі', [
    require('./data/парэчкі1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парэчкі2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/парэчкі3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('патэльня', [
    require('./data/патэльня1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/патэльня2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/патэльня3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пацеркі', [
    require('./data/пацеркі1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пацеркі2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пацеркі3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пацук', [
    require('./data/пацук1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пацук2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пацук3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('певень', [
    require('./data/певень1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/певень2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/певень3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пігулка', [
    require('./data/пігулка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пігулка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пігулка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('плот', [
    require('./data/плот1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/плот2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/плот3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пляшка', [
    require('./data/пляшка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пляшка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пляшка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('поўня', [
    require('./data/поўня1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/поўня2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/поўня3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('поўсьць', [
    require('./data/поўсьць1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/поўсьць2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/поўсьць3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('прас', [
    require('./data/прас1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/прас2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/прас3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пэндзаль', [
    require('./data/пэндзаль1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пэндзаль2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пэндзаль3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('пялёсткі', [
    require('./data/пялёсткі1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пялёсткі2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/пялёсткі3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('разынкі', [
    require('./data/разынкі1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/разынкі2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/разынкі3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('ровар', [
    require('./data/ровар1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ровар2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/ровар3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('рондаль', [
    require('./data/рондаль1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рондаль2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рондаль3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('рыдлёўка', [
    require('./data/рыдлёўка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рыдлёўка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рыдлёўка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('рэйкі', [
    require('./data/рэйкі1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рэйкі2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/рэйкі3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('скарбонка', [
    require('./data/скарбонка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/скарбонка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/скарбонка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('скрыня', [
    require('./data/скрыня1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/скрыня2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/скрыня3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сланечнік', [
    require('./data/сланечнік1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сланечнік2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сланечнік3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('слімак', [
    require('./data/слімак1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/слімак2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/слімак3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('слоік', [
    require('./data/слоік1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/слоік2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/слоік3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('смагард', [
    require('./data/смагард1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/смагард2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/смагард3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('станік', [
    require('./data/станік1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/станік2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/станік3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('стос', [
    require('./data/стос1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стос2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стос3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('стужка', [
    require('./data/стужка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стужка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стужка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('стырно', [
    require('./data/стырно1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стырно2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/стырно3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сумёт', [
    require('./data/сумёт1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сумёт2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сумёт3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('суніцы', [
    require('./data/суніцы1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/суніцы2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/суніцы3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сьвердзел', [
    require('./data/сьвердзел1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сьвердзел2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сьвердзел3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сьцізорык', [
    require('./data/сьцізорык1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сьцізорык2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сьцізорык3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('сякера', [
    require('./data/сякера1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сякера2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/сякера3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('тарка', [
    require('./data/тарка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/тарка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/тарка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('трус', [
    require('./data/трус1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/трус2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/трус3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('трускаўка', [
    require('./data/трускаўка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/трускаўка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/трускаўка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('фатэль', [
    require('./data/фатэль1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/фатэль2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/фатэль3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('фіранкі', [
    require('./data/фіранкі1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/фіранкі2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/фіранкі3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('хваля', [
    require('./data/хваля1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/хваля2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/хваля3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('хмарачос', [
    require('./data/хмарачос1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/хмарачос2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/хмарачос3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цукерка', [
    require('./data/цукерка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цукерка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цукерка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цыбуля', [
    require('./data/цыбуля1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цыбуля2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цыбуля3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цьвік', [
    require('./data/цьвік1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цьвік2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цьвік3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цьвіль', [
    require('./data/цьвіль1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цьвіль2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цьвіль3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цэгла', [
    require('./data/цэгла1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цэгла2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цэгла3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цэтлік', [
    require('./data/цэтлік1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цэтлік2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цэтлік3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цягнік', [
    require('./data/цягнік1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цягнік2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цягнік3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('цяля', [
    require('./data/цяля1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цяля2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/цяля3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('чаравікі', [
    require('./data/чаравікі1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/чаравікі2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/чаравікі3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шалі', [
    require('./data/шалі1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шалі2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шалі3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шалік', [
    require('./data/шалік1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шалік2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шалік3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шкарпэткі', [
    require('./data/шкарпэткі1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шкарпэткі2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шкарпэткі3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шпалеры', [
    require('./data/шпалеры1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шпалеры2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шпалеры3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шруба', [
    require('./data/шруба1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шруба2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шруба3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шуфлік', [
    require('./data/шуфлік1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шуфлік2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шуфлік3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шуфлядка', [
    require('./data/шуфлядка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шуфлядка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шуфлядка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шчамлётка', [
    require('./data/шчамлётка1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шчамлётка2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шчамлётка3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
  new VocabularyItem('шэрань', [
    require('./data/шэрань1.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шэрань2.jpg'), // Pixabay https://pixabay.com/service/terms/#license
    require('./data/шэрань3.jpg'), // Pixabay https://pixabay.com/service/terms/#license
  ]),
];

export default vocabulary;
