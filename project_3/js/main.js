'use strict';

$(document).ready(function () {
  /* init intro slider */
  var sliderIntro = $('.js-slick-intro');
  var sliderProduct = $('.js-product-slider');
  sliderIntro.on('init', function (event, slick) {
    $(this).addClass('init');
  });

  sliderIntro.slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
  }).on("afterChange", function (e, slick) {
    if (slick.currentSlide > 2) {
      sliderIntro.slick("setOption", "autoplaySpeed", 4000);
    } else {
      sliderIntro.slick("setOption", "autoplaySpeed", 4000);
    }
  });

  /* init product slider */
  $('.js-product-slider ').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
  }).on("afterChange", function (e, slick) {
    if (slick.currentSlide > 2) {
      sliderProduct.slick("setOption", "autoplaySpeed", 4000);
    } else {
      sliderProduct.slick("setOption", "autoplaySpeed", 4000);
    }
  });
  //block menu scroll
  var lastId,
      topMenu = $(".nav-menu"),
      topMenuHeight = topMenu.outerHeight() + 15;
  // All list items
  var menuItems = topMenu.find(".nav-menu__link");
  // Anchors corresponding to menu items
  var scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });
  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    console.log(offsetTop);
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 300);
    e.preventDefault();
  });
  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });

  /* form validation */
  var formItem = $('.js-contact-form');
  function validForm() {
    var formValid = true;
    var fields = $('.js-popup-row').val();
    var checkItem = $('.js-check').prop("checked");
    formItem.find(".js-popup-row").each(function () {
      if ($(this).val() != '') {
        $(this).removeClass('error');
      } else {
        $(this).addClass('error');
        formValid = false;
      }
      if (!checkItem) {
        $('.js-check-label').addClass('error');
        formValid = false;
      } else {
        $('.js-check-label').removeClass('error');
      }
    });
    return formValid;
  }

  formItem.on('submit', function () {
    if (!validForm()) {
      event.preventDefault();
    }
  });
});
/* google maps init */
var map;
function initMap() {
  map = new google.maps.Map(document.querySelector('.js-footer-map'), {
    center: { lat: 48.7388106, lng: 37.5846923 },
    zoom: 8
  });
  var marker;
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(48.7388106, 37.5846923),
    map: map
  });
}