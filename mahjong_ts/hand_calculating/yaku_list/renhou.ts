export class Renhou {
  yaku_id: number | null;
  tenhou_id: number;
  name: string;
  han_open: number | null;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    this.yaku_id = yaku_id;
    this.tenhou_id = 36;
    this.name = "Renhou";
    this.han_open = null;
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
