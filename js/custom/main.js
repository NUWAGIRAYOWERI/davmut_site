/**
 * Created by themeforseo on 5/5/2016.
 */

(function ($) {
  "use strict";

  var wrapper_popup = $(".wrapper-popup");
  var bg_popup = $(".bg-popup");
  var popup_content = $(".popup-content");
  var overflow_body = $("body");

  $("a,div").on("click", function () {
    if ($(this).hasClass("galery-item")) {
      wrapper_popup.addClass("ready-popup");
      bg_popup.addClass("ready-popup");
      overflow_body.addClass("overflow-body");

      // add content in popup
      var galery_content = $(this).find(".box-content-item").html();
      popup_content.html(galery_content);
    } else if ($(this).hasClass("close-popup")) {
      wrapper_popup.removeClass("ready-popup");
      bg_popup.removeClass("ready-popup");
      overflow_body.removeClass("overflow-body");
    }
  });

  /*----------------------------
  One Columns Slider
  ------------------------------ */
  $(".columns1").owlCarousel({
    loop: true,
    autoPlay: true,
    items: 1,
    margin: 0,
    singleItem: true,
    autoplayTimeout: 500,
    items: 1, // Display one slide at a time
    loop: true, // Enable infinite loop
    autoplay: true, // Enable autoplay
    autoplayTimeout: 2000, // Set autoplay interval (5 seconds)
    // autoplayHoverPause: true, // Pause on hover
    animateIn: "slideInRight", // Add CSS animation class for slides
    animateOut: "slideOutLeft", // Add CSS animation class for slides
    nav: false, // Enable navigation buttons
    dots: true, // Enable dots
    navText: ["<", ">"], // Custom navigation text-
  });

  //mobile menu
  jQuery(".menu nav").meanmenu();

  //init newsletter parallax
  $(".newsletter-parallax").parallax({
    imageSrc: "http://sayidan_h1.kenzap.com/images/bg-newsletter.jpg",
  });

  //waypoints animation on scroll
  $(".footer-wrapper").waypoint(
    function () {
      $(".footer-col").addClass("fadeIn");
    },
    { offset: "100%" }
  );
})(jQuery);

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }

  if (event.keyCode == 123) {
    event.preventDefault();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }

  if (event.keyCode == 123) {
    event.preventDefault();
  }
});

document.addEventListener(
  "contextmenu",

  (event) => event.preventDefault()
);
