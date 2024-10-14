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
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.hero__btn-next',
      prevEl: '.hero__btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  },
  productPage: {
    spaceBetween: 1,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      524: {

      },
    },
  },

  giftСertificate: {
    slidesPerView: 1,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.gift-certificate__pagination',
      bulletClass: 'gift-certificate__bullet',
      bulletActiveClass: 'gift-certificate__bullet-active',
      clickable: true,
      renderBullet: function( index, className ) {
        return '<div class="' + className + '">' +
          '<input  name="giftCertificate" ' +
          'type="radio" ' +
          'id="giftCertificate' + ( index + 1 ) + '" ' +
          'value="certificate' + ( index + 1 ) + '">' +
          '<label for="giftCertificate' + ( index + 1 ) + '">' +
          ( index + 1 ) +
          '</label>' +
          '</div>';
      },
    },

    on: {
      init: function() {
        const radioButtons = document.querySelectorAll( '.gift-certificate__pagination input[type="radio"]' );
        if ( radioButtons.length > 0 ) {
          radioButtons[ 0 ].checked = true; // Устанавливаем checked для первого радиоинпута
        }
      },
      slideChange: function() {
        const currentIndex = this.activeIndex;
        const radioButtons = document.querySelectorAll( '.gift-certificate__pagination input[type="radio"]' );

        radioButtons.forEach( ( radio, index ) => {
          radio.checked = ( index === currentIndex );
        } );
      }
    }
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
      color: 'var(--purple)',
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
