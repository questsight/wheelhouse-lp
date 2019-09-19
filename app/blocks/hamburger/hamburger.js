jQuery( document ).ready( function() {
	jQuery( '#hamburger' ).click( function () {
		jQuery( '.hamburger__item' ).toggleClass( 'hamburger__item_open' );
    jQuery( '#navigation' ).toggleClass( 'hidden' );
    jQuery('#popup-product').addClass('hidden');
    jQuery('.body').removeClass('overflow-hidden');
	});
});