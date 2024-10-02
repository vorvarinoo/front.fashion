export const initTooltip = () => {
  const outOfStockItems = document.querySelectorAll( '.size' );

  outOfStockItems.forEach( item => {
    const tooltip = item.querySelector( '.tooltip' );
    const sizeItem = item.querySelector( '[data-size]' );
    const productPageBtns = document.getElementById( 'container-btns' );

    if ( tooltip && sizeItem && productPageBtns ) {
      tooltip.addEventListener( 'click', () => {
        const availabilityTemplate = document.getElementById( 'availability' );
        if ( availabilityTemplate ) {
          const templateContent = availabilityTemplate.innerHTML;
          productPageBtns.innerHTML = templateContent;

          const sizeValue = sizeItem.textContent || sizeItem.innerText;
          const sizeInput = productPageBtns.querySelector( 'input[name="Размер"]' );
          if ( sizeInput ) {
            sizeInput.value = sizeValue;
          }
        }
      } );
    }

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
