
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
        url: "http://"+server+"getTopTenPeliculas?idFacebook=" + facebook_id,
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json'
    })
    .done(function(response) {
    	console.log(response);
    	_cargarTop10(response);
    })
    .fail(function(jqXHR, textStatus) {

    	alert(jqXHR.responseText);
	});

});

function _cargarTop10(top10)
{
	var index = 0;
	top10.forEach(function (peli) {

		var new_item = '<div id="div_item_carrusel_' + index + '" class="div_item_carrusel">';
		new_item += '<img class="img_item_carrusel" src="' + peli.url + '">';
		new_item += '</div>';

		$('#effects').sly('add', '<li>' + new_item + '</li>');
		$('#effects').sly('toCenter');

		$('#div_item_carrusel_'+index).data({peli: peli, id: '#div_item_carrusel_' + index, opinion: peli.opinion, likes: peli.likesPelicula});

		index++;
	});

	var active = $('.frame ul li.active').children();
	var data = active.data();
	$('#top10_title').text(data.peli.nombre);
	setearLike(data.peli, data.id, parseFloat(data.opinion), data.likes);


	$(".div_item_carrusel").click(function(){

		var data = $(this).data();
		$('#top10_title').text(data.peli.nombre);
		setearLike(data.peli, data.id, parseFloat(data.opinion), data.likes);	
	});
}