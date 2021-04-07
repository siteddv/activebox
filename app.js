$(function () {

   // Fixed header
   let header = $("#header");
   let intro = $("#intro");
   let introHeight = intro.innerHeight();
   let scrollPos = $(window).scrollTop();

   checkScroll(scrollPos, introHeight);

   $(window).on("scroll resize", function () {

      introHeight = intro.innerHeight();
      scrollPos = $(this).scrollTop();

      checkScroll(scrollPos, introHeight);

   });

   function checkScroll(scrollPos, introHeight) {
      if (scrollPos > introHeight / 10) {
         header.addClass("fixed");
      } else {
         header.removeClass("fixed");
      }
   }

   // Smooth scroll
   $("[data-scroll]").on("click", function (event) {
      event.preventDefault();

      let elementId = $(this).data('scroll');

      let elementOffset = $(elementId).offset().top;

      let headerHeight = $("#header").height();

      nav.toggleClass("show");

      $("html, body").animate({
         scrollTop: elementOffset - headerHeight
      }, 600);

   });

   // Nav toggle
   let nav = $("nav");
   $("#navToggle").on("click", function (event) {
      event.preventDefault();

      nav = $("nav");
      nav.toggleClass("show");
   });


});