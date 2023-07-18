import { HandDivider } from "./hand_calculating/divider";
import { HandConfig, OptionalRules } from "./hand_calculating/hand_config";
import { Meld } from "./meld";
import { TilesConverter } from "./tile";

class TestMixin {
  private _stringToOpen34Set(
    sou = "",
    pin = "",
    man = "",
    honors = ""
  ): number[] {
    let openSet = TilesConverter.string_to_136_array(sou, pin, man, honors);
    openSet[0] /= 4;
    openSet[1] /= 4;
    openSet[2] /= 4;
    return openSet;
  }

  private _stringTo34Tile(sou = "", pin = "", man = "", honors = ""): number {
    let item = TilesConverter.string_to_136_array(sou, pin, man, honors);
    item[0] /= 4;
    return item[0];
  }

  private _stringTo34Array(
    sou = "",
    pin = "",
    man = "",
    honors = ""
  ): number[] {
    return TilesConverter.string_to_34_array(sou, pin, man, honors);
  }

  private _stringTo136Array(
    sou = "",
    pin = "",
    man = "",
    honors = ""
  ): number[] {
    return TilesConverter.string_to_136_array(sou, pin, man, honors);
  }

  private _stringTo136Tile(sou = "", pin = "", man = "", honors = ""): number {
    return TilesConverter.string_to_136_array(sou, pin, man, honors)[0];
  }

  private _to34Array(tiles: number[]): number[] {
    return TilesConverter.to_34_array(tiles);
  }

  private _toString(tiles136: number[]): string {
    return TilesConverter.to_one_line_string(tiles136);
  }

  private _hand(tiles: number[], handIndex = 0): number[] {
    let handDivider = new HandDivider();
    return handDivider.divideHand(tiles)[handIndex];
  }

  private _makeMeld(
    meldType: any,
    isOpen = true,
    man = "",
    pin = "",
    sou = "",
    honors = ""
  ): Meld {
    let tiles = this._stringTo136Array(man, pin, sou, honors);
    let meld = new Meld(meldType, tiles, isOpen, tiles[0], 0);
    return meld;
  }

  private _makeHandConfig(
    isTsumo = false,
    isRiichi = false,
    isIppatsu = false,
    isRinshan = false,
    isChankan = false,
    isHaitei = false,
    isHoutei = false,
    isDaburuRiichi = false,
    isNagashiMangan = false,
    isTenhou = false,
    isRenhou = false,
    isChiihou = false,
    playerWind = null,
    roundWind = null,
    hasOpenTanyao = false,
    hasAkaDora = false,
    disableDoubleYakuman = false,
    renhouAsYakuman = false,
    allowDaisharin = false,
    allowDaisharinOtherSuits = false,
    isOpenRiichi = false,
    hasSashikomiYakuman = false,
    limitToSextupleYakuman = true,
    paarenchanNeedsYaku = true,
    hasDaichisei = false,
    paarenchan = 0
  ): HandConfig {
    let options = new OptionalRules(
      hasOpenTanyao,
      hasAkaDora,
      !disableDoubleYakuman,
      renhouAsYakuman,
      allowDaisharin,
      allowDaisharinOtherSuits,
      hasDaichisei,
      hasSashikomiYakuman,
      limitToSextupleYakuman,
      paarenchanNeedsYaku
    );

    return new HandConfig(
      isTsumo,
      isRiichi,
      isIppatsu,
      isRinshan,
      isChankan,
      isHaitei,
      isHoutei,
      isDaburuRiichi,
      isNagashiMangan,
      isTenhou,
      isRenhou,
      isChiihou,
      playerWind,
      roundWind,
      isOpenRiichi,
      paarenchan,
      options
    );
  }
}
