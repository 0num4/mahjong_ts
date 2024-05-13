#!/usr/bin/env node
"use strict";
class i {
	constructor(t) {
		(this.yaku_id = null),
			(this.tenhou_id = null),
			(this.name = null),
			(this.han_open = null),
			(this.han_closed = null),
			(this.is_yakuman = null),
			(this.tenhou_id = null),
			(this.yaku_id = t),
			this.set_attributes();
	}
	toString() {
		if (this.name === null) throw new Error("this.name not implemented.");
		return this.name;
	}
	is_condition_met(t, ...s) {
		throw new Error("Method not implemented.");
	}
	set_attributes() {
		throw new Error("Method not implemented.");
	}
	get english() {
		if (
			(console.warn("Use .name attribute instead of .english attribute"),
			this.name === null)
		)
			throw new Error("this.name not implemented.");
		return this.name;
	}
	get japanese() {
		if (
			(console.warn("Use .name attribute instead of .japanese attribute"),
			this.name === null)
		)
			throw new Error("this.name not implemented.");
		return this.name;
	}
}
class o extends i {
	constructor(t) {
		super(t);
	}
	set_attributes() {
		(this.tenhou_id = 0),
			(this.name = "Menzen Tsumo"),
			(this.han_open = null),
			(this.han_closed = 1),
			(this.is_yakuman = !1);
	}
	isConditionMet(t, ...s) {
		return !0;
	}
}
const n = new o(1);
console.log(n.toString());
console.log(n.isConditionMet(null));
