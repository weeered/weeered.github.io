burgerButtons[0].addEventListener("click", () => {
	theBurgering(true);
});

burgerButtons[1].addEventListener("click", () => {
	theBurgering(false);
});

function theBurgering(isItTop) {
	if (isItTop && header.classList.length != 2) {
		header.classList.toggle("header_fixed");
	}

	setHighlight(scrollY);

	headerDynamic.style.transition =
		"top 0.25s ease-in-out, border-radius 0.25s ease-in-out, background-color 1s 0s ease-in-out, box-shadow 0.125s 0s ease-in-out";
	burgerButtons[0].classList.toggle("burger-button_active");
	burgerButtons[1].classList.toggle("burger-button_active");
	header.classList.toggle("header_burgered");
	headerDynamic.classList.toggle("header_burgered");
	countdownBurger.classList.toggle("countdown_active");

	burgerMenu.classList.toggle("burger-menu_active");
	burgerAnimationLayer1.classList.toggle("burgerAnimLayer1_active");
	burgerAnimationLayer2.classList.toggle("burgerAnimLayer2_active");
	burgerAnimationLayer3.classList.toggle("burgerAnimLayer3_active");
	for (let i = 0; i < burgerMenuElems.length; i++) {
		burgerMenuElems[i].classList.toggle("list-item_active");
	}
}

function setHighlight(pageY) {
	if (pageY + window.innerHeight / 2 < sections[0].offsetTop) {
		for (let o = 0; o < sections.length; o++) {
			burgerMenuElems[o].classList.remove("burger-gradient-highlight");
		}
		return false;
	}

	for (let i = 0; i < sections.length; i++) {
		if (
			(pageY + window.innerHeight / 2 > sections[i].offsetTop) &
			(pageY + window.innerHeight / 2 <
				sections[i].offsetHeight + sections[i].offsetTop)
		) {
			for (let o = 0; o < sections.length; o++) {
				burgerMenuElems[o].classList.remove("burger-gradient-highlight");
			}

			burgerMenuElems[i].classList.add("burger-gradient-highlight");

			return true;
		} else if (i == sections.length) {
			return false;
		}
	}
}
