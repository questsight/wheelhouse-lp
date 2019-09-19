jQuery( document ).ready( function() {
  var comment = 1;
  var comments = jQuery(".comments__one").length;
  jQuery( '#arrow-left' ).addClass('hidden');
	jQuery( '#arrow-left' ).click( function () {
    jQuery( '[comment="'+comment+'"]' ).addClass('hidden')
    if(comment == comments){
      jQuery( '#arrow-right' ).removeClass('hidden');
    }
    comment = comment - 1;
    jQuery( '[comment="'+comment+'"]' ).removeClass('hidden');
    if(comment == 1){
      jQuery( '#arrow-left' ).addClass('hidden');
    }
	});
  jQuery( '#arrow-right' ).click( function () {
    jQuery( '[comment="'+comment+'"]' ).addClass('hidden')
    if(comment == 1){
      jQuery( '#arrow-left' ).removeClass('hidden');
    }
    comment = comment + 1;
    jQuery( '[comment="'+comment+'"]' ).removeClass('hidden');
    if(comment == comments){
      jQuery( '#arrow-right' ).addClass('hidden');
    }
	});
});