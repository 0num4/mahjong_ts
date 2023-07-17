// import {
//   AkaDora,
//   Chankan,
//   Chantai,
//   Chiitoitsu,
//   Chinitsu,
//   Chun,
//   DaburuOpenRiichi,
//   DaburuRiichi,
//   Dora,
//   Haitei,
//   Haku,
//   Hatsu,
//   Honitsu,
//   Honroto,
//   Houtei,
//   Iipeiko,
//   Ippatsu,
//   Ittsu,
//   Junchan,
//   NagashiMangan,
//   OpenRiichi,
//   Pinfu,
//   Renhou,
//   Riichi,
//   Rinshan,
//   Ryanpeikou,
//   Sanankou,
//   SanKantsu,
//   Sanshoku,
//   SanshokuDoukou,
//   Shosangen,
//   Tanyao,
//   Toitoi,
//   Tsumo,
//   YakuhaiEast,
//   YakuhaiNorth,
//   YakuhaiOfPlace,
//   YakuhaiOfRound,
//   YakuhaiSouth,
//   YakuhaiWest,
// } from "./yaku_list";

import { AkaDora } from "./yaku_list/aka_dora";
import { Chun } from "./yaku_list/chun";
import { DaburuOpenRiichi } from "./yaku_list/daburu_open_riichi";
import { DaburuRiichi } from "./yaku_list/daburu_riichi";
import { YakuhaiEast } from "./yaku_list/east";
import { Haitei } from "./yaku_list/haitei";
import { Haku } from "./yaku_list/haku";
import { Hatsu } from "./yaku_list/hatsu";
import { Houtei } from "./yaku_list/houtei";
import { Ippatsu } from "./yaku_list/ippatsu";
import { Ittsu } from "./yaku_list/ittsu";
import { NagashiMangan } from "./yaku_list/nagashi_mangan";
import { YakuhaiNorth } from "./yaku_list/north";
import { OpenRiichi } from "./yaku_list/open_riichi";
import { Pinfu } from "./yaku_list/pinfu";
import { Renhou } from "./yaku_list/renhou";
import { Riichi } from "./yaku_list/riichi";
import { Rinshan } from "./yaku_list/rinshan";
import { YakuhaiSouth } from "./yaku_list/south";
import { YakuhaiWest } from "./yaku_list/west";
import {
  Chiihou,
  Chinroutou,
  ChuurenPoutou,
  DaburuChuurenPoutou,
  DaburuKokushiMusou,
  Daichisei,
  Daisangen,
  Daisharin,
  DaiSuushii,
  KokushiMusou,
  Paarenchan,
  RenhouYakuman,
  Ryuuiisou,
  Sashikomi,
  Shousuushii,
  Suuankou,
  SuuankouTanki,
  Suukantsu,
  Tenhou,
  Tsuuiisou,
} from "./yaku_list/yakuman";

export class YakuConfig {
  tsumo: Tsumo;
  riichi: Riichi;
  open_riichi: OpenRiichi;
  ippatsu: Ippatsu;
  chankan: Chankan;
  rinshan: Rinshan;
  haitei: Haitei;
  houtei: Houtei;
  daburu_riichi: DaburuRiichi;
  daburu_open_riichi: DaburuOpenRiichi;
  nagashi_mangan: NagashiMangan;
  renhou: Renhou;
  pinfu: Pinfu;
  tanyao: Tanyao;
  iipeiko: Iipeiko;
  haku: Haku;
  hatsu: Hatsu;
  chun: Chun;
  east: YakuhaiEast;
  south: YakuhaiSouth;
  west: YakuhaiWest;
  north: YakuhaiNorth;
  yakuhai_place: YakuhaiOfPlace;
  yakuhai_round: YakuhaiOfRound;
  sanshoku: Sanshoku;
  ittsu: Ittsu;
  chantai: Chantai;
  honroto: Honroto;
  toitoi: Toitoi;
  sanankou: Sanankou;
  sankantsu: SanKantsu;
  sanshoku_douko: SanshokuDoukou;
  chiitoitsu: Chiitoitsu;
  shosangen: Shosangen;
  honitsu: Honitsu;
  junchan: Junchan;
  ryanpeiko: Ryanpeikou;
  chinitsu: Chinitsu;
  kokushi: KokushiMusou;
  chuuren_poutou: ChuurenPoutou;
  suuankou: Suuankou;
  daisangen: Daisangen;
  shosuushi: Shousuushii;
  ryuisou: Ryuuiisou;
  suukantsu: Suukantsu;
  tsuisou: Tsuuiisou;
  chinroto: Chinroutou;
  daisharin: Daisharin;
  daichisei: Daichisei;
  daisuushi: DaiSuushii;
  daburu_kokushi: DaburuKokushiMusou;
  suuankou_tanki: SuuankouTanki;
  daburu_chuuren_poutou: DaburuChuurenPoutou;
  tenhou: Tenhou;
  chiihou: Chiihou;
  renhou_yakuman: RenhouYakuman;
  sashikomi: Sashikomi;
  paarenchan: Paarenchan;
  dora: Dora;
  aka_dora: AkaDora;

  constructor() {
    let id = 0;

    // Yaku situations
    this.tsumo = new Tsumo(id++);
    this.riichi = new Riichi(id++);
    this.open_riichi = new OpenRiichi(id++);
    this.ippatsu = new Ippatsu(id++);
    this.chankan = new Chankan(id++);
    this.rinshan = new Rinshan(id++);
    this.haitei = new Haitei(id++);
    this.houtei = new Houtei(id++);
    this.daburu_riichi = new DaburuRiichi(id++);
    this.daburu_open_riichi = new DaburuOpenRiichi(id++);
    this.nagashi_mangan = new NagashiMangan(id++);
    this.renhou = new Renhou(id++);

    // Yaku 1 Han
    this.pinfu = new Pinfu(id++);
    this.tanyao = new Tanyao(id++);
    this.iipeiko = new Iipeiko(id++);
    this.haku = new Haku(id++);
    this.hatsu = new Hatsu(id++);
    this.chun = new Chun(id++);

    this.east = new YakuhaiEast(id++);
    this.south = new YakuhaiSouth(id++);
    this.west = new YakuhaiWest(id++);
    this.north = new YakuhaiNorth(id++);
    this.yakuhai_place = new YakuhaiOfPlace(id++);
    this.yakuhai_round = new YakuhaiOfRound(id++);

    // Yaku 2 Hans
    this.sanshoku = new Sanshoku(id++);
    this.ittsu = new Ittsu(id++);
    this.chantai = new Chantai(id++);
    this.honroto = new Honroto(id++);
    this.toitoi = new Toitoi(id++);
    this.sanankou = new Sanankou(id++);
    this.sankantsu = new SanKantsu(id++);
    this.sanshoku_douko = new SanshokuDoukou(id++);
    this.chiitoitsu = new Chiitoitsu(id++);
    this.shosangen = new Shosangen(id++);

    // Yaku 3 Hans
    this.honitsu = new Honitsu(id++);
    this.junchan = new Junchan(id++);
    this.ryanpeiko = new Ryanpeikou(id++);

    // Yaku 6 Hans
    this.chinitsu = new Chinitsu(id++);

    // Yakuman list
    this.kokushi = new KokushiMusou(id++);
    this.chuuren_poutou = new ChuurenPoutou(id++);
    this.suuankou = new Suuankou(id++);
    this.daisangen = new Daisangen(id++);
    this.shosuushi = new Shousuushii(id++);
    this.ryuisou = new Ryuuiisou(id++);
    this.suukantsu = new Suukantsu(id++);
    this.tsuisou = new Tsuuiisou(id++);
    this.chinroto = new Chinroutou(id++);
    this.daisharin = new Daisharin(id++);
    this.daichisei = new Daichisei(id++);

    // Double yakuman
    this.daisuushi = new DaiSuushii(id++);
    this.daburu_kokushi = new DaburuKokushiMusou(id++);
    this.suuankou_tanki = new SuuankouTanki(id++);
    this.daburu_chuuren_poutou = new DaburuChuurenPoutou(id++);

    // Yakuman situations
    this.tenhou = new Tenhou(id++);
    this.chiihou = new Chiihou(id++);
    this.renhou_yakuman = new RenhouYakuman(id++);
    this.sashikomi = new Sashikomi(id++);
    this.paarenchan = new Paarenchan(id++);

    // Other
    this.dora = new Dora(id++);
    this.aka_dora = new AkaDora(id++);
  }
}
