
$(document).ready(function(){

	//var globales = Globales.getInstance();
	//globales.setServer("localhost:15000/");
	//var server = globales.getServer();

	//_cargarRecomendados(pelis);

	/*$("#nav_home").attr("class", '');
	$("#nav_top10").attr("class", '');
	$("#nav_recommended").attr("class", 'active');
	$("#nav_favorites").attr("class", '');*/

	var server = sessionStorage.server;
	var facebook_id = sessionStorage.facebook_id;
	
	$.ajax({
        type : "GET",
        url: "http://"+server+"getRecomendadasUsuario?idFacebook=" + facebook_id,
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json'
    })
    .done(function(response) {
    	console.log(response);
    	_cargarRecomendados(response);
    })
    .fail(function(jqXHR, textStatus) {

    	console.log(jqXHR.responseText);
	});

});

function _cargarRecomendados(recomendados)
{

	var index = 0;
	recomendados.forEach(function (peli) {

		var new_item = '<div id="div_item_carrusel_' + index + '" class="div_item_carrusel">';
		//new_item += '<img id="img_recommended" src="' + peli.poster + '">';
		new_item += '<img class="img_item_carrusel" src="' + peli.urlPelicula + '">';
		new_item += '</div>';

		$('#effects').sly('add', '<li>' + new_item + '</li>');
		$('#effects').sly('toCenter', 1);

		$('#div_item_carrusel_'+index).data(peli);

		index++;
	});

	var active = $('.frame ul li.active').children();
	active = active.data();
	$('#titulo_recommended').text(active.nombrePelicula);
	$('#desc_recommended').text(active.descripcionPelicula);
	$('#likes').text(active.likesPelicula + ' users like this movie');


	$(".div_item_carrusel").click(function(){

		var peli = $(this).data();

		$('#titulo_recommended').text(peli.nombrePelicula);
		$('#desc_recommended').text(peli.descripcionPelicula);
		$('#likes').text(peli.likesPelicula + ' users like this movie');		
	});
}
