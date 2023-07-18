class HandResponse {
  cost: any[] | null;
  han: number | null;
  fu: number | null;
  fu_details: HandResponse[] | null; //もしかしたらany[]かも
  yaku: Yaku[] | null;
  error: string | null;
  is_open_hand: boolean;

  constructor(
    cost: any[] | null = null,
    han: number | null = null,
    fu: number | null = null,
    yaku: Yaku[] | null = null,
    error: string | null = null,
    fu_details: any[] | null = null,
    is_open_hand: boolean = false
  ) {
    this.cost = cost;
    this.han = han;
    this.fu = fu;
    this.error = error;
    this.is_open_hand = is_open_hand;

    if (fu_details) {
      this.fu_details = fu_details.sort((a, b) => b.fu - a.fu);
    } else {
      this.fu_details = null;
    }

    if (yaku) {
      this.yaku = yaku.sort((a, b) => a.yakuId - b.yakuId);
    } else {
      this.yaku = null;
    }
  }

  toString(): string {
    if (this.error) {
      return this.error;
    } else {
      return `${this.han} han, ${this.fu} fu`;
    }
  }
}
