import { Yaku } from "../../yaku";
import { is_chi } from "../../utils";

class Iipeiko extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number | null;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id?: number) {
    super(yaku_id);
    this.tenhou_id = 9;
    this.name = "Iipeiko";
    this.han_open = null;
    this.han_closed = 1;
    this.is_yakuman = false;
  }

  set_attributes(): void {
    this.tenhou_id = 9;
    this.name = "Iipeiko";
    this.han_open = null;
    this.han_closed = 1;
    this.is_yakuman = false;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    let chi_sets = hand.filter((item) => is_chi(item));

    let count_of_identical_chi = 0;
    for (let x of chi_sets) {
      let count = 0;
      for (let y of chi_sets) {
        if (JSON.stringify(x) === JSON.stringify(y)) {
          count += 1;
        }
      }
      if (count > count_of_identical_chi) {
        count_of_identical_chi = count;
      }
    }

    return count_of_identical_chi >= 2;
  }
}
