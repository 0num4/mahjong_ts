// Import the required module
// Note: You will need to convert the 'FIVE_RED_MAN', 'FIVE_RED_PIN', 'FIVE_RED_SOU' constants to TypeScript as well.
import { FIVE_RED_MAN, FIVE_RED_PIN, FIVE_RED_SOU } from "./constants";

class Tile {
    value: any;
    is_tsumogiri: boolean;

    constructor(value: any, is_tsumogiri: boolean) {
        this.value = value;
        this.is_tsumogiri = is_tsumogiri;
    }
}

class TilesConverter {
    static to_one_line_string(tiles: any[], print_aka_dora: boolean = false): string {
        tiles = tiles.sort();

        let man = tiles.filter((t: any) => t < 36);

        let pin = tiles.filter((t: any) => 36 <= t && t < 72).map((t: any) => t - 36);

        let sou = tiles.filter((t: any) => 72 <= t && t < 108).map((t: any) => t - 72);

        let honors = tiles.filter((t: any) => t >= 108).map((t: any) => t - 108);

        function words(suits: any[], red_five: number, suffix: string) {
            return suits.length > 0 ? suits.map((i: any) => i === red_five && print_aka_dora ? "0" : ((i / 4) + 1).toString()).join("") + suffix : "";
        }

        sou = words(sou, FIVE_RED_SOU - 72, "s");
        pin = words(pin, FIVE_RED_PIN - 36, "p");
        man = words(man, FIVE_RED_MAN, "m");
        honors = words(honors, -1 - 108, "z");

        return man + pin + sou + honors;
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
