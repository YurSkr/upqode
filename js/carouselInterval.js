var carouselItems = document.getElementsByClassName('carousel-item');
for (var carouselItem of carouselItems) {
    carouselItem.setAttribute('data-interval', String(Math.floor(Math.random() * (16000 - 8000) + 8000)));
}
