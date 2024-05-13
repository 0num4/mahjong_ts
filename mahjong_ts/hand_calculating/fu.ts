import { HONOR_INDICES, TERMINAL_INDICES } from "../constants";
import { Meld, Tile } from "../meld";
import { contains_terminals, is_pair, is_pon_or_kan, simplify } from "../utils";
import { HandConfig } from "./hand_config";

export class FuCalculator {
	static BASE = "base";
	static PENCHAN = "penchan";
	static KANCHAN = "kanchan";
	static VALUED_PAIR = "valued_pair";
	static DOUBLE_VALUED_PAIR = "double_valued_pair";
	static PAIR_WAIT = "pair_wait";
	static TSUMO = "tsumo";
	static HAND_WITHOUT_FU = "hand_without_fu";

	static CLOSED_PON = "closed_pon";
	static OPEN_PON = "open_pon";

	static CLOSED_TERMINAL_PON = "closed_terminal_pon";
	static OPEN_TERMINAL_PON = "open_terminal_pon";

	static CLOSED_KAN = "closed_kan";
	static OPEN_KAN = "open_kan";

	static CLOSED_TERMINAL_KAN = "closed_terminal_kan";
	static OPEN_TERMINAL_KAN = "open_terminal_kan";

	calculate_fu(
		hand: Tile[][],
		win_tile: Tile,
		win_group: Tile[],
		config: HandConfig,
		valued_tiles: Tile[] = [], //多分numberでutilとかで定義してるやつ
		melds: Meld[] = [],
	) {
		let win_tile_34 = Math.floor(win_tile / 4);

		let fu_details = [];

		if (hand.length === 7) {
			return { details: [{ fu: 25, reason: FuCalculator.BASE }], total: 25 };
		}

		let pair = hand.filter((x) => is_pair(x))[0];
		let pon_sets = hand.filter((x) => is_pon_or_kan(x));

		let copied_opened_melds = melds
			.filter((x) => x.type === Meld.CHI)
			.map((x) => x.tiles_34);
		let closed_chi_sets = hand.filter((x) => !copied_opened_melds.includes(x));

		let is_open_hand = melds.some((x) => x.opened);

		if (closed_chi_sets.includes(win_group)) {
			let tile_index = simplify(win_tile_34);

			if (contains_terminals(win_group)) {
				if (tile_index === 2 && win_group.indexOf(win_tile_34) === 2) {
					fu_details.push({ fu: 2, reason: FuCalculator.PENCHAN });
				} else if (tile_index === 6 && win_group.indexOf(win_tile_34) === 0) {
					fu_details.push({ fu: 2, reason: FuCalculator.PENCHAN });
				}
			}

			if (win_group.indexOf(win_tile_34) === 1) {
				fu_details.push({ fu: 2, reason: FuCalculator.KANCHAN });
			}
		}

		let count_of_valued_pairs = valued_tiles.filter(
			(x) => x === pair[0],
		).length;

		if (count_of_valued_pairs === 1) {
			fu_details.push({ fu: 2, reason: FuCalculator.VALUED_PAIR });
		}

		if (count_of_valued_pairs === 2) {
			fu_details.push({ fu: 4, reason: FuCalculator.DOUBLE_VALUED_PAIR });
		}

		if (is_pair(win_group)) {
			fu_details.push({ fu: 2, reason: FuCalculator.PAIR_WAIT });
		}

		for (let set_item of pon_sets) {
			let open_meld = melds.find((x) => set_item === x.tiles_34);

			let set_was_open = open_meld ? open_meld.opened : false;
			let is_kan_set = open_meld
				? open_meld.type === Meld.KAN || open_meld.type === Meld.SHOUMINKAN
				: false;
			let is_honor = [...TERMINAL_INDICES, ...HONOR_INDICES].includes(
				set_item[0],
			);

			if (!config.is_tsumo && set_item === win_group) {
				set_was_open = true;
			}

			if (is_honor) {
				if (is_kan_set) {
					if (set_was_open) {
						fu_details.push({ fu: 16, reason: FuCalculator.OPEN_TERMINAL_KAN });
					} else {
						fu_details.push({
							fu: 32,
							reason: FuCalculator.CLOSED_TERMINAL_KAN,
						});
					}
				} else {
					if (set_was_open) {
						fu_details.push({ fu: 4, reason: FuCalculator.OPEN_TERMINAL_PON });
					} else {
						fu_details.push({
							fu: 8,
							reason: FuCalculator.CLOSED_TERMINAL_PON,
						});
					}
				}
			} else {
				if (is_kan_set) {
					if (set_was_open) {
						fu_details.push({ fu: 8, reason: FuCalculator.OPEN_KAN });
					} else {
						fu_details.push({ fu: 16, reason: FuCalculator.CLOSED_KAN });
					}
				} else {
					if (set_was_open) {
						fu_details.push({ fu: 2, reason: FuCalculator.OPEN_PON });
					} else {
						fu_details.push({ fu: 4, reason: FuCalculator.CLOSED_PON });
					}
				}
			}
		}
		return { details: fu_details, total: this.round_fu(fu_details) };
	}
	round_fu(fu_details: any[]) {
		// 22 -> 30 and etc.
		const fu = fu_details.map((x) => x["fu"]).reduce((a, b) => a + b, 0);
		return Math.ceil(fu / 10) * 10;
	}
}
