import { Yaku } from "../../yaku";
import { is_man, is_pin, is_sou } from "../../utils";
import { HONOR_INDICES } from "../../constants";

export class Honitsu extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    super(yaku_id);
    this.tenhou_id = 34;
    this.name = "Honitsu";
    this.han_open = 2;
    this.han_closed = 3;
    this.is_yakuman = false;
  }

  set_attributes(): void {
    this.tenhou_id = 34;
    this.name = "Honitsu";
    this.han_open = 2;
    this.han_closed = 3;
    this.is_yakuman = false;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    let honor_sets = 0;
    let sou_sets = 0;
    let pin_sets = 0;
    let man_sets = 0;
    for (let item of hand) {
      if (HONOR_INDICES.includes(item[0])) {
        honor_sets += 1;
      }

      if (is_sou(item[0])) {
        sou_sets += 1;
      } else if (is_pin(item[0])) {
        pin_sets += 1;
      } else if (is_man(item[0])) {
        man_sets += 1;
      }
    }

    let sets = [sou_sets, pin_sets, man_sets];
    let only_one_suit = sets.filter((x) => x != 0).length == 1;

    return only_one_suit && honor_sets != 0;
  }
}
