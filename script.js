document.querySelectorAll('.media-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (item.tagName === 'VIDEO') {
            item.play();
        }
    });
    item.addEventListener('mouseleave', () => {
        if (item.tagName === 'VIDEO') {
            item.pause();
            item.currentTime = 0;
        }
    });
});



let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function goToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;

    // Agregar efecto de desvanecimiento suave en las imágenes
    items.forEach((item, i) => {
        if (i === index) {
            item.style.opacity = 1;
            item.style.transform = 'scale(1)';
        } else {
            item.style.opacity = 0;
            item.style.transform = 'scale(0.9)';
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    goToSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    goToSlide(currentIndex);
}

// Redirigir al hacer clic en una imagen
items.forEach(item => {
    item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        window.location.href = url;
    });
});

// Event listeners para los botones
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Inicializar el carrusel en la primera imagen
goToSlide(currentIndex);
