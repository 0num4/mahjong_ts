import {
  CHUN,
  FIVE_RED_MAN,
  FIVE_RED_PIN,
  FIVE_RED_SOU,
  TERMINAL_INDICES,
} from "./constants";

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

export function is_dora_indicator_for_terminal(tile: number): boolean {
  return (
    tile === 7 ||
    tile === 8 ||
    tile === 16 ||
    tile === 17 ||
    tile === 25 ||
    tile === 26
  );
}

export function contains_terminals(hand_set: number[]): boolean {
  return hand_set.some((x) => TERMINAL_INDICES.includes(x));
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

export function find_isolated_tile_indices(hand34: number[]): number[] {
  let isolatedIndices: number[] = [];

  for (let x = 0; x <= CHUN; x++) {
    if (is_honor(x) && hand34[x] === 0) {
      isolatedIndices.push(x);
    } else {
      let simplified = simplify(x);

      if (simplified === 0) {
        if (hand34[x] === 0 && hand34[x + 1] === 0) {
          isolatedIndices.push(x);
        }
      } else if (simplified === 8) {
        if (hand34[x] === 0 && hand34[x - 1] === 0) {
          isolatedIndices.push(x);
        }
      } else {
        if (hand34[x] === 0 && hand34[x - 1] === 0 && hand34[x + 1] === 0) {
          isolatedIndices.push(x);
        }
      }
    }
  }

  return isolatedIndices;
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
function is2dArray(arg: any): boolean {
  if (Array.isArray(arg) && arg.length > 0 && arg.every(Array.isArray)) {
    return true;
  } else {
    return false;
  }
}

export function getPermutations(array: string | any[], size: any) {
  function p(t: string | any[], i: number) {
    if (t.length === size) {
      result.push(t);
      return;
    }
    if (i + 1 > array.length) {
      return;
    }
    p(t.concat(array[i]), i + 1);
    p(t, i + 1);
  }

  var result: (string | any[])[] = [];
  p([], 0);
  return result;
}

export function permutationsChatGPT<T>(
  elements: T[],
  permutationLength: number,
): T[][] {
  var result: T[][] = [];

  function _permutations(startIndex: number, elementsChosen: T[]) {
    if (elementsChosen.length === permutationLength) {
      result.push(elementsChosen);
    } else {
      for (let i = 0; i < elements.length; i++) {
        if (!elementsChosen.includes(elements[i])) {
          _permutations(startIndex + 1, [...elementsChosen, elements[i]]);
        }
      }
    }
  }

  _permutations(0, []);
  return result;
}

export function product<T>(array2d: T[][]): T[][] {
  if (!is2dArray(array2d)) {
    throw new RangeError("Invalid argument");
  }
  if (array2d.length === 0) {
    return [[]];
  } else {
    const head: T[] = array2d[0];
    const tail: T[][] = array2d.slice(1);
    const productTail: T[][] = tail.length === 0 ? [[]] : product(tail);
    return head
      .map((ahead) => productTail.map((atail) => [ahead].concat(atail)))
      .flat(1);
  }
}

// export function* combinations<T>(iterable: Iterable<T>, r: number) {
//   const pool = [...iterable];
//   const n = pool.length;
//   if (n < r) return;

//   const indices = [...new Array(r)].map((_, i) => i);
//   yield indices.map((i) => pool[i]);
//   while (true) {
//     let i;
//     for (i = r - 1; i >= 0; i--) {
//       if (indices[i] !== n - (r - i)) {
//         break;
//       }
//     }
//     if (i === -1) return;
//     indices[i]++;
//     for (let j = i + 1; j < r; j++) {
//       indices[j] = indices[j - 1] + 1;
//     }
//     yield indices.map((i) => pool[i]);
//   }
// }

export function combinations<T>(
  elements: T[],
  combinationLength: number,
): T[][] {
  var result: T[][] = [];

  function _combinations(startIndex: number, elementsChosen: T[]) {
    if (elementsChosen.length === combinationLength) {
      result.push(elementsChosen);
    } else {
      for (let i = startIndex; i < elements.length; i++) {
        _combinations(i + 1, [...elementsChosen, elements[i]]);
      }
    }
  }

  _combinations(0, []);
  return result;
}
