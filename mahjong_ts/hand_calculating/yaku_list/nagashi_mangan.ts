export class NagashiMangan {
  yaku_id: number | null;
  tenhou_id: number;
  name: string;
  han_open: number;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number | null = null) {
    this.yaku_id = yaku_id;
    this.tenhou_id = 21;
    this.name = "Nagashi Mangan";
    this.han_open = 5;
    this.han_closed = 5;
    this.is_yakuman = false;
  }

  is_condition_met(hand: any, ...args: any[]): boolean {
    return true;
  }

  toString(): string {
    return this.name + " " + this.han_closed;
  }
}
