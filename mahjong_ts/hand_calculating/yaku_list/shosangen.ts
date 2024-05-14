import { CHUN, HAKU, HATSU } from "../../constants";
import { is_pair, is_pon_or_kan } from "../../utils";
import { Yaku } from "../../yaku";

export class Shosangen extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    super(yaku_id);
    this.tenhou_id = 30;
    this.name = "Shou Sangen";
    this.han_open = 2;
    this.han_closed = 2;
    this.is_yakuman = false;
  }

  set_attributes(): void {
    this.tenhou_id = 30;
    this.name = "Shou Sangen";
    this.han_open = 2;
    this.han_closed = 2;
    this.is_yakuman = false;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    let dragons = [CHUN, HAKU, HATSU];
    let count_of_conditions = 0;
    for (let item of hand) {
      // dragon pon or pair
      if ((is_pair(item) || is_pon_or_kan(item)) && dragons.includes(item[0])) {
        count_of_conditions += 1;
      }
    }
    return count_of_conditions == 3;
  }
}
