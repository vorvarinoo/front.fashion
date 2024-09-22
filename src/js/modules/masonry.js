document.addEventListener( 'DOMContentLoaded', function() {
  // Проверяем, есть ли на странице элемент с классом media__list
  const grid = document.querySelector( '.media__list' );

  if ( !grid ) return; // Если элемента нет, прекращаем выполнение

  // Скрываем элемент .media__list до полной загрузки


  function resizeGridItem( item ) {
    const grid = document.getElementsByClassName( "media__list" )[ 0 ];
    const rowHeight = parseInt( window.getComputedStyle( grid ).getPropertyValue( 'grid-auto-rows' ) );
    const rowGap = parseInt( window.getComputedStyle( grid ).getPropertyValue( 'grid-row-gap' ) );
    const rowSpan = Math.ceil( ( item.querySelector( '.media__item' ).getBoundingClientRect().height + rowGap ) / ( rowHeight + rowGap ) );
    item.style.gridRowEnd = "span " + rowSpan;
  }

  function resizeAllGridItems() {
    const allItems = document.getElementsByClassName( "media__list-item" );
    for ( let x = 0; x < allItems.length; x++ ) {
      resizeGridItem( allItems[ x ] );
    }
  }

  function resizeInstance( instance ) {
    const item = instance.elements[ 0 ];
    resizeGridItem( item );
  }

  // Ждем полной загрузки всех ресурсов страницы
  window.addEventListener( 'load', function() {
    resizeAllGridItems(); // Выполняем расчет размеров
    grid.classList.add( 'is-visible' ); // Показываем .media__list
  } );

  window.addEventListener( "resize", resizeAllGridItems );

  const allItems = document.getElementsByClassName( "media__list-item" );
  for ( let x = 0; x < allItems.length; x++ ) {
    imagesLoaded( allItems[ x ], resizeInstance );
  }
} );
