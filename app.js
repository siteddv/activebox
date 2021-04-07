$(function () {

   let header = $("#header");
   let intro = $("#intro");
   let introHeight = intro.innerHeight();
   let scrollPos = $(window).scrollTop();

   $(window).on("scroll", function () {

      scrollPos = $(this).scrollTop();

      if (scrollPos > introHeight / 10) {
         header.addClass("fixed");
      } else {
         header.removeClass("fixed");
      }

   });

   header.addClass("fixed");

});