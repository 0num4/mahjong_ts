class Chiitoitsu {
	yaku_id: number | null;
	tenhou_id: number;
	name: string;
	han_open: null;
	han_closed: number;
	is_yakuman: boolean;

	constructor(yaku_id: number) {
		this.yaku_id = yaku_id;
		this.tenhou_id = 22;
		this.name = "Chiitoitsu";
		this.han_open = null;
		this.han_closed = 2;
		this.is_yakuman = false;
	}

	is_condition_met(hand: any, ...args: any[]): boolean {
		return hand.length == 7;
	}
}
