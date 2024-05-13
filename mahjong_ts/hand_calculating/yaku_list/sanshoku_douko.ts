import { Yaku } from "../../yaku";
import { is_man, is_pin, is_pon_or_kan, is_sou, simplify } from "../../utils";

export class SanshokuDoukou extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    super(yaku_id);
    this.tenhou_id = 26;
    this.name = "Sanshoku Doukou";
    this.han_open = 2;
    this.han_closed = 2;
    this.is_yakuman = false;
  }

  set_attributes(): void {
    this.tenhou_id = 26;
    this.name = "Sanshoku Doukou";
    this.han_open = 2;
    this.han_closed = 2;
    this.is_yakuman = false;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    let pon_sets = hand.filter((item) => is_pon_or_kan(item));
    if (pon_sets.length < 3) {
      return false;
    }

    let sou_pon = [];
    let pin_pon = [];
    let man_pon = [];
    for (let item of pon_sets) {
      if (is_sou(item[0])) {
        sou_pon.push(item);
      } else if (is_pin(item[0])) {
        pin_pon.push(item);
      } else if (is_man(item[0])) {
        man_pon.push(item);
      }
    }

    for (let sou_item of sou_pon) {
      for (let pin_item of pin_pon) {
        for (let man_item of man_pon) {
          sou_item = new Set(sou_item.map((x: any) => simplify(x)));
          pin_item = new Set(pin_item.map((x: any) => simplify(x)));
          man_item = new Set(man_item.map((x: any) => simplify(x)));
          if (
            JSON.stringify(Array.from(sou_item)) ===
              JSON.stringify(Array.from(pin_item)) &&
            JSON.stringify(Array.from(sou_item)) ===
              JSON.stringify(Array.from(man_item))
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
