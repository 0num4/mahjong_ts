import { Yaku } from "../../../yaku";
import { TERMINAL_INDICES } from "../../../constants";

export class DaburuKokushiMusou extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number | null;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id?: number) {
    super(yaku_id);
    this.tenhou_id = 0; // Not provided in the original Python code
    this.name = "Daburu Kokushi Musou";
    this.han_open = null;
    this.han_closed = 26;
    this.is_yakuman = true;
  }

  set_attributes(): void {
    this.tenhou_id = 0; // Not provided in the original Python code
    this.name = "Daburu Kokushi Musou";
    this.han_open = null;
    this.han_closed = 26;
    this.is_yakuman = true;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    let indices = [].concat(...hand);
    return (
      indices.every((x) => TERMINAL_INDICES.includes(x)) && hand.length == 14
    );
  }
}
