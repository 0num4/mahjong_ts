// Import the superclass here
// import { Yaku } from "../Yaku";

export class Tsumo extends Yaku {
  constructor(yakuId: number) {
    super(yakuId);
  }

  setAttributes() {
    this.tenhouId = 0;
    this.name = "Menzen Tsumo";
    this.hanOpen = null;
    this.hanClosed = 1;
    this.isYakuman = false;
  }

  isConditionMet(hand: any, ...args: any[]): boolean {
    // was it here or not is controlled by superior code
    return true;
  }
}
