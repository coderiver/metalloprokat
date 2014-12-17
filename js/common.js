head.ready(function() {

	setTimeout(function(){
		$('.title').addClass('is-loaded');
	}, 400);
	setTimeout(function(){
		$('.topper .preview').addClass('is-loaded');
	}, 700);
	

	

// popups

	$('.overlay i').on('click', function(){
		$('.popup').removeClass('is-open');

		// setTimeout(function(){
		// 	$('.overlay').removeClass('is-visible');
		// 	$('body').removeClass('no-scroll');
		// }, 300);
		$('.overlay').removeClass('is-visible');
		$('body').removeClass('no-scroll');
		setTimeout(function(){
			$('.overlay').removeClass('is-shown');
		}, 300);
	});

	$('.popup__close').on('click', function(){
		$(this).parent().removeClass('is-open');
		$('.overlay').removeClass('is-visible');
		$('body').removeClass('no-scroll');
	});
	
	$('.js-call').on('click', function(){

		$('.popup-feedback').addClass('is-shown');
		$('body').addClass('no-scroll');

		setTimeout(function(){
			$('.popup-feedback').addClass('is-visible');
			$('.popup_feedback').addClass('is-open');
		}, 100);
		
		
		return false;
	});

	$('.js-order').on('click', function(){

		$('.popup-order').addClass('is-shown');
		$('body').addClass('no-scroll');

		setTimeout(function(){
			$('.popup-order').addClass('is-visible');
			$('.popup_order').addClass('is-open');
		}, 100);
		return false;
	});

	$('.js-vacancy').on('click', function(){
		$('.popup-vacancy').addClass('is-shown');
		$('body').addClass('no-scroll');

		setTimeout(function(){
			$('.popup-vacancy').addClass('is-visible');
			$('.popup_vacancy').addClass('is-open');
		}, 100);
		return false;
	});

// validation
	var form_validate = $('.js-validate');
	if (form_validate.length) {
		form_validate.each(function () {
			var form_this = $(this);
			$.validate({
				form : form_this,
 focusInvalid:false
				// @TODO Google: validation dont scroll to mistake
			});
		});
	};

// accordeon
	
	if ($('.js-accordeon').length) {
		function accordeon(){
			var item = $('.vacancy__content'),
				title = $('.vacancy__title');

			title.on('click', function(){
				if (!$(this).hasClass('is-open')) {
					title.removeClass('is-open');
					item.slideUp();
					$(this).addClass('is-open').next().slideDown();
				}	
				else{
					title.removeClass('is-open');
					item.slideUp();
				}
			});	

		}
		accordeon();
	};

// fancybox

	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
		padding: 0
	});	

// submenu

	$('.nav__item').hover(
		function(){
			$(this).find('.dropdown').addClass('is-open');
			$(this).find('.nav__link').addClass('is-open');
		},
		function(){
			$(this).find('.dropdown').removeClass('is-open');
			$(this).find('.nav__link').removeClass('is-open');
		}
	)

// tabs
	
	function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_item = $(this).find("li");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         tab_item.first().addClass("is-active");
         $(this).parents(".js-tab-group").find(".js-tab1").show();
         tab_link.on("click", function() {
             var index = $(this).attr("href");
             tab_item.removeClass("is-active");
             $(this).parent().addClass("is-active");
             tab_cont.hide();
             $(this).parents(".js-tab-group").find("."+index).show();
             if ($(this).parents(".js-tab-group").find("."+index).find('.js-scroll').length) {
             	$(this).parents(".js-tab-group").find("."+index).find('.js-scroll').jScrollPane();
             }
             return false;
          });
       });
  	}
  	tab();

 // scrollpane
 
 	$('.js-scroll').each(function(){
		$(this).jScrollPane();
		var api = $(this).data('jsp');
		var throttleTimeout;

		$(window).resize(function(){
			if (!throttleTimeout) {
				throttleTimeout = setTimeout(
					function()
					{
						api.reinitialise();
						throttleTimeout = null;
					},
					50
				);
			}
		});
	});

// map
	
  if ($('.map').length) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('YMapsID', {
          center: [55.840975, 37.487421],
          zoom: 16,
          controls: ['zoomControl'] 
      });
     // Создаем метку с помощью вспомогательного класса.
        myPlacemark1 = new ymaps.Placemark([55.840975, 37.487421], {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            balloonContent: 'Балун',
            hintContent: 'г. Москва, ул. Кронштадтский бул., 7'
        }, {
            // Опции.
            // Стандартная фиолетовая иконка.
            preset: 'twirl#violetIcon'
        });

     myMap.geoObjects.add(myPlacemark1)

    });
  };	

   $(window).on('scroll mousewheel',function(e){
   	var st = $(this).scrollTop();
   	if(st>37){
   		$('body').addClass("is-fixedheader");
   	}
   	else{
   		$('body').removeClass("is-fixedheader");
   	}
   	if($('.sidebar').length>0){
	   	if(st>$('.sidebar').offset().top - 46){
	   		$('body').addClass("is-fixedsidebar");
	   	}
	   	else{
	   		$('body').removeClass("is-fixedsidebar");
	   	}
   	}

   	if($('.product__fixme').length>0){
	   	if(st>$('.product__left').offset().top - 146){
	   		$('body').addClass("is-fixed-product");
	   	}
	   	else{
	   		$('body').removeClass("is-fixed-product");
	   	}
   	}



   	
   	if(st>$('.delivery').offset().top - 350){
   		$('body').addClass("is-fixedsidebar-hidden");
   	}
   	else{
   		$('body').removeClass("is-fixedsidebar-hidden");
   	}
   });

  $(window).on('scroll mousewheel',function(e){
      var st = $(this).scrollTop()  
      , min_fade = 0
      , max_fade = 0.4
      , fade_height = 320
      , fade_step = max_fade / fade_height
      , current_fade = fade_step * st
     
      $('.js-menu-shadow').css({opacity: current_fade })

    }) 

  // sizing
  $('.s__top tr:last-child th').each(function(index, el) {
  	console.log($(this).width());
  	$('.s__bottom td').eq(index).width($(this).width());
  });

});