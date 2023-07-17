import { AkaDora } from "./yaku_list/aka_dora";

class YakuConfig {
  private counter: () => number;

  constructor() {
    this.counter = this.count();

    // Yaku situations
    this.tsumo = new Tsumo(this.counter());
    this.riichi = new Riichi(this.counter());
    this.open_riichi = new OpenRiichi(this.counter());
    this.ippatsu = new Ippatsu(this.counter());
    this.chankan = new Chankan(this.counter());
    this.rinshan = new Rinshan(this.counter());
    this.haitei = new Haitei(this.counter());
    this.houtei = new Houtei(this.counter());
    this.daburu_riichi = new DaburuRiichi(this.counter());
    this.daburu_open_riichi = new DaburuOpenRiichi(this.counter());
    this.nagashi_mangan = new NagashiMangan(this.counter());
    this.renhou = new Renhou(this.counter());

    // Yaku 1 Han
    this.pinfu = new Pinfu(this.counter());
    this.tanyao = new Tanyao(this.counter());
    this.iipeiko = new Iipeiko(this.counter());
    this.haku = new Haku(this.counter());
    this.hatsu = new Hatsu(this.counter());
    this.chun = new Chun(this.counter());

    this.east = new YakuhaiEast(this.counter());
    this.south = new YakuhaiSouth(this.counter());
    this.west = new YakuhaiWest(this.counter());
    this.north = new YakuhaiNorth(this.counter());
    this.yakuhai_place = new YakuhaiOfPlace(this.counter());
    this.yakuhai_round = new YakuhaiOfRound(this.counter());

    // Yaku 2 Hans
    this.sanshoku = new Sanshoku(this.counter());
    this.ittsu = new Ittsu(this.counter());
    this.chantai = new Chantai(this.counter());
    this.honroto = new Honroto(this.counter());
    this.toitoi = new Toitoi(this.counter());
    this.sanankou = new Sanankou(this.counter());
    this.sankantsu = new SanKantsu(this.counter());
    this.sanshoku_douko = new SanshokuDoukou(this.counter());
    this.chiitoitsu = new Chiitoitsu(this.counter());
    this.shosangen = new Shosangen(this.counter());

    // Yaku 3 Hans
    this.honitsu = new Honitsu(this.counter());
    this.junchan = new Junchan(this.counter());
    this.ryanpeiko = new Ryanpeikou(this.counter());

    // Yaku 6 Hans
    this.chinitsu = new Chinitsu(this.counter());

    // Yakuman list
    this.kokushi = new KokushiMusou(this.counter());
    this.chuuren_poutou = new ChuurenPoutou(this.counter());
    this.suuankou = new Suuankou(this.counter());
    this.daisangen = new Daisangen(this.counter());
    this.shosuushi = new Shousuushii(this.counter());
    this.ryuisou = new Ryuuiisou(this.counter());
    this.suukantsu = new Suukantsu(this.counter());
    this.tsuisou = new Tsuuiisou(this.counter());
    this.chinroto = new Chinroutou(this.counter());
    this.daisharin = new Daisharin(this.counter());
    this.daichisei = new Daichisei(this.counter());

    // Double yakuman
    this.daisuushi = new DaiSuushii(this.counter());
    this.daburu_kokushi = new DaburuKokushiMusou(this.counter());
    this.suuankou_tanki = new SuuankouTanki(this.counter());
    this.daburu_chuuren_poutou = new DaburuChuurenPoutou(this.counter());

    // Yakuman situations
    this.tenhou = new Tenhou(this.counter());
    this.chiihou = new Chiihou(this.counter());
    this.renhou_yakuman = new RenhouYakuman(this.counter());
    this.sashikomi = new Sashikomi(this.counter());
    this.paarenchan = new Paarenchan(this.counter());

    // Other
    this.dora = new Dora(this.counter());
    this.aka_dora = new AkaDora(this.counter());
  }

  private count(): () => number {
    let counter = 0;
    return () => counter++;
  }
}
