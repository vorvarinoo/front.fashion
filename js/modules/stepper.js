export const initStepper = () => {
  const steppersNode = document.querySelectorAll( '.stepper' );

  if ( !steppersNode ) return; // Если нет степперов на странице, выходим

  steppersNode.forEach( ( stepper ) => {
    const stepperInput = stepper.querySelector( 'input' );
    const stepperBtnUp = stepper.querySelector( '.stepper__btn--up' );
    const stepperBtnDown = stepper.querySelector( '.stepper__btn--down' );

    let count = parseInt( stepperInput.value, 10 );

    const isNotApple = () => {
      return !/iPhone|iPad|iPod/i.test( navigator.userAgent );
    };

    const allowNumberOnly = ( e ) => {
      let code = e.which ? e.which : e.keyCode;
      if ( code > 31 && ( code < 48 || code > 57 ) ) {
        e.preventDefault();
      }
    };

    const disabledBtn = () => {
      if ( count <= 1 ) {
        stepperBtnDown.setAttribute( 'disabled', '' );
      } else {
        stepperBtnDown.removeAttribute( 'disabled' );
      }

      if ( count >= 999 ) {
        stepperBtnUp.setAttribute( 'disabled', '' );
      } else {
        stepperBtnUp.removeAttribute( 'disabled' );
      }
    };

    const resizeInput = () => {
      if ( isNotApple() ) {
        stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
      } else {
        stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
      }
    };

    stepperInput.addEventListener( 'keyup', ( e ) => {
      let self = e.currentTarget;

      if ( self.value === '0' ) {
        self.value = 1;
      }

      resizeInput();

      count = parseInt( stepperInput.value, 10 );
      disabledBtn();
    } );

    stepperInput.addEventListener( 'keypress', ( e ) => {
      allowNumberOnly( e );
    } );

    stepperInput.addEventListener( 'change', ( e ) => {
      let self = e.currentTarget;

      if ( !self.value || self.value < 1 ) {
        self.value = 1;
      }

      count = parseInt( stepperInput.value, 10 );
      disabledBtn();
      resizeInput();
    } );

    stepperBtnUp.addEventListener( 'click', ( e ) => {
      e.preventDefault();
      count++;
      disabledBtn();
      stepperInput.value = count;
      resizeInput();
    } );

    stepperBtnDown.addEventListener( 'click', ( e ) => {
      e.preventDefault();
      if ( count > 1 ) {
        count--;
      }
      disabledBtn();
      stepperInput.value = count;
      resizeInput();
    } );

    // Инициализация начальных состояний
    disabledBtn();
    resizeInput();
  } );
};
