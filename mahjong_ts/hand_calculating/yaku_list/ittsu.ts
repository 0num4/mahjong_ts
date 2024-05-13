import { is_chi, is_man, is_pin, is_sou, simplify } from "../../utils";
import { Yaku } from "../../yaku";

export class Ittsu extends Yaku {
	tenhouId: number;
	name: string;
	hanOpen: number;
	hanClosed: number;
	isYakuman: boolean;

	constructor(id: number) {
		super(id);
		this.tenhouId = 24;
		this.name = "Ittsu";
		this.hanOpen = 1;
		this.hanClosed = 2;
		this.isYakuman = false;
	}

	is_condition_met(hand: any[], ...args: any[]): boolean {
		let chi_sets = hand.filter((item) => is_chi(item));
		if (chi_sets.length < 3) {
			return false;
		}

		let sou_chi = [];
		let pin_chi = [];
		let man_chi = [];
		for (let item of chi_sets) {
			if (is_sou(item[0])) {
				sou_chi.push(item);
			} else if (is_pin(item[0])) {
				pin_chi.push(item);
			} else if (is_man(item[0])) {
				man_chi.push(item);
			}
		}

		let sets = [sou_chi, pin_chi, man_chi];

		for (let suit_item of sets) {
			if (suit_item.length < 3) {
				continue;
			}

			let casted_sets = [];

			for (let set_item of suit_item) {
				// cast tiles indices to 0..8 representation
				casted_sets.push([
					simplify(set_item[0]),
					simplify(set_item[1]),
					simplify(set_item[2]),
				]);
			}

			if (
				casted_sets.includes([0, 1, 2]) &&
				casted_sets.includes([3, 4, 5]) &&
				casted_sets.includes([6, 7, 8])
			) {
				return true;
			}
		}

		return false;
	}
}
