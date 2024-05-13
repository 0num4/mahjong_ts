import { Yaku } from "../../../yaku";

export class KokushiMusou extends Yaku {
	tenhou_id: number;
	name: string;
	han_open: number | null;
	han_closed: number;
	is_yakuman: boolean;

	constructor(yaku_id: number) {
		super(yaku_id);
		this.tenhou_id = 47;
		this.name = "Kokushi Musou";
		this.han_open = null;
		this.han_closed = 13;
		this.is_yakuman = true;
	}

	set_attributes(): void {
		this.tenhou_id = 47;
		this.name = "Kokushi Musou";
		this.han_open = null;
		this.han_closed = 13;
		this.is_yakuman = true;
	}

	is_condition_met(hand: any[], tiles_34: any[], ...args: any[]): boolean {
		if (
			tiles_34[0] *
				tiles_34[8] *
				tiles_34[9] *
				tiles_34[17] *
				tiles_34[18] *
				tiles_34[26] *
				tiles_34[27] *
				tiles_34[28] *
				tiles_34[29] *
				tiles_34[30] *
				tiles_34[31] *
				tiles_34[32] *
				tiles_34[33] ==
			2
		) {
			return true;
		}
		return false;
	}
}
