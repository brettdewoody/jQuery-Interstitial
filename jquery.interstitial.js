/* 
 * jQuery interstitial plugin v1.0
 * jquery.interstitial.js
 *
 * https://github.com/brettdewoody/jQuery-Interstitial
 * 
 * Brett DeWoody
 * Digital Wax Works - Bozeman, Montana
 * http://www.DigitalWaxWorks.com
 * Created: Feb 4, 2011
 * Updated: Feb 4, 2011

 * Special thanks to Soh Tanaka (http://www.sohtanaka.com) for inspiring 
 * this jQuery-based interstitial popup.  You can read about his original 
 * method here on Soh Tanaka's webite:

 * http://www.sohtanaka.com/web-design/inline-modal-window-w-css-and-jquery 
 */

(function( $ ){

  var methods = {
     open : function( options ) {
     
       var settings = {
         'url'         			: '',
         'width' 				: 600,
         'height'				: 400,
         'opacity'				: 70,
         'id'					: 'popupBlock'
    	};
    	
    	if ( options ) { 
          $.extend( settings, options );
        }
		
		//Fade in Background
		$('body').append('<div id="fade"></div>'); 
		$('#fade').css({'filter' : 'alpha(opacity=' + settings.opacity + ')'}).fadeIn();

		//Fade in the Popup
		$('body').append('<div id="' + settings.id + '"></div>');
		$('#' + settings.id).load(settings.url, function() {
			$('#' + settings.id).css({'width' : Number(settings.width), 'height' : Number(settings.height)}).fadeIn();
		});
		
		//Define margin for center alignment (vertical + horizontal)
		var popMargTop = settings.height / 2;
		var popMargLeft = settings.width / 2;
		
		//Apply Margin to Popup
		$('#' + settings.id).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		//On click of the fade, close the popup and fade
		$('#fade').live('click', function() {
	  	  $().interstitial('close');		
		});

     },
     close : function( options ) {
     
     	var settings = {
         'id'					: 'popupBlock'
      	};
    	
    	if ( options ) { 
          $.extend( settings, options );
        }
     
		$('#fade , #' + settings.id).fadeOut(function() {
			$('#fade').remove();  
		});
		
 	 }
  };

  $.fn.interstitial = function( method ) {
    
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }    
  
  };

})( jQuery );