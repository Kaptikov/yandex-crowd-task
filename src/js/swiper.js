import Swiper from 'swiper'
import Pagination from '/node_modules/swiper/modules/pagination.mjs'
import Autoplay from '/node_modules/swiper/modules/autoplay.mjs'
import EffectFade from '/node_modules/swiper/modules/effect-fade.mjs'
import 'swiper/swiper-bundle.css'

const swiper = new Swiper('.main-block__swiper', {
  modules: [Pagination, Autoplay, EffectFade],
  // loop: true,
  slidesPerView: 1,
  simulateTouch: false,
  direction: 'vertical',
  allowTouchMove: false,

  pagination: {
    el: '.main-block__swiper-pagination',
    clickable: true,
  },

  speed: 1500,

  effect: 'fade',

  fadeEffect: { crossFade: true },

  autoplay: {
    delay: 2500,
    stopOnLastSlide: false,
  },

  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 44,
  //   },
  //   // 524: {
  //   //   slidesPerView: 2,
  //   //   spaceBetween: 42,
  //   // },
  //   // 767: {
  //   //   slidesPerView: 3,
  //   //   spaceBetween: 47,
  //   // },
  // },
})
