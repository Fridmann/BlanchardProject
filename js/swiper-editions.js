var swiper = new Swiper(".section-editions__swiper", {
  spaceBetween: 50,
  pagination: {
    el: ".section-editions__swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.section-editions__swiper-btn--next',
    prevEl: '.section-editions__swiper-btn--prev',
  },
  breakpoints: {
    1281: {
      slidesPerView: 3,
      grid: {
        rows: 1,
      },
      spaceBetween: 46,
    },
    721: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 34,
    },
    320: {
      slidesPerView: 2,
    },
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});