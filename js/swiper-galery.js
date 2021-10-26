var swiper = new Swiper(".section-galery__swiper", {
  spaceBetween: 50,
  pagination: {
    el: ".section-galery__swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.section-galery__swiper-btn--next',
    prevEl: '.section-galery__swiper-btn--prev',
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 50,
    },
    673: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 34,
    },
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    }
  }
});



  