(function($) {
    $(document).ready(function() {
        (function() {
           var nav = $('.nav');

           function categoryToggle(e) {
               var header = $('.header');
               if(header.hasClass('on') === false) {
                   header.addClass('on');
                   nav.show(0);
               } else {
                   header.removeClass('on');
                   nav.hide(0);
               }
               e.preventDefault();
           }

           var _opener = $('.sitemap_btn')

           _opener.on('click', categoryToggle);
       }());
       (function() {
			$('#topBtn').click(function(e) {
				$('html, body').stop().animate({scrollTop: 0}, 200);
				e.preventDefault();
			});
		}());
    });
}(jQuery));
