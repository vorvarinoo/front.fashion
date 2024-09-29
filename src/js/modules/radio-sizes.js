export const initTooltip = () => {
  const outOfStockItems = document.querySelectorAll( '.size--out-stock' );

  outOfStockItems.forEach( item => {
    const tooltip = item.querySelector( '.tooltip' );
    const sizeItem = item.querySelector( '[data-size]' );

    tooltip.addEventListener( 'click', () => {
      const availabilityTemplate = document.getElementById( 'availability' );
      const templateContent = availabilityTemplate.innerHTML;

      const productPageBtns = document.getElementById( 'container-btns' );
      productPageBtns.innerHTML = templateContent;

      const sizeValue = sizeItem.textContent || sizeItem.innerText;


      const sizeInput = productPageBtns.querySelector( 'input[name="Размер"]' );
      if ( sizeInput ) {
        sizeInput.value = sizeValue;
      }
    } );

    const sizeLabels = document.querySelectorAll( '.size__label' );

    sizeLabels.forEach( label => {
      label.addEventListener( 'click', () => {
        const btnBasketTemplate = document.getElementById( 'btn-basket' );
        const btnBasketContent = btnBasketTemplate.innerHTML;

        const productPageBtns = document.getElementById( 'product-page-btns' );
        productPageBtns.innerHTML = btnBasketContent;
      } );
    } );
  } );
};
