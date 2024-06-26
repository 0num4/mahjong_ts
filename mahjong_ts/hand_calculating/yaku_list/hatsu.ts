import { HATSU } from "../../constants";
import { is_pon_or_kan } from "../../utils";
import { Yaku } from "../../yaku";

export class Hatsu extends Yaku {
  tenhouId: number;
  name: string;
  hanOpen: number;
  hanClosed: number;
  isYakuman: boolean;

  constructor(id: number) {
    super(id);
    this.tenhouId = 19;
    this.name = "Yakuhai (hatsu)";
    this.hanOpen = 1;
    this.hanClosed = 1;
    this.isYakuman = false;
  }

  isConditionMet(hand: any, ...args: any[]): boolean {
    return (
      hand.filter((x: any) => is_pon_or_kan(x) && x[0] === HATSU).length === 1
    );
  }
}
