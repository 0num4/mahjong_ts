// Import the required module
// Note: You will need to convert the 'TilesConverter' class to TypeScript as well.
import { TilesConverter } from "./tile";

export class Meld {
  static CHI = "chi";
  static PON = "pon";
  static KAN = "kan";
  static SHOUMINKAN = "shouminkan";
  static NUKI = "nuki";

  who: any;
  tiles: any[];
  type: string | null;
  from_who: any;
  called_tile: any;
  opened: boolean;

  constructor(
    meld_type?: string,
    tiles?: any[],
    opened: boolean = true,
    called_tile?: any,
    who?: any,
    from_who?: any
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

  get tiles_34(): any[] {
    return this.tiles.map((x: any) => Math.floor(x / 4));
  }

  get CHANKAN(): string {
    console.warn("Use .SHOUMINKAN attribute instead of .CHANKAN attribute");
    return Meld.SHOUMINKAN;
  }
}
