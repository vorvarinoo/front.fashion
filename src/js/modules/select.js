export const checkFilledSelect = () => {
  const selectNode = document.querySelectorAll( ".form-select" );

  if ( !selectNode ) return;

  // Функция для обработки изменений в select
  const handleSelectChange = ( select ) => {
    if ( select.value !== "" ) {
      select.setAttribute( 'data-state', '' );
    } else {
      select.removeAttribute( 'data-state' );
    }
  };

  // Проходим по каждому select и добавляем обработчик события
  selectNode.forEach( select => {
    // Проверяем изменение значения select
    select.addEventListener( 'change', function() {
      handleSelectChange( select ); // Передаем текущий select в функцию
    } );

    // Вызываем функцию для каждого select на случай, если он уже имеет значение
    handleSelectChange( select );
  } );
}
