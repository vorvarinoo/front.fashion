export const checkFilledSelect = () => {
  const selectNode = document.querySelectorAll( ".form-select" );

  if ( !selectNode ) return;

  const handleSelectChange = ( select ) => {
    if ( select.value !== "" ) {
      select.setAttribute( 'data-state', '' );
    } else {
      select.removeAttribute( 'data-state' );
    }
  };

  selectNode.forEach( select => {
    select.addEventListener( 'change', function() {
      handleSelectChange( select );
    } );

    handleSelectChange( select );
  } );
}
