import { Yaku } from "../../../yaku";
import { is_pon_or_kan } from "../../../utils";

export class Suuankou extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number | null;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    super(yaku_id);
    this.tenhou_id = 41;
    this.name = "Suu Ankou";
    this.han_open = null;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  set_attributes(): void {
    this.tenhou_id = 41;
    this.name = "Suu Ankou";
    this.han_open = null;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  is_condition_met(hand: any[], win_tile: number, is_tsumo: boolean): boolean {
    win_tile = Math.floor(win_tile / 4);
    let closed_hand = hand.filter(
      (item) => !(is_pon_or_kan(item) && item.includes(win_tile) && !is_tsumo)
    );
    return closed_hand.filter((item) => is_pon_or_kan(item)).length == 4;
  }
}
