jQuery(($) => {
    $('.section-galery__select').on('click', '.section-galery__select-head', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().fadeOut();
    } else {
        $('.section-galery__select-head').removeClass('open');
        $('.section-galery__select-list').fadeOut();
        $(this).addClass('open');
        $(this).next().fadeIn();
    }
    });

    $('.section-galery__select').on('click', '.section-galery__select-item', function () {
    $('.section-galery__select-head').removeClass('open');
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
    if (!$(e.target).closest('.section-galery__select').length) {
        $('.section-galery__select-head').removeClass('open');
        $('.section-galery__select-list').fadeOut();
    }
    });
    });