import { WINDS } from "../constants";
export enum HandConstants {
  // Hands over 26+ han don't count as double yakuman
  KAZOE_LIMITED = 0,
  // Hands over 13+ is a sanbaiman
  KAZOE_SANBAIMAN = 1,
  // 26+ han as double yakuman, 39+ han as triple yakuman, etc.
  KAZOE_NO_LIMIT = 2,
}

export class OptionalRules {
  /**
   * All the supported optional rules
   */
  has_open_tanyao: boolean;
  has_aka_dora: boolean;
  has_double_yakuman: boolean;
  kazoe_limit: HandConstants;
  kiriage: boolean;
  fu_for_open_pinfu: boolean;
  fu_for_pinfu_tsumo: boolean;
  renhou_as_yakuman: boolean;
  has_daisharin: boolean;
  has_daisharin_other_suits: boolean;
  has_daichisei: boolean;
  has_sashikomi_yakuman: boolean;
  limit_to_sextuple_yakuman: boolean;
  paarenchan_needs_yaku: boolean;

  constructor(
    has_open_tanyao = false,
    has_aka_dora = false,
    has_double_yakuman = true,
    kazoe_limit = HandConstants.KAZOE_LIMITED,
    kiriage = false,
    fu_for_open_pinfu = true,
    fu_for_pinfu_tsumo = false,
    renhou_as_yakuman = false,
    has_daisharin = false,
    has_daisharin_other_suits = false,
    has_sashikomi_yakuman = false,
    limit_to_sextuple_yakuman = true,
    paarenchan_needs_yaku = true,
    has_daichisei = false
  ) {
    this.has_open_tanyao = has_open_tanyao;
    this.has_aka_dora = has_aka_dora;
    this.has_double_yakuman = has_double_yakuman;
    this.kazoe_limit = kazoe_limit;
    this.kiriage = kiriage;
    this.fu_for_open_pinfu = fu_for_open_pinfu;
    this.fu_for_pinfu_tsumo = fu_for_pinfu_tsumo;
    this.renhou_as_yakuman = renhou_as_yakuman;
    this.has_daisharin = has_daisharin || has_daisharin_other_suits;
    this.has_daisharin_other_suits = has_daisharin_other_suits;
    this.has_sashikomi_yakuman = has_sashikomi_yakuman;
    this.limit_to_sextuple_yakuman = limit_to_sextuple_yakuman;
    this.has_daichisei = has_daichisei;
    this.paarenchan_needs_yaku = paarenchan_needs_yaku;
  }
}

export class HandConfig {
  /**
   * Special class to pass various settings to the hand calculator object
   */

  yaku: any;
  options: OptionalRules;

  is_tsumo: boolean;
  is_riichi: boolean;
  is_ippatsu: boolean;
  is_rinshan: boolean;
  is_chankan: boolean;
  is_haitei: boolean;
  is_houtei: boolean;
  is_daburu_riichi: boolean;
  is_nagashi_mangan: boolean;
  is_tenhou: boolean;
  is_renhou: boolean;
  is_chiihou: boolean;
  is_open_riichi: boolean;

  is_dealer: boolean;
  player_wind: typeof WINDS | null;
  round_wind: any;
  paarenchan: number;

  kyoutaku_number: number;
  tsumi_number: number;

  constructor(
    is_tsumo = false,
    is_riichi = false,
    is_ippatsu = false,
    is_rinshan = false,
    is_chankan = false,
    is_haitei = false,
    is_houtei = false,
    is_daburu_riichi = false,
    is_nagashi_mangan = false,
    is_tenhou = false,
    is_renhou = false,
    is_chiihou = false,
    is_open_riichi = false,
    player_wind = null,
    round_wind = null,
    kyoutaku_number = 0,
    tsumi_number = 0,
    paarenchan = 0,
    options = new OptionalRules()
  ) {
    this.yaku = {}; // You need to replace this with your YakuConfig equivalent in TypeScript.
    this.options = options;

    this.is_tsumo = is_tsumo;
    this.is_riichi = is_riichi;
    this.is_ippatsu = is_ippatsu;
    this.is_rinshan = is_rinshan;
    this.is_chankan = is_chankan;
    this.is_haitei = is_haitei;
    this.is_houtei = is_houtei;
    this.is_daburu_riichi = is_daburu_riichi;
    this.is_nagashi_mangan = is_nagashi_mangan;
    this.is_tenhou = is_tenhou;
    this.is_renhou = is_renhou;
    this.is_chiihou = is_chiihou;
    this.is_open_riichi = is_open_riichi;

    this.player_wind = player_wind;
    this.round_wind = round_wind;
    this.is_dealer = player_wind == "EAST";
    this.paarenchan = paarenchan;

    this.kyoutaku_number = kyoutaku_number;
    this.tsumi_number = tsumi_number;
  }
}
