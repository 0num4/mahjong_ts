import { Yaku } from "../../yaku";
import { is_chi, is_pon_or_kan, is_pair } from "../../utils";

export class Toitoi extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    super(yaku_id);
    this.tenhou_id = 28;
    this.name = "Toitoi";
    this.han_open = 2;
    this.han_closed = 2;
    this.is_yakuman = false;
  }

  set_attributes(): void {
    this.tenhou_id = 28;
    this.name = "Toitoi";
    this.han_open = 2;
    this.han_closed = 2;
    this.is_yakuman = false;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    let count_of_pon = hand.filter((item) => is_pon_or_kan(item)).length;
    return count_of_pon == 4;
  }
}
