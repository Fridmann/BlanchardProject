let eventsBtn = document.querySelector(".section-events__btn-more");
const slider = document.querySelector('.section-events__swiper');
let allitems = document.querySelectorAll(".section-events__swiper-slide");
eventsBtn.addEventListener("click", function() {
  allitems.forEach(item => {
    item.style.display = "flex";
  })
  
  this.style.display = "none";
  
})

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 720 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			pagination: {
				el: ".section-events__swiper-pagination",
				clickable: true,
			  },
			  breakpoints: {
				573: {
				  slidesPerView: 2,
				  grid: {
					rows: 1,
				  },
				  spaceBetween: 15,
				},
				320: {
				  slidesPerView: 1,
				  grid: {
					rows: 1,
				  },
				  spaceBetween: 15,
				}
			  }
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 720 && slider.dataset.mobile == 'true') {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});