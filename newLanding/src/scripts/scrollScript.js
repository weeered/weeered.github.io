const header = document.querySelector(".header");
const title = document.querySelector(".title");
const burgerMenu = document.querySelector(".burger-menu");
const burgerButtons = document.body.getElementsByClassName(
	"header__burger-button"
);
const countdown = document.body.getElementsByClassName("countdown");
const countdownBurger = document.getElementById("demo");
const underline1 = document.getElementsByClassName("title__underline")[0];
const underline2 = document.getElementsByClassName("title__underline")[1];
const textShineEelems = document.getElementsByClassName("text-shine");
const themesDotGradRunElems = document.getElementsByClassName(
	"section-themes__list-dot"
);
const programmDotGradRunElems = document.getElementsByClassName(
	"section-programm__event-topic-dot"
);
const KO25Cards = document.getElementsByClassName("glass-effect");
const themesSection = document.getElementById("themes");
const KO25Section = document.getElementById("KO25");
const speakersSection = document.getElementById("speakers");
const programmSection = document.getElementById("programm");
const albumSection = document.getElementById("album");
const organizersSection = document.getElementById("organizers");
const footer = document.getElementById("footer");
const titleButton = document.getElementById("titleButton");
const navElems = document.getElementsByClassName("header__nav-item");
const burgerMenuElems = document.getElementsByClassName(
	"burger-menu__list-item"
);

const headerDynamic = header.cloneNode(true);
headerDynamic.classList.add("header-dynamic");

const headerAnimationLayer1 = document.createElement("div");
headerAnimationLayer1.className = "headerAnimLayer1";
const headerAnimationLayer2 = document.createElement("div");
headerAnimationLayer2.className = "headerAnimLayer2";
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

document.body.appendChild(headerAnimationLayer1);
document.body.appendChild(headerAnimationLayer2);
document.body.appendChild(headerDynamic);

headerDynamic.style.backgroundColor = "#342e8c";
headerDynamic.style.boxShadow = "0px 1.5px 3px #00000040";
headerDynamic.style.position = "fixed";
headerDynamic.style.top = 0;
headerDynamic.style.transform = "translate(0, calc(-100% - 3px))";
headerDynamic.style.borderRadius = "0 0 100% 100%";
headerDynamic.style.zIndex = "13";

const sections = [
	themesSection,
	KO25Section,
	speakersSection,
	programmSection,
	albumSection,
	organizersSection,
	footer,
];

//#342e8cbf

if (window.getComputedStyle(burgerButtons[0], null).display != "none") {
	document.addEventListener("scroll", () => {
		if (scrollY > titleButton.offsetHeight + titleButton.offsetTop) {
			headerAnimationLayer1.style.transition =
				"transform 0.25s ease-in-out, border-radius 0.25s ease-in-out, background-color 0s 0.5s";
			headerAnimationLayer1.style.transform = "translate(0, 0)";
			headerAnimationLayer1.style.borderRadius = 0;
			headerAnimationLayer1.style.backgroundColor = "transparent";

			headerAnimationLayer2.style.transition =
				"transform 0.25s 0.125s ease-in-out, border-radius 0.25s 0.125s ease-in-out, background-color 0s 0.5s";
			headerAnimationLayer2.style.transform = "translate(0, 0)";
			headerAnimationLayer2.style.borderRadius = 0;
			headerAnimationLayer2.style.backgroundColor = "transparent";

			headerDynamic.style.transition =
				"transform 0.25s 0.25s ease-in-out, border-radius 0.25s 0.25s ease-in-out, background-color 1s 0.5s ease-in-out, box-shadow 1s 0.5s ease-in-out";
			headerDynamic.style.transform = "translate(0, 0)";
			headerDynamic.style.borderRadius = 0;
			headerDynamic.style.backgroundColor = "#342e8cbf";
			headerDynamic.style.boxShadow = "0px 1.5px 3px #342e8c40";
		} else {
			headerDynamic.style.transition =
				"transform 0.25s ease-in-out, border-radius 0.25s ease-in-out, background-color 0.125s 0s ease-in-out, box-shadow 0.125s 0s ease-in-out";
			headerDynamic.style.transform = "translate(0, calc(-100% - 3px))";
			headerDynamic.style.borderRadius = "0 0 100% 100%";
			headerDynamic.style.backgroundColor = "#342e8c";
			headerDynamic.style.boxShadow = "0px 1.5px 3px #00000040";

			headerAnimationLayer2.style.transition =
				"transform 0.25s 0.125s ease-in-out, border-radius 0.25s 0.125s ease-in-out, background-color 0s 0s";
			headerAnimationLayer2.style.transform = "translate(0, calc(-100% - 3px))";
			headerAnimationLayer2.style.borderRadius = "0 0 100% 100%";
			headerAnimationLayer2.style.backgroundColor = "#d3281d";

			headerAnimationLayer1.style.transition =
				"transform 0.25s 0.25s ease-in-out, border-radius 0.25s 0.25s ease-in-out, background-color 0s 0s";
			headerAnimationLayer1.style.transform = "translate(0, calc(-100% - 3px))";
			headerAnimationLayer1.style.borderRadius = "0 0 100% 100%";
			headerAnimationLayer1.style.backgroundColor = "#f19001";
		}
	});
} else {
	document.addEventListener("scroll", () => {
		setHighlightNav();

		if (scrollY > titleButton.offsetHeight + titleButton.offsetTop) {
			headerAnimationLayer1.style.transition =
				"transform 0.25s ease-in-out, border-radius 0.25s ease-in-out, background-color 0s 0.5s";
			headerAnimationLayer1.style.transform = "translate(0, 0)";
			headerAnimationLayer1.style.borderRadius = 0;
			headerAnimationLayer1.style.backgroundColor = "transparent";

			headerAnimationLayer2.style.transition =
				"transform 0.25s 0.125s ease-in-out, border-radius 0.25s 0.125s ease-in-out, background-color 0s 0.5s";
			headerAnimationLayer2.style.transform = "translate(0, 0)";
			headerAnimationLayer2.style.borderRadius = 0;
			headerAnimationLayer2.style.backgroundColor = "transparent";

			headerDynamic.style.transition =
				"transform 0.25s 0.25s ease-in-out, border-radius 0.25s 0.25s ease-in-out, background-color 1s 0.5s ease-in-out, box-shadow 1s 0.5s ease-in-out";
			headerDynamic.style.transform = "translate(0, 0)";
			headerDynamic.style.borderRadius = 0;
			headerDynamic.style.backgroundColor = "#342e8cbf";
			headerDynamic.style.boxShadow = "0px 1.5px 3px #342e8c40";
		} else {
			headerDynamic.style.transition =
				"transform 0.25s ease-in-out, border-radius 0.25s ease-in-out, background-color 0.125s 0s ease-in-out, box-shadow 0.125s 0s ease-in-out";
			headerDynamic.style.transform = "translate(0, calc(-100% - 3px))";
			headerDynamic.style.borderRadius = "0 0 100% 100%";
			headerDynamic.style.backgroundColor = "#342e8c";
			headerDynamic.style.boxShadow = "0px 1.5px 3px #00000040";

			headerAnimationLayer2.style.transition =
				"transform 0.25s 0.125s ease-in-out, border-radius 0.25s 0.125s ease-in-out, background-color 0s 0s";
			headerAnimationLayer2.style.transform = "translate(0, calc(-100% - 3px))";
			headerAnimationLayer2.style.borderRadius = "0 0 100% 100%";
			headerAnimationLayer2.style.backgroundColor = "#d3281d";

			headerAnimationLayer1.style.transition =
				"transform 0.25s 0.25s ease-in-out, border-radius 0.25s 0.25s ease-in-out, background-color 0s 0s";
			headerAnimationLayer1.style.transform = "translate(0, calc(-100% - 3px))";
			headerAnimationLayer1.style.borderRadius = "0 0 100% 100%";
			headerAnimationLayer1.style.backgroundColor = "#f19001";
		}
	});
}

function setHighlightNav() {
	for (let i = 0; i < sections.length; i++) {
		if (
			(scrollY + window.innerHeight / 2 > sections[i].offsetTop) &
			(scrollY + window.innerHeight / 2 <
				sections[i].offsetHeight + sections[i].offsetTop)
		) {
			navElems[i + 7].style.backgroundPosition = "0% 100%";
			navElems[i + 7].style.textShadow = "0 0 4px #ffffffff";

			if (typeof navElems[i - 1] != "undefined") {
				navElems[i + 7 - 1].style.backgroundPosition = "";
				navElems[i + 7 - 1].style.textShadow = "";
			}
			if (typeof navElems[i + 7 + 1] != "undefined") {
				navElems[i + 7 + 1].style.backgroundPosition = "";
				navElems[i + 7 + 1].style.textShadow = "";
			}
			return;
		}
	}
}
