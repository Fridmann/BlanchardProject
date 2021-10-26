var swiper = new Swiper(".section-projects__swiper", {
    spaceBetween: 50,
    grid: {
      rows: 1,
    },
    navigation: {
      nextEl: '.section-projects__swiper-btn--next',
      prevEl: '.section-projects__swiper-btn--prev',
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
        grid: {
          rows: 1,
        },
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 2,
        grid: {
          rows: 1,
        },
      },
      320: {
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
      }
    }
});