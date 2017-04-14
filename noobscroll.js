(function ( $ ) {
 
    $.fn.scrollDrag = function() {
    	var elem = $( this );
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
    $.fn.scrollView = function () {
    	var elem = $(this);
		    elem.dblclick(function(e){
		    	var target = $(e.target);
		        $('html, body').animate({
				    scrollTop: target.offset().top
				}, 1000);
		    });
	}
	$.fn.scrollTo = function () {
		$('html, body').animate({
		    scrollTop: $(this).offset().top
		}, 1000);
	}
 
}( jQuery ));