import Swiper from '../vendor/swiper/swiper.mjs';
import Navigation from '../vendor/swiper/modules/navigation.mjs';
import Mousewheel from '../vendor/swiper/modules/mousewheel.mjs';

const juriSwiper = new Swiper('.juri__swiper-container', {
  modules: [Navigation, Mousewheel],
  direction: 'horizontal',
  grabCursor: 'pointer',
  loop: true,
  slidesPerView: 1,
  simulateTouch: true,
  loopAdditionalSlides: 2,

  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 0,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      allowTouchMove: true,
    },

    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      allowTouchMove: false,
    }
  },
  mousewheel: {
    forceToAxis: true,
    invert: false,
    sensitivity: 1,
    eventsTarget: 'container',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

juriSwiper.init();

juriSwiper.slides.forEach((slide, index) => {
  slide.addEventListener('focusin', () => {
    juriSwiper.slideTo(index);
  });
});
