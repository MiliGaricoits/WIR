
$(document).ready(function(){

	/*var globales = Globales.getInstance();
	globales.setServer("localhost:15000/");
	var server = globales.getServer();*/

	/*$("#nav_home").attr("class", '');
	$("#nav_top10").attr("class", '');
	$("#nav_recommended").attr("class", '');
	$("#nav_favorites").attr("class", 'active');*/

	var server = sessionStorage.server;
	var facebook_id = sessionStorage.facebook_id;
	
	$.ajax({
        type : "GET",
        url: "http://"+server+"getPeliculasLike?idFacebook=" + facebook_id,
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json'
    })
    .done(function(response) {
    	console.log(response);
    	_cargarVistas(response);
    })
    .fail(function(jqXHR, textStatus) {

    	alert(jqXHR.responseText);
	});

});

function _cargarVistas(recomendados)
{
	var index = 0;
	recomendados.forEach(function (peli) {

		var new_item = '<div id="div_item_carrusel_' + index + '" class="div_item_carrusel">';
		new_item += '<img class="img_item_carrusel" src="' + peli.urlPelicula + '">';
		new_item += '</div>';

		$('#effects').sly('add', '<li>' + new_item + '</li>');
		$('#effects').sly('toCenter');

		$('#div_item_carrusel_'+index).data(peli);

		index++;
	});

	var active = $('.frame ul li.active').children();
	active = active.data();
	$('#seen_title').text(active.nombrePelicula);

	$(".div_item_carrusel").click(function(){

		var peli = $(this).data();

		$('#seen_title').text(peli.nombrePelicula);	
	});
}