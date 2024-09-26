const inputsPasswordNode = document.querySelectorAll( '.form-field--password' );

export const passwordToggle = () => {
  if ( !inputsPasswordNode ) return;

  // Функция для переключения видимости пароля
  const typeInput = ( passwordInput, togglePassword ) => ( event ) => {
    event.preventDefault(); // Предотвращаем переход по ссылке

    // Проверяем тип input
    if ( passwordInput.type === 'password' ) {
      passwordInput.type = 'text'; // Меняем на текст для показа пароля
      togglePassword.textContent = 'Скрыть'; // Меняем текст ссылки
    } else {
      passwordInput.type = 'password'; // Возвращаем на тип пароль
      togglePassword.textContent = 'Показать'; // Меняем текст ссылки обратно
    }
  };

  // Перебираем каждый wrapper
  inputsPasswordNode.forEach( ( item ) => {
    const passwordInput = item.querySelector( 'input' );
    const togglePassword = item.querySelector( 'a' );

    if ( passwordInput && togglePassword ) {
      // Навешиваем обработчик событий
      togglePassword.addEventListener( 'click', typeInput( passwordInput, togglePassword ) );
    }
  } );
};
