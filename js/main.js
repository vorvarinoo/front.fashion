import {
  iosVhFix,
} from './modules/utils.js';

import {
  initHeaderMenu
} from './modules/header.js';

import {
  validateForms,
} from './modules/validate.js';

import {
  initModals,
} from './modules/modal.js';

import {
  initSliders,
} from './modules/slider.js';

import {
  initScrollTop,
} from './modules/scroll-top.js';

import './modules/dropdown.js';

import './modules/masonry.js';

import {
  initStepper,
} from './modules/stepper.js';

import {
  initDeliveryType,
} from './modules/delivery-type.js';

import './modules/flatpickr.js';

import {
  passwordToggle,
} from './modules/input-pass.js';

import {
  initTooltip,
} from './modules/radio-sizes.js';

import {
  initSearch,
} from './modules/search.js';




document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener( 'load', () => {
    validateForms();
    initModals();
    initSliders();
    initScrollTop();
    initHeaderMenu();
    initStepper();
    initDeliveryType();
    passwordToggle();
    initTooltip();
    initSearch();
  } );

} );
