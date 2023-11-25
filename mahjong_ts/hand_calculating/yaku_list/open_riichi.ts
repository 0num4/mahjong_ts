export class OpenRiichi {
  yaku_id: number | null;
  tenhou_id: number | null;
  name: string;
  han_open: number | null;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id: number) {
    this.yaku_id = yaku_id;
    this.tenhou_id = null;
    this.name = "Open Riichi";
    this.han_open = null;
    this.han_closed = 2;
    this.is_yakuman = false;
  }

  is_condition_met(hand: any, ...args: any[]): boolean {
    return true;
  }

  toString(): string {
    return this.name + " " + this.han_closed;
  }
}
