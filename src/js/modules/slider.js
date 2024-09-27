import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-first', sliderConfig );
  initSlider( '.hero-slider', sliderConfig.hero );
  initSlider( '.slider-products', sliderConfig.products );
  initSlider( '.product-page__slider', sliderConfig.productPage );
  initSlider( '.gift-certificate__slider', sliderConfig.giftСertificate );
};

export {
  initSliders,
};
