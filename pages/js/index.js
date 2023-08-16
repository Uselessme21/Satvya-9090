
// swiper

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  pagination: {

    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
     autoplay:{
      delay:300,
      clickable:true
    },
  },
});
//   SECOND SLIDER
var swiper0 = new Swiper(".mySwiper0", {
spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2400,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper0: swiper0,
    },
  });

  // 
  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      // el: ".swiper-pagination",
      clickable: true,
    },
  });