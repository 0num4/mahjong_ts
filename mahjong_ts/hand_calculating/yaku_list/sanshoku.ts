import { Yaku } from "../../yaku";
import { is_chi, is_man, is_pin, is_sou, simplify } from "../../utils";

export class Sanshoku extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number | null;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id?: number) {
    super(yaku_id);
    this.tenhou_id = 25;
    this.name = "Sanshoku Doujun";
    this.han_open = 1;
    this.han_closed = 2;
    this.is_yakuman = false;
  }

  set_attributes(): void {
    this.tenhou_id = 25;
    this.name = "Sanshoku Doujun";
    this.han_open = 1;
    this.han_closed = 2;
    this.is_yakuman = false;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    let chi_sets = hand.filter((item) => is_chi(item));
    if (chi_sets.length < 3) {
      return false;
    }

    let sou_chi = [];
    let pin_chi = [];
    let man_chi = [];
    for (let item of chi_sets) {
      if (is_sou(item[0])) {
        sou_chi.push(item);
      } else if (is_pin(item[0])) {
        pin_chi.push(item);
      } else if (is_man(item[0])) {
        man_chi.push(item);
      }
    }

    for (let sou_item of sou_chi) {
      for (let pin_item of pin_chi) {
        for (let man_item of man_chi) {
          // cast tile indices to 0..8 representation
          sou_item = sou_item.map((x: any) => simplify(x));
          pin_item = pin_item.map((x: any) => simplify(x));
          man_item = man_item.map((x: any) => simplify(x));
          if (
            sou_item.every((val: any, index: any) => val === pin_item[index]) &&
            sou_item.every((val: any, index: any) => val === man_item[index])
          ) {
            return true;
          }
        }
      }
    }

    return false;
  }
}
