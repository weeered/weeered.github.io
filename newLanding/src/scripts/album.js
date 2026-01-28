const albumWrapper = document.getElementById("album-wrapper");
const thumbsWrapeer = document.getElementById("thumbs-wrapper");

createSlides();

function createSlides() {
	const b = 29;

	for (let i = 1; i <= b; i++) {
		let newSlide = document.createElement("div");
		let newPhotoContainer = document.createElement("div");
		let newPhoto = document.createElement("img");
		let preloader = document.createElement("div");
		let thumbSlide = document.createElement("div");
		let thumbPhoto = document.createElement("img");

		preloader.classList.add("swiper-lazy-preloader");
		preloader.classList.add("swiper-lazy-preloader-white");

		thumbSlide.classList.add("swiper-slide");

		thumbPhoto.src = `./media/album/${i}.jpg`;

		newSlide.classList.add("swiper-slide");
		newSlide.classList.add("section__album_swiper-slide");

		newPhotoContainer.classList.add("swiper-zoom-container");

		newPhoto.src = `./media/album/${i}.jpg`;
		newPhoto.classList.add("section__album_swiper-slide-photo");
		newPhoto.loading = "lazy";

		albumWrapper.appendChild(newSlide);
		newSlide.appendChild(newPhotoContainer);
		newPhotoContainer.appendChild(newPhoto);

		thumbsWrapeer.appendChild(thumbSlide);
		thumbSlide.appendChild(thumbPhoto);
	}
}
