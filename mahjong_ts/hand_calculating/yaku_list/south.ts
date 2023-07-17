import { SOUTH } from "../../constants";
import { is_pon_or_kan } from "../../utils";

export class YakuhaiSouth extends Yaku {
  tenhouId: number;
  name: string;
  hanOpen: number;
  hanClosed: number;
  isYakuman: boolean;

  constructor(id: number | null = null) {
    super(id);
    this.tenhouId = 10;
    this.name = "Yakuhai (south)";
    this.hanOpen = 1;
    this.hanClosed = 1;
    this.isYakuman = false;
  }

  setAttributes(): void {
    this.tenhouId = 10;
    this.name = "Yakuhai (south)";
    this.hanOpen = 1;
    this.hanClosed = 1;
    this.isYakuman = false;
  }

  isConditionMet(hand: any, round_wind: any, ...args: any[]): boolean {
    if (round_wind !== SOUTH) {
      return false;
    }
    return (
      hand.filter((x: any) => is_pon_or_kan(x) && x[0] === SOUTH).length === 1
    );
  }
}
