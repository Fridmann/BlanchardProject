var swiper = new Swiper(".section-projects__swiper", {
    spaceBetween: 50,
    grid: {
      rows: 1,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
        grid: {
          rows: 1,
        },
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