(function($) {
  'use strict';

  // TV Category navigation
  $('.category-navigation .nav-trigger').click(function() {
    $(this).toggleClass("nav-trigger-open");
    $(this).next("ul").slideToggle(100);
    return false;
  });

  // Featured video
  var $owl = $(".featured-videos-carousel");

  $owl.owlCarousel({
    items:1,
    loop: $('.featured-videos-carousel .featured-video').size() > 1 ? true:false,
    autoplay:true,
    margin:20,
    nav:$('.featured-videos-carousel .featured-video').size() > 1 ? true:false,
    dots:$('.featured-videos-carousel .featured-video').size() > 1 ? true:false,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    autoHeight:true
  });

  $owl.on('resized.owl.carousel', function(event) {
    var $this = $(this);
    $this.find('.owl-height').css('height', $this.find('.owl-item.active').height() );
  })

})(jQuery);
