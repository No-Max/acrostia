    $(document).on('ready', function() {

      $(".slider-home").slick({
        dots:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        prevArrow: '<a data-role="none" class="slide-prev" tabindex="0" role="button"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
        nextArrow: '<a data-role="none" class="slide-next" tabindex="0" role="button"><i class="fa fa-angle-right" aria-hidden="true"></i></a>'

      });
      $(".service-list").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            prevArrow: '<a data-role="none" class="slide-prev" tabindex="0" role="button"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
            nextArrow: '<a data-role="none" class="slide-next" tabindex="0" role="button"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',

          }
        },
        {
          breakpoint: 900,
          settings: {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            prevArrow: '<a data-role="none" class="slide-prev" tabindex="0" role="button"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
            nextArrow: '<a data-role="none" class="slide-next" tabindex="0" role="button"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',

          }
        },
        {
          breakpoint: 1200,
          settings: {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            prevArrow: '<a data-role="none" class="slide-prev" tabindex="0" role="button"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
            nextArrow: '<a data-role="none" class="slide-next" tabindex="0" role="button"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',

          }
        }
        ]

      });
      $(".about-list").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            prevArrow: '<a data-role="none" class="slide-prev" tabindex="0" role="button"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
            nextArrow: '<a data-role="none" class="slide-next" tabindex="0" role="button"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',

          }
        },
        {
          breakpoint: 900,
          settings: {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            prevArrow: '<a data-role="none" class="slide-prev" tabindex="0" role="button"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
            nextArrow: '<a data-role="none" class="slide-next" tabindex="0" role="button"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',

          }
        },
        {
          breakpoint: 1200,
          settings: {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            prevArrow: '<a data-role="none" class="slide-prev" tabindex="0" role="button"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
            nextArrow: '<a data-role="none" class="slide-next" tabindex="0" role="button"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',

          }
        }
        ]

      });
      $('.portfolio-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.portfolio-nav'
      });
      $('.portfolio-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.portfolio-slider',
        dots: false,
        useTransform: false,
        focusOnSelect: true
      });
      $('#onfocus').focus();//
      var h_hght = 
        $(".nav-container").offset().top; // высота до начала страницы
      var h_mrg = 0;// отступ до начала страницы
      $(function(){
        $(window).scroll(function(){
          var top = $(this).scrollTop();
          var elem = $('.nav-container');
          if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
          } else {
            elem.css('top', h_mrg);
          }
      });
    });
      
 });

