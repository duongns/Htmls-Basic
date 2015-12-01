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
//TABS
    $('#tabbed').each(function(){
        $(this).find('.tab-title li:first').addClass('current');
        $(this).find('.tab-content').not(":first").hide();
        $('.tab-title a').click(function(event) {
            event.preventDefault();
            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current");

            var tab = $(this).attr("href");
            $(this).parentsUntil('#tabbed').siblings(".tab-content").hide();
            $(tab).show();
        });
    });

    $('input.deletable').wrap('<span class="deleteicon" />').after($('<span/>').click(function() {
        $(this).prev('input').val('').focus();
    }));


	$('.popup-input label').click(function () {
		$(this).siblings('.pi-hidden').show();
		$('body').css('overflow', 'hidden');
	});
	$('.pi-close').click(function () {
		$('.pi-hidden').hide();
		$('body').css('overflow', 'auto');
	});
});
