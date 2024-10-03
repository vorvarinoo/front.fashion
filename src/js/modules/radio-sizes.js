export const initTooltip = () => {
  const outOfStockItems = document.querySelectorAll( '.size' );
  const notifyArrivalBtn = document.getElementById( 'notify-arrival-btn' ); // кнопка уведомления
  const productPageBtns = document.getElementById( 'container-btns' );

  outOfStockItems.forEach( item => {
    const tooltip = item.querySelector( '.tooltip' );
    const sizeItem = item.querySelector( '[data-size]' );

    // Действия при клике по tooltip (с передачей размера)
    const handleTooltipClick = () => {
      const availabilityTemplate = document.getElementById( 'availability' );
      if ( availabilityTemplate ) {
        const templateContent = availabilityTemplate.innerHTML;
        productPageBtns.innerHTML = templateContent;

        // Прокидываем размер в форму
        const sizeValue = sizeItem.textContent || sizeItem.innerText;
        const sizeInput = productPageBtns.querySelector( 'input[name="Размер"]' );
        if ( sizeInput ) {
          sizeInput.value = sizeValue;
        }
      }
    };

    // Действия при клике по notify-arrival-btn (без передачи размера)
    const handleNotifyArrivalClick = () => {
      const availabilityTemplate = document.getElementById( 'availability' );
      if ( availabilityTemplate ) {
        const templateContent = availabilityTemplate.innerHTML;
        productPageBtns.innerHTML = templateContent;
        // Размер не прокидывается
      }
    };

    if ( tooltip && sizeItem && productPageBtns ) {
      tooltip.addEventListener( 'click', handleTooltipClick );
    }

    // Добавляем обработчик для кнопки notify-arrival-btn
    if ( notifyArrivalBtn ) {
      if ( !notifyArrivalBtn ) return;
      notifyArrivalBtn.addEventListener( 'click', handleNotifyArrivalClick );
    }

    // Действия при клике по .size__in-stock
    const sizeLabels = document.querySelectorAll( '.size__in-stock' );
    sizeLabels.forEach( label => {
      label.addEventListener( 'click', () => {
        const btnBasketTemplate = document.getElementById( 'btn-basket' );
        if ( btnBasketTemplate && productPageBtns ) {
          const btnBasketContent = btnBasketTemplate.innerHTML;
          productPageBtns.innerHTML = btnBasketContent;
        }
      } );
    } );
  } );
};
