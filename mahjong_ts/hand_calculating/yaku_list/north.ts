import { NORTH } from "../../constants";
import { is_pon_or_kan } from "../../utils";
import { Yaku } from "../../yaku";

export class YakuhaiNorth extends Yaku {
  tenhouId: number;
  name: string;
  hanOpen: number;
  hanClosed: number;
  isYakuman: boolean;

  constructor(id: number) {
    super(id);
    this.tenhouId = 10;
    this.name = "Yakuhai (north)";
    this.hanOpen = 1;
    this.hanClosed = 1;
    this.isYakuman = false;
  }

  isConditionMet(hand: any, round_wind: any, ...args: any[]): boolean {
    if (round_wind !== NORTH) {
      return false;
    }
    return (
      hand.filter((x: any) => is_pon_or_kan(x) && x[0] === NORTH).length === 1
    );
  }
}
