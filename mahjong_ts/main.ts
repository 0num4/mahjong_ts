// yaku.tsを初期化

import { Tsumo } from "./hand_calculating/yaku_list/tsumo";

const tsumo = new Tsumo(1);
console.log(tsumo.toString());
console.log(tsumo.isConditionMet(null));
