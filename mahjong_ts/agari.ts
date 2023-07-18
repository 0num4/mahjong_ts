import { find_isolated_tile_indices } from "./utils";

export class Agari {
  isAgari(tiles34: number[], openSets34?: number[][]): boolean {
    let tiles = [...tiles34];

    if (openSets34) {
      let isolatedTiles = find_isolated_tile_indices(tiles);
      for (let meld of openSets34) {
        if (!isolatedTiles.length) {
          break;
        }

        let isolatedTile = isolatedTiles.pop();
        if (!isolatedTile) {
          throw new Error(
            "isolatedTile is undefined, pythonではここでエラーを投げる"
          );
        }

        tiles[meld[0]] -= 1;
        tiles[meld[1]] -= 1;
        tiles[meld[2]] -= 1;
        if (meld.length > 3) {
          tiles[meld[3]] -= 1;
        }
        tiles[isolatedTile] = 3;
      }
    }

    let j =
      (1 << tiles[27]) |
      (1 << tiles[28]) |
      (1 << tiles[29]) |
      (1 << tiles[30]) |
      (1 << tiles[31]) |
      (1 << tiles[32]) |
      (1 << tiles[33]);

    if (j >= 0x10) {
      return false;
    }

    // 13 orphans
    if (
      (j & 3) === 2 &&
      tiles[0] *
        tiles[8] *
        tiles[9] *
        tiles[17] *
        tiles[18] *
        tiles[26] *
        tiles[27] *
        tiles[28] *
        tiles[29] *
        tiles[30] *
        tiles[31] *
        tiles[32] *
        tiles[33] ===
        2
    ) {
      return true;
    }

    // seven pairs
    if (!(j & 10) && tiles.filter((v, i) => v === 2).length === 7) {
      return true;
    }

    if (j & 2) {
      return false;
    }

    let n00 = tiles[0] + tiles[3] + tiles[6];
    let n01 = tiles[1] + tiles[4] + tiles[7];
    let n02 = tiles[2] + tiles[5] + tiles[8];

    let n10 = tiles[9] + tiles[12] + tiles[15];
    let n11 = tiles[10] + tiles[13] + tiles[16];
    let n12 = tiles[11] + tiles[14] + tiles[17];

    let n20 = tiles[18] + tiles[21] + tiles[24];
    let n21 = tiles[19] + tiles[22] + tiles[25];
    let n22 = tiles[20] + tiles[23] + tiles[26];

    let n0 = (n00 + n01 + n02) % 3;
    if (n0 === 1) {
      return false;
    }

    let n1 = (n10 + n11 + n12) % 3;
    if (n1 === 1) {
      return false;
    }

    let n2 = (n20 + n21 + n22) % 3;
    if (n2 === 1) {
      return false;
    }

    if (
      Number(n0 === 2) +
        Number(n1 === 2) +
        Number(n2 === 2) +
        Number(tiles[27] === 2) +
        Number(tiles[28] === 2) +
        Number(tiles[29] === 2) +
        Number(tiles[30] === 2) +
        Number(tiles[31] === 2) +
        Number(tiles[32] === 2) +
        Number(tiles[33] === 2) !==
      1
    ) {
      return false;
    }

    let nn0 = (n00 * 1 + n01 * 2) % 3;
    let m0 = this._toMeld(tiles, 0);
    let nn1 = (n10 * 1 + n11 * 2) % 3;
    let m1 = this._toMeld(tiles, 9);
    let nn2 = (n20 * 1 + n21 * 2) % 3;
    let m2 = this._toMeld(tiles, 18);

    if (j & 4) {
      return (
        !(n0 || nn0 || n1 || nn1 || n2 || nn2) &&
        this._isMentsu(m0) &&
        this._isMentsu(m1) &&
        this._isMentsu(m2)
      );
    }

    if (n0 === 2) {
      return (
        !(n1 || nn1 || n2 || nn2) &&
        this._isMentsu(m1) &&
        this._isMentsu(m2) &&
        this._isAtamaMentsu(nn0, m0)
      );
    }

    if (n1 === 2) {
      return (
        !(n2 || nn2 || n0 || nn0) &&
        this._isMentsu(m2) &&
        this._isMentsu(m0) &&
        this._isAtamaMentsu(nn1, m1)
      );
    }

    if (n2 === 2) {
      return (
        !(n0 || nn0 || n1 || nn1) &&
        this._isMentsu(m0) &&
        this._isMentsu(m1) &&
        this._isAtamaMentsu(nn2, m2)
      );
    }

    return false;
  }

  _isMentsu(m: number): boolean {
    let a = m & 7;
    let b = 0;
    let c = 0;
    if (a === 1 || a === 4) {
      b = c = 1;
    } else if (a === 2) {
      b = c = 2;
    }
    m >>= 3;
    a = (m & 7) - b;

    if (a < 0) {
      return false;
    }

    let isNotMentsu = false;
    for (let _i = 0; _i < 6; _i++) {
      b = c;
      c = 0;
      if (a === 1 || a === 4) {
        b += 1;
        c += 1;
      } else if (a === 2) {
        b += 2;
        c += 2;
      }
      m >>= 3;
      a = (m & 7) - b;
      if (a < 0) {
        isNotMentsu = true;
        break;
      }
    }

    if (isNotMentsu) {
      return false;
    }

    m >>= 3;
    a = (m & 7) - c;

    return a === 0 || a === 3;
  }

  _isAtamaMentsu(nn: number, m: number): boolean {
    if (nn === 0) {
      if ((m & (7 << 6)) >= 2 << 6 && this._isMentsu(m - (2 << 6))) {
        return true;
      }
      if ((m & (7 << 15)) >= 2 << 15 && this._isMentsu(m - (2 << 15))) {
        return true;
      }
      if ((m & (7 << 24)) >= 2 << 24 && this._isMentsu(m - (2 << 24))) {
        return true;
      }
    } else if (nn === 1) {
      if ((m & (7 << 3)) >= 2 << 3 && this._isMentsu(m - (2 << 3))) {
        return true;
      }
      if ((m & (7 << 12)) >= 2 << 12 && this._isMentsu(m - (2 << 12))) {
        return true;
      }
      if ((m & (7 << 21)) >= 2 << 21 && this._isMentsu(m - (2 << 21))) {
        return true;
      }
    } else if (nn === 2) {
      if ((m & (7 << 0)) >= 2 << 0 && this._isMentsu(m - (2 << 0))) {
        return true;
      }
      if ((m & (7 << 9)) >= 2 << 9 && this._isMentsu(m - (2 << 9))) {
        return true;
      }
      if ((m & (7 << 18)) >= 2 << 18 && this._isMentsu(m - (2 << 18))) {
        return true;
      }
    }
    return false;
  }

  _toMeld(tiles: number[], d: number): number {
    let result = 0;
    for (let i = 0; i < 9; i++) {
      result |= tiles[d + i] << (i * 3);
    }
    return result;
  }
}
