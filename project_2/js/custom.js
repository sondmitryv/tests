$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);




$( document ).ready(function() {
	// select styler init 
	$('select').styler();

	// scroll styler init 
	if ( $(window).width() > 768 ) {
		$('.js-filter-list ').niceScroll();
	}

	// product slider init 
	$('.js-product-content').slick({
		dots: true,
		slidesToScroll: 1,
		speed: 300,
		slidesToShow: 1
	});

	// sidebar accordion submenu 
	$('.js-link-submenu').on('click', function(){
		var itemLink = $(this);
		if(itemLink.parent('li').hasClass('active')){
			$(this).next('.js-submenu-filter').slideUp();
			$(this).parent('li').removeClass('active');
		}else{
			$(this).parent('li').addClass('active');
			$(this).next('.js-submenu-filter').slideDown();
		}
	})

	// add scroll submenu 
	if($('.js-filter-list li').length > 6){
		$('.js-filter-list').addClass('hidden');
	}

	// rate stars init 
	if($(".rateBox").length){
		$(".rateBox").rate({
				// 0：svg  1：Font class  2：Unicode
				type: 0,
				// the number of stars
				length: 5,
				// initial value
				value: 3,
				// allows half star
				half: true,
				// supports decimal?
				decimal: true,
				// shows the current rating value on hover
				hover: false,
				// shows rating text
				text: false,
				// color
				theme: '#ffd36b',
				// text/star size
				size: '14px',
				// space between stars
				gutter: '3px',
				// default CSS classes
				selectClass: 'fxss_rate_select',
				incompleteClass: '', 
				customClass: ''
			});
}
});
