
var pelis = [
	{
		id: "1", 
		poster: "../assets/movies/movie1.png", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 3,
		like: true	
	},
	{
		id: "2", 
		poster: "../assets/movies/movie1.png", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: -1,
		like: false	
	},
	{
		id: "3", 
		poster: "../assets/movies/movie1.png", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 1,
		like: true	
	},
	{
		id: "1", 
		poster: "../assets/movies/movie1.png", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 3,
		like: true	
	},
	{
		id: "2", 
		poster: "../assets/movies/movie1.png", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: -1,
		like: false	
	},
	{
		id: "3", 
		poster: "../assets/movies/movie1.png", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 1,
		like: true	
	},
	{
		id: "1", 
		poster: "../assets/movies/movie1.png", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 3,
		like: true	
	},
	{
		id: "2", 
		poster: "../assets/movies/movie1.png", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: -1,
		like: false	
	},
	{
		id: "3", 
		poster: "../assets/movies/movie1.png", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 1,
		like: true	
	}
];

$(document).ready(function(){

	var peli_ppl = $('<div class="col-lg-4 img_peli_principal">');
	var img_ppl = $('<img id="img_ppl">').attr('src', pelis[0].poster);
	var rating_ppl = $('<input type="hidden" class="rating" readonly data-min="1" data-max="5"/>').attr('value', pelis[0].rating);
	rating_ppl.rating({
		filled: 'glyphicon-star',
		empty: 'glyphicon-star-empty',
		start: 0,
		stop: 10,
		step: 1
	});
	var like_ppl = $('<input type="hidden" class="rating" readonly data-filled="glyphicon glyphicon-heart" data-empty="glyphicon glyphicon-heart-empty" data-stop="1"/>').attr('value', pelis[0].like);
	var long_desc_ppl = $('<p></p>').text(pelis[0].description_long);

	img_ppl.appendTo(peli_ppl);
	rating_ppl.appendTo(peli_ppl);
	like_ppl.appendTo(peli_ppl);
	long_desc_ppl.appendTo(peli_ppl);
	peli_ppl.appendTo($("#movies_list"));

	pelis.forEach(function(peli){
		var peli_small = $('<div class="col-lg-2 img_peli">');
		var img_small = $('<img id="img_ppl">').attr('src', peli.poster);
		var peli_span = $('<span class="caption scale-caption"></span>');
		var peli_title = $('<h3></h3>').text('Titulo');
		var peli_desc_short = $('<p></p>').text(peli.description_short);
	
		img_small.appendTo(peli_small);
		peli_title.appendTo(peli_span);
		peli_desc_short.appendTo(peli_span);
		peli_span.appendTo(peli_small);
		peli_small.appendTo($("#movies_list"));

	});

	$(".col-lg-2").click(function(){
		alert("click");
	})

});