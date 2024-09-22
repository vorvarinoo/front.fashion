import {
  isEscKey,
  breakpointChecker,
} from './utils.js';

import {
  observerConfig,
}
from './configs.js';



// const initStickyHeader = ( node, target ) => {
//   if ( !node || !target ) return;
//   const cb = ( entries ) => {
//     entries.forEach( ( entry ) => {
//       if ( !entry.isIntersecting ) {
//         node.classList.add( 'is-sticky' );
//       } else {
//         node.classList.remove( 'is-sticky' );
//       }
//     } );
//   };

//   new IntersectionObserver( cb, observerConfig.header ).observe( target );
// };

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
    // Добавьте другие кнопки и модальные окна по необходимости
  ];

  const headerNode = document.querySelector( '.header' );

  menus.forEach( ( {
    openId,
    modalId
  } ) => {
    const modalNode = document.getElementById( modalId );
    const modalOpenNode = document.getElementById( openId );

    // Проверяем, существуют ли все необходимые элементы
    if ( !modalNode || !modalOpenNode ) return;

    const modalCloseNode = modalNode.querySelector( '.header-modal__close' ); // Предполагается, что кнопка закрытия внутри модального окна

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

    // Обработчик события для кнопки открытия
    modalOpenNode.addEventListener( 'click', ( evt ) => {
      evt.preventDefault();
      openModal();
    } );

    // Проверка перед добавлением обработчика события для кнопки закрытия
    if ( modalCloseNode ) {
      modalCloseNode.addEventListener( 'click', ( evt ) => {
        evt.preventDefault();
        closeModal();
      } );
    }
  } );

  // Проверка перед использованием функций
  breakpointChecker( () => {
    resetOffsetTop( headerNode );
  }, () => {
    resetOffsetTop( headerNode );
  } );

  // initStickyHeader( headerNode, headerTopNode );
  // initStickyHeader( contentNode, headerTopNode );
};
