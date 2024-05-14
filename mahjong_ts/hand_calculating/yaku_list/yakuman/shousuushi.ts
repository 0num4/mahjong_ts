import { EAST, NORTH, SOUTH, WEST } from "../../../constants";
import { is_pair, is_pon_or_kan } from "../../../utils";
import { Yaku } from "../../../yaku";

export class Shousuushii extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    super(yaku_id);
    this.tenhou_id = 50;
    this.name = "Shousuushii";
    this.han_open = 13;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  set_attributes(): void {
    this.tenhou_id = 50;
    this.name = "Shousuushii";
    this.han_open = 13;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    let pon_sets = hand.filter((item) => is_pon_or_kan(item));
    if (pon_sets.length < 3) {
      return false;
    }

    let count_of_wind_sets = 0;
    let wind_pair = 0;
    let winds = [EAST, SOUTH, WEST, NORTH];
    for (let item of hand) {
      if (is_pon_or_kan(item) && winds.includes(item[0])) {
        count_of_wind_sets += 1;
      }

      if (is_pair(item) && winds.includes(item[0])) {
        wind_pair += 1;
      }
    }

    return count_of_wind_sets == 3 && wind_pair == 1;
  }
}
