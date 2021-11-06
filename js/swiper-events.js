var swiper = new Swiper(".section-events__swiper", {
    spaceBetween: 50,
    slidesPerGroup: 1,
    pagination: {
      el: ".section-events__swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
      }
    }
  });