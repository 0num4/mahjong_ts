import { Yaku } from "../../../yaku";
import { is_pair, is_pon_or_kan } from "../../../utils";
import { TERMINAL_INDICES, HONOR_INDICES } from "../../../constants";

export class DaburuChuurenPoutou extends Yaku {
    tenhou_id: number;
    name: string;
    han_open: number | null;
    han_closed: number;
    is_yakuman: boolean;

    constructor(yaku_id?: number) {
        super(yaku_id);
        this.tenhou_id = 0; // Not provided in the original Python code
        this.name = "Daburu Chuuren Poutou";
        this.han_open = null;
        this.han_closed = 26;
        this.is_yakuman = true;
    }

    set_attributes(): void {
        this.tenhou_id = 0; // Not provided in the original Python code
        this.name = "Daburu Chuuren Poutou";
        this.han_open = null;
        this.han_closed = 26;
        this.is_yakuman = true;
    }

    is_condition_met(hand: any[], allow_other_sets: boolean, ...args: any[]): boolean {
        let sou_sets = 0;
        let pin_sets = 0;
        let man_sets = 0;
        let honor_sets = 0;
        for (let item of hand) {
            if (is_sou(item[0])) {
                sou_sets += 1;
            } else if (is_pin(item[0])) {
                pin_sets += 1;
            } else if (is_man(item[0])) {
                man_sets += 1;
            } else {
                honor_sets += 1;
            }
        }

        let sets = [sou_sets, pin_sets, man_sets];
        let only
