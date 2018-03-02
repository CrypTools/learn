---
---

const challengesData = {{site.data.noob | jsonify}}

let challenges = {}

for (let i of challengesData) {
    challenges[i.name] = i
}
class Router {
    constructor() {
        const hash = window.location.hash.substring(1);
        if (hash == "") {
            this.page = challenges["caesar-encrypt"] // level 1
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
