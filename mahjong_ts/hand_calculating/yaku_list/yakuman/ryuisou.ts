import { Yaku } from "../../../yaku";
import { HATSU } from "../../../constants";

export class Ryuuiisou extends Yaku {
	tenhou_id: number;
	name: string;
	han_open: number;
	han_closed: number;
	is_yakuman: boolean;

	constructor(yaku_id: number) {
		super(yaku_id);
		this.tenhou_id = 43;
		this.name = "Ryuuiisou";
		this.han_open = 13;
		this.han_closed = 13;
		this.is_yakuman = true;
	}

	set_attributes(): void {
		this.tenhou_id = 43;
		this.name = "Ryuuiisou";
		this.han_open = 13;
		this.han_closed = 13;
		this.is_yakuman = true;
	}

	is_condition_met(hand: any[], ...args: any[]): boolean {
		let green_indices = [19, 20, 21, 23, 25, HATSU];
		let indices = [].concat(...hand);
		return indices.every((x) => green_indices.includes(x));
	}
}
