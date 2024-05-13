import { Yaku } from "../../yaku";
export class Tsumo extends Yaku {
  constructor(yakuId: number) {
    super(yakuId);
  }

  set_attributes() {
    this.tenhou_id = 0;
    this.name = "Menzen Tsumo";
    this.han_open = null;
    this.han_closed = 1;
    this.is_yakuman = false;
  }

  isConditionMet(hand: any, ...args: any[]): boolean {
    // was it here or not is controlled by superior code
    return true;
  }
}
