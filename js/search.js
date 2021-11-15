$(document).ready(function() {
    $('.header__search-button,.header__search-disable').click(function(event) {
      $('.header__search-button,.header__search-form,.header__search-mobile,.header__search-disable,.header__search-button--submit').toggleClass('active');
      $('.header__logo,.header__burger').toggleClass('hide');
    });
  });