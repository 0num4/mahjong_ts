import { TERMINAL_INDICES } from "../../../constants";
import { Yaku } from "../../../yaku";

export class Chinroutou extends Yaku {
	tenhou_id: number;
	name: string;
	han_open: number;
	han_closed: number;
	is_yakuman: boolean;

	constructor(yaku_id: number) {
		super(yaku_id);
		this.tenhou_id = 44;
		this.name = "Chinroutou";
		this.han_open = 13;
		this.han_closed = 13;
		this.is_yakuman = true;
	}

	set_attributes(): void {
		this.tenhou_id = 44;
		this.name = "Chinroutou";
		this.han_open = 13;
		this.han_closed = 13;
		this.is_yakuman = true;
	}

	is_condition_met(hand: any[], ...args: any[]): boolean {
		let indices = [].concat(...hand);
		return indices.every((x) => TERMINAL_INDICES.includes(x));
	}
}
