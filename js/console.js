class Console {
	constructor(el) {
		this.el = el;
		this.clear()
	}
	clear() {
		this.el.innerHTML = "$<br>"
	}
	log(text) {
		this.el.innerHTML += text + "<br>$<br>"
	}
	warn() {
		return null;
	}
}

const outEl = document.querySelector(".console")
window.console = new Console(outEl)
