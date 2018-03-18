---
---

Mousetrap.bindGlobal(['command+enter', 'ctrl+enter'], () => {
	test.test()
	return false;
})

Mousetrap.bindGlobal(['command+shift+c', 'ctrl+shift+c'], () => {
	console.clear()
	return false;
})
