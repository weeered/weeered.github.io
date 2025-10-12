const galleryThumbs = new Swiper(".galleryThumbs", {
  // Optional parameters
  direction: "horizontal",

  loop: true,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

const galleryBig = new Swiper(".galleryBig", {
  // Optional parameters
  direction: "horizontal",

  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  zoom: {
    maxRatio: 3,
  },

  thumbs: {
    swiper: galleryThumbs,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
