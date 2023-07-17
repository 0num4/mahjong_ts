import { Yaku } from "../../../yaku";
import { HONOR_INDICES } from "../../../constants";

export class Daichisei extends Yaku {
  tenhou_id: number;
  name: string;
  han_open: number | null;
  han_closed: number;
  is_yakuman: boolean;

  constructor(yaku_id?: number) {
    super(yaku_id);
    this.tenhou_id = 0; // Not provided in the original Python code
    this.name = "Daichisei";
    this.han_open = null;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  set_attributes(): void {
    this.tenhou_id = 0; // Not provided in the original Python code
    this.name = "Daichisei";
    this.han_open = null;
    this.han_closed = 13;
    this.is_yakuman = true;
  }

  is_condition_met(hand: any[], ...args: any[]): boolean {
    let indices = [].concat(...hand);
    return all((x) => HONOR_INDICES.includes(x)) && hand.length == 7;
  }
}
function all(arg0: (x: any) => boolean) {
  throw new Error("Function not implemented.");
}
