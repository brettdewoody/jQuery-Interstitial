/* ================================================================ 
Brett DeWoody
Digital Wax Works - Bozeman, Montana
http://www.DigitalWaxWorks.com
Created: Feb 1, 2011
Updated: Feb 2, 2011

This script creates an interstitial popup for first-time visitors
to a website. The popup loads an external page into a dynamically
created <div> tag.

Special thanks to Soh Tanaka (http://www.sohtanaka.com) for inspiring 
this jQuery-based interstitial popup.  You can read about his original 
method here on Soh Tanaka's webite:

http://www.sohtanaka.com/web-design/inline-modal-window-w-css-and-jquery 

=================================================================== */

$(document).ready(function(){
		
				
	//Open the popup		   		   
	$.fn.popOpen = function(){
	
		var popURL = 'http://www.digitalwaxworks.com/labs/webbyawards/nettediframe.htm';
		var popWidth = 831;
		var popHeight = 662;
		
		var popID = 'popup_block';
		
		//Fade in Background
		$('body').append('<div id="fade"></div>'); 
		$('#fade').css({'filter' : 'alpha(opacity=70)'}).fadeIn();

		//Fade in the Popup
		$('body').append('<div id="' + popID + '"></div>');
		$('#' + popID).load(popURL, function() {
			$('#' + popID).css({'width' : Number(popWidth), 'height' : Number(popHeight)}).fadeIn();
		}).delay(1500);
		
		//Define margin for center alignment (vertical + horizontal)
		var popMargTop = popHeight / 2;
		var popMargLeft = popWidth / 2;
		
		//Apply Margin to Popup
		$('#' + popID).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		}); 

	};
	
	
	//Close the popup
	$.fn.popClose = function() {
		$('#fade , #popup_block').fadeOut(function() {
			$('#fade').remove();  
		});
	};
	
	
	//On click of the fade, close the popup and fade
	$('#fade').live('click', function() {
	  	$.fn.popClose();		
	});
	
	
	//If the cookie doesn't exist, show the interstitial popup
	//if (!$.cookie('nettedsplashpage')) {
	  if ($(window).width() > 851 && $(window).height() > 649) {
	    $.fn.popOpen();
	   }
	  
	  //Create a cookie
	  //$.cookie('nettedsplashpage', 'viewed', {expires: 365, path: '/'});
	//}

	
});
