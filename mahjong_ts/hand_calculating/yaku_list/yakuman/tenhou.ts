import { Yaku } from "../../../yaku";

export class Tenhou extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number | null;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id?: number) {
    super(yaku_id);
    this.tenhou_id = 0; // Not provided in the original Python code
    this.name = "Tenhou";
    this.han_open = null;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  set_attributes(): void {
    this.tenhou_id = 0; // Not provided in the original Python code
    this.name = "Tenhou";
    this.han_open = null;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  is_condition_met(): boolean {
    // The condition is not provided in the original Python code
    return false;
  }
}
