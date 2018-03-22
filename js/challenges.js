---
---

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

const challengesData = {{site.data.challenges | jsonify}}

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
        fetch(`../challenges/${this.page.question}`).then(data => data.text()).then(text => {
			question.innerHTML = converter.makeHtml(text);
		})

		editor.insert(this.page.init)
    }
}

const router = new Router()

class Test {
	constructor(data) {
		this.data = data;

		const runEl = document.getElementById("run")
		this.addEvents(runEl)
	}

	addEvents(el) {
		el.addEventListener("click", e => {
			this.test()
		})
	}
	test() {
		console.command("run tests")
		let out = "";
		let before = "";
		for (let i = 0; i < this.data.tests.length; i++) {
			const current = this.data.tests[i]
			const command = eval("`" + this.data.testCommand + "`")
			const result = editor.run(command)
			const expected = current.expected;
			before += `${current.word} -> ${result}<br>`
			if (result == expected) {
				out = out === false ? false : true
			} else {
				out = false
			}
		}
		if (out === true) {
			console.log("Congratulations 🎉! The code you've written passed the tests.")
			done.addJS(this.data.name)
			document.querySelector(".done").style.display = "flex"
			setTimeout(() => {
				document.querySelector(".done").classList.add("active")
			}, 1000)
		} else {
			console.log(`${before}Argh 😤! You've failed! Try again...`)
		}
	}
}

const test = new Test(router.page)
