var swiper = new Swiper(".section-editions__swiper", {
    spaceBetween: 50,
    grid: {
      rows: 1,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
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
        slidesPerView: 2,
        grid: {
          rows: 1,
        },
      }
    }
});