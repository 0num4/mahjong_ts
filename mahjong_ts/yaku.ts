export class Yaku {
  yaku_id: number | null = null;
  tenhou_id: number | null = null;
  name: string | null = null;
  han_open: any = null;
  han_closed: any = null;
  is_yakuman: any = null;

  constructor(yaku_id: number) {
    this.tenhou_id = null;
    this.yaku_id = yaku_id;

    this.set_attributes();
  }

  toString(): string {
    if (this.name === null) {
      throw new Error("this.name not implemented.");
    }
    return this.name;
  }

  is_condition_met(hand: any, ...args: any[]): boolean {
    throw new Error("Method not implemented.");
  }

  set_attributes(): void {
    throw new Error("Method not implemented.");
  }

  get english(): string {
    console.warn("Use .name attribute instead of .english attribute");
    if (this.name === null) {
      throw new Error("this.name not implemented.");
    }
    return this.name;
  }

  get japanese(): string {
    console.warn("Use .name attribute instead of .japanese attribute");
    if (this.name === null) {
      throw new Error("this.name not implemented.");
    }
    return this.name;
  }
}
