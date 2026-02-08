function addOverflows() {
	for (let i = 0; i < speakerCardTextElems.length; i++) {
		speakerCardTextElems[i].classList.remove("overflowing");
		if (
			speakerCardTextElems[i].clientHeight <
			speakerCardTextElems[i].scrollHeight
		) {
			speakerCardTextElems[i].classList.add("overflowing");
		}
	}
}

const debouncedAddOverflows = debounce(addOverflows, 300);

addOverflows();

window.addEventListener("resize", () => {
	debouncedAddOverflows();
});
