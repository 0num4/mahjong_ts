import { Yaku } from "../../../yaku";
import { HONOR_INDICES } from "../../../constants";

export class Tsuuiisou extends Yaku {
	tenhou_id: number;
	name: string;
	han_open: number;
	han_closed: number;
	is_yakuman: boolean;

	constructor(yaku_id: number) {
		super(yaku_id);
		this.tenhou_id = 42;
		this.name = "Tsuu Iisou";
		this.han_open = 13;
		this.han_closed = 13;
		this.is_yakuman = true;
	}

	set_attributes(): void {
		this.tenhou_id = 42;
		this.name = "Tsuu Iisou";
		this.han_open = 13;
		this.han_closed = 13;
		this.is_yakuman = true;
	}

	is_condition_met(hand: any[], ...args: any[]): boolean {
		let indices = [].concat(...hand);
		return indices.every((x) => HONOR_INDICES.includes(x));
	}
}
