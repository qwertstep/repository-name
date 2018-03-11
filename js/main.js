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
	var timer = false;
	changeSize();
	$('body').delay(0).fadeIn(2000);
	
	$(window).resize(function(){ changeSize(); });
	
	function changeSize(){
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
};
	