$(document).ready(function () {
  $(".hero_slider_items").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    autoplay: true,
    dots: true,
  });
  $(".express_items_wrap").owlCarousel({
    loop: true,
    items: 7,
    margin: 15,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 4,
        nav: true,
      },
      575: {
        items: 5,
        nav: true,
      },
      768: {
        items: 6,
        nav: true,
      },
      992: {
        items: 6,
        nav: true,
        loop: false,
      },
      1100: {
        items: 7,
        nav: true,
        loop: false,
      },
      1200: {
        items: 8,
        nav: true,
        loop: false,
      },
      1320: {
        items: 8,
        nav: true,
        loop: false,
      },
    },
  });
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $(".header-main-area").removeClass("scroll-header");
    } else {
      $(".header-main-area").addClass("scroll-header");
    }
  });
  $(".category_btn").click(function () {
    $(".main_navbar_wrap").animate({
      width: "toggle",
    });
  });
  var boxWidth = $(".box").width();
  $(".responsive_toggle_btn").click(function () {
    $(".main_navbar_wrap").animate({
      width: "toggle",
    });
  });
  var boxWidth = $(".box").width();
  $(".navbar_toggle_bg").click(function () {
    $(".main_navbar_wrap").animate({
      width: "toggle",
    });
  });

  $(".header_right_toggle_btn").click(function () {
    $(".header_bottom_navbar_right").fadeToggle("slow");
  });

  // ===========

  $(".shop_cart_wrap").click(function () {
    $(".main_cart_wrap").animate({
      width: "toggle",
    });
  });
  $(".cart_toggle_bg").click(function () {
    $(".main_cart_wrap").animate({
      width: "toggle",
    });
  });
  $(".cart_hide_btn").click(function () {
    $(".main_cart_wrap").animate({
      width: "toggle",
    });
  });

  $(function () {
    $(".sp-wrap").smoothproducts();
  });

  function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
  }

  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
  }
});
