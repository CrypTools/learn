---
---
class Console {
	constructor(el) {
		this.el = el;
		this.clear()
	}
	clear() {
		this.el.innerHTML = "$"
	}
	log(text) {
		this.el.innerHTML += `<br>${text}<br>$`
	}
	warn() {
		return null;
	}
	command(text) {
		this.el.innerHTML += ` ${text}`
	}
}

const outEl = document.querySelector(".console")
window.console = new Console(outEl)
