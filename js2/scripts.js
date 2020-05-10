/********************************

Minth's Javascript Document for Documentation
Version: 1.0
Created By: Amazyne Themes

*********************************/

/********************************
Navigation
*********************************/

function menu() {
	if (screenWidth > 991) {
		$(".main-nav .navbar-nav > .dropdown > a").attr("data-toggle", "");
		$(".main-nav .navbar-nav.nav-search > .dropdown > a").attr("data-toggle", "dropdown");
		$('.main-nav .navbar-nav > .dropdown').removeClass('open');
		$('.main-nav .navbar-nav .dropdown-submenu').removeClass('open');
		$('.main-nav .navbar-nav > li').find(':focus').blur();
		if ( $('.main-nav .navbar-collapse').hasClass('in') ) {
			$('.main-nav .navbar-collapse').removeClass('in');
		}
		
	}
	else if  (screenWidth <= 991)  {
		$(".main-nav .navbar-nav > .dropdown > a").attr("data-toggle", "dropdown");
		$('.main-nav .nav > li .dropdown-menu').removeAttr('style');
		$('.main-nav .nav > li > .dropdown-menu').removeAttr('style');
	}
}
function menuEvents() {
	$('.main-nav .navbar-nav > .dropdown > .dropdown-menu').click(function(event) {
    	if(screenWidth <= 991) {
			event.stopPropagation();
		}
	});
	$( ".main-nav .navbar-nav>.dropdown>.dropdown-menu>.dropdown-submenu" ).click(function(event) {
		if(screenWidth < 991) {
			$(this)
				.siblings(".dropdown-submenu")
				.removeClass("open")
				.end(); 
			$( this ).parents(".dropdown-submenu").addClass('open');
			$( this ).toggleClass('open');
			event.stopPropagation();
		}
	});
	$('.main-nav .navbar-nav > .dropdown > a').click(function(event) {
    	$('.main-nav .navbar-nav .dropdown-submenu').removeClass('open');
    });	
	$('.main-nav .nav > li .dropdown-submenu > a').click(function(event) {
		if(screenWidth > 991) {
			event.stopPropagation();
		}
	});
	$('.main-nav .nav > li').hover(function() {
		if (screenWidth > 991) {
			var dropdownList = $(this).find("> .dropdown-menu");
			if(!dropdownList.hasClass('megamenu')){
				var childDropdownList = $(this).find(".dropdown-submenu .dropdown-menu"),
					dropdownOffset = $(this).offset(),
					offsetLeft = dropdownOffset.left,
					dropdownWidth = dropdownList.width(),
					childWidth = childDropdownList.width(),
					docWidth = $(window).width(),
					aWidth = $(this).children("a").outerWidth(),
					shiftWidth = Math.abs(dropdownWidth - aWidth),
					childShiftWidth = dropdownWidth + childWidth - 1,
					isDropdownVisible = (offsetLeft + dropdownWidth <= docWidth),
					isChildDropdownVisible = (offsetLeft + dropdownWidth + childWidth <= docWidth);
				if (!isDropdownVisible) {
					dropdownList.css('margin-left','-'+shiftWidth+'px')
					childDropdownList.css('margin-left','-'+childShiftWidth+'px')
				} else if (!isChildDropdownVisible) {
					childDropdownList.css('margin-left','-'+childShiftWidth+'px')
				}
				else {
					dropdownList.removeAttr('style')
					childDropdownList.removeAttr('style')
				}
			}
		}
	});
}

/********************************
Side Navigation
*********************************/

$(".nav-trigger").click(function(e) {
	e.preventDefault();
	if ($('.side-menu').hasClass("active")) {
		if ( $('ul.cosllapse').hasClass('in') ) {
			$('ul.collapse').removeClass('in');
		}
	}
	$(".side-menu").toggleClass("active");
});

$(".nav-icons-trigger").click(function(e) {
	e.preventDefault();
	if ($('.side-menu-icons').hasClass("active")) {
		if ( $('ul.collapse').hasClass('in') ) {
		$('ul.collapse').removeClass('in');
	}	
	}
	$(".side-menu-icons").toggleClass("active");
});

$( ".side-menu .navbar-nav > li > .menu-dropdown-link" ).click(function(event) {
	$(this)
		.parent(".with-dropdown")
		.siblings(".with-dropdown")
		.children(".menu-dropdown.collapse")
		.removeClass("in")
		.end(); 
	$( this ).parents(".with-dropdown").children(".menu-dropdown.collapse").toggleClass('in');
	event.stopPropagation();
});

$('.side-menu li.with-dropdown a.menu-dropdown-link').click(function () {
	$('.active-dropdown').not($(this)).removeClass('active-dropdown');
	$(this).toggleClass('active-dropdown');
});

$( ".side-menu-icons .navbar-nav > li > .menu-dropdown-link" ).click(function(event) {
	$(this)
		.parent(".with-dropdown")
		.siblings(".with-dropdown")
		.children(".menu-dropdown.collapse")
		.removeClass("in")
		.end(); 
	$( this ).parents(".with-dropdown").children(".menu-dropdown.collapse").toggleClass('in');
	event.stopPropagation();
});


/********************************
Search Panel
*********************************/

function headerSearch() {
	$(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
		event.preventDefault();
		var $form = $(this).closest('form'),
			$input = $form.find('input');
		$form.addClass('active');
		$input.focus();
		event.preventDefault();
		
	});
	$(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function(event) {
		event.preventDefault();
		var $form = $(this).closest('form'),
			$input = $form.find('input');
		if($input.val() != '')
			{
				$form.submit();
			}
		closeSearch()
	});
	$(document).mouseup(function (e) {
		var container = $('.navbar-collapse form[role="search"].active');
	  	if (!container.is(e.target)&& container.has(e.target).length === 0){
			container.removeClass('active');
		}
	});
}
function closeSearch() {
	var $form = $('.navbar-collapse form[role="search"].active')
	$form.find('input').val('');
	$form.removeClass('active');
	$('.navbar-form').show();
}

/********************************
Sliding Search Box
*********************************/

$('#searchBox').focus(function(){
	$('#searchBox').animate({
		//opacity: 0.25,
		width: '200px',
	}, 200);	
});
$('#searchBox').blur(function(){
	$('#searchBox').animate({
		//opacity: 0.25,
		width: '80px',
	}, 200);	
});
$('#searchBox').on('keyup', function(e) {
	if (e.which == 13) {
		e.preventDefault(); 
		$('#search').submit();
	}
});

/********************************
Top Search Bar
*********************************/

function topSearch() {
	var submitIcon = $('.searchbox-icon');
	var inputBox = $('.searchbox-input');
	var searchBox = $('.searchbox');
	var isOpen = false;
	submitIcon.click(function(){
		if(isOpen == false){
			searchBox.addClass('searchbox-open');
			inputBox.focus();
			isOpen = true;
		} else {
			searchBox.removeClass('searchbox-open');
			inputBox.focusout();
			isOpen = false;
		}
	});  
	submitIcon.mouseup(function(){
		return false;
	});
	searchBox.mouseup(function(){
		return false;
	});
	$(document).mouseup(function(){
		if(isOpen == true){
			$('.searchbox-icon').css('display','block');
			submitIcon.click();
		}
	});
}
function buttonUp(){
	var inputVal = $('.searchbox-input').val();
	inputVal = $.trim(inputVal).length;
	if( inputVal !== 0){
		$('.searchbox-icon').css('display','none');
	} else {
		$('.searchbox-input').val('');
		$('.searchbox-icon').css('display','block');
	}
}  

/********************************
Sticky Menu
*********************************/

/* Sticky Menu's Variables */

var headerHeight = $('.main-nav').outerHeight(),
	headerVisiblePos = 0,
	headerFixedPos = 0,
	isHeaderFixed = false,
	isHeaderVisible = false;

function stickyMenu(){
	if ($('.main-nav').hasClass('sticky')) {
		var headerY = $('.navigation').offset().top + 1;
		if ($('.main-nav').hasClass('extended')) {
			var headerHR = $('.main-nav').removeClass('shrink').height();
			$('.navigation').css('height',headerHR);
			headerFixedPos = headerY + headerHR;
		}
		else {
			$('.navigation').css('height',headerHeight);
			headerFixedPos = headerY + headerHeight;
		}
		headerVisiblePos = headerFixedPos + 20;
		if ($(window).scrollTop() > headerVisiblePos) {
				$('.main-nav').addClass('shrink slide-in')
				isHeaderFixed = true;
				isHeaderVisible = true;
		}
		window.addEventListener('scroll', function(e){
    		var winY = $(window).scrollTop();
			if((winY < headerFixedPos)&&(isHeaderFixed)){
				$('.main-nav').removeClass('shrink');
				isHeaderFixed = false;
				if (isHeaderVisible) {
					$('.main-nav').removeClass('slide-in');
					isHeaderVisible = false;
				}
			}
			 else if((winY > headerFixedPos)&&(!isHeaderFixed)){
				$('.main-nav').addClass('shrink');
				isHeaderFixed = true;
			}
			else if((winY > headerVisiblePos)&&(!isHeaderVisible)){
				$('.main-nav').addClass('slide-in');
				isHeaderVisible = true;
			}
			else if((winY > headerFixedPos)&&(winY < headerVisiblePos)&&(isHeaderVisible)){
				$('.main-nav').removeClass('slide-in')
				isHeaderVisible = false;
			}
		});
	}
}

/********************************
Fixed Footer
*********************************/

function fixedFooter() {
	var footerHeight = $('.uncover-footer').outerHeight();
	$('.footer-reveal').css('height',footerHeight + 'px');
}


/********************************
Centring Modal
*********************************/

function centerModal() {
	if ($(window).height() >= 320){
		adjustModal();
	}
}
function adjustModal(){
	$('.modal').each(function(){
		if($(this).hasClass('in') == false){
			$(this).show();
		};
		var contentHeight = $(window).height() - 60;
		var headerHeight = $(this).find('.modal-header').outerHeight() || 2;
		var footerHeight = $(this).find('.modal-footer').outerHeight() || 2;
		$(this).find('.modal-content').css({
			'max-height': function () {
				return contentHeight;
			}
		});
		$(this).find('.modal-body').css({
			'max-height': function () {
				return (contentHeight - (headerHeight + footerHeight));
			}
		});
		$(this).find('.modal-dialog').addClass('modal-dialog-center').css({
			'margin-top': function () {
				return -($(this).outerHeight() / 2);
			},
			'margin-left': function () {
				return -($(this).outerWidth() / 2);
			}
		});
		if($(this).hasClass('in') == false){
			$(this).hide();
		};
	});
};

/********************************
Floating Sidebar
*********************************/

/* Global Variables */

var isStickyElementFixed = false,
	stickyElementSetPoint = 0,
	stickyElementY = 0,
	screenWidth =  window.innerWidth,
	stickyElementDisabled = false,
	winScrollY = 0,
	stickyElementTop = 0;

function stickElement() {
	if (document.getElementById('stickyElement')) {
		var elementW = $('.stickyElement').width(),
			relElement = $('.stick-to-side').offset().top + $('.stick-to-side').height(),
			elementW = $('.stickyElement').width(),
			elementH = $('.stickyElement').parent().height(),
			stickyContainer = document.getElementById("sticky-container");
		stickyContainer.style.width = elementW + 'px';
		stickyElementY = $('.stickyElement').offset().top - 60;
		stickyElementSetPoint = relElement - elementH - 60;
		stickyElementTop = $('.stick-to-side').innerHeight() -elementH;
		if (screenWidth < 991) {
			$('.stickyElement').removeClass('stickTop');
			$('.stickyElement').removeAttr('style');
		}
		else if ($(window).scrollTop() > stickyElementSetPoint) {
			$('.stickyElement').removeAttr('style');	
			isStickyElementFixed = false;
		}
		window.addEventListener('scroll', function(e){
			winScrollY = $(window).scrollTop();
			if(screenWidth > 991) {
				if((winScrollY > stickyElementY) && (winScrollY<stickyElementSetPoint)){
					$('.stickyElement').addClass('stickTop');
					$('.stickyElement').removeAttr('style');
					isStickyElementFixed = false;
				}
				else if(winScrollY > stickyElementSetPoint && !isStickyElementFixed){
						$('.stickyElement').removeClass('stickTop');
						$('.stickyElement').attr('style','position:absolute; top:'+stickyElementTop+'px');
						isStickyElementFixed = true;
				}
				else if(winScrollY < stickyElementY){
					$('.stickyElement').removeClass('stickTop');
					isStickyElementFixed = false;
				}
			}
			else if ((screenWidth < 991) && (!stickyElementDisabled)) {
				$('.stickyElement').removeClass('stickTop');
				$('.stickyElement').removeAttr('style');
				stickyElementDisabled = true;
			}
		});
	}
}

/********************************
Jump Links
*********************************/

$('a[href*=#]:not([href=#]).jump').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 600);
			return false;
		}
	}
});
		
/********************************
One Page Menu
*********************************/

function onePageLinks () {
	if( $('body').hasClass('one-page-menu')){	
		$('body').scrollspy({
				offset: 100
		});
		var scrollActive = '';
		$('li a[href*=#]:not([href=#])').click(function() {
			if(scrollActive == true) {
				event.preventDefault();	
			}
			else {
				var firstSection = $(".section").first().attr('id'); 
				var thisLink = $(this).attr("href");
				var formatLink = thisLink.replace('#','');
				if( formatLink == firstSection) {
					var offset = 100;
				}
				else {
					var offset = 59;	
				}
				scrollActive = true;
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top - offset
						}, 600 , function() {
							scrollActive = false;
						});
						return false;
					}
				}
			}
		});
		
	}
	else if( $('body').hasClass('one-page-wo-offset')){	
		$('body').scrollspy({});
		var scrollActive = '';
		$('li a[href*=#]:not([href=#])').click(function() {
			if(scrollActive == true) {
				event.preventDefault();	
			}
			else {
				scrollActive = true;
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top
						},  600 , function() {
							scrollActive = false;
						});
						return false;
					}
				}
			}
	});
	}
}

/********************************
Full Screen Image
*********************************/

function fsImage() {
	if ($('body').hasClass('full-screen-image')) {
		var ht =  window.innerHeight;
		if ($('.full-screen-image').hasClass('full-screen-page')) {
			if($('page-content').outerHeight() > ht) {
				$('.intro-image').attr('style','height: auto');
			}
			else {
				$('.intro-image').attr('style','height: ' + ht + 'px');
			}
		}
		else {
			$('.intro-image').attr('style','height: ' + ht + 'px');
		}
	}
}

/********************************
Fixed Social Icons
*********************************/
function fixedSocialIcons () {
	var containerH = $('.social-fixed').outerHeight();
	var marginTop = containerH / 2;	
	$('.social-fixed').css('margin-top','-'+ marginTop + 'px');
	
}


/********************************
Bottom Contact Form & Scroll to Top
*********************************/

function bottomLinks () {
	if ($(document).scrollTop() > 100) {
		$('.to-top, .floating-contact, .floating-contact-panel').addClass('active');
	}
	$(window).scroll(function(){
		if ($(document).scrollTop() > 100) {
			$('.to-top, .floating-contact, .floating-contact-panel').addClass('active');
		} 
		else {
			$('.to-top, .floating-contact, .floating-contact-panel').removeClass('active');
		}
	});
	$(window).scroll(function(){
		if ($(document).scrollTop() > 100) {
			$('.to-top, .floating-contact, .floating-contact-panel').addClass('active');
		} 
		else {
			$('.to-top, .floating-contact, .floating-contact-panel').removeClass('active');
		}
		
	});
	$('.floating-contact').click(function(event){
		event.preventDefault();
		$('.floating-contact-panel').fadeToggle();
	});
	$(document).mouseup(function (e) {
		if(!$(e.target).closest('.bottomContactPanel').length) {
			if($('.bottomContactPanel').is(":visible")) {
				$('.bottomContactPanel').hide()
			}
		}
	});	 
	$('.to-top').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
}

/********************************
Split Screen
*********************************/

function multiScroll() {
	if(document.getElementById('split-screen')) {
		$('#split-screen').multiscroll({
			sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
			menu: '#menu',
			navigation: true,
			scrollingSpeed: 500,
			verticalCentered : true,
			loopBottom: true,
			loopTop: true,
		});
	}
}

function splitScreenImages() {
	if(document.getElementById('split-screen')) {
		if(window.innerWidth < 991) {
		   $( ".ms-section-right.ms-content" ).each(function(e) {
				var selector = $(this).attr('id');
				var baseDiv = document.getElementById(selector);
				var selectorID = selector.substr(selector.length - 1);
				var target = 'left'+ selectorID;
				var targetID = '#'+target;
				$(targetID).addClass('section-shifted');
				var targetDiv = document.getElementById(target);
				targetDiv.innerHTML = baseDiv.innerHTML;
		   });
		}
		else {
			$( ".ms-section-left" ).each(function(e) {
				if(!$(this).hasClass('ms-content')) {
					var selector = $(this).attr('id');
					var thisDiv = document.getElementById(selector);
					thisDiv.innerHTML = '';
				}
			});
		}
	}
}

/********************************
Promo Bar
*********************************/

$('.promo-bar a').click(function (e) {
	e.preventDefault();
	$('.promo-bar').slideUp('slow', function () {
		stickyMenu();	
	});
});


/********************************
Sliding Panel
*********************************/

$('.panel-trigger-button').click(function() {
	$('.sliding-panel .sliding-panel-content').slideToggle();
	$('.slide-panel').toggleClass('panel-close');
});

/********************************
# Links
*********************************/

$('a').click(function(e) {
	var link = $(this).attr('href');
	if(link == '#'){
		e.preventDefault();
	}
});

/********************************
Expandable Section
*********************************/

$('.expandable-section a.expansion-trigger').click(function(e){
	e.preventDefault();
	if($(this).hasClass('down')) {
		$('.section-expand').slideDown();
		$('.expandable-section a.expansion-trigger.down, .expandable-section .expansion-text.exp').hide();
		$('.expandable-section a.expansion-trigger.up, .expandable-section .expansion-text.cls').fadeIn();
	}
	else if($(this).hasClass('up')) {
		$('.section-expand').slideUp();
		$('.expandable-section a.expansion-trigger.up, .expandable-section .expansion-text.cls').hide();
		$('.expandable-section a.expansion-trigger.down, .expandable-section .expansion-text.exp').fadeIn();

	}
});

/********************************
Application Form - Conditional Fields
*********************************/

function ifEmployeed(val) { 
	var option = val.value;
	if (option == 'Value1') {
		$('#current-company').show();
		$('#current-desig').show();
		$('#current-work-duration').show();
	}
	else {
		$('#current-company').hide();
		$('#current-desig').hide();
		$('#current-work-duration').hide();
	}
}


/********************************
Calculating Today's Date
*********************************/

function dateToday () {
	if (document.getElementById('dateToday')) {
		var currentTime = new Date();
		var dayName = currentTime.getDay();
		var month = currentTime.getMonth() + 1;
		var day = currentTime.getDate();
		var year = currentTime.getFullYear();
		if (dayName == '0') {
			var dayToday = 'Sunday'
		}
		else if (dayName == '1') {
			var dayToday = 'Monday'
		}
		else if (dayName == '2') {
			var dayToday = 'Tuesday'
		}
		else if (dayName == '3') {
			var dayToday = 'Wednesday'
		}
		else if (dayName == '4') {
			var dayToday = 'Thursday'
		}
		else if (dayName == '5') {
			var dayToday = 'Friday'
		}
		else if (dayName == '6') {
			var dayToday = 'Saturday'
		}
		document.getElementById('dateToday').innerHTML = dayToday + "," + month + "/" + day + "/" + year	
	}
}
 
/********************************
Tooltips
*********************************/

function tooltip() {
	 $(".tip-top").tooltip({
        placement : 'top',
        container : 'body'
    });
    $(".tip-right").tooltip({
        placement : 'right',
        container : 'body'
    });
    $(".tip-bottom").tooltip({
        placement : 'bottom',
        container : 'body'
    });
    $(".tip-left").tooltip({
        placement : 'left',
        container : 'body'
    });	
}

/********************************
Default Google Map
*********************************/

function defaultMap() {
 	if(document.getElementById('location-map')) {
		var image = 'images/map-pin.png';
		var mapOptions = {
			center: new google.maps.LatLng(40.7903, -73.9597),
			zoom: 13,
			zoomControl:true,
			zoomControlOptions: {
			  style:google.maps.ZoomControlStyle.SMALL
			},
			panControl:false,
			mapTypeControl:false,
			scaleControl:false,
			streetViewControl:false,
			overviewMapControl:false,
			rotateControl:false,
			scrollwheel: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		   styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]
		};
		/*Plotting Map*/
		var map = new google.maps.Map(document.getElementById('location-map'), mapOptions);
		/*Setting Marker*/
		var mapMarker = new google.maps.Marker({
			position: map.getCenter(),
			map: map,
			icon: image
		});
	}
}

/********************************
Shop
*********************************/

/* Coupon Code */

$('a.coupon-trigger').click(function() {
	$('.inner.coupon-code').slideDown();
	$('.coupon-trigger').hide();
	$('.coupon-close').fadeIn();
});
$('.coupon-close').click(function() {
	$('.inner.coupon-code').slideUp();
	$('.coupon-close').hide();
	$('.coupon-trigger').fadeIn();
});

/* Quantity Buttons */

$('.qtyplus').click(function(e){
	e.preventDefault();
	fieldName = $(this).attr('field');
	var currentVal = parseInt($('input[name='+fieldName+']').val());
	if (currentVal == 24) {
		$('input[name='+fieldName+']').val(currentVal);
	}
	else if (!isNaN(currentVal) ) {
		$('input[name='+fieldName+']').val(currentVal + 1);
	} 
	else {
		$('input[name='+fieldName+']').val(0);
	}
});
$(".qtyminus").click(function(e) {
	e.preventDefault();
	fieldName = $(this).attr('field');
	var currentVal = parseInt($('input[name='+fieldName+']').val());
	if (!isNaN(currentVal) && currentVal > 0) {
		$('input[name='+fieldName+']').val(currentVal - 1);
	} else {
		$('input[name='+fieldName+']').val(0);
	}
});

/* Checkout Form - Conditional Fields */

$('input:checkbox[name=existingAddress]').click(function() {
	if ($(this).is(':checked')) {
		$("#addressForm :input").not('button').prop("disabled", true);
		$(this).prop("disabled", false);
	}
	else {
		$("#addressForm :input").prop("disabled", false);
	}
});
$('input:radio[name=paymentOptions]').click(function(){
	var val = $('input:radio[name=paymentOptions]:checked').val();
	if (val == 1) {
		$("#paymentForm :input").prop("disabled", false);
		$(".btn-card-type").removeAttr("style");	
	}
	else {
		$("#paymentForm :input").not('button').prop("disabled", true);
		$(".btn-card-type").attr("style","pointer-events: none; opacity:.65");
	}
});

/********************************
Owl Carousel
*********************************/

function owlC() {
	var carousel = $(".owl-carousel");
  	carousel.owlCarousel({
    	navigationText: [
      		"<i class='fa fa-chevron-left'></i>",
      		"<i class='fa fa-chevron-right'></i>"
      	],
  	});		
}

/********************************
Counters
*********************************/

function counters() {
	$('.counter').counterUp({
        delay: 10,
        time: 2333
    });	
}

/********************************
Isotope
*********************************/

function isotope() {
	if ( document.querySelector('body').offsetHeight > window.innerHeight ) {
		document.documentElement.style.overflowY = 'scroll';
	}
	var $container = $('.js-isotope');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});
	var $container2 = $('.filterArea');
	$container2.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});
	$('.filter a').click(function(){
		$('.filter .current').removeClass('current');
		$(this).addClass('current');
		var selector = $(this).attr('data-filter');
		$container2.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});
}

/********************************
Nivo Slider - Shop
*********************************/

function shopSlider() {
	if (document.getElementById('slider-shop')) {
		$('#slider-shop').nivoSlider({
			controlNavThumbs: true,
			manualAdvance:true,
			directionNav: false
		});
	}
}

/********************************
Nivo Lightbox
*********************************/

function nivoLightbox() {
	$('a').nivoLightbox();
}

/********************************
Initializing Wow.js
*********************************/

function wowInit() {
	var wow = new WOW({
    //disabled for mobile
    mobile: false
});
wow.init();
	
}

/********************************
Bootstrap Carousel
*********************************/

$('.carousel').carousel({
    interval: false
});

/********************************
Knobs
*********************************/

function knobs() {
	
	$('.dial').each(function () {

		var $this = $(this);
		
		var myVal = $this.attr("data-chart-value");
		
		// alert(myVal);
		$this.waypoint(function(){
		$this.knob({
			'format' : function (value) {
		return value + '%';
		},
		draw : function () {
			if(this.$.data('skin') == 'tron') {
				var a = this.angle(this.cv)
					, sa = this.startAngle 
					, sat = this.startAngle
					, ea                   
					, eat = sat + a        
					, r = true;
				this.g.lineWidth = this.lineWidth;
				this.o.cursor
					&& (sat = eat - 0.3)
					&& (eat = eat + 0.3);
				if (this.o.displayPrevious) {
					ea = this.startAngle + this.angle(this.value);
					this.o.cursor
						&& (sa = ea - 0.3)
						&& (ea = ea + 0.3);
					this.g.beginPath();
					this.g.strokeStyle = this.previousColor;
					this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
					this.g.stroke();
				}
				this.g.beginPath();
				this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
				this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
				this.g.stroke();
				this.g.lineWidth = 2;
				this.g.beginPath();
				this.g.strokeStyle = this.o.fgColor;
				this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
				this.g.stroke();
				return false;
			}
		}
		});
		
			$({
				value: 0 
			}).animate({
				value: myVal
			}, {
			   duration: 1600,
			   easing: 'swing',
			   step: function () {
				   $this.val(Math.ceil(this.value)).trigger('change');
				   $this.val(Math.ceil(this.value)).trigger('change');
				}
			});   
		}, {
			 triggerOnce: true,
			offset: '110%'
		});	 
	});
}

/********************************
Progress Bars
*********************************/

function progressBarsOnView() {
	$('div.progress-bar').waypoint(function(){
		   $(this).css('width', $(this).attr('aria-valuetransitiongoal')+'%');
    }, {
    	offset: '100%'
	});	
}

/********************************
News Carousel
*********************************/

function newsCarousel() {
	if (document.getElementById('example')) {
		$('#example').vTicker();
	}
}


/********************************
CountDown
*********************************/

function countDown() {
	if(document.getElementById('countdown')){
		$('#countdown').countdown('2015/04/01', function(event) { 
			var $this = $(this).html(event.strftime(''
			+ '<span class="ticker-1">%D<br/>Days</span> '
			 + '<span class="ticker-2">%H<br/>Hours</span> '
			 + '<span class="ticker-3">%M<br/>Min</span> '
			+ '<span class="ticker-4">%S<br/>Sec</span>'));
		});
	}
}

/********************************
Widgets
*********************************/

/* Recent Tweets */

function tweets () {
	if (document.getElementById('recentTweets')) {
		!function(d,s,id){
			var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
			if(!d.getElementById(id)){
				js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
				fjs.parentNode.insertBefore(js,fjs);
			}
		}(document,"script","twitter-wjs");
	}
}

/* Dribble Shots */

function dribbleShots () {
	if (document.getElementById('shotsByPlayerId')) {
		var callback = function (playerShots) {
			var html = '';
			$.each(playerShots.shots, function (i, shot) {
				html += '<a target="_blank" href="' + shot.url + '">';
				html += '<img src="' + shot.image_url + '" ';
				html += 'alt="' + shot.title + '"></a>';
			});
			$('#shotsByPlayerId').html(html);
		};
		$.jribbble.getShotsByPlayerId('envato', callback, {page: 1, per_page: 15});
	}
}

/* Instragram Feed */

function instagramFeed () {
	if (document.getElementById('widget-instagram')) {
		var userFeed = new Instafeed({
			get: 'user',
			userId: 1555075289,
			useHttp: true,
			limit: 5,
			target: 'widget-instagram',
			accessToken: '1555075289.467ede5.0823625835fb4e89a5b1e87ed826d847',
			template: '<a target="_blank" href="{{link}}"><img src="{{image}}" /></a>'
		});
		userFeed.run();
	}
}

/* Flickr Thumbnails */

function flickrThumbnails () {
	$('.flickr_badge_image a').attr('target','_blank')
}

/********************************
Function Calls
*********************************/

var $win = $(window);

$win.on('resize', function() {
    
	/* Resetting Vaiables */
	
	isStickyElementFixed = false;
	winScrollY = 0;
    stickyElementSetPoint = 0;
	stickyElementY = 0;
	screenWidth =  window.innerWidth;
	winScrollY = 0;
	stickyElementTop = 0;
	stickyElementDisabled = false;
	headerVisiblePos = 0;
	headerFixedPos = 0;
	isHeaderFixed = false;
	isHeaderVisible = false;
	
	fsImage();
	
	menu();
	
	onePageLinks();
	
	centerModal();
	
	setTimeout(stickElement, 1000)
	
	stickyMenu();
	
	fixedFooter();
	
	splitScreenImages();
	
}).resize();

$win.on('load', function() {
	
	menuEvents();
	
	headerSearch();
	
	topSearch();
	
	onePageLinks();	
	
	dateToday();
	
	bottomLinks();
	
	knobs();
	
	countDown();
	
	progressBarsOnView();
	
	owlC();
	
	isotope();
	
	counters();
	
	wowInit();
	
	shopSlider();
	
	nivoLightbox();
	
	newsCarousel();
	
	tooltip();
	
	fixedSocialIcons();
	
	flickrThumbnails();
	
	multiScroll();
	
	tweets();
	
	instagramFeed();
	
	dribbleShots();
	
	defaultMap();
	
	/* Auto Popup */
	
	$('.modal.auto').modal('show');
	
	/* Page Loader */
	
	$(".loader").fadeOut("slow");
	
});