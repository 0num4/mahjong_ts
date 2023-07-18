class HandResponse {
  cost: Record<string, unknown> | null;
  han: number | null;
  fu: number | null;
  fu_details: Array<Record<string, unknown>> | null;
  yaku: Array<{ yaku_id: unknown }> | null;
  error: string | null;
  is_open_hand: boolean;

  constructor(
    cost: Record<string, unknown> | null = null,
    han: number | null = null,
    fu: number | null = null,
    yaku: Array<{ yaku_id: unknown }> | null = null,
    error: string | null = null,
    fu_details: Array<Record<string, unknown>> | null = null,
    is_open_hand: boolean = false
  ) {
    this.cost = cost;
    this.han = han;
    this.fu = fu;
    this.error = error;
    this.is_open_hand = is_open_hand;

    if (fu_details) {
      this.fu_details = fu_details.sort((a, b) => b["fu"] - a["fu"]);
    } else {
      this.fu_details = null;
    }

    if (yaku) {
      this.yaku = yaku.sort((a, b) => a.yaku_id - b.yaku_id);
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
