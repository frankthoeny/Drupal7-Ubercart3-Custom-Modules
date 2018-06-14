(function($) {
 
 Drupal.behaviors.EnewsOverlayAjax = {
    
    attach: function (context, settings) { 
			
			$("#privacyStatement", context).hide();
			
			//if the cookie has_enews is not set, then show the colorbox window
		    if (!readCookie('has_enews')) {	
		       //then set the cookie, so next time the colorbox won't be displaying again. (name, value, days)
		       createCookie('has_enews', 1, 9);			        
		      			        
		        // Called directly, without assignment to an element:
				$.colorbox({
					rel:'group1',						
					title: true,
					href: "#enews_overlay_wrapper",
					inline: true,
					innerWidth: "475px",
					initialHeight: "375px",
					maxWidth: '100%',
					maxHeight: '100%',
					scrolling: false,											
					overlayClose:false,
					opacity: 0.35,	
					onOpen: function() {},
					onLoad: function() {
						$("#enews_overlay_wrapper").show();
						$("#privacy").click(function() {
						   	$("#privacyStatement").fadeToggle( "fast", "linear", function(){$.colorbox.resize();}); 
				   			return false;
				   		});									
					},
					onComplete: function() {},
					onCleanup: function() {
						$('#enews_overlay_wrapper').hide();
					},
             		onClosed:function(){},
				});	
				//window.location.replace("http://staging.lifelineskincare.com/");				
			}

			function createCookie(name,value,days) {
			    if (days) 
			    {
			        var date = new Date();
			        date.setTime(date.getTime()+(days*24*60*60*1000));
			        var expires = "; expires="+date.toGMTString();
			    }
			    else {
			    	var expires = "";
			    }
			    document.cookie = name+"="+value+expires+"; path=/";
			}
			
			function readCookie(name) {
			    var nameEQ = name + "=";
			    var ca = document.cookie.split(';');
			    
			    for(var i=0;i < ca.length;i++) 
			    {
			        var c = ca[i];
			        while (c.charAt(0)==' ') c = c.substring(1,c.length);
			        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			    }
			    
			    return null;
			}
			
			// Product and Shop pages subscribe button action			
			$(".subscribe a", context).click(function() {
				 
				 // Called directly, without assignment to an element:
					$.colorbox({						
						rel:'group1',
						title: false,
						href: "#enews_overlay_wrapper",
						inline: true,
						innerWidth: "475px",
						initialHeight: "375px",
						maxWidth: "100%",
						maxHeight: "100%",
						scrolling: false,											
						overlayClose:false,
						opacity: 0.35,	
						onOpen: function() {
							
							// show the hidden enews from view on page load.
							$("#enews_overlay_wrapper").show();	
													
						},
						onLoad: function() {
					       					             
							// shows the privacy statement and resize the colorbox.
							$("#privacy").click(function() {
							   	
							   	$("#privacyStatement").slideDown( "fast", "linear", function(){
							   		$.colorbox.resize();
							   	}); 
							   	
							   	// return false to prevent <a href> default page reload.
					   			return false;
					   			
					   		});	   						   							
						},
						onComplete: function() {							
							
							$("#overlay_message_box").css({'height':'10px'});
							
						},
						onCleanup: function() {
							// hide or else colorbox retains its size on reopen.
							$("#privacyStatement").hide();
							// hide or else it will be visible on page in footer. 
							$("#enews_overlay_wrapper").hide();									
						},
	             		onClosed:function(){
	             			//$('#enews-overlay-form')[0].reset();
	             			// hide in case a message was previously shown
							$("#overlay_message_box").html('');
	             		},
					});
				 return false;
			});
	   		
	   		// stops the Enter key from submitting the form
	   		$("#enews-overlay-form", context).bind("keypress", function(e) {
              if (e.keyCode == 13) {
                 return false;
              }
           	}); 
           	
	   		// stops the default submit action
	   		$("#enews-overlay-form", context).submit(function(e) {								  
				//console.log('You clicked the submit button.');	             
		        return false;
            });        
	   		 
	   		// resizes the colorbox when there is a message
	   		if( $("#overlay_message_box").is(":visible")) {
				$.colorbox.resize();
			} 			
			
			// cancel button closes the colorbox on mousedown
			$('#enews-overlay-form input.cancel', context).mousedown(function(){	
				$.colorbox.close();
			});	
		}
	};
		    
})(jQuery);
		