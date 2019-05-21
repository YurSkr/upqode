const carouselItems = document.getElementsByClassName('carousel-item');
for (let i = 0; i < carouselItems.length; i++) {
    const carouselItem = carouselItems[i];
    carouselItem.setAttribute('data-interval', String(Math.floor(Math.random() * (16000 - 8000) + 8000)));
}
