import { is_chi, is_pon_or_kan } from "../../utils";
import { Yaku } from "../../yaku";

export class Sanankou extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    super(yaku_id);
    this.tenhou_id = 29;
    this.name = "San Ankou";
    this.han_open = 2;
    this.han_closed = 2;
    this.is_yakuman = false;
  }

  set_attributes(): void {
    this.tenhou_id = 29;
    this.name = "San Ankou";
    this.han_open = 2;
    this.han_closed = 2;
    this.is_yakuman = false;
  }

  is_condition_met(
    hand: any[],
    win_tile: number,
    melds: any[],
    is_tsumo: boolean,
  ): boolean {
    win_tile /= 4;

    let open_sets = melds.filter((x) => x.opened).map((x) => x.tiles_34);

    let chi_sets = hand.filter(
      (x) => is_chi(x) && x.includes(win_tile) && !open_sets.includes(x),
    );
    let pon_sets = hand.filter((x) => is_pon_or_kan(x));

    let closed_pon_sets = [];
    for (let item of pon_sets) {
      if (open_sets.includes(item)) {
        continue;
      }

      if (item.includes(win_tile) && !is_tsumo && chi_sets.length == 0) {
        continue;
      }

      closed_pon_sets.push(item);
    }

    return closed_pon_sets.length == 3;
  }
}
