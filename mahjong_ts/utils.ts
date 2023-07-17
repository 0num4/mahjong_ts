import { FIVE_RED_MAN, FIVE_RED_PIN, FIVE_RED_SOU } from "./constants";

export function is_aka_dora(tile_136: number, aka_enabled: boolean): boolean {
  if (!aka_enabled) {
    return false;
  }

  return tile_136 in [FIVE_RED_MAN, FIVE_RED_PIN, FIVE_RED_SOU];
}

// The function plus_dora needs further attention due to the complexity of the logic involved

export function is_chi(item: number[]): boolean {
  if (item.length != 3) {
    return false;
  }

  return item[0] == item[1] - 1 && item[1] - 1 == item[2] - 2;
}

export function is_pon(item: number[]): boolean {
  if (item.length != 3) {
    return false;
  }

  return item[0] == item[1] && item[1] == item[2];
}

export function is_kan(item: number[]): boolean {
  return item.length == 4;
}

export function is_pon_or_kan(item: number[]): boolean {
  return is_pon(item) || is_kan(item);
}

export function is_pair(item: number[]): boolean {
  /*
    """
    :param item: array of tile 34 indices
    :return: boolean
    """
*/
  return item.length == 2;
}

export function is_man(tile: number): boolean {
  return tile <= 8;
}

// is_pin
export function is_pin(tile: number): boolean {
  return 8 < tile && tile <= 17;
}

// is_sou
export function is_sou(tile: number): boolean {
  return 17 < tile && tile <= 26;
}

// is_honor
export function is_honor(tile: number): boolean {
  return tile >= 27;
}

// is_sangenpai
export function is_sangenpai(tile: number): boolean {
  return tile >= 31;
}

// is_terminal
export function is_terminal(tile: number): boolean {
  return [0, 8, 9, 17, 18, 26].includes(tile);
}

// is_terminal_or_honor
export function is_terminal_or_honor(tile: number): boolean {
  return is_terminal(tile) || is_honor(tile);
}

// simplify
export function simplify(tile: number): number {
  if (is_man(tile)) {
    return tile;
  } else if (is_pin(tile)) {
    return tile - 9;
  } else if (is_sou(tile)) {
    return tile - 18;
  } else {
    return tile - 27;
  }
}

// plus_dora
export function plus_dora(tile: number, dora_indicator: number): number {
  let diff = tile - dora_indicator;
  if (is_man(tile) && is_man(dora_indicator) && diff == -1) {
    return tile + 1;
  } else if (is_pin(tile) && is_pin(dora_indicator) && diff == -1) {
    return tile + 1;
  } else if (is_sou(tile) && is_sou(dora_indicator) && diff == -1) {
    return tile + 1;
  } else if (is_honor(tile) && is_honor(dora_indicator) && diff == -1) {
    return tile + 1;
  } else {
    return tile;
  }
}

// pythonのall関数
export function all(array: any[]): boolean {
  return array.every(Boolean);
}
