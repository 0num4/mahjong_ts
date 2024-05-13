abstract class Yaku {
	yakuId: number;
	tenhouId: number | null | undefined;
	name: string | null | undefined;
	hanOpen: number | null | undefined;
	hanClosed: number | null | undefined;
	isYakuman: boolean | null | undefined;

	constructor(yakuId: number) {
		this.yakuId = yakuId;
		this.setAttributes();
	}

	toString(): string {
		return this.name || "";
	}

	// In TypeScript, the `toString` method is used for both string conversion and "repr"-like output

	abstract isConditionMet(hand: any, ...args: any[]): boolean;

	abstract setAttributes(): void;

	get english(): string {
		console.warn("Use .name attribute instead of .english attribute");
		return this.name || "";
	}

	get japanese(): string {
		console.warn("Use .name attribute instead of .japanese attribute");
		return this.name || "";
	}
}
