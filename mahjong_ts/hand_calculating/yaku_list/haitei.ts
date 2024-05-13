export class Haitei {
	yaku_id: number | null;
	tenhou_id: number;
	name: string;
	han_open: number;
	han_closed: number;
	is_yakuman: boolean;

	constructor(yaku_id: number) {
		this.yaku_id = yaku_id;
		this.tenhou_id = 5;
		this.name = "Haitei Raoyue";
		this.han_open = 1;
		this.han_closed = 1;
		this.is_yakuman = false;
	}

	is_condition_met(hand: any, ...args: any[]): boolean {
		// was it here or not is controlling by superior code
		return true;
	}

	toString(): string {
		return this.name + " " + this.han_closed;
	}
}
