(function ( $ ) {
 	
	$.fn.scroll = function (options) {
		var elem = $(this);
		var defaults = {
        	direction: "y",
    	};
 
    	var settings = $.extend( {}, defaults, options );
    	switch (settings.direction) {
    		case "y":
    			elem.css("overflow-y", "scroll");
    			break;
    		case "x":
    			elem.css("overflow-x", "scroll");
    			break;
    		default:
    			elem.css("overflow", "scroll");
    	}
		
	};

	$.fn.scrollDisable = function (options) {
		var elem = $(this);
		var defaults = {
        	direction: "y",
    	};
 
    	var settings = $.extend( {}, defaults, options );
    	switch (settings.direction) {
    		case "y":
    			elem.css("overflow-y", "hidden");
    			break;
    		case "x":
    			elem.css("overflow-x", "hidden");
    			break;
    		default:
    			elem.css("overflow", "hidden");
    	}
	}
	$.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
    $.fn.scrollDrag = function() {
    	var elem = $( this );
    	elem.disableSelection();
	     var curDown = false,
		      curYPos = 0,
		      curXPos = 0;
		  elem.mousemove(function(m){
		    if(curDown === true){
		     elem.scrollTop(elem.scrollTop() + (curYPos - m.pageY)); 
		     elem.scrollLeft(elem.scrollLeft() + (curXPos - m.pageX));
		    }
		  });
		  
		  elem.mousedown(function(m){
		    curDown = true;
		    curYPos = m.pageY;
		    curXPos = m.pageX;
		  });
		  
		  elem.mouseup(function(){
		    curDown = false;
		  });
    };
    $.fn.scrollView = function (options) {
    	var elem = $(this);
		var defaults = {
        	click: "dbl",
        	duration: 1000,
        	margin: 10,
    	};
 
    	var settings = $.extend( {}, defaults, options );
    	switch (settings.click) {
    		case "dbl":
    			elem.dblclick(function(e){
			    	var target = $(e.target);
			        $('html, body').animate({
					    scrollTop: target.offset().top - settings.topheight
					}, settings.duration);
			    });
    			break;
    		default:
    			elem.click(function(e){
		    	var target = $(e.target);
		        $('html, body').animate({
				    scrollTop: target.offset().top
				}, settings.duration);
		    });
    	}
		    
	};
	$.fn.scrollTo = function (options) {
		var defaults = {
        	duration: 1000,
    	};
 
    	var settings = $.extend( {}, defaults, options );
		$('html, body').animate({
		    scrollTop: $(this).offset().top
		}, settings.duration);
	};
 	$.fn.scrollToTop = function (options) {
		var defaults = {
        	duration: 1000,
    	};
 
    	var settings = $.extend( {}, defaults, options );
		$('html, body').animate({
		    scrollTop: $(this).offset().top
		}, settings.duration);
	};
	$.fn.scrollToBottom = function (options) {
		var defaults = {
        	duration: 1000,
    	};
 
    	var settings = $.extend( {}, defaults, options );
		$('html, body').animate({
		    scrollTop: $(document).height()
		}, settings.duration);
	};
	$.fn.scrollRelative = function (options) {
		var defaults = {
        	duration: 1000,
        	val: "+=150px",
    	};
 
    	var settings = $.extend( {}, defaults, options );
		$('html, body').animate({
		    scrollTop: settings.val
		}, settings.duration);
	};

	$.fn.scrollProgress = function (content, func) {
		var elem = $(this);
		elem.scroll(function() {
		  var wintop = elem.scrollTop(), docheight = content.height(), winheight = elem.height();
		  // console.log(docheight);
		  var totalScroll = (wintop/(docheight-winheight))*100;
      	  func(totalScroll);
		});
	};

	$.fn.scrollOn = function (val, func1, func2) {
		var elem = $(this);
		$(window).scroll(function() {
		   var hT = elem.offset().top,
		       hH = elem.outerHeight(),
		       wH = $(window).height(),
		       wS = $(document).scrollTop();
		   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
		      func1();
		   } else {
		      func2();
		   }
		});
	};
}( jQuery ));