const sliderConfig = {
  default: {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
  },
  hero: {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    effect: "fade",
    navigation: {
      nextEl: ".hero__btn-next",
      prevEl: ".hero__btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  },
  products: {
    slidesPerView: 2,
    grid: {
      fill: 'row',
      rows: 2,
    },
    spaceBetween: 16,

    breakpoints: {
      768: {
        grid: {
          rows: 1,
        },
        slidesPerView: 4,
        spaceBetween: 11,
        freeMode: true,
      },
    },
  },
  productPage: {
    slidesPerView: 1,
    watchSlidesProgress: true,
    freeMode: true,
    spaceBetween: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      524: {
        slidesPerView: 'auto',

      },
    },
  },
};

const smoothScrollConfig = {
  speed: 900,
  speedAsDuration: true,
  updateURL: false,
};

const modalConfig = {
  linkAttributeName: false,
  catchFocus: true,
  closeOnEsc: true,
  backscroll: true,
};

const validateConfig = {
  justValidate: {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: 'var(--error)',
      marginTop: '6px',
      fontSize: '12px',
      textAlign: 'left',
    },
    errorFormClass: 'shaked',
    errorTimeout: 1500,
  },
  errorTimeout: 1500,
  mask: {
    bodyMask: ' (___) ___ __ __',
  }
};

const observerConfig = {
  scrollTop: {
    rootMargin: '600px',
    threshold: 1,
  },
};

const requestsConfig = {
  handlerURL: 'https://jsonplaceholder.typicode.com/posts',
};

export {
  sliderConfig,
  smoothScrollConfig,
  modalConfig,
  validateConfig,
  observerConfig,
  requestsConfig,
};
