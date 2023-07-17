import { Yaku } from "../../../yaku";

export class Chiihou extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number | null;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id?: number) {
    super(yaku_id);
    this.tenhou_id = 38;
    this.name = "Chiihou";
    this.han_open = null;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  set_attributes(): void {
    this.tenhou_id = 38;
    this.name = "Chiihou";
    this.han_open = null;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    return true;
  }
}
