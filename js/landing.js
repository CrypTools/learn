---
---
function detectmob() {
    if (window.innerWidth < 1024 && window.innerHeight < 800) {
        return true;
    } else {
        return false;
    }
}
if (detectmob()) {
    document.querySelector(".beoncomp").style.display = "flex";
    document.querySelectorAll(".row")[1].style.display = "none"
	document.querySelectorAll(".expand")[1].style.display = "none"
}


class Menu {
    constructor() {
        this.state = false
        this.toggle = document.getElementById("menu-toggle")
        this.links = document.querySelectorAll("nav ul a")
        this.ul = document.querySelector("nav ul")

		this.open   = this.open.bind(this)
        this.close  = this.close.bind(this)
        this.swap   = this.swap.bind(this)

        this._addEventListeners()
    }

    _addEventListeners() {
        this.links.forEach(l => l.addEventListener("click", this.close))
        this.toggle.addEventListener("click", this.swap)
        window.addEventListener("scroll", this.close)
        window.addEventListener("resize", this.close)
    }

    open() {
        this.ul.classList.add("active")
        this.state = true
    }

    close() {
        this.ul.classList.remove("active")
        this.state = false
    }

    swap() {
        if (this.state == true) this.close()
        else if (this.state == false) this.open()
    }
}

const m = new Menu();

class Expand {
    constructor() {
        this.state = false;
        this.toggles = document.querySelectorAll(".expand > .more");

		const noob = document.querySelectorAll(".noob > *")
		const js = document.querySelectorAll(".js > *")
		let noobItems = [];
		for (let i = 0; i < noob.length - 8; i++) {
			noobItems.push(noob[i + 8])
		}

		let jsItems = [];
		for (let i = 0; i < js.length - 8; i++) {
			jsItems.push(js[i + 8])
		}
		this.sections = [noobItems, jsItems]

		this.hide({ id: 0 });
		this.hide({ id: 1 });

		this._addEventListeners();
    }
	_addEventListeners() {
		for (let i = 0; i < this.toggles.length; i++) {
			this.toggles[i].addEventListener("click", ev => e.toggle(ev.currentTarget) )
		}
	}
	hide(el) {
		this.sections[el.id].forEach(el => {
			el.style.display = "none";
		})
		el.innerHTML = `More <i class="material-icons">expand_more</i>`

		this.state = false
	}
	show(el) {
		this.sections[el.id].forEach(el => {
			el.style.display = "block";
		})
		el.innerHTML = `Less <i class="material-icons">expand_less</i>`
		this.state = true;
	}
	toggle(el) {
		if (this.state == true) this.hide(el)
        else if (this.state == false) this.show(el)
	}
}

const e = new Expand()


class Done {
	constructor() {
		if (!localStorage.getItem("CrypTools Learn Done")) {
			this.init()
		}
	}
	init() {
		localStorage.setItem("CrypTools Learn Done", JSON.stringify({
			noob: [],
			js: []
		}))
	}
	get() {
		const str = localStorage.getItem("CrypTools Learn Done")
		return JSON.parse(str);
	}
	addNoob() {
		let json = this.get()
		json.noob.push(...arguments)
		localStorage.setItem("CrypTools Learn Done", JSON.stringify(json))

	}
	addJS() {
		let json = this.get()
		json.js.push(...arguments)
		localStorage.setItem("CrypTools Learn Done", JSON.stringify(json))
	}
	isDone(id, name) {
		return this.get()[id].includes(name);
	}
}

const done = new Done()


document.querySelectorAll(".row > a").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        localStorage.setItem("CrypToolsLearn", el.hash)
        window.open(el.href, "_self")
    })
})

/* Done */
document.querySelectorAll(".js > a").forEach(el => {
	if (done.isDone("js", el.id)) {
		el.querySelector(".done").style.opacity = 1;
	}
})
document.querySelectorAll(".noob > a").forEach(el => {
	if (done.isDone("noob", el.id)) {
		el.querySelector(".done").style.opacity = 1;
	}
})
