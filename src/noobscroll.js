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
    			elem.css("overflow-y", "none");
    			break;
    		case "x":
    			elem.css("overflow-x", "none");
    			break;
    		default:
    			elem.css("overflow", "none");
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
    	};
 
    	var settings = $.extend( {}, defaults, options );
    	switch (settings.click) {
    		case "dbl":
    			elem.dblclick(function(e){
			    	var target = $(e.target);
			        $('html, body').animate({
					    scrollTop: target.offset().top
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
 	
}( jQuery ));