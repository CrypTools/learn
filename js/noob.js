"use strict"; var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } var challengesData = [{ "name": "emojigraphy", "fancy": "Emoji Cipher", "question": "emojigraphy.md", "answer": "😅😝😳😗😚" }, { "name": "caesar-encrypt", "fancy": "Caesar Encrypt", "question": "caesar-encrypt.md", "answer": "LIPPS" }, { "name": "inverse", "fancy": "ATBASHCipher", "question": "inverse.md", "answer": "XIBKGLLOH" }, { "name": "railfence", "fancy": "Railfence", "question": "railfence.md", "answer": "TCth i heepta chotRnen eaer srif seulic" }, { "name": "binascii", "fancy": "BinASCII", "question": "binascii.md", "answer": "01100011 01101111 01100100 01100101" }, { "name": "rsa", "fancy": "RSA", "question": "rsa.md", "answer": 399788195976 }, { "name": "hashshift", "fancy": "HashShift PRNG", "question": "hashshift.md", "answer": 0.3047871109 }, { "name": "base64", "fancy": "Base64", "question": "b64.md", "answer": "Q3J5cFRvb2xz" }, { "name": "bitshift", "fancy": "BitShift Cipher", "question": "bitshift.md", "answer": "[17843008, 30152208, 31998784, 29627920, 22299456, 29365776, 29377344, 28579344, 30425920]" }, { "name": "randomness", "fancy": "Randomness", "question": "randomness.md", "answer": 61647 }]; var challenges = {}; var _iteratorNormalCompletion = true; var _didIteratorError = false; var _iteratorError = undefined; try { for (var _iterator = challengesData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) { var i = _step.value; challenges[i.name] = i; } } catch (err) { _didIteratorError = true; _iteratorError = err; } finally { try { if (!_iteratorNormalCompletion && _iterator["return"]) { _iterator["return"](); } } finally { if (_didIteratorError) { throw _iteratorError; } } } var Router = (function () { function Router() { _classCallCheck(this, Router); var hash = undefined; if (localStorage.getItem("CrypToolsLearn")) { hash = localStorage.getItem("CrypToolsLearn").substring(1); } else { hash = window.location.hash.substring(1); } if (hash == "") { this.page = challenges["emojigraphy"]; /* level 1 */ } else { this.page = challenges[hash]; } this.load(); } _createClass(Router, [{ key: "load", value: function load() { var question = document.querySelector(".questions"); var converter = new showdown.Converter({ extensions: ['github'] }); fetch("../noob_questions/" + this.page.question).then(function (data) { return data.text(); }).then(function (text) { question.innerHTML = converter.makeHtml(text); }); } }]); return Router; })(); var router = new Router(); var Test = (function () { function Test(data) { _classCallCheck(this, Test); this.data = data; var runEl = document.querySelector("form"); var checkEl = document.getElementById("run"); this.addEvents(runEl, checkEl); } _createClass(Test, [{ key: "addEvents", value: function addEvents(el1, el2) { var _this = this; el1.addEventListener("submit", function (e) { e.preventDefault(); _this.test(); }); el2.addEventListener("click", function (e) { _this.test(); }); } }, { key: "test", value: function test() { var ans = document.querySelector(".ans").value; var out = document.querySelector(".out"); if (this.data.answer == ans) { out.style.color = "green"; out.innerHTML = "Congratulations 🎉! Your answer is correct ✅"; document.querySelector(".done").style.display = "flex"; setTimeout(function () { document.querySelector(".done").classList.add("active"); }, 1000); } else { out.style.color = "red"; out.innerHTML = "Oupps 🤭! Try again. ❎"; } } }]); return Test; })(); var test = new Test(router.page);