// 1 and 9
export const TERMINAL_INDICES: number[] = [0, 8, 9, 17, 18, 26];

// dragons and winds
export const EAST: number = 27;
export const SOUTH: number = 28;
export const WEST: number = 29;
export const NORTH: number = 30;
export const HAKU: number = 31;
export const HATSU: number = 32;
export const CHUN: number = 33;

export const WINDS: number[] = [EAST, SOUTH, WEST, NORTH];
export const HONOR_INDICES: number[] = [...WINDS, HAKU, HATSU, CHUN];

export const FIVE_RED_MAN: number = 16;
export const FIVE_RED_PIN: number = 52;
export const FIVE_RED_SOU: number = 88;

export const AKA_DORA_LIST: number[] = [
	FIVE_RED_MAN,
	FIVE_RED_PIN,
	FIVE_RED_SOU,
];

export const DISPLAY_WINDS: { [key: number]: string } = {
	[EAST]: "East",
	[SOUTH]: "South",
	[WEST]: "West",
	[NORTH]: "North",
};
