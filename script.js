$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('h1').css({
		'transform' : 'translate(0,'+ wScroll +'%)'
	});

	$('.kotak').css({
		'transform' : 'translate(0,'+ wScroll/10 +'%)'
	})
});

