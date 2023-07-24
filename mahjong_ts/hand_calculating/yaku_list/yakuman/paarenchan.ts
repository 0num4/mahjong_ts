import { Yaku } from "../../../yaku";

export class Paarenchan extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number;
  han_closed: number;
  count: number;
  is_yakuman: boolean;

  constructor(yaku_id?: number) {
    super(yaku_id);
    this.tenhou_id = 37;
    this.name = "Paarenchan";
    this.han_open = 13;
    this.han_closed = 13;
    this.count = 0;
    this.is_yakuman = true;
  }

  set_attributes(): void {
    this.tenhou_id = 37;
    this.name = "Paarenchan";
    this.han_open = 13;
    this.han_closed = 13;
    this.count = 0;
    this.is_yakuman = true;
  }

  set_paarenchan_count(count: number): void {
    this.han_open = 13 * count;
    this.han_closed = 13 * count;
    this.count = count;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    return true;
  }

  toString(): string {
    return `Paarenchan ${this.count}`;
  }
}
