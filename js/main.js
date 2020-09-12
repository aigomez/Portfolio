
	(function($) { // Carga el 'banner' principal al entrar a la pagina

		var	$window = $(window),
			$body = $('body');	

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 0);
		});
	
	})(jQuery);
	
	$(document).ready(function() { // Cambia la velocidad al darle a 'Learn more'		 
			
		(function($) {
			
		$('.scrolly')
			.scrolly({
				speed: 700
			});

		})(jQuery);
		
	});
