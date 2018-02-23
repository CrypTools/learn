class Editor {
    constructor(el) {
        this.ed = el;
    }
    value() {
        return this.ed.getValue() // the code written in the editor
    }
    run(text, command) {
        const val = this.value()
        const f = new Function(`${text}\n${command}`) // safe eval()
        return f()
    }
}

const editorEl = CodeMirror(document.querySelector(".editor"), {
    mode: "javascript",
    theme: "monokai",
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    indentUnit: 4,
    indentWithTabs: true,
    closeBrackets: true,
    viewportMargin: Infinity,
});

const editor = new Editor(editorEl)
