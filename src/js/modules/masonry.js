document.addEventListener( 'DOMContentLoaded', function() {

  const grid = document.querySelector( '.media__list' );

  if ( !grid ) return;

  function resizeGridItem( item ) {
    const grid = document.getElementsByClassName( 'media__list' )[ 0 ];
    const rowHeight = parseInt( window.getComputedStyle( grid ).getPropertyValue( 'grid-auto-rows' ) );
    const rowGap = parseInt( window.getComputedStyle( grid ).getPropertyValue( 'grid-row-gap' ) );
    const rowSpan = Math.ceil( ( item.querySelector( '.media__item' ).getBoundingClientRect().height + rowGap ) / ( rowHeight + rowGap ) );
    item.style.gridRowEnd = 'span ' + rowSpan;
  }

  function resizeAllGridItems() {
    const allItems = document.getElementsByClassName( 'media__list-item' );
    for ( let x = 0; x < allItems.length; x++ ) {
      resizeGridItem( allItems[ x ] );
    }
  }

  function resizeInstance( instance ) {
    const item = instance.elements[ 0 ];
    resizeGridItem( item );
  }

  window.addEventListener( 'load', function() {
    resizeAllGridItems();
    grid.classList.add( 'is-visible' );
  } );

  window.addEventListener( 'resize', resizeAllGridItems );

  const allItems = document.getElementsByClassName( 'media__list-item' );
  for ( let x = 0; x < allItems.length; x++ ) {
    imagesLoaded( allItems[ x ], resizeInstance );
  }
} );
