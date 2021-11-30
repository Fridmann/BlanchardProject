$(document).ready(function() {
    $('.header__burger').click(function(event) {
      $('.header__burger,.header__list-top,body').toggleClass('active');
    });
    $('.header__list-top li a').click(function(event) {
      $('.header__burger,.header__list-top,body').removeClass('active');
    });
  });