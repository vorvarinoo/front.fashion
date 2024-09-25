export const appendBtnReset = () => {
  const element = document.querySelector( '.flatpickr-innerContainer' );
  const newButton = document.createElement( 'button' );
  newButton.textContent = 'Сбросить';
  newButton.classList.add( 'btn-reset', 'flatpickr-clear-button' );

  // Добавление атрибутов
  newButton.setAttribute( 'type', 'button' );
  newButton.setAttribute( 'aria-label', 'Сбросить выбор' );
  newButton.setAttribute( 'onclick', 'document.querySelector( ".flatpickr-clear" ).click();' );

  element.appendChild( newButton );
}
