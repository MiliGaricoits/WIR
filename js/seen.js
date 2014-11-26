
$(document).ready(function(){

	var globales = Globales.getInstance();
	globales.setServer("localhost:15000/");
	var server = globales.getServer();

	$("#nav_home").attr("class", '');
	$("#nav_top10").attr("class", '');
	$("#nav_recommended").attr("class", '');
	$("#nav_favorites").attr("class", 'active');
	
	$.ajax({
        type : "GET",
        url: "http://"+server+"getPeliculas?idFacebook=1162593356",//+globales.getFacebookID(),
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json'
    })
    .done(function(response) {
    	console.log(response);
    	_cargarFavoritos(response.peliculas);
    })
    .fail(function(jqXHR, textStatus) {

    	alert(jqXHR.responseText);
	});

});

function _cargarFavoritos(recomendados)
{
	if (recomendados[1])
	{
		$('#titulo_recommended').text(recomendados[1].nombrePelicula);
		$('#desc_recommended').text(recomendados[1].descripcionPelicula);
	}

	var index = 0;
	recomendados.forEach(function (peli) {

		var new_item = '<div id="div_item_carrusel_' + index + '" class="div_item_carrusel">';
		//new_item += '<img id="img_recommended" src="' + peli.poster + '">';
		new_item += '<img class="img_item_carrusel" src="' + peli.urlPelicula + '">';
		new_item += '</div>';

		$('#effects').sly('add', '<li>' + new_item + '</li>');
		$('#effects').sly('toCenter');

		$('#div_item_carrusel_'+index).data(peli);

		index++;
	});

	$(".div_item_carrusel").click(function(){

		var peli = $(this).data();

		$('#titulo_recommended').text(peli.nombrePelicula);
		$('#desc_recommended').text(peli.descripcionPelicula);		
	});
}