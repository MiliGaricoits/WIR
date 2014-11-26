
/*var pelis = [
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
];*/


$(document).ready(function(){

	var globales = Globales.getInstance();
	globales.setServer("localhost:15000/");
	var server = globales.getServer();

	//_cargarContenidoPeliculas(pelis);

	$("#nav_home").attr("class", 'active');
	$("#nav_top10").attr("class", '');
	$("#nav_recommended").attr("class", '');
	$("#nav_favorites").attr("class", '');

	$.ajax({
        type : "GET",
        url: "http://"+server+"getPeliculas?idFacebook="+globales.getFacebookID(),
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json'
    })
    .done(function(response) {
    	console.log(response);
    	_cargarContenidoPeliculas(response.peliculas);
    })
    .fail(function(jqXHR, textStatus) {

    	alert(jqXHR.responseText);
	});

});

function _cargarContenidoPeliculas(peliculas)
{

	/*$('#img_ppl').css('background-image', 'url('+ peliculas[0].poster +')');
	$('#titulo_ppl').text(peliculas[0].titulo);
	$('#desc_ppl').text(peliculas[0].description_long);*/
	$('#img_ppl').css('background-image', 'url('+ peliculas[0].urlPelicula +')');
	$('#titulo_ppl').text(peliculas[0].nombrePelicula);
	$('#desc_ppl').text(peliculas[0].descripcionPelicula);

	var index = 0;
	peliculas.forEach(function(peli){
		var peli_small = $('<div id="img_peli' + index + '" class="col-lg-2 img_peli"></div>');
		//var img_small = $('<img id="img_small">').attr('src', peli.poster);
		var img_small = $('<img id="img_small">').attr('src', peli.urlPelicula);
		var peli_span = $('<span class="caption scale-caption"></span>');
		//var peli_title = $('<h3></h3>').text(peli.titulo);
		var peli_title = $('<h3></h3>').text(peli.nombrePelicula);
		var peli_desc_short = $('<p></p>').text(peli.descripcionPelicula);
		//var peli_desc_short = $('<p></p>').text(peli.description_short);

		peli_small.data(peli);
	
		img_small.appendTo(peli_small);
		peli_title.appendTo(peli_span);
		peli_desc_short.appendTo(peli_span);
		peli_span.appendTo(peli_small);
		peli_small.appendTo($("#movies_list"));

		index++;

	});

	$(".col-lg-2").click(function(){
		var peli = $(this).data();

		$('#img_ppl').css('background-image', 'url('+ peli.urlPelicula +')');
		$('#titulo_ppl').text(peli.nombrePelicula);
		$('#desc_ppl').text(peli.descripcionPelicula);		

		/*var peli_id = $(this).attr('id');
		$('#img_ppl').css('background-image', 'url('+ pelis[peli_id].poster +')');
		$('#titulo_ppl').text(pelis[peli_id].titulo);
		$('#desc_ppl').text(pelis[peli_id].description_long);
		$('#rating_ppl').fillUntil(pelis[peli_id].rating);*/
	})
}


