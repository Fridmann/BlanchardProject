var swiper = new Swiper(".section-galery__swiper", {
  spaceBetween: 50,
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
        rows: 2,
      },
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
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



  