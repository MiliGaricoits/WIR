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


$(document).ready(function(){

	var globales = Globales.getInstance();
	globales.setServer("localhost:15000/");
	var server = globales.getServer();

	_cargarRecomendados(pelis);

	$("#nav_home").attr("class", '');
	$("#nav_top10").attr("class", '');
	$("#nav_recommended").attr("class", 'active');
	$("#nav_my_movies").attr("class", '');
	
	/*$.ajax({
        type : "GET",
        url: "http://"+server+"getPeliculas?idFacebook=1162593356",//+globales.getFacebookID(),
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json'
    })
    .done(function(response) {
    	console.log(response);
    	_cargarContenidoPeliculas(response.peliculas);
    })
    .fail(function(jqXHR, textStatus) {

    	alert(jqXHR.responseText);
	});*/

});

function _cargarRecomendados(recomendados)
{
	var index = 0;
	recomendados.forEach(function (peli) {

		var new_item = '<div id="' + index + '" class="div_recommended">';
		new_item += '<img id="img_recommended" src="' + peli.poster + '">';
		new_item += '</div>';

		$('#effects').sly('add', '<li>' + new_item + '</li>');
		$('#effects').sly('toCenter', 3);

		index++;
	});
}
