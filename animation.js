/* =========================
   BACK TO TOP
========================= */

const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

});

backToTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});





document.addEventListener('DOMContentLoaded', () => {
    // 1. Находим все элементы
    const artworks = document.querySelectorAll('.painting-image'); // Укажи здесь класс своих 3-х картин
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // 2. Вешаем клик на каждую из трех картин
    artworks.forEach(art => {
        art.style.cursor = 'pointer'; // Делаем курсор-ручку при наведении
        
        art.addEventListener('click', () => {
            const currentSrc = art.getAttribute('src'); // Берем путь к картинке
            lightboxImg.setAttribute('src', currentSrc); // Подставляем в полноэкранный блок
            lightbox.classList.add('active'); // Плавно показываем на весь экран
        });
    });

    // 3. Закрытие при клике в любое место на открытом экране
    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active'); // Скрываем обертку
        setTimeout(() => {
            lightboxImg.setAttribute('src', ''); // Очищаем путь после закрытия, чтобы не мигало
        }, 300); // 300мс — время совпадает с transition в CSS
    });
});




// Находим все наши QR-коды
const qrCodes = document.querySelectorAll('.qr-image');

qrCodes.forEach(qr => {
    qr.style.cursor = 'pointer';

    qr.addEventListener('click', () => {
        const linkToCopy = qr.getAttribute('data-link');

        // Тихо закидываем ссылку в буфер обмена без всплывающих окон и уведомлений
        navigator.clipboard.writeText(linkToCopy).catch(err => {
            console.error('Copy error: ', err);
        });
    });
});