'use strict';

var codetalk = (function ($) {

    var indexPostClass = '.codetalkindex-post',
        mobileMenuButton = '.codetalkmobile-menu a',
        mobileMenuCloseButton = '.codetalkmobile-close-btn',
        mainMenu = '.codetalkmenu',
        bgCheckClass = '.bg-check',
        postBgImages = '.bg-img img',
        postCoverImg = '.codetalkpost-header .bg-img',

    // post animations on homepage
    indexPostAnimate = function () {
        if ($(indexPostClass).length) {
            $(indexPostClass).each(function () {
            var postPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop(),
                windowHeight = $(window).height();
                if (postPos < topOfWindow + (windowHeight/ 1.2)) {
                    $(this).addClass('fadeInDown');
                }
            });
        }
    },

    mobileMenu = function () {
        if($(mainMenu).length) {
            $(mobileMenuButton).on('click', function(e){
                e.preventDefault();
                $(mainMenu).addClass('opened');
            });
            $(mobileMenuCloseButton).on('click', function(e){
                e.preventDefault();
                $(mainMenu).removeClass('opened');
            });
        }
    },

    headerTitlesBackgroundCheck = function () {
        if ($(bgCheckClass).length && $(postBgImages).length) {
            BackgroundCheck.init({
                targets: bgCheckClass,
                images: postBgImages
            });
        }
    },

    postHeaderCoverImg = function () {
        var coverImage = $('[alt=cover-image]');
        if (coverImage.length) {
            $(postCoverImg).append('<img src="' + coverImage.attr('src') + '">');
            coverImage.remove();
        }
    },

    // codetalk javascripts initialization
    init = function () {
        indexPostAnimate();
        $(window).on('scroll', function() {
            indexPostAnimate();
        });
        postHeaderCoverImg();
        mobileMenu();
        headerTitlesBackgroundCheck();
        $('p:has(> img)').addClass('with-image');
    };

    return {
        init: init
    };

})(jQuery);

(function () {
    codetalk.init();
})();
