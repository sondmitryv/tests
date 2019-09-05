'use strict';

$(document).ready(function () {
    $('.js-mobile-menu-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.js-mobile-sidebar').toggleClass('active');
    });
});