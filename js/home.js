
$(document).ready(function(){

	//var globales = new Globales ();
	//globales.setServer("localhost:15000/");
	//var server = sessionStorage.server;

	var server = sessionStorage.server;
	var facebook_id = sessionStorage.facebook_id;

	$.ajax({
        type : "GET",
        url: "http://"+server+"getPeliculas?idFacebook=" + facebook_id,
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
	$('#img_ppl').css('background-image', 'url('+ peliculas[0].url +')');
	$('#titulo_ppl').text(peliculas[0].nombre);
	$('#desc_ppl').text(peliculas[0].descripcion);
	$('#likes').text(peliculas[0].likesPelicula + ' users like this movie');

	setearLike(peliculas[0]);

	var index = 0;
	peliculas.forEach(function(peli){
		var peli_small = $('<div id="img_peli' + index + '" class="col-lg-2 img_peli"></div>');
		//var img_small = $('<img id="img_small">').attr('src', peli.poster);
		var img_small = $('<img id="img_small">').attr('src', peli.url);
		var peli_span = $('<span class="caption scale-caption"></span>');
		//var peli_title = $('<h3></h3>').text(peli.titulo);
		var peli_title = $('<h3></h3>').text(peli.nombre);
		var peli_desc_short = $('<p></p>').text(peli.descripcion);
		//var peli_desc_short = $('<p></p>').text(peli.description_short);

		peli_small.data({peli: peli, id: index});
	
		img_small.appendTo(peli_small);
		peli_title.appendTo(peli_span);
		peli_desc_short.appendTo(peli_span);
		peli_span.appendTo(peli_small);
		peli_small.appendTo($("#movies_list"));

		index++;

	});

	$(".col-lg-2").click(function(){
		var peli = $(this).data().peli;

		$('#img_ppl').css('background-image', 'url('+ peli.url +')');
		$('#titulo_ppl').text(peli.nombre);
		$('#desc_ppl').text(peli.descripcion);	
		$('#likes').text(peli.likesPelicula + ' users like this movie');
	
		setearLike(peli);

		/*var peli_id = $(this).attr('id');
		$('#img_ppl').css('background-image', 'url('+ pelis[peli_id].poster +')');
		$('#titulo_ppl').text(pelis[peli_id].titulo);
		$('#desc_ppl').text(pelis[peli_id].description_long);
		$('#rating_ppl').fillUntil(pelis[peli_id].rating);*/
	});
}


