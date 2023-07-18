import { HONOR_INDICES } from "../constants";
import { Meld } from "../meld";
import { product, combinations } from "../utils";
import { is_chi, is_pon } from "../utils";
import * as crypto from "crypto";
import { permutations } from "itertools";

export class HandDivider {
  private dividerCache: { [key: string]: any[] };
  private cacheKey: string | null;

  constructor() {
    this.dividerCache = {};
    this.cacheKey = null;
  }

  divideHand(
    tiles34: number[],
    melds: Meld[] | null = null,
    useCache: boolean = false
  ): any[] {
    if (melds === null) {
      melds = [];
    }

    if (useCache) {
      this.cacheKey = this.buildDividerCacheKey(tiles34, melds);
      if (this.cacheKey in this.dividerCache) {
        return this.dividerCache[this.cacheKey];
      }
    }

    let closedHandTiles34 = [...tiles34];

    let openTileIndices =
      melds.length > 0 ? [].concat(...melds.map((x) => x.tiles_34)) : [];
    for (let openItem of openTileIndices) {
      closedHandTiles34[openItem] -= 1;
    }

    let pairIndices = this.findPairs(closedHandTiles34);

    let hands: any[] = [];
    for (let pairIndex of pairIndices) {
      let localTiles34 = [...tiles34];

      for (let openItem of openTileIndices) {
        localTiles34[openItem] -= 1;
      }

      localTiles34[pairIndex] -= 2;

      let man = this.findValidCombinations(localTiles34, 0, 8);
      let pin = this.findValidCombinations(localTiles34, 9, 17);
      let sou = this.findValidCombinations(localTiles34, 18, 26);

      let honor = [];
      for (let x of HONOR_INDICES) {
        if (localTiles34[x] === 3) {
          honor.push(Array(3).fill(x));
        }
      }

      if (honor.length > 0) {
        honor = [honor];
      }

      let arrays = [[[pairIndex].fill(2)]];
      if (sou.length > 0) {
        arrays.push(sou);
      }
      if (man.length > 0) {
        arrays.push(man);
      }
      if (pin.length > 0) {
        arrays.push(pin);
      }
      if (honor.length > 0) {
        arrays.push(honor);
      }

      for (let meld of melds) {
        arrays.push([meld.tiles_34]);
      }

      // let's find all possible hand from our valid sets
      for (let s of product(...arrays)) {
        let hand = [];
        for (let item of s) {
          if (Array.isArray(item[0])) {
            for (let x of item) {
              hand.push(x);
            }
          } else {
            hand.push(item);
          }
        }

        hand.sort((a, b) => a[0] - b[0]);
        if (hand.length === 5) {
          hands.push(hand);
        }
      }
    }

    if (useCache) {
      this.dividerCache[this.cacheKey] = hands;
    }

    return hands;
  }

  findPairs(
    tiles34: number[],
    firstIndex: number = 0,
    secondIndex: number = 33
  ): number[] {
    let pairIndices: number[] = [];
    for (let x = firstIndex; x <= secondIndex; x++) {
      if (HONOR_INDICES.includes(x) && tiles34[x] !== 2) {
        continue;
      }
      if (tiles34[x] >= 2) {
        pairIndices.push(x);
      }
    }
    return pairIndices;
  }

  private findValidCombinations(
    tiles34: number[],
    firstIndex: number,
    secondIndex: number,
    handNotCompleted: boolean = false
  ): any[] {
    let indices: number[] = [];
    for (let x = firstIndex; x <= secondIndex; x++) {
      if (tiles34[x] > 0) {
        for (let i = 0; i < tiles34[x]; i++) {
          indices.push(x);
        }
      }
    }

    if (indices.length === 0) {
      return [];
    }

    let allPossibleCombinations = permutations(indices, 3);

    let validCombinations: any[] = [];
    for (let combination of allPossibleCombinations) {
      // Here we should check if the combination is a valid chi or pon
      // In Python, we would use is_chi and is_pon functions
      // We should define equivalent functions in TypeScript
      if (is_chi(combination) || is_pon(combination)) {
        validCombinations.push(combination);
      }
    }

    let countOfNeededCombinations = Math.floor(indices.length / 3);

    if (countOfNeededCombinations === 0 || validCombinations.length === 0) {
      return [];
    }

    if (countOfNeededCombinations === 1 || validCombinations.length === 1) {
      return validCombinations;
    }

    // Generate all possible sets of combinations
    let allSets = combinations(validCombinations, countOfNeededCombinations);

    let finalSets: any[] = [];
    for (let set of allSets) {
      let singleList = set.flat();

      // If the total number of tiles in the set matches the total number of tiles we have
      if (singleList.length === indices.length) {
        let singleListCount = new Array(34).fill(0);
        for (let i of singleList) {
          singleListCount[i]++;
        }

        let indicesCount = new Array(34).fill(0);
        for (let i of indices) {
          indicesCount[i]++;
        }

        if (JSON.stringify(singleListCount) === JSON.stringify(indicesCount)) {
          finalSets.push(set);
        }
      }
    }

    return finalSets;
  }

  clearCache(): void {
    this.dividerCache = {};
    this.cacheKey = null;
  }

  private buildDividerCacheKey(tiles34: number[], melds: Meld[]): string {
    let preparedArray = [...tiles34];
    if (melds) {
      for (let meld of melds) {
        preparedArray.push(...meld.tiles);
      }
    }
    // chatgptは怪しいらしい
    let byteArray = new Uint8Array(preparedArray);
    let hash = crypto.createHash("md5");
    hash.update(byteArray);

    return hash.digest("hex");
  }
}
