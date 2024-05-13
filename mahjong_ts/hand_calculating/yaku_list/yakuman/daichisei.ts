import { Yaku } from "../../../yaku";
import { HONOR_INDICES } from "../../../constants";
import { all } from "../../../utils";
export class Daichisei extends Yaku {
	tenhou_id: number;
	name: string;
	han_open: number | null;
	han_closed: number;
	is_yakuman: boolean;

	constructor(yaku_id: number) {
		super(yaku_id);
		this.tenhou_id = 0; // Not provided in the original Python code
		this.name = "Daichisei";
		this.han_open = null;
		this.han_closed = 13;
		this.is_yakuman = true;
	}

	set_attributes(): void {
		this.tenhou_id = 0; // Not provided in the original Python code
		this.name = "Daichisei";
		this.han_open = null;
		this.han_closed = 13;
		this.is_yakuman = true;
	}

	isConditionMet(hand: any[], ...args: any[]): boolean {
		let indices = hand.reduce((z, y) => z.concat(y), []);
		return (
			indices.every((x: number) => HONOR_INDICES.includes(x)) &&
			hand.length == 7
		);
	}
}
