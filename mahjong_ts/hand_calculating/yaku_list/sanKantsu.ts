import { Yaku } from "../../yaku";
import { Meld } from "../../meld";

export class SanKantsu extends Yaku {
	tenhou_id: number;
	name: string;
	han_open: number;
	han_closed: number;
	is_yakuman: boolean;

	constructor(yaku_id: number) {
		super(yaku_id);
		this.tenhou_id = 27;
		this.name = "San Kantsu";
		this.han_open = 2;
		this.han_closed = 2;
		this.is_yakuman = false;
	}

	set_attributes(): void {
		this.tenhou_id = 27;
		this.name = "San Kantsu";
		this.han_open = 2;
		this.han_closed = 2;
		this.is_yakuman = false;
	}

	is_condition_met(hand: any[], melds: any[], ...args: any[]): boolean {
		let kan_sets = melds.filter(
			(x) => x.type == Meld.KAN || x.type == Meld.SHOUMINKAN,
		);
		return kan_sets.length == 3;
	}
}
