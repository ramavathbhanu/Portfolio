document.addEventListener('DOMContentLoaded', function () {
    let arrow = document.querySelector('.arrow-animation');
    let cardContainer = document.querySelector('.service-card-container');

    arrow.addEventListener('mouseover', function () {
        cardContainer.querySelector('.service-image').style.transform = 'scale(1.1)';
        cardContainer.querySelector('.service-image').style.transition = 'transform 0.5s ease';
    });

    arrow.addEventListener('mouseout', function () {
        cardContainer.querySelector('.service-image').style.transform = 'scale(1)';
    });
});