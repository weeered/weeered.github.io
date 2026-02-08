const headerDynamic = header.cloneNode(true);
headerDynamic.classList.add("header-dynamic");

const headerAnimationLayer1 = document.createElement("div");
headerAnimationLayer1.className = "headerAnimLayer1";
const headerAnimationLayer2 = document.createElement("div");
headerAnimationLayer2.className = "headerAnimLayer2";


document.body.appendChild(headerAnimationLayer1);
document.body.appendChild(headerAnimationLayer2);
document.body.appendChild(headerDynamic);

headerDynamic.style.backgroundColor = "#342e8c";
headerDynamic.style.boxShadow = "0px 1.5px 3px #00000040";
headerDynamic.style.position = "fixed";
headerDynamic.style.top = 0;
headerDynamic.style.transform = "translate(0, calc(-100% - 3px))";
//headerDynamic.style.borderRadius = "0 0 100% 100%";
headerDynamic.style.zIndex = "13";

const sections = [
	themesSection,
	KOSection,
	speakersSection,
	programmSection,
	albumSection,
	organizersSection,
	footer,
];

function setHighlightNav() {
	for (let i = 0; i < sections.length; i++) {
		if (
			(scrollY + window.innerHeight / 2 > sections[i].offsetTop) &
			(scrollY + window.innerHeight / 2 <
				sections[i].offsetHeight + sections[i].offsetTop)
		) {
			navElems[i + 7].style.backgroundPosition = "0% 100%";
			navElems[i + 7].style.textShadow = "0 0 4px #ffffffff";

			for (let b = 0; b < sections.length; b++) {
				if (b != i) {
					navElems[b + 7].style.backgroundPosition = "";
					navElems[b + 7].style.textShadow = "";
				}
			}
			return;
		}
	}
}

function setHighlightNavActive(b) {
	for (let i = 0; i < sections.length; i++) {
		if (i != b) {
			navElems[i + 7].style.backgroundPosition = "";
			navElems[i + 7].style.textShadow = "";
		}
	}
}

function scrollAnim() {
	if (window.getComputedStyle(burgerButtons[0], null).display != "none") {
		if (burgerMenu.classList.length > 1) {
			theBurgering(false);
		}
		if (scrollY > titleButton.offsetHeight + titleButton.offsetTop) {
			headerAnimationLayer1.style.transition =
				"transform 0.25s ease-in-out, border-radius 0.25s ease-in-out, background-color 0s 0.5s";
			headerAnimationLayer1.style.transform = "translate(0, 0)";
			//headerAnimationLayer1.style.borderRadius = 0;
			headerAnimationLayer1.style.backgroundColor = "transparent";

			headerAnimationLayer2.style.transition =
				"transform 0.25s 0.125s ease-in-out, border-radius 0.25s 0.125s ease-in-out, background-color 0s 0.5s";
			headerAnimationLayer2.style.transform = "translate(0, 0)";
			//headerAnimationLayer2.style.borderRadius = 0;
			headerAnimationLayer2.style.backgroundColor = "transparent";

			headerDynamic.style.transition =
				"transform 0.25s 0.25s ease-in-out, border-radius 0.25s 0.25s ease-in-out, background-color 1s 0.5s ease-in-out, box-shadow 1s 0.5s ease-in-out";
			headerDynamic.style.transform = "translate(0, 0)";
			//headerDynamic.style.borderRadius = 0;
			headerDynamic.style.backgroundColor = "#342e8cbf";
			headerDynamic.style.boxShadow = "0px 1.5px 3px #342e8c40";
		} else {
			headerDynamic.style.transition =
				"transform 0.25s ease-in-out, border-radius 0.25s ease-in-out, background-color 0.125s 0s ease-in-out, box-shadow 0.125s 0s ease-in-out";
			headerDynamic.style.transform = "translate(0, calc(-100% - 3px))";
			//headerDynamic.style.borderRadius = "0 0 100% 100%";
			headerDynamic.style.backgroundColor = "#342e8c";
			headerDynamic.style.boxShadow = "0px 1.5px 3px #00000040";

			headerAnimationLayer2.style.transition =
				"transform 0.25s 0.125s ease-in-out, border-radius 0.25s 0.125s ease-in-out, background-color 0s 0s";
			headerAnimationLayer2.style.transform = "translate(0, calc(-100% - 3px))";
			//headerAnimationLayer2.style.borderRadius = "0 0 100% 100%";
			headerAnimationLayer2.style.backgroundColor = "#d3281d";

			headerAnimationLayer1.style.transition =
				"transform 0.25s 0.25s ease-in-out, border-radius 0.25s 0.25s ease-in-out, background-color 0s 0s";
			headerAnimationLayer1.style.transform = "translate(0, calc(-100% - 3px))";
			//headerAnimationLayer1.style.borderRadius = "0 0 100% 100%";
			headerAnimationLayer1.style.backgroundColor = "#f19001";
		}
	} else {
		if (burgerMenu.classList.length > 1) {
			theBurgering(false);
		}
		setHighlightNav();

		if (scrollY > titleButton.offsetHeight + titleButton.offsetTop) {
			headerAnimationLayer1.style.transition =
				"transform 0.25s ease-in-out, border-radius 0.25s ease-in-out, background-color 0s 0.5s";
			headerAnimationLayer1.style.transform = "translate(0, 0)";
			//headerAnimationLayer1.style.borderRadius = 0;
			headerAnimationLayer1.style.backgroundColor = "transparent";

			headerAnimationLayer2.style.transition =
				"transform 0.25s 0.125s ease-in-out, border-radius 0.25s 0.125s ease-in-out, background-color 0s 0.5s";
			headerAnimationLayer2.style.transform = "translate(0, 0)";
			//headerAnimationLayer2.style.borderRadius = 0;
			headerAnimationLayer2.style.backgroundColor = "transparent";

			headerDynamic.style.transition =
				"transform 0.25s 0.25s ease-in-out, border-radius 0.25s 0.25s ease-in-out, background-color 1s 0.5s ease-in-out, box-shadow 1s 0.5s ease-in-out";
			headerDynamic.style.transform = "translate(0, 0)";
			//headerDynamic.style.borderRadius = 0;
			headerDynamic.style.backgroundColor = "#342e8cbf";
			headerDynamic.style.boxShadow = "0px 1.5px 3px #342e8c40";
		} else {
			headerDynamic.style.transition =
				"transform 0.25s ease-in-out, border-radius 0.25s ease-in-out, background-color 0.125s 0s ease-in-out, box-shadow 0.125s 0s ease-in-out";
			headerDynamic.style.transform = "translate(0, calc(-100% - 3px))";
			//headerDynamic.style.borderRadius = "0 0 100% 100%";
			headerDynamic.style.backgroundColor = "#342e8c";
			headerDynamic.style.boxShadow = "0px 1.5px 3px #00000040";

			headerAnimationLayer2.style.transition =
				"transform 0.25s 0.125s ease-in-out, border-radius 0.25s 0.125s ease-in-out, background-color 0s 0s";
			headerAnimationLayer2.style.transform = "translate(0, calc(-100% - 3px))";
			//headerAnimationLayer2.style.borderRadius = "0 0 100% 100%";
			headerAnimationLayer2.style.backgroundColor = "#d3281d";

			headerAnimationLayer1.style.transition =
				"transform 0.25s 0.25s ease-in-out, border-radius 0.25s 0.25s ease-in-out, background-color 0s 0s";
			headerAnimationLayer1.style.transform = "translate(0, calc(-100% - 3px))";
			//headerAnimationLayer1.style.borderRadius = "0 0 100% 100%";
			headerAnimationLayer1.style.backgroundColor = "#f19001";
		}
	}
}

const debounceScrollAnim = debounce(scrollAnim, 300);

const throttleScrollAnim = throttle(scrollAnim, 100);

document.addEventListener("scroll", () => {
	(throttleScrollAnim(), debounceScrollAnim());
});
