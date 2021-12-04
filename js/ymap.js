ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.75880080725477,37.602274036384486],
        zoom: 15,
        controls: []
    });

    var zoomControl = new ymaps.control.ZoomControl({
        options: {
        size: "small"
        }
    });
    myMap.controls.add(zoomControl);

    var myPlacemark = new ymaps.Placemark([55.75842874518144,37.6011957883605], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/placemark.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [1, 1]
});

myMap.geoObjects.add(myPlacemark);
}