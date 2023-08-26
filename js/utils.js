
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });

  // hy

  var swiper = new Swiper(".mySwiper0", {
      slidesPerView: 2,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });
    // 
    var swiper = new Swiper(".mySwiper2", {
      direction: "vertical",
    //   autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false
    // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
