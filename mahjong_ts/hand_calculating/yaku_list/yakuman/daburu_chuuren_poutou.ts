import { HONOR_INDICES, TERMINAL_INDICES } from "../../../constants";
import {
  is_man,
  is_pair,
  is_pin,
  is_pon_or_kan,
  is_sou,
  simplify,
} from "../../../utils";
import { Yaku } from "../../../yaku";

export class DaburuChuurenPoutou extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number | null;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    super(yaku_id);
    this.tenhou_id = 0; // Not provided in the original Python code
    this.name = "Daburu Chuuren Poutou";
    this.han_open = null;
    this.han_closed = 26;
    this.is_yakuman = true;
  }

  set_attributes(): void {
    this.tenhou_id = 0; // Not provided in the original Python code
    this.name = "Daburu Chuuren Poutou";
    this.han_open = null;
    this.han_closed = 26;
    this.is_yakuman = true;
  }

  is_condition_met(
    hand: any[],
    allow_other_sets: boolean,
    ...args: any[]
  ): boolean {
    let sou_sets = 0;
    let pin_sets = 0;
    let man_sets = 0;
    let honor_sets = 0;
    for (let item of hand) {
      if (is_sou(item[0])) {
        sou_sets += 1;
      } else if (is_pin(item[0])) {
        pin_sets += 1;
      } else if (is_man(item[0])) {
        man_sets += 1;
      } else {
        honor_sets += 1;
      }
    }

    let sets = [sou_sets, pin_sets, man_sets];
    let only_one_suit = sets.filter((x) => x != 0).length == 1;
    if (!only_one_suit || honor_sets > 0) {
      return false;
    }

    if (!allow_other_sets && pin_sets == 0) {
      // if we are not allowing other sets than pins
      return false;
    }

    let indices: number[] = [].concat(...hand);
    indices = indices.map((x) => simplify(x));

    let required_counts = [3, 1, 1, 1, 1, 1, 1, 1, 3];
    let counts = Array(9).fill(0);
    for (let x of indices) {
      counts[x - 1] += 1;
    }

    return counts.every((x, i) => x >= required_counts[i]);
  }
}
