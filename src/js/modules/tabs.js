export const initTabs = () => {
  const tabsElement = document.querySelector( '[data-jtabs="order-form-tabs"]' );

  if ( tabsElement ) {
    new JustTabs( 'order-form-tabs', {
      startTabIndex: 1
    } );
  }
}
