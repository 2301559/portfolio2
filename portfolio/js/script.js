let index = 0;

function moveSlide(step) {
    const slides = document.querySelector('.carousel-container');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    index += step;

    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;

    slides.style.transform = `translateX(-${index * 100}%)`;
}

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.about-me .container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Добавляем класс, чтобы начать анимацию
                observer.disconnect(); // Прекращаем наблюдение после первого срабатывания
            }
        });
    }, { threshold: 0.5 });  // Порог 50% видимости

    if (container) {  // Проверка на существование элемента
        observer.observe(container);  // Начинаем наблюдать за элементом
    }
});
