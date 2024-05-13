import { Yaku } from "../../yaku";

export class Riichi extends Yaku {
	//   yaku_id: number | null;
	tenhou_id: number;
	name: string;
	han_open: number | null;
	han_closed: number;
	is_yakuman: boolean;

	constructor(yaku_id: number) {
		super(yaku_id);
		this.tenhou_id = 1;
		this.name = "Riichi";
		this.han_open = null;
		this.han_closed = 1;
		this.is_yakuman = false;
	}

	is_condition_met(hand: any, ...args: any[]): boolean {
		return true;
	}
}
