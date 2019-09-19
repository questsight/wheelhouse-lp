jQuery( document ).ready( function() {
	jQuery( '[popup-img]' ).click( function () {
    var src = jQuery(this).attr('src');
    jQuery('#photogallery-img').attr('src',src);
    jQuery('#photogallery').removeClass('hidden');
	});
  jQuery( '#photogallery-close' ).click( function () {
    jQuery('#photogallery').addClass('hidden');
    var src = undefined;
    jQuery('#photogallery-img').attr('src',src);
	});
});