export const passwordToggle = () => {
  const inputsPasswordNode = document.querySelectorAll( '.form-field--password' );

  if ( !inputsPasswordNode ) return;

  const typeInput = ( passwordInput, togglePassword ) => ( event ) => {
    event.preventDefault();

    if ( passwordInput.type === 'password' ) {
      passwordInput.type = 'text';
      togglePassword.textContent = 'Скрыть';
    } else {
      passwordInput.type = 'password';
      togglePassword.textContent = 'Показать';
    }
  };

  inputsPasswordNode.forEach( ( item ) => {
    const passwordInput = item.querySelector( 'input' );
    const togglePassword = item.querySelector( 'a' );

    if ( passwordInput && togglePassword ) {
      togglePassword.addEventListener( 'click', typeInput( passwordInput, togglePassword ) );
    }
  } );
};
