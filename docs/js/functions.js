$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  var jumpIn  = $('header').height();
  var jumpOut = $('#docs-cta').offset().top - wScroll - $(this).height() + 200;
  if (wScroll >= jumpIn && jumpOut > 0) {
    $('.gist.js-activated').addClass('visible')
  } else {
    $('.gist.js-activated').removeClass('visible')
  }
});

$('nav .hamburger').click(function () {
  $('.js-toggled').toggleClass('visible');
  if ($(".js-toggled").hasClass("visible")) {
		$("body").scrollDisable();
	}
});

$(window).scroll(function () {
	var wScroll = $(this).scrollTop();
	  var jumpIn  = $('header').height() + 100;
	  if (wScroll > jumpIn) {
	    $('footer').show();
	  } else {
	    $('footer').hide();
	  }
	$("header").css({
		'top': 0-($(this).scrollTop() / 3) + "px"
	});
});
$(document).ready(function () {
	$.getJSON("https://unpkg.com/noobscroll?json", function (data) {
		var size = data.size / 1024;
		size = Math.round(size * 100) / 100
		$(".kb").text(size);
	});
});