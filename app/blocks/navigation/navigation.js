jQuery( document ).ready( function() {
  jQuery( '.navigation__item' ).click( function () {
    jQuery( '.hamburger__item' ).removeClass( 'hamburger__item_open' );
    jQuery( '#navigation' ).addClass( 'hidden' );
	});
});