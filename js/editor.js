---
---
class Editor {
    constructor(el) {
        this.ed = el;
    }
    value() {
        return this.ed.getValue() /* the code written in the editor */
    }
    insert(text) {
        const doc = this.ed.getDoc();
        const cursor = doc.getCursor();
        doc.replaceRange(text, cursor);
    }
    run(command) {
        const val = this.value()
        const f = new Function(`${val}\n${command}`) /* safe eval() */
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
    extraKeys: {
        "Shift-Enter": function(cm) {
            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function(cm) {
            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        }
    }
});

const editor = new Editor(editorEl)
