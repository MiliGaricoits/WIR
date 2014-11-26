$(document).ready(function(){

	var globales = Globales.getInstance();
	globales.setServer("localhost:15000/");
	var server = globales.getServer();

    $('#hate_ppl').mouseover(function(){
		if ($(this).attr('class') == 'active'){
			$(this).attr('class', '');
			$(this).attr('src', '../assets/hate.png');
		}
		else {
			$(this).attr('class', 'active');
			$(this).attr('src', '../assets/hate_active.png');
		}
	});

	$('#love_ppl').mouseover(function(){
		if ($(this).attr('class') == 'active'){
			$(this).attr('class', '');
			$(this).attr('src', '../assets/love.png');
		}
		else {
			$(this).attr('class', 'active');
			$(this).attr('src', '../assets/love_active.png');
		}
	});

	$('#hate_ppl').mouseleave(function(){
		if ($(this).attr('class') == 'active'){
			$(this).attr('class', '');
			$(this).attr('src', '../assets/hate.png');
		}
		else {
			$(this).attr('class', 'active');
			$(this).attr('src', '../assets/hate_active.png');
		}
	});

	$('#love_ppl').mouseleave(function(){
		if ($(this).attr('class') == 'active'){
			$(this).attr('class', '');
			$(this).attr('src', '../assets/love.png');
		}
		else {
			$(this).attr('class', 'active');
			$(this).attr('src', '../assets/love_active.png');
		}
	});

	$('#hate_ppl').click(function(){
		/*$.ajax({
	        type : "GET",
	        url: "http://"+server+"getPeliculas?idFacebook="+globales.getFacebookID(),
	        contentType: 'application/x-www-form-urlencoded',
	        dataType: 'json'
	    })
	    .done(function(response) {*/
			if ($(this).attr('class') == 'active'){
				$(this).attr('class', '');
				$(this).attr('src', '../assets/hate.png');
			}
			else {
				$(this).attr('class', 'active');
				$(this).attr('src', '../assets/hate_active.png');
			}
	    //});
	});

	$('#love_ppl').click(function(){
		/*$.ajax({
	        type : "GET",
	        url: "http://"+server+"getPeliculas?idFacebook="+globales.getFacebookID(),
	        contentType: 'application/x-www-form-urlencoded',
	        dataType: 'json'
	    })
	    .done(function(response) {*/
			if ($(this).attr('class') == 'active'){
				$(this).attr('class', '');
				$(this).attr('src', '../assets/love.png');
			}
			else {
				$(this).attr('class', 'active');
				$(this).attr('src', '../assets/love_active.png');
			}
		//});
	});
});