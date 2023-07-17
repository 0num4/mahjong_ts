import { HandConfig } from "./hand_config";

class HandCalculator {
  config = null;

  ERR_NO_WINNING_TILE = "winning_tile_not_in_hand";
  ERR_OPEN_HAND_RIICHI = "open_hand_riichi_not_allowed";
  ERR_OPEN_HAND_DABURI = "open_hand_daburi_not_allowed";
  ERR_IPPATSU_WITHOUT_RIICHI = "ippatsu_without_riichi_not_allowed";
  ERR_HAND_NOT_WINNING = "hand_not_winning";
  ERR_HAND_NOT_CORRECT = "hand_not_correct";
  ERR_NO_YAKU = "no_yaku";
  ERR_CHANKAN_WITH_TSUMO = "chankan_with_tsumo_not_allowed";
  ERR_RINSHAN_WITHOUT_TSUMO = "rinshan_without_tsumo_not_allowed";
  ERR_HAITEI_WITHOUT_TSUMO = "haitei_without_tsumo_not_allowed";
  ERR_HOUTEI_WITH_TSUMO = "houtei_with_tsumo_not_allowed";
  ERR_HAITEI_WITH_RINSHAN = "haitei_with_rinshan_not_allowed";
  ERR_HOUTEI_WITH_CHANKAN = "houtei_with_chankan_not_allowed";
  ERR_TENHOU_NOT_AS_DEALER = "tenhou_not_as_dealer_not_allowed";
  ERR_TENHOU_WITHOUT_TSUMO = "tenhou_without_tsumo_not_allowed";
  ERR_TENHOU_WITH_MELD = "tenhou_with_meld_not_allowed";
  ERR_CHIIHOU_AS_DEALER = "chiihou_as_dealer_not_allowed";
  ERR_CHIIHOU_WITHOUT_TSUMO = "chiihou_without_tsumo_not_allowed";
  ERR_CHIIHOU_WITH_MELD = "chiihou_with_meld_not_allowed";
  ERR_RENHOU_AS_DEALER = "renhou_as_dealer_not_allowed";
  ERR_RENHOU_WITH_TSUMO = "renhou_with_tsumo_not_allowed";
  ERR_RENHOU_WITH_MELD = "renhou_with_meld_not_allowed";

  constructor() {
    this.config = new HandConfig();
  }
  // more possible errors, like tenhou and haitei can't be together (so complicated :<)
  estimate_hand_value(
    tiles,
    win_tile,
    melds,
    dora_indicators,
    config,
    scores_calculator_factory,
    use_hand_divider_cache
  ) {
    if (!melds) {
      melds = [];
    }

    if (!dora_indicators) {
      dora_indicators = [];
    }

    this.config = config || new HandConfig();
  }
}
