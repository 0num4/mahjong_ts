import { Yaku } from "../../../yaku";
import { is_pon_or_kan } from "../../../utils";
import { CHUN, HAKU, HATSU } from "../../../constants";

export class Daisangen extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id?: number) {
    super(yaku_id);
    this.tenhou_id = 39;
    this.name = "Daisangen";
    this.han_open = 13;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  set_attributes(): void {
    this.tenhou_id = 39;
    this.name = "Daisangen";
    this.han_open = 13;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    let dragons = [CHUN, HAKU, HATSU];
    return (
      hand.filter((item) => is_pon_or_kan(item) && dragons.includes(item[0]))
        .length == 3
    );
  }
}
