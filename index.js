let currentIndex = 0;

function slide(direction) {
    const gallery = document.querySelector('.gallery-wrapper');
    const images = document.querySelectorAll('.gallery-img');
    const totalImages = images.length;

    currentIndex += direction;

    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    const offset = currentIndex * -100;
    gallery.style.transform = `translateX(${offset}%)`;
}