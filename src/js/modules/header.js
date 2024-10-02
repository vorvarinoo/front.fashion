import {
  isEscKey,
  breakpointChecker,
} from './utils.js';


const resetOffsetTop = ( node ) => {
  if ( !node ) return;
  document.documentElement.style.setProperty( '--offset-top', `${node.offsetHeight}px` );
};

export const initHeaderMenu = () => {
  const menus = [ {
      openId: 'btn-mob-menu',
      modalId: 'mob-menu'
    },
    {
      openId: 'btn-catalog-menu',
      modalId: 'catalog-menu'
    },
    {
      openId: 'btn-customers-menu',
      modalId: 'customers-menu'
    },
  ];

  const headerNode = document.querySelector( '.header' );

  menus.forEach( ( {
    openId,
    modalId
  } ) => {
    const modalNode = document.getElementById( modalId );
    const modalOpenNode = document.getElementById( openId );


    if ( !modalNode || !modalOpenNode ) return;

    const modalCloseNode = modalNode.querySelector( '.header-modal__close' );

    const onEscKeydown = ( evt ) => {
      if ( isEscKey( evt ) && modalNode.getAttribute( 'aria-hidden' ) === 'false' ) {
        closeModal();
      }
    };

    function openModal() {
      document.documentElement.classList.add( 'is-block-scroll' );
      modalNode.setAttribute( 'aria-hidden', 'false' );
      document.addEventListener( 'keydown', onEscKeydown );
    }

    function closeModal() {
      document.documentElement.classList.remove( 'is-block-scroll' );
      modalNode.setAttribute( 'aria-hidden', 'true' );
      document.removeEventListener( 'keydown', onEscKeydown );
    }


    modalOpenNode.addEventListener( 'click', ( evt ) => {
      evt.preventDefault();
      openModal();
    } );


    if ( modalCloseNode ) {
      modalCloseNode.addEventListener( 'click', ( evt ) => {
        evt.preventDefault();
        closeModal();
      } );
    }
  } );


  breakpointChecker( () => {
    resetOffsetTop( headerNode );
  }, () => {
    resetOffsetTop( headerNode );
  } );


};
