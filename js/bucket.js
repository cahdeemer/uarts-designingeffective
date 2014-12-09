$(document).ready(function() {

	// Body Fade In
	
	$("body").css("display", "none");
	$("body").fadeIn(1000,"swing");

	
	// Accordion Navigation
        
     $('#nav > li > a').click(function(){
		if ($(this).attr('class') != 'active'){
				$('#nav li ul').slideUp();
				$(this).next().slideToggle();
				$('#nav li a').removeClass('active');
				$(this).addClass('active');
		}
	});

	//Toggle Content
	
	$('#hideMeTrigger').click(function() {
		var text;

    	$('#hideMeDiv').toggleClass('active');
    	if ($('#hideMeDiv').hasClass('active')){
    		text = 'Show Less';
    	} else {
    		text = 'Show More';
    	}

    	$(this).text(text);
	    return false;
    });
	
});