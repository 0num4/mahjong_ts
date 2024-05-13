import { HONOR_INDICES, TERMINAL_INDICES } from "../../constants";
import { Yaku } from "../../yaku";

export class Honroto extends Yaku {
	tenhou_id: number;
	name: string;
	han_open: number;
	han_closed: number;
	is_yakuman: boolean;

	constructor(yaku_id: number) {
		super(yaku_id);
		this.tenhou_id = 31;
		this.name = "Honroutou";
		this.han_open = 2;
		this.han_closed = 2;
		this.is_yakuman = false;
	}

	set_attributes(): void {
		this.tenhou_id = 31;
		this.name = "Honroutou";
		this.han_open = 2;
		this.han_closed = 2;
		this.is_yakuman = false;
	}

	is_condition_met(hand: any[], ...args: any[]): boolean {
		let indices = ([] as any[]).concat(...hand);
		let result = HONOR_INDICES.concat(TERMINAL_INDICES);
		return indices.every((x) => result.includes(x));
	}
}
