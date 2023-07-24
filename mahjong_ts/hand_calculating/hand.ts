import { HandConfig } from "./hand_config";

class HandCalculator {
  config: HandConfig | null = null;

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
  hand_divider: any;

  constructor() {
    this.config = new HandConfig();
  }
  estimate_hand_value(tiles: number[], win_tile: number, is_tsumo: boolean, is_riichi: boolean, open_sets: number[][] | null = null, use_hand_divider_cache: boolean = true): any {
    this.hand_divider = new HandDivider();

    let agari = new Agari();
    let tiles_34 = TilesConverter.to_34_array(tiles);
    this.hand_total_tiles = tiles_34.reduce((a, b) => a + b, 0);

    this.config.is_tsumo = is_tsumo;
    this.config.is_riichi = is_riichi;

    let open_hand = false;
    let melds;

    if (open_sets) {
        open_hand = true;
        melds = open_sets.map(x => new Meld(x));
    } else {
        melds = [];
    }

    this.config.is_open_hand = open_hand;

    if (this.config.is_nagashi_mangan) {
        return new HandResponse({error: HandCalculator.ERR_NAGASHI_MANGAN});
    }

    if (this.config.is_nagashi_mangan) {
      return new HandResponse({error: HandCalculator.ERR_NAGASHI_MANGAN});
  }
  
  if (this.config.is_renhou && !this.config.options.has_renhou) {
      return new HandResponse({error: HandCalculator.ERR_RENHOU_IS_CLOSED});
  }
  
  if (this.config.is_renhou && this.config.options.renhou_as_yakuman) {
      this.config.yaku.renhou.rename();
      return new HandResponse({
          cost: scores_calculator.calculate_scores(13, 0, this.config, true),
          han: 13,
          fu: 0,
          hand_yaku: [this.config.yaku.renhou_yakuman],
          error: null,
      });
  }

    if (!agari.is_agari(tiles_34, all_melds)) {
        return new HandResponse({error: HandCalculator.ERR_HAND_NOT_WINNING});
    }
}
