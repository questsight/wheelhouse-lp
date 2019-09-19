jQuery( window ).resize( function () {
  if ( window.matchMedia( '(max-width: 767px)' ).matches ) {
    jQuery( '.header__reduction' ).css('transform', 'translateY(0)');
    jQuery( '.site__content' ).css('margin-top','50px');
    jQuery( '.logo_size_mini' ).removeClass('hidden');
    jQuery( '#hamburger' ).removeClass('hidden');
    jQuery( '.header__full' ).addClass('hidden-sm')
  } else {
    jQuery( '.header__full' ).removeClass('hidden-sm')
    jQuery( '.header__reduction' ).css('transform', 'translateY(-150%)');
    jQuery( '.site__content' ).css('margin-top','555px');
    jQuery( '.logo_size_mini' ).addClass('hidden');
    jQuery( '#hamburger' ).addClass('hidden');
  }
});
jQuery( document ).ready( function() {
  if ( window.matchMedia( '(max-width: 767px)' ).matches ) {
    jQuery( '.header__reduction' ).css('transform', 'translateY(0)');
    jQuery( '.site__content' ).css('margin-top','50px');
    jQuery( '.logo_size_mini' ).removeClass('hidden');
    jQuery( '#hamburger' ).removeClass('hidden');
  }
  var lastScrollTop = 0;
	jQuery( this ).scroll( function () {
    if(!window.matchMedia( '(max-width: 767px)' ).matches) {
      var st = jQuery(this).scrollTop();
      if(st < lastScrollTop && st == 0 ){
        jQuery( '.header__full' ).addClass('animation-top-in-1200');
        jQuery( '.site__content' ).addClass('animation-top-in-content');
        jQuery( '.header__reduction' ).addClass('animation-top-out-300');
        setTimeout(function () {
          jQuery( '.header__reduction' ).removeClass('animation-top-in-300');
        }, 300);
        setTimeout(function () {
          jQuery( '.header__full' ).removeClass('animation-top-out-1200');
          jQuery( '.site__content' ).removeClass('animation-top-out-content');
        }, 1200);
        jQuery( '.logo_size_mini' ).addClass('hidden');
        jQuery( '#hamburger' ).addClass('hidden');
        jQuery( '#navigation' ).addClass( 'hidden' );
        jQuery(this).scrollTop(0);
      }
      if(st > lastScrollTop){
        jQuery( '.header__full' ).addClass('animation-top-out-1200');
        jQuery( '.site__content' ).addClass('animation-top-out-content');
        jQuery( '.header__reduction' ).addClass('animation-top-in-300');
        jQuery( '.logo_size_mini' ).removeClass('hidden');
        jQuery( '#hamburger' ).removeClass('hidden');
        jQuery( '.header__reduction' ).removeClass('animation-top-out-300');
        jQuery( '.header__full' ).removeClass('animation-top-in-1200');
        jQuery( '.site__content' ).removeClass('animation-top-in-content');
      }
      lastScrollTop = st;
    }
  });
});