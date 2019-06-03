(function ($) {
   $('.btn-default').on('click', function (e) {
      e.preventDefault();
      var obj = $(this);

      obj.addClass('active');

      setTimeout(function () {
         obj.removeClass('active');
      }, 1500);

      // Load Boats
      if (obj.hasClass('btn-load-boats')) {
         if (!$('.load-boats-box').hasClass('open')) {
            $('.load-boats-box').slideToggle(1000);
            setTimeout(function () {
               $('.load-boats-box').addClass('open');
            }, 700);
         }
      }

      // Load Boats
      if (obj.hasClass('btn-load-destination')) {
         if (!$('.load-destinations-box').hasClass('open')) {
            $('.load-destinations-box').slideToggle(1000);
            setTimeout(function () {
               $('.load-destinations-box').addClass('open');
            }, 700);
         }
      }
   });

   // Fade In Page
   $(document).ready(function () {
      setTimeout(function () {
         $('body').addClass('dom-ready');
      }, 300);
   });

   //soft scroll to ankor
   $(document).ready(function () {
      $("#cats").on("click", "a", function (event) {
         event.preventDefault();
         var id = $(this).attr('href'),
            top = $(id).offset().top - 85;
         $('body,html').animate({ scrollTop: top }, 1000);
      });
   });

   //soft scroll to top via click on toTop link
   $(document).ready(function () {
      var url = window.location.href;
      var topCoords = $("#top").offset();
      var parallaxBoxCoords = $('.parallax-box').offset();
      var parallaxBoxHeight = $('.parallax-box').height();

      if (url.match(/index.html+$/) !== null) {
         $(window).scroll(function () {
            if ($(this).scrollTop() > 500 || $(this).scrollTop() > parallaxBoxCoords.top + parallaxBoxHeight*2) {
               $("#toTop").addClass("back_to_top-show");
            }
            if ($(this).scrollTop() < 500 || ($(this).scrollTop() > parallaxBoxCoords.top - 40 && $(this).scrollTop() < parallaxBoxCoords.top + parallaxBoxHeight*2)) {
               $("#toTop").removeClass("back_to_top-show");
            }
         });
      } else {
         $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
               $("#toTop").addClass("back_to_top-show");
            }
            if ($(this).scrollTop() < 500) {
               $("#toTop").removeClass("back_to_top-show");
            }
         });
      }

      $("#toTop").on("click", function (event) {
         event.preventDefault();
         $("body,html").animate({ scrollTop: topCoords.top }, 800);
      });
   });

})(jQuery);
