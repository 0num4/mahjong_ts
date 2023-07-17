import { Yaku } from "../../yaku";

export class YakuhaiOfPlace extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id?: number) {
    super(yaku_id);
    this.tenhou_id = 10;
    this.name = "Yakuhai (wind of place)";
    this.han_open = 1;
    this.han_closed = 1;
    this.is_yakuman = false;
  }

  set_attributes(): void {
    this.tenhou_id = 10;
    this.name = "Yakuhai (wind of place)";
    this.han_open = 1;
    this.han_closed = 1;
    this.is_yakuman = false;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    return true;
  }
}
