$(document).ready(function(){
	
	var window_width=$(window).width();
	var window_height=$(window).height();
	var menu_click=0;
	$(".ofline").css('left',-window_width+"px");
	
	
	// ... window size change for down section ...//
	footer_position(); 
	$(window).resize(function(){
		footer_position();
	});
	
	// ...it's need for left animation ...//
	$('#text_div_absolute').css('left',-window_width+'px');
	setTimeout(function(){
		$('#load').fadeOut(1000,function(){
			$('#text_div_absolute').animate({
				'left':'0px',
			},800);
		});
	},1000);
	
	// ... Div open-close function ...//
	var open_close_Click=0;
	$('#click_open').click(function(e){
		$('#menu_open').toggle();
		$(this).toggleClass('a1')
		e.stopPropagation();
	});
	$('html').click(function(){
		$('#menu_open').hide();
	})
	$('#open_close').click(function(){	
	if(open_close_Click==0){
		$('#menu_width').animate({
			'margin-top':-$('#menu_width').height(),
		},400);
		$('#open_close').text('+')
		open_close_Click=1;
	}
	else if(open_close_Click==1){
		$('#menu_width').animate({
			'margin-top':'0px',
		},400);
		$('#open_close').text('-')
		open_close_Click=0;
	}
	});
	// ... ofline left position ...
	$('.ofline').css('left',-window_width+'px');
	
	// ... for background top size ...
	var window_top=window_height*(29/50);
	
	// ... menu click function ...
	
	$('.center_menu_li').click(function(){
		$('.center_menu_li').find(".open_up").removeClass('menu_click');
		$('.center_menu_li').removeClass("menu_click_color");
		$(this).find(".open_up").addClass('menu_click');
		$(this).addClass('menu_click_color');
		var menu_text = $(this).text();
		if(menu_click == 0){
			$('#text_div_absolute').animate({
				'left':window_width+'px',
			},800);
			$('#bg').animate({
				'top': -window_top+'px',
			},800);
			$('#white').animate({
				'height':'600px',
				'margin-top':'-600px',
			},800);
			menu_click = 1;
			$('.online').text(menu_text);
		}
		else{
			$('.ofline').animate({
				'left':'0px',
			},300)

			$('.online').animate({
				'left':window_width+'px',
			},300,function(){
				$('.online').animate({
					
					'left':-window_width+"px",
				},0,function(){
					$('.online,.ofline').toggleClass("ofline online");
					$('.online').text(menu_text);
				})
			})
		}
		console.log(menu_click)
		
	})
	
	// ... logo click function ...
	$('#img_logo').click(function(){
		$('.center_menu_li').find(".open_up").removeClass('menu_click');
		$('.center_menu_li').removeClass("menu_click_color");
		$('#white').animate({
			'height':'0px',
			'margin-top':'0px',
		},600);
		$('#bg').animate({
			'top':'0px',
		},800,function(){
			$('#text_div_absolute').animate({
				'left':'0px',
			},800);
		})
		
		menu_click = 0;
		console.log(menu_click)
	})
});

	// ... position size(top) for down section ...//
function footer_position(){
	var doc_height=$('html').height();
	$('#sec_for_div').css('top', doc_height);
	
}