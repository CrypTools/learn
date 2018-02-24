function detectmob() {
    if (window.innerWidth < 1024 && window.innerHeight < 800) {
        return true;
    } else {
        return false;
    }
}
if (detectmob()) {
	document.querySelector(".beoncomp").style.display = "flex";
}
