const slidesContainer = document.querySelector('.slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Ширина одного слайда + відступ між ними
const slideWidth = 110; // 100px (ширина) + 10px (відступ)
const visibleSlides = 9; // Видимі слайди
let currentIndex = 0;

// Кількість усіх слайдів
const totalSlides = document.querySelectorAll('.slide').length;

// Оновлення відображення слайдера
function updateSlider() {
    const offset = -currentIndex * slideWidth; // Зміщення контейнера слайдів
    slidesContainer.style.transform = `translateX(${offset}px)`;

    // Відображення/приховування кнопок
    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentIndex >= totalSlides - visibleSlides ? 'none' : 'block';
}

// Події для кнопок
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - visibleSlides) {
        currentIndex++;
        updateSlider();
    }
});

// Ініціалізація
updateSlider();
