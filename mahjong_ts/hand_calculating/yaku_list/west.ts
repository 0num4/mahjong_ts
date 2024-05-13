export class YakuhaiWest extends Yaku {
	tenhouId: number;
	name: string;
	hanOpen: number;
	hanClosed: number;
	isYakuman: boolean;

	constructor(id: number) {
		super(id);
		this.tenhouId = 10;
		this.name = "Yakuhai (west)";
		this.hanOpen = 1;
		this.hanClosed = 1;
		this.isYakuman = false;
	}

	setAttributes(): void {
		this.tenhouId = 10;
		this.name = "Yakuhai (west)";
		this.hanOpen = 1;
		this.hanClosed = 1;
		this.isYakuman = false;
	}

	isConditionMet(hand: any, ...args: any[]): boolean {
		// TODO: Implement this method
		return false;
	}
}
