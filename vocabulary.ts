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
    require('./data/агрэст1.jpg'),
    require('./data/агрэст2.jpg'),
    require('./data/агрэст3.jpg'),
  ]),
  new VocabularyItem('ажыны', [
    require('./data/ажыны1.jpg'),
    require('./data/ажыны2.jpg'),
    require('./data/ажыны3.jpg'),
  ]),
  new VocabularyItem('аловак', [
    require('./data/аловак1.jpg'),
    require('./data/аловак2.jpg'),
    require('./data/аловак3.jpg'),
  ]),
  new VocabularyItem('анёл', [
    require('./data/анёл1.jpg'),
    require('./data/анёл2.jpg'),
    require('./data/анёл3.jpg'),
  ]),
  new VocabularyItem('арэлі', [
    require('./data/арэлі1.jpg'),
    require('./data/арэлі2.jpg'),
    require('./data/арэлі3.jpg'),
  ]),
  new VocabularyItem('асадка', [
    require('./data/асадка1.jpg'),
    require('./data/асадка2.jpg'),
    require('./data/асадка3.jpg'),
  ]),
  new VocabularyItem('багоўка', [
    require('./data/багоўка1.jpg'),
    require('./data/багоўка2.jpg'),
    require('./data/багоўка3.jpg'),
  ]),
  new VocabularyItem('блазан', [
    require('./data/блазан1.jpg'),
    require('./data/блазан2.jpg'),
    require('./data/блазан3.jpg'),
  ]),
  new VocabularyItem('боты', [
    require('./data/боты1.jpg'),
    require('./data/боты2.jpg'),
    require('./data/боты3.jpg'),
  ]),
  new VocabularyItem('бохан', [
    require('./data/бохан1.jpg'),
    require('./data/бохан2.jpg'),
    require('./data/бохан3.jpg'),
  ]),
  new VocabularyItem('бульба', [
    require('./data/бульба1.jpg'),
    require('./data/бульба2.jpg'),
    require('./data/бульба3.jpg'),
  ]),
  new VocabularyItem('бурак', [
    require('./data/бурак1.jpg'),
    require('./data/бурак2.jpg'),
    require('./data/бурак3.jpg'),
  ]),
  new VocabularyItem('бурштын', [
    require('./data/бурштын1.jpg'),
    require('./data/бурштын2.jpg'),
    require('./data/бурштын3.jpg'),
  ]),
  new VocabularyItem('бусел', [
    require('./data/бусел1.jpg'),
    require('./data/бусел2.jpg'),
    require('./data/бусел3.jpg'),
  ]),
  new VocabularyItem('бэз', [
    require('./data/бэз1.jpg'),
    require('./data/бэз2.jpg'),
    require('./data/бэз3.jpg'),
  ]),
  new VocabularyItem('вазок', [
    require('./data/вазок1.jpg'),
    require('./data/вазок2.jpg'),
    require('./data/вазок3.jpg'),
  ]),
  new VocabularyItem('валізка', [
    require('./data/валізка1.jpg'),
    require('./data/валізка2.jpg'),
    require('./data/валізка3.jpg'),
  ]),
  new VocabularyItem('валошка', [
    require('./data/валошка1.jpg'),
    require('./data/валошка2.jpg'),
    require('./data/валошка3.jpg'),
  ]),
  new VocabularyItem('вежа', [
    require('./data/вежа1.jpg'),
    require('./data/вежа2.jpg'),
    require('./data/вежа3.jpg'),
  ]),
  new VocabularyItem('вогнішча', [
    require('./data/вогнішча1.jpg'),
    require('./data/вогнішча2.jpg'),
    require('./data/вогнішча3.jpg'),
  ]),
  new VocabularyItem('гаманец', [
    require('./data/гаманец1.jpg'),
    require('./data/гаманец2.jpg'),
    require('./data/гаманец3.jpg'),
  ]),
  new VocabularyItem('гіль', [
    require('./data/гіль1.jpg'),
    require('./data/гіль2.jpg'),
    require('./data/гіль3.jpg'),
  ]),
  new VocabularyItem('гузік', [
    require('./data/гузік1.jpg'),
    require('./data/гузік2.jpg'),
    require('./data/гузік3.jpg'),
  ]),
  new VocabularyItem('гумка', [
    require('./data/гумка1.jpg'),
    require('./data/гумка2.jpg'),
    require('./data/гумка3.jpg'),
  ]),
  new VocabularyItem('гэбель', [
    require('./data/гэбель1.jpg'),
    require('./data/гэбель2.jpg'),
    require('./data/гэбель3.jpg'),
  ]),
  new VocabularyItem('дзьмухавец', [
    require('./data/дзьмухавец1.jpg'),
    require('./data/дзьмухавец2.jpg'),
    require('./data/дзьмухавец3.jpg'),
  ]),
  new VocabularyItem('драбіны', [
    require('./data/драбіны1.jpg'),
    require('./data/драбіны2.jpg'),
    require('./data/драбіны3.jpg'),
  ]),
  new VocabularyItem('дыван', [
    require('./data/дыван1.jpg'),
    require('./data/дыван2.jpg'),
    require('./data/дыван3.jpg'),
  ]),
  new VocabularyItem('журавіны', [
    require('./data/журавіны1.jpg'),
    require('./data/журавіны2.jpg'),
    require('./data/журавіны3.jpg'),
  ]),
  new VocabularyItem('запалка', [
    require('./data/запалка1.jpg'),
    require('./data/запалка2.jpg'),
    require('./data/запалка3.jpg'),
  ]),
  new VocabularyItem('зэдлік', [
    require('./data/зэдлік1.jpg'),
    require('./data/зэдлік2.jpg'),
    require('./data/зэдлік3.jpg'),
  ]),
  new VocabularyItem('кавадла', [
    require('./data/кавадла1.jpg'),
    require('./data/кавадла2.jpg'),
    require('./data/кавадла3.jpg'),
  ]),
  new VocabularyItem('кавун', [
    require('./data/кавун1.jpg'),
    require('./data/кавун2.jpg'),
    require('./data/кавун3.jpg'),
  ]),
  new VocabularyItem('кажан', [
    require('./data/кажан1.jpg'),
    require('./data/кажан2.jpg'),
    require('./data/кажан3.jpg'),
  ]),
  new VocabularyItem('канапа', [
    require('./data/канапа1.jpg'),
    require('./data/канапа2.jpg'),
    require('./data/канапа3.jpg'),
  ]),
  new VocabularyItem('капялюш', [
    require('./data/капялюш1.jpg'),
    require('./data/капялюш2.jpg'),
    require('./data/капялюш3.jpg'),
  ]),
  new VocabularyItem('каралі', [
    require('./data/каралі1.jpg'),
    require('./data/каралі2.jpg'),
    require('./data/каралі3.jpg'),
  ]),
  new VocabularyItem('карункі', [
    require('./data/карункі1.jpg'),
    require('./data/карункі2.jpg'),
    require('./data/карункі3.jpg'),
  ]),
  new VocabularyItem('каўка', [
    require('./data/каўка1.jpg'),
    require('./data/каўка2.jpg'),
    require('./data/каўка3.jpg'),
  ]),
  new VocabularyItem('кафля', [
    require('./data/кафля1.jpg'),
    require('./data/кафля2.jpg'),
    require('./data/кафля3.jpg'),
  ]),
  new VocabularyItem('келіх', [
    require('./data/келіх1.jpg'),
    require('./data/келіх2.jpg'),
    require('./data/келіх3.jpg'),
  ]),
  new VocabularyItem('кіпцюры', [
    require('./data/кіпцюры1.jpg'),
    require('./data/кіпцюры2.jpg'),
    require('./data/кіпцюры3.jpg'),
  ]),
  new VocabularyItem('кішэня', [
    require('./data/кішэня1.jpg'),
    require('./data/кішэня2.jpg'),
    require('./data/кішэня3.jpg'),
  ]),
  new VocabularyItem('конік', [
    require('./data/конік1.jpg'),
    require('./data/конік2.jpg'),
    require('./data/конік3.jpg'),
  ]),
  new VocabularyItem('корак', [
    require('./data/корак1.jpg'),
    require('./data/корак2.jpg'),
    require('./data/корак3.jpg'),
  ]),
  new VocabularyItem('кошык', [
    require('./data/кошык1.jpg'),
    require('./data/кошык2.jpg'),
    require('./data/кошык3.jpg'),
  ]),
  new VocabularyItem('кружэлка', [
    require('./data/кружэлка1.jpg'),
    require('./data/кружэлка2.jpg'),
    require('./data/кружэлка3.jpg'),
  ]),
  new VocabularyItem('крэйда', [
    require('./data/крэйда1.jpg'),
    require('./data/крэйда2.jpg'),
    require('./data/крэйда3.jpg'),
  ]),
  new VocabularyItem('куфар', [
    require('./data/куфар1.jpg'),
    require('./data/куфар2.jpg'),
    require('./data/куфар3.jpg'),
  ]),
  new VocabularyItem('лазьня', [
    require('./data/лазьня1.jpg'),
    require('./data/лазьня2.jpg'),
    require('./data/лазьня3.jpg'),
  ]),
  new VocabularyItem('ланцуг', [
    require('./data/ланцуг1.jpg'),
    require('./data/ланцуг2.jpg'),
    require('./data/ланцуг3.jpg'),
  ]),
  new VocabularyItem('лінарка', [
    require('./data/лінарка1.jpg'),
    require('./data/лінарка2.jpg'),
    require('./data/лінарка3.jpg'),
  ]),
  new VocabularyItem('ліхтар', [
    require('./data/ліхтар1.jpg'),
    require('./data/ліхтар2.jpg'),
    require('./data/ліхтар3.jpg'),
  ]),
  new VocabularyItem('локшына', [
    require('./data/локшына1.jpg'),
    require('./data/локшына2.jpg'),
    require('./data/локшына3.jpg'),
  ]),
  new VocabularyItem('луска', [
    require('./data/луска1.jpg'),
    require('./data/луска2.jpg'),
    require('./data/луска3.jpg'),
  ]),
  new VocabularyItem('луста', [
    require('./data/луста1.jpg'),
    require('./data/луста2.jpg'),
    require('./data/луста3.jpg'),
  ]),
  new VocabularyItem('люстэрка', [
    require('./data/люстэрка1.jpg'),
    require('./data/люстэрка2.jpg'),
    require('./data/люстэрка3.jpg'),
  ]),
  new VocabularyItem('лядзяк', [
    require('./data/лядзяк1.jpg'),
    require('./data/лядзяк2.jpg'),
    require('./data/лядзяк3.jpg'),
  ]),
  new VocabularyItem('лялька', [
    require('./data/лялька1.jpg'),
    require('./data/лялька2.jpg'),
    require('./data/лялька3.jpg'),
  ]),
  new VocabularyItem('мураш', [
    require('./data/мураш1.jpg'),
    require('./data/мураш2.jpg'),
    require('./data/мураш3.jpg'),
  ]),
  new VocabularyItem('намёт', [
    require('./data/намёт1.jpg'),
    require('./data/намёт2.jpg'),
    require('./data/намёт3.jpg'),
  ]),
  new VocabularyItem('немаўля', [
    require('./data/немаўля1.jpg'),
    require('./data/немаўля2.jpg'),
    require('./data/немаўля3.jpg'),
  ]),
  new VocabularyItem('паліца', [
    require('./data/паліца1.jpg'),
    require('./data/паліца2.jpg'),
    require('./data/паліца3.jpg'),
  ]),
  new VocabularyItem('парасон', [
    require('./data/парасон1.jpg'),
    require('./data/парасон2.jpg'),
    require('./data/парасон3.jpg'),
  ]),
  new VocabularyItem('парэнчы', [
    require('./data/парэнчы1.jpg'),
    require('./data/парэнчы2.jpg'),
    require('./data/парэнчы3.jpg'),
  ]),
  new VocabularyItem('парэчкі', [
    require('./data/парэчкі1.jpg'),
    require('./data/парэчкі2.jpg'),
    require('./data/парэчкі3.jpg'),
  ]),
  new VocabularyItem('патэльня', [
    require('./data/патэльня1.jpg'),
    require('./data/патэльня2.jpg'),
    require('./data/патэльня3.jpg'),
  ]),
  new VocabularyItem('пацеркі', [
    require('./data/пацеркі1.jpg'),
    require('./data/пацеркі2.jpg'),
    require('./data/пацеркі3.jpg'),
  ]),
  new VocabularyItem('пацук', [
    require('./data/пацук1.jpg'),
    require('./data/пацук2.jpg'),
    require('./data/пацук3.jpg'),
  ]),
  new VocabularyItem('певень', [
    require('./data/певень1.jpg'),
    require('./data/певень2.jpg'),
    require('./data/певень3.jpg'),
  ]),
  new VocabularyItem('пігулка', [
    require('./data/пігулка1.jpg'),
    require('./data/пігулка2.jpg'),
    require('./data/пігулка3.jpg'),
  ]),
  new VocabularyItem('плот', [
    require('./data/плот1.jpg'),
    require('./data/плот2.jpg'),
    require('./data/плот3.jpg'),
  ]),
  new VocabularyItem('пляшка', [
    require('./data/пляшка1.jpg'),
    require('./data/пляшка2.jpg'),
    require('./data/пляшка3.jpg'),
  ]),
  new VocabularyItem('поўня', [
    require('./data/поўня1.jpg'),
    require('./data/поўня2.jpg'),
    require('./data/поўня3.jpg'),
  ]),
  new VocabularyItem('поўсьць', [
    require('./data/поўсьць1.jpg'),
    require('./data/поўсьць2.jpg'),
    require('./data/поўсьць3.jpg'),
  ]),
  new VocabularyItem('прас', [
    require('./data/прас1.jpg'),
    require('./data/прас2.jpg'),
    require('./data/прас3.jpg'),
  ]),
  new VocabularyItem('пэндзаль', [
    require('./data/пэндзаль1.jpg'),
    require('./data/пэндзаль2.jpg'),
    require('./data/пэндзаль3.jpg'),
  ]),
  new VocabularyItem('пялёсткі', [
    require('./data/пялёсткі1.jpg'),
    require('./data/пялёсткі2.jpg'),
    require('./data/пялёсткі3.jpg'),
  ]),
  new VocabularyItem('разынкі', [
    require('./data/разынкі1.jpg'),
    require('./data/разынкі2.jpg'),
    require('./data/разынкі3.jpg'),
  ]),
  new VocabularyItem('ровар', [
    require('./data/ровар1.jpg'),
    require('./data/ровар2.jpg'),
    require('./data/ровар3.jpg'),
  ]),
  new VocabularyItem('рондаль', [
    require('./data/рондаль1.jpg'),
    require('./data/рондаль2.jpg'),
    require('./data/рондаль3.jpg'),
  ]),
  new VocabularyItem('рыдлёўка', [
    require('./data/рыдлёўка1.jpg'),
    require('./data/рыдлёўка2.jpg'),
    require('./data/рыдлёўка3.jpg'),
  ]),
  new VocabularyItem('рэйкі', [
    require('./data/рэйкі1.jpg'),
    require('./data/рэйкі2.jpg'),
    require('./data/рэйкі3.jpg'),
  ]),
  new VocabularyItem('скарбонка', [
    require('./data/скарбонка1.jpg'),
    require('./data/скарбонка2.jpg'),
    require('./data/скарбонка3.jpg'),
  ]),
  new VocabularyItem('скрыня', [
    require('./data/скрыня1.jpg'),
    require('./data/скрыня2.jpg'),
    require('./data/скрыня3.jpg'),
  ]),
  new VocabularyItem('сланечнік', [
    require('./data/сланечнік1.jpg'),
    require('./data/сланечнік2.jpg'),
    require('./data/сланечнік3.jpg'),
  ]),
  new VocabularyItem('слімак', [
    require('./data/слімак1.jpg'),
    require('./data/слімак2.jpg'),
    require('./data/слімак3.jpg'),
  ]),
  new VocabularyItem('слоік', [
    require('./data/слоік1.jpg'),
    require('./data/слоік2.jpg'),
    require('./data/слоік3.jpg'),
  ]),
  new VocabularyItem('смагард', [
    require('./data/смагард1.jpg'),
    require('./data/смагард2.jpg'),
    require('./data/смагард3.jpg'),
  ]),
  new VocabularyItem('станік', [
    require('./data/станік1.jpg'),
    require('./data/станік2.jpg'),
    require('./data/станік3.jpg'),
  ]),
  new VocabularyItem('стос', [
    require('./data/стос1.jpg'),
    require('./data/стос2.jpg'),
    require('./data/стос3.jpg'),
  ]),
  new VocabularyItem('стужка', [
    require('./data/стужка1.jpg'),
    require('./data/стужка2.jpg'),
    require('./data/стужка3.jpg'),
  ]),
  new VocabularyItem('стырно', [
    require('./data/стырно1.jpg'),
    require('./data/стырно2.jpg'),
    require('./data/стырно3.jpg'),
  ]),
  new VocabularyItem('сумёт', [
    require('./data/сумёт1.jpg'),
    require('./data/сумёт2.jpg'),
    require('./data/сумёт3.jpg'),
  ]),
  new VocabularyItem('суніцы', [
    require('./data/суніцы1.jpg'),
    require('./data/суніцы2.jpg'),
    require('./data/суніцы3.jpg'),
  ]),
  new VocabularyItem('сьвердзел', [
    require('./data/сьвердзел1.jpg'),
    require('./data/сьвердзел2.jpg'),
    require('./data/сьвердзел3.jpg'),
  ]),
  new VocabularyItem('сьцізорык', [
    require('./data/сьцізорык1.jpg'),
    require('./data/сьцізорык2.jpg'),
    require('./data/сьцізорык3.jpg'),
  ]),
  new VocabularyItem('сякера', [
    require('./data/сякера1.jpg'),
    require('./data/сякера2.jpg'),
    require('./data/сякера3.jpg'),
  ]),
  new VocabularyItem('тарка', [
    require('./data/тарка1.jpg'),
    require('./data/тарка2.jpg'),
    require('./data/тарка3.jpg'),
  ]),
  new VocabularyItem('трус', [
    require('./data/трус1.jpg'),
    require('./data/трус2.jpg'),
    require('./data/трус3.jpg'),
  ]),
  new VocabularyItem('трускаўка', [
    require('./data/трускаўка1.jpg'),
    require('./data/трускаўка2.jpg'),
    require('./data/трускаўка3.jpg'),
  ]),
  new VocabularyItem('фатэль', [
    require('./data/фатэль1.jpg'),
    require('./data/фатэль2.jpg'),
    require('./data/фатэль3.jpg'),
  ]),
  new VocabularyItem('фіранкі', [
    require('./data/фіранкі1.jpg'),
    require('./data/фіранкі2.jpg'),
    require('./data/фіранкі3.jpg'),
  ]),
  new VocabularyItem('хваля', [
    require('./data/хваля1.jpg'),
    require('./data/хваля2.jpg'),
    require('./data/хваля3.jpg'),
  ]),
  new VocabularyItem('хмарачос', [
    require('./data/хмарачос1.jpg'),
    require('./data/хмарачос2.jpg'),
    require('./data/хмарачос3.jpg'),
  ]),
  new VocabularyItem('цукерка', [
    require('./data/цукерка1.jpg'),
    require('./data/цукерка2.jpg'),
    require('./data/цукерка3.jpg'),
  ]),
  new VocabularyItem('цыбуля', [
    require('./data/цыбуля1.jpg'),
    require('./data/цыбуля2.jpg'),
    require('./data/цыбуля3.jpg'),
  ]),
  new VocabularyItem('цьвік', [
    require('./data/цьвік1.jpg'),
    require('./data/цьвік2.jpg'),
    require('./data/цьвік3.jpg'),
  ]),
  new VocabularyItem('цьвіль', [
    require('./data/цьвіль1.jpg'),
    require('./data/цьвіль2.jpg'),
    require('./data/цьвіль3.jpg'),
  ]),
  new VocabularyItem('цэгла', [
    require('./data/цэгла1.jpg'),
    require('./data/цэгла2.jpg'),
    require('./data/цэгла3.jpg'),
  ]),
  new VocabularyItem('цэтлік', [
    require('./data/цэтлік1.jpg'),
    require('./data/цэтлік2.jpg'),
    require('./data/цэтлік3.jpg'),
  ]),
  new VocabularyItem('цягнік', [
    require('./data/цягнік1.jpg'),
    require('./data/цягнік2.jpg'),
    require('./data/цягнік3.jpg'),
  ]),
  new VocabularyItem('цяля', [
    require('./data/цяля1.jpg'),
    require('./data/цяля2.jpg'),
    require('./data/цяля3.jpg'),
  ]),
  new VocabularyItem('чаравікі', [
    require('./data/чаравікі1.jpg'),
    require('./data/чаравікі2.jpg'),
    require('./data/чаравікі3.jpg'),
  ]),
  new VocabularyItem('шалі', [
    require('./data/шалі1.jpg'),
    require('./data/шалі2.jpg'),
    require('./data/шалі3.jpg'),
  ]),
  new VocabularyItem('шалік', [
    require('./data/шалік1.jpg'),
    require('./data/шалік2.jpg'),
    require('./data/шалік3.jpg'),
  ]),
  new VocabularyItem('шкарпэткі', [
    require('./data/шкарпэткі1.jpg'),
    require('./data/шкарпэткі2.jpg'),
    require('./data/шкарпэткі3.jpg'),
  ]),
  new VocabularyItem('шпалеры', [
    require('./data/шпалеры1.jpg'),
    require('./data/шпалеры2.jpg'),
    require('./data/шпалеры3.jpg'),
  ]),
  new VocabularyItem('шруба', [
    require('./data/шруба1.jpg'),
    require('./data/шруба2.jpg'),
    require('./data/шруба3.jpg'),
  ]),
  new VocabularyItem('шуфлік', [
    require('./data/шуфлік1.jpg'),
    require('./data/шуфлік2.jpg'),
    require('./data/шуфлік3.jpg'),
  ]),
  new VocabularyItem('шуфлядка', [
    require('./data/шуфлядка1.jpg'),
    require('./data/шуфлядка2.jpg'),
    require('./data/шуфлядка3.jpg'),
  ]),
  new VocabularyItem('шчамлётка', [
    require('./data/шчамлётка1.jpg'),
    require('./data/шчамлётка2.jpg'),
    require('./data/шчамлётка3.jpg'),
  ]),
  new VocabularyItem('шэрань', [
    require('./data/шэрань1.jpg'),
    require('./data/шэрань2.jpg'),
    require('./data/шэрань3.jpg'),
  ]),
];

export default vocabulary;
