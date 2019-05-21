var carouselItems = document.getElementsByClassName('carousel-item');
for (var i = 0; i < carouselItems.length; i++) {
    var carouselItem = carouselItems[i];
    carouselItem.setAttribute('data-interval', String(Math.floor(Math.random() * (16000 - 8000) + 8000)));
}
