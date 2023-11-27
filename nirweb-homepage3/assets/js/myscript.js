// var swiper = new Swiper(".slider_Swiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

var swiper_product = new Swiper(".swiper-horizontal", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".product_carousel--next__pro",
        prevEl: ".product_carousel-prev__pro",
    },
});

var swiper = new Swiper(".slider_Swiper", {
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});