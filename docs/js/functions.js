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
(function() {
  /**
   * Ajustement décimal d'un nombre
   *
   * @param {String}  type : Le type d'ajustement souhaité.
   * @param {Number}  value : le nombre à traité The number.
   * @param {Integer} exp  : l'exposant (le logarithme en base 10 de l'ajustement).
   * @returns {Number} la valeur ajustée.
   */
  function decimalAdjust(type, value, exp) {
    // Si la valeur de exp n'est pas définie ou vaut zéro...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Si la valeur n'est pas un nombre 
    // ou si exp n'est pas un entier...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Si la valeur est négative
    if (value < 0) {
      return -decimalAdjust(type, -value, exp);
    }
    // Décalage
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Décalage inversé
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Arrondi décimal
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Arrondi décimal inférieur
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Arrondi décimal supérieur
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

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
		size = Math.round10(size);
		$(".kb").text(size);
	});
});