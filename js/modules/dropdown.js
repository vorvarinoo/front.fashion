document.addEventListener( 'DOMContentLoaded', function() {
  // Находим все элементы <details> с атрибутом data-toggle="dropdown"
  const dropdowns = document.querySelectorAll( 'details[data-toggle="dropdown"]' );

  // Проверяем, есть ли такие элементы на странице
  if ( dropdowns.length > 0 ) {
    // Вешаем обработчик события на документ
    document.addEventListener( 'click', function( event ) {
      dropdowns.forEach( function( detailsElement ) {
        // Проверяем, открыт ли элемент details и произошел ли клик вне его
        if ( detailsElement.hasAttribute( 'open' ) && !detailsElement.contains( event.target ) ) {
          detailsElement.removeAttribute( 'open' ); // Закрываем раскрывающийся элемент
        }
      } );
    } );
  }

} );
