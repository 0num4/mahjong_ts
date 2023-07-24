// Import the required module
// Note: You will need to convert the 'FIVE_RED_MAN', 'FIVE_RED_PIN', 'FIVE_RED_SOU' constants to TypeScript as well.
import { FIVE_RED_MAN, FIVE_RED_PIN, FIVE_RED_SOU } from "./constants";

export class Tile {
  value: any;
  is_tsumogiri: boolean;

  constructor(value: any, is_tsumogiri: boolean) {
    this.value = value;
    this.is_tsumogiri = is_tsumogiri;
  }
}

export class TilesConverter {
  //   static to_one_line_string_chatgpt_orig(
  //     tiles: any[],
  //     print_aka_dora: boolean = false
  //   ): string {
  //     tiles = tiles.sort();

  //     let man = tiles.filter((t: any) => t < 36);

  //     let pin = tiles
  //       .filter((t: any) => 36 <= t && t < 72)
  //       .map((t: any) => t - 36);

  //     let sou = tiles
  //       .filter((t: any) => 72 <= t && t < 108)
  //       .map((t: any) => t - 72);

  //     let honors = tiles.filter((t: any) => t >= 108).map((t: any) => t - 108);

  //     function words(suits: any[], red_five: number, suffix: string) {
  //       return suits.length > 0
  //         ? suits
  //             .map((i: any) =>
  //               i === red_five && print_aka_dora ? "0" : (i / 4 + 1).toString()
  //             )
  //             .join("") + suffix
  //         : "";
  //     }

  //     sou = words(sou, FIVE_RED_SOU - 72, "s");
  //     pin = words(pin, FIVE_RED_PIN - 36, "p");
  //     man = words(man, FIVE_RED_MAN, "m");
  //     honors = words(honors, -1 - 108, "z");

  //     return man + pin + sou + honors;
  //   }

  static to_one_line_string(
    tiles: any[],
    print_aka_dora: boolean = false
  ): string {
    tiles = tiles.sort();

    let man = tiles.filter((t: any) => t < 36);

    let pin = tiles
      .filter((t: any) => 36 <= t && t < 72)
      .map((t: any) => t - 36);

    let sou = tiles
      .filter((t: any) => 72 <= t && t < 108)
      .map((t: any) => t - 72);

    let honors = tiles.filter((t: any) => t >= 108).map((t: any) => t - 108);

    function words(suits: any[], red_five: number, suffix: string): string {
      return suits.length > 0
        ? suits
            .map((i: any) =>
              i === red_five && print_aka_dora ? "0" : (i / 4 + 1).toString()
            )
            .join("") + suffix
        : "";
    }

    let souStr = words(sou, FIVE_RED_SOU - 72, "s");
    let pinStr = words(pin, FIVE_RED_PIN - 36, "p");
    let manStr = words(man, FIVE_RED_MAN, "m");
    let honorsStr = words(honors, -1 - 108, "z");

    return manStr + pinStr + souStr + honorsStr;
  }

  static to_34_array(tiles: any[]): any[] {
    let results = Array(34).fill(0);
    for (let tile of tiles) {
      tile = Math.floor(tile / 4);
      results[tile]++;
    }
    return results;
  }

  static to_136_array(tiles: any[]): any[] {
    let temp: any[] = [];
    let results: any[] = [];
    for (let x = 0; x < 34; x++) {
      if (tiles[x]) {
        let temp_value = Array(tiles[x]).fill(x * 4);
        for (let tile of temp_value) {
          if (results.includes(tile)) {
            let count_of_tiles = temp.filter((x: any) => x === tile).length;
            let new_tile = tile + count_of_tiles;
            results.push(new_tile);
            temp.push(tile);
          } else {
            results.push(tile);
            temp.push(tile);
          }
        }
      }
    }
    return results;
  }

  static string_to_136_array(
    sou?: string,
    pin?: string,
    man?: string,
    honors?: string,
    has_aka_dora: boolean = false
  ): any[] {
    function _split_string(
      str: string | undefined,
      offset: number,
      red?: number
    ) {
      let data: any[] = [];
      let temp: any[] = [];
      if (!str) return [];
      for (let i of str) {
        let tile = offset + (parseInt(i) - 1) * 4;
        if (i === "r" || i === "0") {
          if (has_aka_dora) {
            temp.push(red);
            data.push(red);
          }
        } else {
          if (tile === red && has_aka_dora) tile += 1;
          if (data.includes(tile)) {
            let count_of_tiles = temp.filter((x) => x === tile).length;
            let new_tile = tile + count_of_tiles;
            data.push(new_tile);
            temp.push(tile);
          } else {
            data.push(tile);
            temp.push(tile);
          }
        }
      }
      return data;
    }

    let results = _split_string(man, 0, FIVE_RED_MAN);
    results = results.concat(_split_string(pin, 36, FIVE_RED_PIN));
    results = results.concat(_split_string(sou, 72, FIVE_RED_SOU));
    results = results.concat(_split_string(honors, 108));
    return results;
  }

  static string_to_34_array(
    sou?: string,
    pin?: string,
    man?: string,
    honors?: string
  ): any[] {
    let results = TilesConverter.string_to_136_array(sou, pin, man, honors);
    results = TilesConverter.to_34_array(results);
    return results;
  }

  static find_34_tile_in_136_array(
    tile34: number,
    tiles: any[]
  ): number | null {
    if (tile34 === null || tile34 > 33) return null;
    let tile = tile34 * 4;
    let possible_tiles = [tile, tile + 1, tile + 2, tile + 3];
    let found_tile = possible_tiles.find((t) => tiles.includes(t));
    return found_tile || null;
  }

  static one_line_string_to_136_array(
    string: string,
    has_aka_dora: boolean = false
  ): any[] {
    let sou = "";
    let pin = "";
    let man = "";
    let honors = "";

    let split_start = 0;

    for (let index = 0; index < string.length; index++) {
      let i = string[index];
      if (i === "m" || i === "p" || i === "s" || i === "z") {
        let suit = string.slice(split_start, index);
        split_start = index + 1;
        if (i === "m") man = suit;
        else if (i === "p") pin = suit;
        else if (i === "s") sou = suit;
        else if (i === "z") honors = suit;
      }
    }

    return TilesConverter.string_to_136_array(
      sou,
      pin,
      man,
      honors,
      has_aka_dora
    );
  }

  static one_line_string_to_34_array(
    string: string,
    has_aka_dora: boolean = false
  ): any[] {
    let results = TilesConverter.one_line_string_to_136_array(
      string,
      has_aka_dora
    );
    results = TilesConverter.to_34_array(results);
    return results;
  }
}
