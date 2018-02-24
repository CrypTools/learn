---
---

const challengesData = {{site.data.challenges | jsonify}}

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
        fetch(`challenges/${this.page.question}`).then(data => data.text()).then(text => {
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
		for (let i = 0; i < this.data.tests.length; i++) {
			const current = this.data.tests[i]
			const command = eval("`" + this.data.testCommand + "`")
			const result = editor.run(command)
			const expected = current.expected;
			if (result == expected) {
				out = out === false ? false : true
			} else {
				out = false
			}
		}
		if (out === true) {
			console.log("Congratulations 🎉! The code you've written passed the tests.")
		} else {
			console.log("Argh 😤! You've failed! Try again...")
		}
	}
}

const test = new Test(router.page)
