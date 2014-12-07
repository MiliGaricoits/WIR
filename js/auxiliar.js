$(document).ready(function(){

	var server = sessionStorage.server;
	var facebook_id = sessionStorage.facebook_id;

    /*$('#hate_ppl').mouseover(function(){
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
	});*/

	$('#hate_ppl').click(function(){

		var data = $(this).data();
		console.log(data);

		if (!data.active){

			$.ajax({
		        type : "POST",
		        url: "http://"+server+"opinarPelicula",
	        	data:	"idFacebook=" + facebook_id
	    				+ "&nombrePelicula=" + data.nombre
	    				+ "&opinion=0",
		        contentType: 'application/x-www-form-urlencoded',
		        dataType: 'json'
		    })
		    .done(function(response) {
				
				$('#hate_ppl').attr('class', 'active');
				$('#hate_ppl').attr('src', '../assets/hate_active.png');

				$('#love_ppl').attr('class', '');
				$('#love_ppl').attr('src', '../assets/love.png');

				$('#hate_ppl').data('active', true);
				$('#love_ppl').data('active', false);

				$(data.id).data('opinion', 0);

			});
	    }
	});

	$('#love_ppl').click(function(){

		var data = $(this).data();

		if (!data.active){

			$.ajax({
		        type : "POST",
		        url: "http://"+server+"opinarPelicula",
	        	data:	"idFacebook=" + facebook_id
	    				+ "&nombrePelicula=" + data.nombre
	    				+ "&opinion=1",
		        contentType: 'application/x-www-form-urlencoded',
		        dataType: 'json'
		    })
		    .done(function(response) {
				
				$('#love_ppl').attr('class', 'active');
				$('#love_ppl').attr('src', '../assets/love_active.png');

				$('#hate_ppl').attr('class', '');
				$('#hate_ppl').attr('src', '../assets/hate.png');

				$('#hate_ppl').data('active', false);
				$('#love_ppl').data('active', true);

				$(data.id).data('opinion', 1);
				$(data.id).data('likes', $(data.id).data().likes + 1);

			});
	    }
	});
});

function setearLike (peli, ident, op) {

	$('#love_ppl').data({nombre: peli.nombre, opinion: peli.opinion, active: false, id: ident});
	$('#hate_ppl').data({nombre: peli.nombre, opinion: peli.opinion, active: false, id: ident});

	if (op == 0) {

		$('#love_ppl').attr('class', '');
		$('#love_ppl').attr('src', '../assets/love.png');

		$('#hate_ppl').attr('class', 'active');
		$('#hate_ppl').attr('src', '../assets/hate_active.png');
		$('#hate_ppl').data('active', true);

		$(ident).data('opinion', 0);
	}
	else if (op == 1) {

		$('#hate_ppl').attr('class', '');
		$('#hate_ppl').attr('src', '../assets/hate.png');

		$('#love_ppl').attr('class', 'active');
		$('#love_ppl').attr('src', '../assets/love_active.png');
		$('#love_ppl').data('active', true);

		$(ident).data('opinion', 1);
	}
	else if (op == -1){

		$('#hate_ppl').attr('class', '');
		$('#hate_ppl').attr('src', '../assets/hate.png');

		$('#love_ppl').attr('class', '');
		$('#love_ppl').attr('src', '../assets/love.png');

		$(ident).data('opinion', -1);
	}
}


var pelis = [
	{
		id: "0", 
		titulo: "Titulo",
		poster: "../assets/movies/movie0.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 3,
		like: 0	
	},
	{
		id: "1", 
		titulo: "Titulo",
		poster: "../assets/movies/movie1.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 3,
		like: 0	
	},
	{
		id: "2", 
		titulo: "Titulo",
		poster: "../assets/movies/movie2.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: -1,
		like: -1	
	},
	{
		id: "3", 
		titulo: "Titulo",
		poster: "../assets/movies/movie3.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 1,
		like: 0	
	},
	{
		id: "1", 
		titulo: "Titulo",
		poster: "../assets/movies/movie1.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 3,
		like: 0	
	},
	{
		id: "2", 
		titulo: "Titulo",
		poster: "../assets/movies/movie2.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: -1,
		like: -1	
	},
	{
		id: "3", 
		titulo: "Titulo",
		poster: "../assets/movies/movie3.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 1,
		like: 0	
	},
	{
		id: "1", 
		titulo: "Titulo",
		poster: "../assets/movies/movie1.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 3,
		like: 0	
	},
	{
		id: "2", 
		titulo: "Titulo",
		poster: "../assets/movies/movie2.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: -1,
		like: -1	
	},
	{
		id: "3", 
		titulo: "Titulo",
		poster: "../assets/movies/movie3.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 1,
		like: 0	
	}
];