import { Yaku } from "../../../yaku";
import { is_pon_or_kan } from "../../../utils";
import { EAST, NORTH, SOUTH, WEST } from "../../../constants";

export class DaiSuushii extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    super(yaku_id);
    this.tenhou_id = 49;
    this.name = "Dai Suushii";
    this.han_open = 26;
    this.han_closed = 26;
    this.is_yakuman = true;
  }

  set_attributes(): void {
    this.tenhou_id = 49;
    this.name = "Dai Suushii";
    this.han_open = 26;
    this.han_closed = 26;
    this.is_yakuman = true;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    let pon_sets = hand.filter((item) => is_pon_or_kan(item));
    if (pon_sets.length != 4) {
      return false;
    }

    let count_wind_sets = 0;
    let winds = [EAST, SOUTH, WEST, NORTH];
    for (let item of pon_sets) {
      if (is_pon_or_kan(item) && winds.includes(item[0])) {
        count_wind_sets += 1;
      }
    }

    return count_wind_sets == 4;
  }
}
