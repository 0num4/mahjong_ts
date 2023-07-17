import { Yaku } from "../../../yaku";
import { Meld } from "../../../constants";

export class Suukantsu extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id?: number) {
    super(yaku_id);
    this.tenhou_id = 51;
    this.name = "Suu Kantsu";
    this.han_open = 13;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  set_attributes(): void {
    this.tenhou_id = 51;
    this.name = "Suu Kantsu";
    this.han_open = 13;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  is_condition_met(hand: any[], melds: any[], ...args: any[]): boolean {
    return (
      melds.filter((x) => x.type == Meld.KAN || x.type == Meld.SHOUMINKAN)
        .length == 4
    );
  }
}
