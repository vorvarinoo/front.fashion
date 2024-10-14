import {
  simpleModal,
} from './modal.js';


export const isDiscountModal = () => {

  setTimeout( () => {
    simpleModal.open( '#discount-modal' );
  }, 30000 );
};
