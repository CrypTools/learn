---
---
class Menu {
    constructor() {
        this.state     = false
        this.toggle    = document.getElementById('menu-toggle')
        this.links     = document.querySelectorAll('nav .menu-container a')
        this.container = document.querySelector('nav .menu-container')
        this.open      = this.open.bind(this)
        this.close     = this.close.bind(this)
        this.swap      = this.swap.bind(this)

        this._addEventListeners()
    }

    _addEventListeners() {
        this.links.forEach(l => l.addEventListener('click', this.close))
        this.toggle.addEventListener('click', this.swap)
    }

    open() {
        this.toggle.classList.add('cross')
        this.container.style.display = "flex"
        this.state = true
    }

    close() {
        this.toggle.classList.remove('cross')
        this.container.style.display = "none"
        this.state = false
    }

    swap() {
        if (this.state == true) this.close()
        else if (this.state == false) this.open()
    }
}

var m = new Menu()

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


const challengesData = {{site.data.noob | jsonify}}

let challenges = {}

for (let i of challengesData) {
    challenges[i.name] = i
}
class Router {
    constructor() {
		let hash;
		if (localStorage.getItem("CrypToolsLearn")) {
			hash = localStorage.getItem("CrypToolsLearn").substring(1);
		} else {
			hash = window.location.hash.substring(1);
		}

        if (hash == "") {
            this.page = challenges["emojigraphy"] /* level 1 */
        } else {
            this.page = challenges[hash]
        }
        this.load()
    }
    load() {
        let question = document.querySelector(".questions")
        const converter = new showdown.Converter({extensions: ['github']})
        fetch(`../noob_questions/${this.page.question}`).then(data => data.text()).then(text => {
			question.innerHTML = converter.makeHtml(text);
		})
    }
}

const router = new Router()

class Test {
	constructor(data) {
		this.data = data;

		const runEl = document.querySelector("form")
		const checkEl = document.getElementById("run")
		this.addEvents(runEl, checkEl)
	}

	addEvents(el1, el2) {
		el1.addEventListener("submit", e => {
			e.preventDefault()
			this.test()
		})
		el2.addEventListener("click", e => {
			this.test()
		})
	}
	test() {
		const ans = document.querySelector(".ans").value
		let out = document.querySelector(".out")
		if (this.data.answer == ans) {
			out.style.color = "green"
			out.innerHTML = "Congratulations 🎉! Your answer is correct ✅"
			done.addNoob(this.data.name)
			document.querySelector(".done").style.display = "flex"
			setTimeout(() => {
				document.querySelector(".done").classList.add("active")
			}, 1000)
		} else {
			out.style.color = "red"
			out.innerHTML = "Oupps 🤭! Try again. ❎"
		}
	}
}

const test = new Test(router.page)
