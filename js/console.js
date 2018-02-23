class Console {
	constructor(el) {
		this.el = el;
	}
	clear() {
		this.el.innerHTML = "out: ~/ $"
	}
}
