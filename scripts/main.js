$(window).load(function() {
	function setMainMinHeight() {
		var minMainHeight = $( window ).height() - $('#header').outerHeight(true) - $('#footer').outerHeight(true);	
		$('#main').css('min-height', minMainHeight);
	}	
	setMainMinHeight();
	$(window).resize(function() {
		setMainMinHeight();
	});
});

jQuery(document).ready(function($) {
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();
	$(window).scroll(function(event) {
	    "use strict";
	    didScroll = true;
	});
	setInterval(function() {
	    "use strict";
	    if (didScroll) {
		hasScrolled();
		didScroll = false;
	    }
	}, 150);
	function hasScrolled() {
	    var st = $(this).scrollTop();
	    if (Math.abs(lastScrollTop - st) <= delta)
		return;
	    if (st > lastScrollTop && st > navbarHeight) {
		$('header').removeClass('nav-down').addClass('nav-up');
	    } else {
		if (st + $(window).height() < $(document).height()) {
		    $('header').removeClass('nav-up').addClass('nav-down');
		}
	    }
	    lastScrollTop = st;
	}
	
// Tabbed
    $('.tabbed').each(function(){
       $(function(){
	  var tabtitle = $('.tab-title a'),
	      tabcontent = $('.tab-content');
	  
	  tabtitle.on("click", function(event){
	    event.preventDefault();
	    var $this = $(this);
	    
	    if (!$this.hasClass("active")) {
	      tabtitle.removeClass("active");
	      $this.addClass("active");
	      tabcontent.hide().filter(this.hash).show();
	    }
	  });
	  tabtitle.first().click();
	});
    });

    $('input.deletable').wrap('<span class="deleteicon" />').after($('<span/>').click(function() {
        $(this).prev('input').val('').focus();
    }));

// Back to top
	$('a.back-to-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
});
