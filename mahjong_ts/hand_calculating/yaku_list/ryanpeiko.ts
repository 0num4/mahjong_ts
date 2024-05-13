import { Yaku } from "../../yaku";
import { is_chi } from "../../utils";

export class Ryanpeikou extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number | null;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    super(yaku_id);
    this.tenhou_id = 32;
    this.name = "Ryanpeikou";
    this.han_open = null;
    this.han_closed = 3;
    this.is_yakuman = false;
  }

  set_attributes(): void {
    this.tenhou_id = 32;
    this.name = "Ryanpeikou";
    this.han_open = null;
    this.han_closed = 3;
    this.is_yakuman = false;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    let chi_sets = hand.filter((item) => is_chi(item));
    let count_of_identical_chi = chi_sets.map(
      (x) =>
        chi_sets.filter((y) => JSON.stringify(y) === JSON.stringify(x)).length,
    );
    return count_of_identical_chi.filter((x) => x >= 2).length == 4;
  }
}
