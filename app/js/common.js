$(document).ready(function() {

	new WOW().init();


	$('#about .section__title').addClass("slideInRight wow ");
	$('#about .section__text').addClass("slideInRight wow ");
	$('.section__title, .section__desc').addClass("fadeInDown wow ");
	$('.left-item').addClass("fadeInLeft wow");
	$('.right-item').addClass("fadeInRight wow");
	$('.center-item').addClass("fadeInDown wow");
	$('.citate').addClass("flipInX wow");
	$('#team .section-item').addClass("fadeInUp wow");

	//слайдер фона хедера сайта
	$('#bg1').click(function() {
		$(".dotnav .active").removeClass("active");
		$(this).addClass("active");
		$('.header').css("background-image", "url(../img/header/header-bg1.jpg)");
	});
	$('#bg2').click(function() {
		$(".dotnav .active").removeClass("active");
		$(this).addClass("active");
		$('.header').css("background-image", "url(../img/header/header-bg2.jpg)");
	});
	$('#bg3').click(function() {
		$(".dotnav .active").removeClass("active");
		$(this).addClass("active");
		$('.header').css("background-image", "url(../img/header/header-bg3.jpg)");
	});
	$('#bg4').click(function() {
		$(".dotnav .active").removeClass("active");
		$(this).addClass("active");
		$('.header').css("background-image", "url(../img/header/header-bg4.jpg)");
	});
	//мобильное меню
	$('.mob-menu').click(function() {
		$('.mobnav').fadeToggle();
	});
	//карусель
	$("#owl-1, #owl-2").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 6,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });

	//плавный переход по якорю
	$("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	//Check
	console.log('Done!');



	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//jquery.matchHeight.js
	//Docs: https://github.com/liabru/jquery-match-height
	$('element').matchHeight();

	//BPopUp windows
	//Docs: http://dinbror.dk/bpopup/
	$('.element_to_pop_up').bPopup();

	//AJAX forms send
	//Docs: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	
});