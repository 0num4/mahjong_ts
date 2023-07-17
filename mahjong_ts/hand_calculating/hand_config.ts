// import { YakuConfig } from "mahjong/hand_calculating/yaku_config";

import { EAST } from "../constants";

class HandConstants {
  static readonly KAZOE_LIMITED = 0;
  static readonly KAZOE_SANBAIMAN = 1;
  static readonly KAZOE_NO_LIMIT = 2;
}

class OptionalRules {
  has_open_tanyao: boolean = false;
  has_aka_dora: boolean = false;
  has_double_yakuman: boolean = true;
  kazoe_limit: number = HandConstants.KAZOE_LIMITED;
  kiriage: boolean = false;
  fu_for_open_pinfu: boolean = true;
  fu_for_pinfu_tsumo: boolean = false;
  renhou_as_yakuman: boolean = false;
  has_daisharin: boolean = false;
  has_daisharin_other_suits: boolean = false;
  has_daichisei: boolean = false;
  has_sashikomi_yakuman: boolean = false;
  limit_to_sextuple_yakuman: boolean = true;
  paarenchan_needs_yaku: boolean = true;

  constructor(
    has_open_tanyao?: boolean,
    has_aka_dora?: boolean,
    has_double_yakuman?: boolean,
    kazoe_limit?: number,
    kiriage?: boolean,
    fu_for_open_pinfu?: boolean,
    fu_for_pinfu_tsumo?: boolean,
    renhou_as_yakuman?: boolean,
    has_daisharin?: boolean,
    has_daisharin_other_suits?: boolean,
    has_sashikomi_yakuman?: boolean,
    limit_to_sextuple_yakuman?: boolean,
    paarenchan_needs_yaku?: boolean,
    has_daichisei?: boolean
  ) {
    this.has_open_tanyao = has_open_tanyao || this.has_open_tanyao;
    this.has_aka_dora = has_aka_dora || this.has_aka_dora;
    this.has_double_yakuman = has_double_yakuman || this.has_double_yakuman;
    this.kazoe_limit = kazoe_limit || this.kazoe_limit;
    this.kiriage = kiriage || this.kiriage;
    this.fu_for_open_pinfu = fu_for_open_pinfu || this.fu_for_open_pinfu;
    this.fu_for_pinfu_tsumo = fu_for_pinfu_tsumo || this.fu_for_pinfu_tsumo;
    this.renhou_as_yakuman = renhou_as_yakuman || this.renhou_as_yakuman;
    this.has_daisharin = has_daisharin || this.has_daisharin;
    this.has_daisharin_other_suits =
      has_daisharin_other_suits || this.has_daisharin_other_suits;
    this.has_sashikomi_yakuman =
      has_sashikomi_yakuman || this.has_sashikomi_yakuman;
    this.limit_to_sextuple_yakuman =
      limit_to_sextuple_yakuman || this.limit_to_sextuple_yakuman;
    this.paarenchan_needs_yaku =
      paarenchan_needs_yaku || this.paarenchan_needs_yaku;
    this.has_daichisei = has_daichisei || this.has_daichisei;
  }
}

class HandConfig extends HandConstants {
  yaku?: YakuConfig;
  options?: OptionalRules;

  is_tsumo: boolean = false;
  is_riichi: boolean = false;
  is_ippatsu: boolean = false;
  is_rinshan: boolean = false;
  is_chankan: boolean = false;
  is_haitei: boolean = false;
  is_houtei: boolean = false;
  is_daburu_riichi: boolean = false;
  is_nagashi_mangan: boolean = false;
  is_tenhou: boolean = false;
  is_renhou: boolean = false;
  is_chiihou: boolean = false;
  is_open_riichi: boolean = false;

  is_dealer: boolean = false;
  player_wind?: any;
  round_wind?: any;
  paarenchan: number = 0;

  kyoutaku_number: number = 0; // 1000-point
  tsumi_number: number = 0; // 100-point

  constructor(
    is_tsumo?: boolean,
    is_riichi?: boolean,
    is_ippatsu?: boolean,
    is_rinshan?: boolean,
    is_chankan?: boolean,
    is_haitei?: boolean,
    is_houtei?: boolean,
    is_daburu_riichi?: boolean,
    is_nagashi_mangan?: boolean,
    is_tenhou?: boolean,
    is_renhou?: boolean,
    is_chiihou?: boolean,
    is_open_riichi?: boolean,
    player_wind?: any,
    round_wind?: any,
    kyoutaku_number?: number,
    tsumi_number?: number,
    paarenchan?: number,
    options?: OptionalRules
  ) {
    super();
    this.yaku = new YakuConfig();
    this.options = options || new OptionalRules();

    this.is_tsumo = is_tsumo || this.is_tsumo;
    this.is_riichi = is_riichi || this.is_riichi;
    this.is_ippatsu = is_ippatsu || this.is_ippatsu;
    this.is_rinshan = is_rinshan || this.is_rinshan;
    this.is_chankan = is_chankan || this.is_chankan;
    this.is_haitei = is_haitei || this.is_haitei;
    this.is_houtei = is_houtei || this.is_houtei;
    this.is_daburu_riichi = is_daburu_riichi || this.is_daburu_riichi;
    this.is_nagashi_mangan = is_nagashi_mangan || this.is_nagashi_mangan;
    this.is_tenhou = is_tenhou || this.is_tenhou;
    this.is_renhou = is_renhou || this.is_renhou;
    this.is_chiihou = is_chiihou || this.is_chiihou;
    this.is_open_riichi = is_open_riichi || this.is_open_riichi;

    this.player_wind = player_wind;
    this.round_wind = round_wind;
    this.is_dealer = player_wind == EAST;
    this.paarenchan = paarenchan || this.paarenchan;

    this.kyoutaku_number = kyoutaku_number || this.kyoutaku_number;
    this.tsumi_number = tsumi_number || this.tsumi_number;
  }
}
