import { CHUN } from "../../constants";
import { is_pon_or_kan } from "../../utils";

export class Chun extends Yaku {
  tenhouId: number;
  name: string;
  hanOpen: number;
  hanClosed: number;
  isYakuman: boolean;

  constructor(id: number | null = null) {
    super(id);
    this.tenhouId = 20;
    this.name = "Yakuhai (chun)";
    this.hanOpen = 1;
    this.hanClosed = 1;
    this.isYakuman = false;
  }

  isConditionMet(hand: any, ...args: any[]): boolean {
    return (
      hand.filter((x: any) => is_pon_or_kan(x) && x[0] === CHUN).length === 1
    );
  }
}
