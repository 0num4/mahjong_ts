import { Yaku } from "../../yaku";
import { is_chi } from "../../utils";
import { TERMINAL_INDICES } from "../../constants";

export class Junchan extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id?: number) {
    super(yaku_id);
    this.tenhou_id = 33;
    this.name = "Junchan";
    this.han_open = 2;
    this.han_closed = 3;
    this.is_yakuman = false;
  }

  set_attributes(): void {
    this.tenhou_id = 33;
    this.name = "Junchan";
    this.han_open = 2;
    this.han_closed = 3;
    this.is_yakuman = false;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    let tile_in_indices = (item_set: any[], indices_array: any[]) => {
      for (let x of item_set) {
        if (indices_array.includes(x)) {
          return true;
        }
      }
      return false;
    };

    let terminal_sets = 0;
    let count_of_chi = 0;
    for (let item of hand) {
      if (is_chi(item)) {
        count_of_chi += 1;
      }

      if (tile_in_indices(item, TERMINAL_INDICES)) {
        terminal_sets += 1;
      }
    }

    if (count_of_chi == 0) {
      return false;
    }

    return terminal_sets == 5;
  }
}
