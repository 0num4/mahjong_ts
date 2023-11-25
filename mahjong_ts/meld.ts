// Import the required module
// Note: You will need to convert the 'TilesConverter' class to TypeScript as well.
import { TilesConverter } from "./tile";

export type Tile = any;
export type MeldType = "chi" | "pon" | "kan" | "shouminkan" | "nuki";

export class Meld {
  static CHI = "chi";
  static PON = "pon";
  static KAN = "kan";
  static SHOUMINKAN = "shouminkan";
  static NUKI = "nuki";

  who: number | null;
  tiles: Tile[];
  type: MeldType | null;
  from_who: number | null;
  called_tile: Tile | null;
  opened: boolean;

  constructor(
    tiles: Tile[],
    meld_type?: MeldType,
    opened: boolean = true,
    called_tile?: any,
    who?: number,
    from_who?: number
  ) {
    this.type = meld_type || null;
    this.tiles = tiles || [];
    this.opened = opened;
    this.called_tile = called_tile || null;
    this.who = who || null;
    this.from_who = from_who || null;
  }

  toString(): string {
    // Note: You will need to convert the 'to_one_line_string' method to TypeScript as well.
    return `Type: ${this.type}, Tiles: ${TilesConverter.to_one_line_string(
      this.tiles
    )} ${this.tiles}`;
  }

  get tiles_34(): number[] {
    return this.tiles.map((x: any) => Math.floor(x / 4));
  }

  get CHANKAN(): string {
    console.warn("Use .SHOUMINKAN attribute instead of .CHANKAN attribute");
    return Meld.SHOUMINKAN;
  }
}
