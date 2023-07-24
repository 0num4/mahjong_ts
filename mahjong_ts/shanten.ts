import { HONOR_INDICES, TERMINAL_INDICES } from "./constants";

class Shanten {
  static AGARI_STATE = -1;

  tiles: number[] = [];
  number_melds = 0;
  number_tatsu = 0;
  number_pairs = 0;
  number_jidahai = 0;
  number_characters = 0;
  number_isolated_tiles = 0;
  min_shanten = 0;

  calculate_shanten(
    tiles_34: number[],
    use_chiitoitsu: boolean = true,
    use_kokushi: boolean = true
  ): number {
    let shanten_results = [this.calculate_shanten_for_regular_hand(tiles_34)];
    if (use_chiitoitsu) {
      shanten_results.push(
        this.calculate_shanten_for_chiitoitsu_hand(tiles_34)
      );
    }
    if (use_kokushi) {
      shanten_results.push(this.calculate_shanten_for_kokushi_hand(tiles_34));
    }

    return Math.min(...shanten_results);
  }

  calculate_shanten_for_chiitoitsu_hand(tiles_34: number[]): number {
    let pairs = tiles_34.filter((x) => x >= 2).length;
    if (pairs === 7) {
      return Shanten.AGARI_STATE;
    }
    return 6 - pairs;
  }

  calculate_shanten_for_kokushi_hand(tiles_34: number[]): number {
    let indices = [...TERMINAL_INDICES, ...HONOR_INDICES];

    let completed_terminals = indices.reduce(
      (acc, i) => acc + (tiles_34[i] >= 2 ? 1 : 0),
      0
    );
    let terminals = indices.reduce(
      (acc, i) => acc + (tiles_34[i] !== 0 ? 1 : 0),
      0
    );

    return 13 - terminals - (completed_terminals ? 1 : 0);
  }

  calculate_shanten_for_regular_hand(tiles_34: number[]): number {
    // we will modify tiles array later, so we need to use a copy
    let tiles = [...tiles_34];

    this._init(tiles);

    let count_of_tiles = tiles.reduce((acc, x) => acc + x, 0);
    if (count_of_tiles > 14) {
      throw new Error(`Too many tiles = ${count_of_tiles}`);
    }

    this._removeCharacterTiles(count_of_tiles);

    let init_mentsu = Math.floor((14 - count_of_tiles) / 3);
    this._scan(init_mentsu);

    return this.min_shanten;
  }

  _init(tiles: number[]): void {
    this.tiles = tiles;
    this.number_melds = 0;
    this.number_tatsu = 0;
    this.number_pairs = 0;
    this.number_jidahai = 0;
    this.number_characters = 0;
    this.number_isolated_tiles = 0;
    this.min_shanten = 8;
  }

  _scan(init_mentsu: number): void {
    this.number_characters = 0;
    for (let i = 0; i < 27; i++) {
      if (this.tiles[i] === 4) {
        this.number_characters |= 1 << i;
      }
    }
    this.number_melds += init_mentsu;
    this._run(0);
  }

  private _run(depth: number): void {
    if (this.min_shanten === Shanten.AGARI_STATE) {
      return;
    }

    while (!this.tiles[depth]) {
      depth += 1;

      if (depth >= 27) {
        break;
      }
    }

    if (depth >= 27) {
      return this._updateResult();
    }

    let i = depth;
    if (i > 8) {
      i -= 9;
    }
    if (i > 8) {
      i -= 9;
    }

    if (this.tiles[depth] === 4) {
      this._increase_set(depth);
      if (i < 7 && this.tiles[depth + 2]) {
        if (this.tiles[depth + 1]) {
          this._increase_syuntsu(depth);
          this._run(depth + 1);
          this._decrease_syuntsu(depth);
        }
        this._increase_tatsu_second(depth);
        this._run(depth + 1);
        this._increase_tatsu_second(depth);
      }

      if (i < 8 && this.tiles[depth + 1]) {
        this._increase_tatsu_first(depth);
        this._run(depth + 1);
        this._decrease_tatsu_first(depth);
      }

      this._increase_isolated_tile(depth);
      this._run(depth + 1);
      this._decrease_isolated_tile(depth);
      this._decrease_set(depth);
      this._increase_pair(depth);

      if (i < 7 && this.tiles[depth + 2]) {
        if (this.tiles[depth + 1]) {
          this._increase_syuntsu(depth);
          this._run(depth);
          this._decrease_syuntsu(depth);
        }
        this._increase_tatsu_second(depth);
        this._run(depth + 1);
        this._decrease_tatsu_second(depth);
      }

      if (i < 8 && this.tiles[depth + 1]) {
        this._increase_tatsu_first(depth);
        this._run(depth + 1);
        this._decrease_tatsu_first(depth);
      }

      this._decrease_pair(depth);
    }

    if (this.tiles[depth] === 3) {
      this._increase_set(depth);
      this._run(depth + 1);
      this._decrease_set(depth);
      this._increase_pair(depth);

      if (i < 7 && this.tiles[depth + 1] && this.tiles[depth + 2]) {
        this._increase_syuntsu(depth);
        this._run(depth + 1);
        this._decrease_syuntsu(depth);
      } else {
        if (i < 7 && this.tiles[depth + 2]) {
          this._increase_tatsu_second(depth);
          this._run(depth + 1);
          this._decrease_tatsu_second(depth);
        }

        if (i < 8 && this.tiles[depth + 1]) {
          this._increase_tatsu_first(depth);
          this._run(depth + 1);
          this._decrease_tatsu_first(depth);
        }
      }

      this._decrease_pair(depth);

      if (i < 7 && this.tiles[depth + 2] >= 2 && this.tiles[depth + 1] >= 2) {
        this._increase_syuntsu(depth);
        this._increase_syuntsu(depth);
        this._run(depth);
        this._decrease_syuntsu(depth);
        this._decrease_syuntsu(depth);
      }
    }

    if (this.tiles[depth] === 2) {
      this._increase_pair(depth);
      this._run(depth + 1);
      this._decrease_pair(depth);
      if (i < 7 && this.tiles[depth + 2] && this.tiles[depth + 1]) {
        this._increase_syuntsu(depth);
        this._run(depth);
        this._decrease_syuntsu(depth);
      }
    }

    if (this.tiles[depth] === 1) {
      if (
        i < 6 &&
        this.tiles[depth + 1] === 1 &&
        this.tiles[depth + 2] &&
        this.tiles[depth + 3] !== 4
      ) {
        this._increase_syuntsu(depth);
        this._run(depth + 2);
        this._decrease_syuntsu(depth);
      } else {
        this._increase_isolated_tile(depth);
        this._run(depth + 1);
        this._decrease_isolated_tile(depth);

        if (i < 7 && this.tiles[depth + 2]) {
          if (this.tiles[depth + 1]) {
            this._increase_syuntsu(depth);
            this._run(depth + 1);
            this._decrease_syuntsu(depth);
          }
          this._increase_tatsu_second(depth);
          this._run(depth + 1);
          this._decrease_tatsu_second(depth);
        }

        if (i < 8 && this.tiles[depth + 1]) {
          this._increase_tatsu_first(depth);
          this._run(depth + 1);
          this._decrease_tatsu_first(depth);
        }
      }
    }
  }

  private _updateResult(): void {
    let retShanten =
      8 - this.number_melds * 2 - this.number_tatsu - this.number_pairs;
    let nMentsuKouho = this.number_melds + this.number_tatsu;
    if (this.number_pairs) {
      nMentsuKouho += this.number_pairs - 1;
    } else if (this.number_characters && this.number_isolated_tiles) {
      if (
        (this.number_characters | this.number_isolated_tiles) ===
        this.number_characters
      ) {
        retShanten += 1;
      }
    }

    if (nMentsuKouho > 4) {
      retShanten += nMentsuKouho - 4;
    }

    if (
      retShanten !== Shanten.AGARI_STATE &&
      retShanten < this.number_jidahai
    ) {
      retShanten = this.number_jidahai;
    }

    if (retShanten < this.min_shanten) {
      this.min_shanten = retShanten;
    }
  }

  _increase_set(k: number): void {
    this.tiles[k] -= 3;
    this.number_melds += 1;
  }

  _decrease_set(k: number): void {
    this.tiles[k] += 3;
    this.number_melds -= 1;
  }

  _increase_pair(k: number): void {
    this.tiles[k] -= 2;
    this.number_pairs += 1;
  }

  _decrease_pair(k: number): void {
    this.tiles[k] += 2;
    this.number_pairs -= 1;
  }

  _increase_syuntsu(k: number): void {
    this.tiles[k] -= 1;
    this.tiles[k + 1] -= 1;
    this.tiles[k + 2] -= 1;
    this.number_melds += 1;
  }

  _decrease_syuntsu(k: number): void {
    this.tiles[k] += 1;
    this.tiles[k + 1] += 1;
    this.tiles[k + 2] += 1;
    this.number_melds -= 1;
  }

  _increase_tatsu_first(k: number): void {
    this.tiles[k] -= 1;
    this.tiles[k + 1] -= 1;
    this.number_tatsu += 1;
  }

  _decrease_tatsu_first(k: number): void {
    this.tiles[k] += 1;
    this.tiles[k + 1] += 1;
    this.number_tatsu -= 1;
  }

  _increase_tatsu_second(k: number): void {
    this.tiles[k] -= 1;
    this.tiles[k + 2] -= 1;
    this.number_tatsu += 1;
  }

  _decrease_tatsu_second(k: number): void {
    this.tiles[k] += 1;
    this.tiles[k + 2] += 1;
    this.number_tatsu -= 1;
  }

  _increase_isolated_tile(k: number): void {
    this.tiles[k] -= 1;
    this.number_isolated_tiles |= 1 << k;
  }

  _decrease_isolated_tile(k: number): void {
    this.tiles[k] += 1;
    this.number_isolated_tiles |= 1 << k;
  }

  //   _scan_chiitoitsu_and_kokushi is not used

  private _removeCharacterTiles(nc: number): void {
    let number = 0;
    let isolated = 0;

    for (let i = 27; i < 34; i++) {
      if (this.tiles[i] === 4) {
        this.number_melds += 1;
        this.number_jidahai += 1;
        number |= 1 << (i - 27);
        isolated |= 1 << (i - 27);
      }

      if (this.tiles[i] === 3) {
        this.number_melds += 1;
      }

      if (this.tiles[i] === 2) {
        this.number_pairs += 1;
      }

      if (this.tiles[i] === 1) {
        isolated |= 1 << (i - 27);
      }
    }

    if (this.number_jidahai && nc % 3 === 2) {
      this.number_jidahai -= 1;
    }

    if (isolated) {
      this.number_isolated_tiles |= 1 << 27;
      if ((number | isolated) === number) {
        this.number_characters |= 1 << 27;
      }
    }
  }
}
