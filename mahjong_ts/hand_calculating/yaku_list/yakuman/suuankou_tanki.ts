import { Yaku } from "../../../yaku";
import { is_pair, is_pon_or_kan } from "../../../utils";

export class SuuankouTanki extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number | null;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    super(yaku_id);
    this.tenhou_id = 46;
    this.name = "Suuankou Tanki";
    this.han_open = null;
    this.han_closed = 26;
    this.is_yakuman = true;
  }

  set_attributes(): void {
    this.tenhou_id = 46;
    this.name = "Suuankou Tanki";
    this.han_open = null;
    this.han_closed = 26;
    this.is_yakuman = true;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    let pairs = 0;
    let pons = 0;
    for (let item of hand) {
      if (is_pair(item)) {
        pairs += 1;
      } else if (is_pon_or_kan(item)) {
        pons += 1;
      }
    }

    return pairs == 1 && pons == 4;
  }
}
