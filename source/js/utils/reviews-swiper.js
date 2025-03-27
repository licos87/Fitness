import Swiper from '../vendor/swiper/swiper.mjs';
import Navigation from '../vendor/swiper/modules/navigation.mjs';
import Mousewheel from '../vendor/swiper/modules/mousewheel.mjs';

const reviewsSwiper = new Swiper('.reviews__swiper-container', {
  modules: [Navigation, Mousewheel],
  direction: 'horizontal',
  grabCursor: 'pointer',
  spaceBetween: 90,

  breakpoints: {
    1366: {
      spaceBetween: 90,
    },
  },
  mousewheel: {
    forceToAxis: true,
  },

  navigation: {
    nextEl: '.reviews__swiper-button-next',
    prevEl: '.reviews__swiper-button-prev',
  },
});

reviewsSwiper.init();
