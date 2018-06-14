(function($) {
 
 	Drupal.behaviors.EnewsSignupsAjax = {
    
    	attach: function (context) {
						
		$("#mce-submit", context).mousedown( function() {		
			
			// fades out errors after so many seconds...
			 setTimeout(function() {
			 	$(".error", context).parent().fadeOut("slow"); 
       			$(".error", context).fadeOut();    
       			
			}, 4000);
			
			setTimeout(function() {       			
       			$(".status", context).parent().fadeOut("slow");
       			$(".status", context).fadeOut();
    		}, 6000);
			
				console.log('You clicked the submit button.');	
			});
					
		}
	}
})(jQuery);
		