const carouselItems = document.getElementsByClassName('carousel-item');
for (const carouselItem of carouselItems) {
    carouselItem.setAttribute('data-interval', String(Math.floor(Math.random() * (16000 - 8000) + 8000)));
}
