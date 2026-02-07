underline1.classList.add("background-gradient-shine");
underline2.classList.add("background-gradient-shine");

for (let i = 0; i < themesDotGradRunElems.length; i++) {
	themesDotGradRunElems[i].style.animation =
		`background-color-shift 3s ease-in-out ${i * 0.5}s infinite`;
}

for (let i = 0; i < programmDotGradRunElems.length; i++) {
	programmDotGradRunElems[i].style.animation =
		`background-color-shift 3s ease-in-out ${i * 0.5}s infinite`;
}

for (let i = 0; i < koDotGradRunElems.length; i++) {
	koDotGradRunElems[i].style.animation =
		`background-color-shift 3s ease-in-out ${i * 0.5}s infinite`;
}

for (let i = 0; i < speakerCards.length; i++) {
	console.log(i);
	console.log(speakerCards[i].clientHeight);
	console.log(speakerCards[i].scrollHeight);
	if (speakerCards[i].clientHeight < speakerCards[i].scrollHeight) {
		speakerCards[i].classList.toggle = "overflowing";
		console.log("found overflow " + i);
	}
}

window.addEventListener("resize", () => {
	for (let i = 0; i < speakerCards.length; i++) {
		if (speakerCards[i].clientHeight < speakerCards[i].scrollHeight) {
			speakerCards[i].classList.toggle = "overflowing";
			console.log("found overflow");
		}
	}
});

document.addEventListener("visibilitychange", () => {
	if (!document.hidden) {
		underline1.style.animation = "none";
		underline1.offsetHeight;
		underline1.style.animation = null;

		underline2.style.animation = "none";
		underline2.offsetHeight;
		underline2.style.animation = null;
	}
});
