import {
  checkFilledSelect,
} from './select.js';

const formID = '#order-form';
const deliveryTypesNode = document.querySelector( '#delivery-type' );
const deliveryContainerNode = document.querySelector( '#delivery-type-container' );


const renderDeliveryFields = ( type ) => {
  if ( !deliveryContainerNode ) return;

  const deliveryFieldsTemplate = document.querySelector( `#${type}` ).content.querySelector( '.delivery__section' );
  const deliveryFieldsFragment = document.createDocumentFragment();
  deliveryFieldsFragment.appendChild( deliveryFieldsTemplate.cloneNode( true ) );
  deliveryContainerNode.innerHTML = '';
  deliveryContainerNode.appendChild( deliveryFieldsFragment );

  checkFilledSelect();
};

const setDefaultDeliveryType = () => {
  if ( !deliveryTypesNode ) return;

  const checkedType = deliveryTypesNode.querySelector( '[data-delivery-type]:checked' ).dataset.deliveryType;
  renderDeliveryFields( checkedType );
};

const initDeliveryType = () => {
  if ( !deliveryTypesNode ) return;
  setDefaultDeliveryType();
  try {
    deliveryTypesNode.addEventListener( 'change', ( evt ) => {
      const currentType = evt.target.dataset.deliveryType;
      renderDeliveryFields( currentType );
    } );
  } catch ( error ) {
    throw new Error( error );
  }
};

export {
  initDeliveryType
};
