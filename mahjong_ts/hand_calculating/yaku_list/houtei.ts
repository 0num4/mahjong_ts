export class Houtei {
  yaku_id: number | null;
  tenhou_id: number;
  name: string;
  han_open: number;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    this.yaku_id = yaku_id;
    this.tenhou_id = 6;
    this.name = "Houtei Raoyui";
    this.han_open = 1;
    this.han_closed = 1;
    this.is_yakuman = false;
  }

  is_condition_met(hand: any, ...args: any[]): boolean {
    return true;
  }

  toString(): string {
    return this.name + " " + this.han_closed;
  }
}
