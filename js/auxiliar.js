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