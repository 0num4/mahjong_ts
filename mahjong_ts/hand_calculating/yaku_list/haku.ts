import { HAKU } from "../../constants";
import { is_pon_or_kan } from "../../utils";

export class Haku {
	yaku_id: number | null;
	tenhou_id: number;
	name: string;
	han_open: number;
	han_closed: number;
	is_yakuman: boolean;

	constructor(yaku_id: number) {
		this.yaku_id = yaku_id;
		this.tenhou_id = 18;
		this.name = "Yakuhai (haku)";
		this.han_open = 1;
		this.han_closed = 1;
		this.is_yakuman = false;
	}

	is_condition_met(hand: any, ...args: any[]): boolean {
		return (
			hand.filter((x: any) => is_pon_or_kan(x) && x[0] == HAKU).length == 1
		);
	}

	toString(): string {
		return this.name + " " + this.han_closed;
	}
}
