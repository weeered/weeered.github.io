const burgerAnimationLayer1 = document.createElement("div");
burgerAnimationLayer1.className = "burgerAnimLayer1";
const burgerAnimationLayer2 = document.createElement("div");
burgerAnimationLayer2.className = "burgerAnimLayer2";
const burgerAnimationLayer3 = document.createElement("div");
burgerAnimationLayer3.className = "burgerAnimLayer3";

document.body.appendChild(burgerAnimationLayer1);
document.body.appendChild(burgerAnimationLayer2);
document.body.appendChild(burgerAnimationLayer3);
document.body.appendChild(burgerMenu);

burgerButtons[0].addEventListener("click", () => {
	theBurgering(true);
});

burgerButtons[1].addEventListener("click", () => {
	theBurgering(false);
});

function theBurgering(isItTop) {
	if (isItTop && header.classList.length > 2) {
		header.classList.toggle("header-fixed");
	}

	setHighlight(scrollY);

	headerDynamic.style.transition =
		"top 0.25s ease-in-out, border-radius 0.25s ease-in-out, background-color 1s 0s ease-in-out, box-shadow 0.125s 0s ease-in-out";
	burgerButtons[0].classList.toggle("burger-button-active");
	burgerButtons[1].classList.toggle("burger-button-active");
	header.classList.toggle("header-burgered");
	headerDynamic.classList.toggle("header-burgered");
	countdownBurger.classList.toggle("countdown-active");

	burgerMenu.classList.toggle("burgerMenu-active");
	burgerAnimationLayer1.classList.toggle("burgerAnimLayer1-active");
	burgerAnimationLayer2.classList.toggle("burgerAnimLayer2-active");
	burgerAnimationLayer3.classList.toggle("burgerAnimLayer3-active");
	for (let i = 0; i < burgerMenuElems.length; i++) {
		burgerMenuElems[i].classList.toggle("list-item-active");
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
