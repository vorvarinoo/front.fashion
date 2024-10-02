document.addEventListener( 'DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll( 'details[data-toggle="dropdown"]' );


  if ( dropdowns.length > 0 ) {
    document.addEventListener( 'click', function( event ) {
      dropdowns.forEach( function( detailsElement ) {
        if ( detailsElement.hasAttribute( 'open' ) && !detailsElement.contains( event.target ) ) {
          detailsElement.removeAttribute( 'open' );
        }
      } );
    } );
  }

} );
