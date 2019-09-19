jQuery( document ).ready( function() {
	jQuery( '.goods__detail' ).click( function () {
    jQuery('#popup-product').removeClass('hidden');
    jQuery('.body').addClass('overflow-hidden');
	});
  jQuery( '#product__close' ).click( function () {
    jQuery('#popup-product').addClass('hidden');
    jQuery('.body').removeClass('overflow-hidden');
	});
});