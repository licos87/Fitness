import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';

new Swiper('.swiper-container', {
  modules: [Navigation, Mousewheel],
  direction: 'horizontal',
  grabCursor: 'pointer',
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 0,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  },
  mousewheel: {
    forceToAxis: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
