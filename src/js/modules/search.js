export const initSearch = () => {

  const headerSearchToggle = document.querySelector( '.header__search' );
  const headerSearch = document.querySelector( '.header-search' );
  const headerSearchCloseBtn = document.querySelector( '.header-search__btn--close' );

  headerSearchToggle.addEventListener( 'click', function() {
    headerSearch.classList.toggle( 'header-search--visible' );
  } );

  headerSearchCloseBtn.addEventListener( 'click', function() {
    headerSearch.classList.remove( 'header-search--visible' );
  } );
}
