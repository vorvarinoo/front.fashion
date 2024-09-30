export const initSearch = () => {
  // Находим элементы с классами header__search, header-search и header-search__btn--close
  const headerSearchToggle = document.querySelector( '.header__search' );
  const headerSearch = document.querySelector( '.header-search' );
  const headerSearchCloseBtn = document.querySelector( '.header-search__btn--close' );

  // Вешаем событие клика на элемент с классом header__search
  headerSearchToggle.addEventListener( 'click', function() {
    // Добавляем или удаляем класс header-search--visible у элемента header-search
    headerSearch.classList.toggle( 'header-search--visible' );
  } );

  // Вешаем событие клика на элемент с классом header-search__btn--close
  headerSearchCloseBtn.addEventListener( 'click', function() {
    // Удаляем класс header-search--visible у элемента header-search при клике на кнопку закрытия
    headerSearch.classList.remove( 'header-search--visible' );
  } );
}
