$(window).load(function() {
	//scroll
	$('a.page-scroll').bind('click', function(event) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
		});
		
		
	//animacja nawigacji
	setTimeout(function() {
	$(".nav-custom").css({
		'opacity' : '1',
		'transform' : 'translate(0px,0px)',
		})
	}, 4200);
		
	//animacja gałęzi
	setTimeout(function() {
	$(".branch").css({
		'transform' : 'translate(0px,0px)',
		})
	}, 2800);
		
	//animacja ptaków
	setTimeout(function() {
		$(".bigbirds").css({
			'height': '55%',
			'width': '30%'
		})
	}, 3500);
	
	// animacja startowa logo
	setTimeout(function() {
		$(".logoheader").css({
			'opacity' : '1',
			'transform' : 'translateY(0px) rotate(-20deg)'
		}) 
	}, 500);
	
	setTimeout(function() {
		$(".logoheader").css({
					'transform' : 'translateY(0px) rotate(0deg)'
			});
	}, 1500);
				
	setTimeout(function() {
		$(".logo p").css({ 
			'opacity' : '1'
		});
	}, 2200);
	
});

$(window).scroll(function() {
	
	var WindowScroll = $(this).scrollTop();
	
	// parallax nagłówka
	
	$('.logo').css({	
		'transition' : 'transform 0s',
		'transform' : 'translate(0px, '+ WindowScroll /4 +'%)'
	});
	
	$('.bigbirds').css({
		'-webkit-transition' : 'transform 0s',
		'transition' : 'transform 0s',
		'transform' : 'translate(0px, '+ WindowScroll/1.05 +'px)',
		'height' : 55 + WindowScroll/200 + '%',
		'width' : 30 + WindowScroll/200 + '%'
	});
	
	$('.branch').css({
		'transition' : 'transform 0s',
		'transform' : 'translate(0px, -'+ WindowScroll /34 +'%)'
	});
	
	// dynamiczny margines do wysuwania stopki
	$('#contact').css({
	'margin-bottom' : $('#footer').height() + 'px'
	});
	
	//animacje peryskopu
	if(WindowScroll > $('#events').offset().top - $(window).height()){
		$('.periscope').css({
			'background-position' : 'center -'+ ((WindowScroll*1.5) - ($(window).height())*2) +'px'
		});
		
		var opacity = ((WindowScroll - $('#events').offset().top) + 180) / WindowScroll*12
		
		$('.peri-bg').css({
			'opacity' : opacity
		});
	}
	
	//animacja sekcji o nas
	if(WindowScroll > ($('#about').offset().top) - 80) {
		$('.member').each(function(i){
			setTimeout(function() {
				$(".member").eq(i).addClass("showingup");
				}, 150 * i
			);
		});
	}
	
	//animacja sekcji artists
	if(WindowScroll > ($('#artists').offset().top) - 80) {
		$('.artist').each(function(i){
			setTimeout(function() {
				$(".artist").eq(i).addClass("showingup");
				}, 150 * i
			);
		});
	}
	
	//przyklejenie nawigacji
	if(WindowScroll > ($('#about').offset().top) - $('.nav-custom').height()) {
		$(".nav-custom").addClass("nav-fixed");
		} else {
		$(".nav-custom").removeClass("nav-fixed");
	}
});



	