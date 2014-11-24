head.ready(function() {

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


});