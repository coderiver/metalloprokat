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
		$('.overlay').hide();
		$('body').removeClass('no-scroll');
	});

	$('.popup__close').on('click', function(){
		$(this).parent().removeClass('is-open');
		$('.overlay').hide();
		$('body').removeClass('no-scroll');
	});
	
	$('.js-call').on('click', function(){
		$('.overlay').show();
		$('.popup_feedback').addClass('is-open');
		$('body').addClass('no-scroll');
		return false;
	});

	$('.js-order').on('click', function(){
		$('.overlay').show();
		$('.popup_order').addClass('is-open');
		$('body').addClass('no-scroll');
		return false;
	});

	$('.js-vacancy').on('click', function(){
		$('.overlay').show();
		$('.popup_vacancy').addClass('is-open');
		$('body').addClass('no-scroll');
		return false;
	});

// validation
	var form_validate = $('.js-validate');
	if (form_validate.length) {
		form_validate.each(function () {
			var form_this = $(this);
			$.validate({
				form : form_this
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
          controls: []
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

});