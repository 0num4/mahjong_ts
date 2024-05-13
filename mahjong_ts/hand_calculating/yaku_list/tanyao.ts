import { Yaku } from "../../yaku";
import { HONOR_INDICES, TERMINAL_INDICES } from "../../constants";

export class Tanyao extends Yaku {
	tenhou_id: number;
	name: string;
	han_open: number;
	han_closed: number;
	is_yakuman: boolean;

	constructor(yaku_id: number) {
		super(yaku_id);
		this.tenhou_id = 8;
		this.name = "Tanyao";
		this.han_open = 1;
		this.han_closed = 1;
		this.is_yakuman = false;
	}

	set_attributes(): void {
		this.tenhou_id = 8;
		this.name = "Tanyao";
		this.han_open = 1;
		this.han_closed = 1;
		this.is_yakuman = false;
	}

	is_condition_met(hand: any[], ...args: any[]): boolean {
		let indices = ([] as any[]).concat(...hand);
		let result = TERMINAL_INDICES.concat(HONOR_INDICES);
		return !indices.some((x) => result.includes(x));
	}
}
