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

// Back top top
	$('a.back-to-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
});
