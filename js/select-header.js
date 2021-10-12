    jQuery(($) => {
$('.header__select').on('click', '.header__select-head', function () {
if ($(this).hasClass('open')) {
    $(this).removeClass('open');
    $(this).next().fadeOut();
} else {
    $('.header__select-head').removeClass('open');
    $('.header__select-list').fadeOut();
    $(this).addClass('open');
    $(this).next().fadeIn();
}
});

$('.header__select').on('click', '.header__select-item', function () {
$('.header__select-head').removeClass('open');
$(this).parent().fadeOut();
$(this).parent().prev().text($(this).text());
$(this).parent().prev().prev().val($(this).text());
});

$(document).click(function (e) {
if (!$(e.target).closest('.header__select').length) {
    $('.header__select-head').removeClass('open');
    $('.header__select-list').fadeOut();
}
});
});
