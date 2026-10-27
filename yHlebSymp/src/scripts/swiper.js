const swiper = new Swiper(".section__programm_swiper", {
	// Optional parameters
	direction: "horizontal",
	spaceBetween: 30,
	// hashNavigation: {
	// 	enabled: true,
	// 	watchState: true,
	// },
	loop: false,
	grabCursor: true,

	// If we need pagination
	pagination: {
		el: ".section__programm_swiper-pagination",
		type: "bullets",
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: ".section__programm_swiper-button-next",
		prevEl: ".section__programm_swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".section__programm_swiper-scrollbar",
		draggable: true,
	},
});

const swiperThumbs = new Swiper(".album__thumbs", {
	// Optional parameters
	direction: "horizontal",
	spaceBetween: 0,
	slidesPerView: "auto",
	freeMode: true,
	watchSlidesProgress: true,
});

const swiperAlbum = new Swiper(".album__swiper", {
	// Optional parameters
	direction: "horizontal",

	spaceBetween: 10,

	effect: "",

	virtual: {
		enabled: true,
		addSlidesAfter: 1,
		addSlidesBefore: 1,
	},

	thumbs: {
		swiper: swiperThumbs,
	},

	loop: true,
	zoom: {
		toggle: true,
		maxRatio: 3,
	},

	centeredSlides: true,

	autoplay: {
		delay: 2000,
		//pauseOnMouseEnter: true,
		disableOnInteraction: true,
	},
	coverflowEffect: {
		slideShadows: true,
	},
	grabCursor: true,

	// If we need pagination
	pagination: {
		el: ".album__swiper-pagination",
		clickable: true,
		dynamicBullets: true,
		dynamicMainBullets: 1,
	},

	// Navigation arrows
	navigation: {
		nextEl: "#album-swiper-next",
		prevEl: "#album-swiper-prev",
	},

	//And if we need scrollbar
	// scrollbar: {
	// 	el: ".album__swiper-scrollbar",
	// 	draggable: true,
	// },
});

themesLinks = document.getElementsByClassName(
	"section__themes_in-programm-title",
);

const targetElem = document.getElementById("programm-swiper");

for (let i = 0; i < themesLinks.length; i++) {
	themesLinks[i].addEventListener("click", () => {
		let position = targetElem.getBoundingClientRect();
		window.scrollTo(
			position.left,
			position.top + window.scrollY - header.offsetHeight,
		);
	});
}
