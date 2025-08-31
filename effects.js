// Effects only (can be edited without touching app.js)
/** Equip labels & states are defined in app.js */
// Per-gear per-star effects
const EFFECT_TABLE = {
  WEAPON:{
    E:{1:{critRate:1},2:{critRate:2},3:{critRate:3},4:{critRate:5},5:{critRate:8}},
    V:{1:{critDamage:10},2:{critDamage:20},3:{critDamage:30},4:{critDamage:40},5:{critDamage:50}},
    C:{1:{skillDamage:1},2:{skillDamage:2},3:{skillDamage:3},4:{skillDamage:4},5:{skillDamage:5}}
  },
  ARMOR:{ E:{1:{toChilled:2}}, V:{2:{clarity:5}}, C:{2:{vulnerability:10}} },
  NECKLACE:{ E:{1:{toWeakened:2}}, V:{1:{toPoisoned:2}}, C:{4:{toLacerated:4}} },
  BELT:{ E:{}, V:{}, C:{}, legend:{stardustSash:5} },
  BRACER:{ E:{1:{shieldDamage:2}}, V:{3:{petResonance:10}} }, // C 없음
  BOOTS:{ E:{}, V:{}, legend:{glacialBoots:5} }                // C 없음
};

// C 3의 배수 공통 보너스 (수치 자유 편집)
const C_MULTIPLE_BONUS = {
  3:{}, 6:{}, 9:{}
};
