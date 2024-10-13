import {
  isEscKey,
} from './utils.js';

export const initSearch = () => {

  const headerSearchOpenBtn = document.querySelector( '.header__search' );
  const headerSearch = document.querySelector( '.header-search' );
  const headerSearchCloseBtn = document.querySelector( '.header-search__btn--close' );
  const targetElement = document.querySelector( '.header-search__inner' );


  if ( !headerSearch ) return;

  const onEscKeydown = ( evt ) => {
    if ( isEscKey( evt ) && headerSearch.getAttribute( 'aria-hidden' ) === 'false' ) {
      closeSearch();
    }
  };

  function openSearch() {
    headerSearch.setAttribute( 'aria-hidden', 'false' );
    document.addEventListener( 'keydown', onEscKeydown );
    headerSearch.classList.add( 'header-search--visible' );
    document.addEventListener( 'click', handleOutsideClick );
  }

  function closeSearch() {
    headerSearch.setAttribute( 'aria-hidden', 'true' );
    document.removeEventListener( 'keydown', onEscKeydown );
    headerSearch.classList.remove( 'header-search--visible' );
    document.removeEventListener( 'click', handleOutsideClick );
  }

  function handleOutsideClick( event ) {
    if ( !targetElement.contains( event.target ) && !headerSearchOpenBtn.contains( event.target ) ) {
      closeSearch(); // Закрываем поиск, если клик не внутри него
    }
  }


  headerSearchOpenBtn.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    openSearch();
  } );

  headerSearchCloseBtn.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    closeSearch();
  } );

};
