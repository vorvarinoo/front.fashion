const appendBtnReset = () => {
  const element = document.querySelector( '.flatpickr-innerContainer' );

  if ( !element ) return;

  const newButton = document.createElement( 'button' );
  newButton.textContent = 'Сбросить';
  newButton.classList.add( 'btn-reset', 'flatpickr-clear-button' );

  newButton.setAttribute( 'type', 'button' );
  newButton.setAttribute( 'aria-label', 'Сбросить выбор' );
  newButton.setAttribute( 'onclick', 'document.querySelector( ".flatpickr-clear" ).click();' );

  element.appendChild( newButton );
}

const confirmDate = () => {
  const element = document.querySelector( '.form-field.flatpickr' );

  if ( !element ) return;
  const closeBtn = element.querySelector( '.form-field__confirm' )

  element.addEventListener( 'change', function( e ) {
    console.log( e.target.value )
  } );
}



flatpickr( '[data-id="birthday"]', {
  dateFormat: "d.m.Y",
  "locale": "ru",
  allowInput: true,
  wrap: true,

  onReady: function( selectedDates, dateStr, instance ) {
    appendBtnReset();
  },

} );
