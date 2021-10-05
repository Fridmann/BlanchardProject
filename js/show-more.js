$(".section-events__list").each(function() {
    let more = $(this).find(".section-events__btn-more");
    let hide = $(this).find(".section-events__item-hide");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Все события" : "Скрыть");
    });
});