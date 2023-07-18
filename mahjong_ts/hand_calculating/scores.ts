import { HandConfig } from "./hand_config";

export type Cost = {
  main: number;
  mainBonus?: number;
  additional: number;
  additionalBonus?: number;
  kyoutakuBonus?: number;
  total?: number;
  yakuLevel?: string;
};

export class ScoresCalculator {
  calculateScores(
    han: number,
    fu: number,
    config: HandConfig,
    isYakuman: boolean = false
  ): Cost {
    let yakuLevel = "";

    if (han >= 13 && !isYakuman) {
      if (config.options.kazoe_limit === HandConfig.KAZOE_LIMITED) {
        han = 13;
        yakuLevel = "kazoe yakuman";
      } else if (config.options.kazoe_limit === HandConfig.KAZOE_SANBAIMAN) {
        han = 12;
        yakuLevel = "kazoe sanbaiman";
      }
    }

    let basePoints: number;
    let rounded: number;
    let doubleRounded: number;
    let fourRounded: number;
    let sixRounded: number;

    if (han >= 5) {
      if (han >= 78) {
        yakuLevel = "6x yakuman";
        if (config.options.limit_to_sextuple_yakuman) {
          rounded = 48000;
        } else {
          const extraHan = Math.floor((han - 78) / 13);
          rounded = 48000 + extraHan * 8000;
        }
      } else if (han >= 65) {
        yakuLevel = "5x yakuman";
        rounded = 40000;
      } else if (han >= 52) {
        yakuLevel = "4x yakuman";
        rounded = 32000;
      } else if (han >= 39) {
        yakuLevel = "3x yakuman";
        rounded = 24000;
      } else if (han >= 26) {
        yakuLevel = "2x yakuman";
        rounded = 16000;
      } else if (han >= 13) {
        yakuLevel = "yakuman";
        rounded = 8000;
      } else if (han >= 11) {
        yakuLevel = "sanbaiman";
        rounded = 6000;
      } else if (han >= 8) {
        yakuLevel = "baiman";
        rounded = 4000;
      } else if (han >= 6) {
        yakuLevel = "haneman";
        rounded = 3000;
      } else {
        yakuLevel = "mangan";
        rounded = 2000;
      }

      doubleRounded = rounded * 2;
      fourRounded = doubleRounded * 2;
      sixRounded = doubleRounded * 3;
    } else {
      basePoints = fu * Math.pow(2, 2 + han);
      rounded = Math.floor((basePoints + 99) / 100) * 100;
      doubleRounded = Math.floor((2 * basePoints + 99) / 100) * 100;
      fourRounded = Math.floor((4 * basePoints + 99) / 100) * 100;
      sixRounded = Math.floor((6 * basePoints + 99) / 100) * 100;

      const isKiriage =
        config.options.kiriage &&
        ((han === 4 && fu === 30) || (han === 3 && fu === 60));

      if (rounded > 2000 || isKiriage) {
        yakuLevel = isKiriage ? "kiriage mangan" : "mangan";
        rounded = 2000;
        doubleRounded = rounded * 2;
        fourRounded = doubleRounded * 2;
        sixRounded = doubleRounded * 3;
      }
    }
    let main: number;
    let mainBonus: number;
    let additional: number;
    let additionalBonus: number;

    if (config.is_tsumo) {
      main = doubleRounded;
      mainBonus = 100 * config.tsumi_number;
      additionalBonus = mainBonus;

      if (config.is_dealer) {
        additional = main;
      } else {
        additional = rounded;
      }
    } else {
      additional = 0;
      additionalBonus = 0;
      mainBonus = 300 * config.tsumi_number;

      if (config.is_dealer) {
        main = sixRounded;
      } else {
        main = fourRounded;
      }
    }

    let kyoutakuBonus = 1000 * config.kyoutaku_number;
    let total =
      main + mainBonus + 2 * (additional + additionalBonus) + kyoutakuBonus;

    if (config.is_nagashi_mangan) {
      yakuLevel = "nagashi mangan";
    }

    return {
      main: main,
      mainBonus: mainBonus,
      additional: additional,
      additionalBonus: additionalBonus,
      kyoutakuBonus: kyoutakuBonus,
      total: total,
      yakuLevel: yakuLevel,
    };
  }
}

export class Aotenjou extends ScoresCalculator {
  calculateScores(
    han: number,
    fu: number,
    config: HandConfig,
    isYakuman: boolean = false
  ): Cost {
    let basePoints = fu * Math.pow(2, 2 + han);
    let rounded = Math.floor((basePoints + 99) / 100) * 100;
    let doubleRounded = Math.floor((2 * basePoints + 99) / 100) * 100;
    let fourRounded = Math.floor((4 * basePoints + 99) / 100) * 100;
    let sixRounded = Math.floor((6 * basePoints + 99) / 100) * 100;

    if (config.is_tsumo) {
      return {
        main: doubleRounded,
        additional: config.is_dealer ? doubleRounded : rounded,
      };
    } else {
      return {
        main: config.is_dealer ? sixRounded : fourRounded,
        additional: 0,
      };
    }
  }
}
