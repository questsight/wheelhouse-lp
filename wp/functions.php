<?php

show_admin_bar( false );
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'wp_generator' );
add_filter( 'excerpt_more', function( $more ) {
  return '...';
});

if ( ! function_exists( 'questsight_setup' ) ) :
	function questsight_setup() {
		load_theme_textdomain( 'questsight', get_template_directory() . '/languages' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		//register_nav_menus( array(
			//'header' => esc_html__( 'Header Menu', 'questsight' ),
		//) );
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );
		add_theme_support( 'custom-background', apply_filters( 'questsight_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );
		add_theme_support( 'customize-selective-refresh-widgets' );
		add_theme_support( 'custom-logo', array(
			'height'      => 157,
			'width'       => 118,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'questsight_setup' );

function questsight_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'questsight_content_width', 640 );
}
add_action( 'after_setup_theme', 'questsight_content_width', 0 );


function questsight_scripts() {
	wp_enqueue_style( 'questsight-style', get_stylesheet_uri() );
  wp_enqueue_style('questsight-vendor-css', get_template_directory_uri() . '/libs/css/vendor.min.css', array(), null, false);
  wp_enqueue_style('questsight-common-css', get_template_directory_uri() . '/assets/css/common.min.css', array(), null, false);
  wp_enqueue_script( 'jquery' );
  wp_enqueue_script('questsight-vendor-js', get_template_directory_uri() . '/libs/js/vendor.min.js', array( 'jquery' ), null, true);
  wp_enqueue_script('questsight-common-js', get_template_directory_uri() . '/assets/js/common.js', array( 'jquery' ), null, true);
  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
      wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'questsight_scripts' );