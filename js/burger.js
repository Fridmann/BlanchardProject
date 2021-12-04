$(document).ready(function() {
    $('.header__burger').click(function(event) {
      $('.header__burger,.header__list-top,body').toggleClass('active');
    });
    $('.header__burger_close,.header__list-top li a').click(function(event) {
      $('.header__burger,.header__list-top,body').removeClass('active');
    });
  });