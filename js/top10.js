
$(document).ready(function(){

	var globales = Globales.getInstance();
	globales.setServer("localhost:15000/");
	var server = globales.getServer();

	/*$("#nav_home").attr("class", '');
	$("#nav_top10").attr("class", '');
	$("#nav_recommended").attr("class", '');
	$("#nav_favorites").attr("class", 'active');*/
	
	$.ajax({
        type : "GET",
        url: "http://"+server+"getTopTenPeliculas",
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

		$('#div_item_carrusel_'+index).data(peli);

		index++;
	});

	var active = $('.frame ul li.active').children();
	active = active.data();
	$('#top10_title').text(active.nombre);

	$(".div_item_carrusel").click(function(){

		var peli = $(this).data();

		$('#top10_title').text(peli.nombre);	
	});
}