import { is_pin, is_man, is_sou, simplify } from "../../../utils";
import { Yaku } from "../../../yaku";

export class ChuurenPoutou extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number | null;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    super(yaku_id);
    this.tenhou_id = 45;
    this.name = "Chuuren Poutou";
    this.han_open = null;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  set_attributes(): void {
    this.tenhou_id = 45;
    this.name = "Chuuren Poutou";
    this.han_open = null;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
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

    let indices: number[] = [].concat.apply([], hand);
    indices = indices.map((x) => simplify(x));

    if (indices.filter((x) => x == 0).length < 3) {
      return false;
    }

    if (indices.filter((x) => x == 8).length < 3) {
      return false;
    }

    indices = indices.filter((x) => x != 0 && x != 8);
    for (let x = 1; x <= 7; x++) {
      let index = indices.indexOf(x);
      if (index >= 0) {
        indices.splice(index, 1);
      }
    }

    return indices.length == 1;
  }
}
