// jQuery Document
$(function(){
	'use strict';
	$('head').append('<style>body{display:none;}');
});
// jQuery(function(){});
// jQuery(document).ready(function(){});
// $(document).ready(function(){});
// $(window).on('load',function(){});
// $(window).load(function(){});

// document.addEventListener('DOMContentLoaded', function(){}, false);
// window.addEventListener('DOMContentLoaded', function(){}, false);
// window.addEventListener('load', function() {});
window.onload = function(){
   'use strict';
	$('body').delay(0).fadeIn(2000);
	
	//Judge a width of window size when page was loaded
	reassemble();
	
	//Judge a width of window size when page was resize
	$(window).resize(function(){ reassemble(); });
	
	var timer = false;
	function reassemble(){
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			var w = $(window).width();
			var x = 1199;
			if (w <= x) {
				$('#form-inline').after($('#list-group'),$('#card-body'),$('#card-img-top'),$('#Navbar_bottom'));
			} else {
				$('#card-img-top').after($('#card-body'),$('#list-group'),$('#form-inline'));
				$('nav').after($('#Navbar_bottom'));
				$('#Navbar_bottom').append($('#btnSNS'),$('#bbc'));
			}
		}, 10);
	}
	
	//scroll to top
	$(function() {
		var topBtn = $('#page-top');    
		topBtn.hide();
		//display a buton when scroll reached 500
		$(window).scroll(function () {
			if ($(this).scrollTop() > 500) {
				topBtn.fadeIn();
			} else {
				topBtn.fadeOut();
			}
		});
		//scroll stop
		topBtn.click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	});
};
	