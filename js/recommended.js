
var pelis = [
	{
		id: "0", 
		titulo: "Titulo",
		poster: "../assets/movies/movie0.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 3,
		like: true	
	},
	{
		id: "1", 
		titulo: "Titulo",
		poster: "../assets/movies/movie1.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 3,
		like: true	
	},
	{
		id: "2", 
		titulo: "Titulo",
		poster: "../assets/movies/movie2.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: -1,
		like: false	
	},
	{
		id: "3", 
		titulo: "Titulo",
		poster: "../assets/movies/movie3.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 1,
		like: true	
	},
	{
		id: "1", 
		titulo: "Titulo",
		poster: "../assets/movies/movie1.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 3,
		like: true	
	},
	{
		id: "2", 
		titulo: "Titulo",
		poster: "../assets/movies/movie2.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: -1,
		like: false	
	},
	{
		id: "3", 
		titulo: "Titulo",
		poster: "../assets/movies/movie3.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 1,
		like: true	
	},
	{
		id: "1", 
		titulo: "Titulo",
		poster: "../assets/movies/movie1.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 3,
		like: true	
	},
	{
		id: "2", 
		titulo: "Titulo",
		poster: "../assets/movies/movie2.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: -1,
		like: false	
	},
	{
		id: "3", 
		titulo: "Titulo",
		poster: "../assets/movies/movie3.jpg", 
		description_short: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
		description_long: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
		rating: 1,
		like: true	
	}
];


$(document).ready(function(){

	var globales = Globales.getInstance();
	globales.setServer("localhost:15000/");
	var server = globales.getServer();

	_cargarContenidoPeliculas(pelis);

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

function _cargarContenidoPeliculas(peliculas)
{
	var peli_ppl = $('<div class="col-lg-4 img_peli_principal">');
	var img_ppl = $('<div id="img_ppl"></div>').css('background-image', 'url('+ pelis[0].poster +')');
	var rating_ppl = $('<input type="hidden" class="rating" readonly data-min="1" data-max="5"/>').attr('value', peliculas[0].likesPelicula);
	rating_ppl.rating({
		filled: 'glyphicon-star',
		empty: 'glyphicon-star-empty',
		start: 0,
		stop: 10,
		step: 1
	});
	var like_ppl = $('<input type="hidden" class="rating" readonly data-filled="glyphicon glyphicon-heart" data-empty="glyphicon glyphicon-heart-empty" data-stop="1"/>').attr('value', pelis[0].like);
	//var long_desc_ppl = $('<p id="desc_ppl"></p>').text(peliculas[0].descripcionPelicula);
	var titulo_ppl = $('<h3 id="titulo_ppl"></h3>').text(peliculas[0].titulo);
	var long_desc_ppl = $('<p id="desc_ppl"></p>').text(peliculas[0].description_long);

	img_ppl.appendTo(peli_ppl);
	rating_ppl.appendTo(peli_ppl);
	like_ppl.appendTo(peli_ppl);
	titulo_ppl.appendTo(peli_ppl);
	long_desc_ppl.appendTo(peli_ppl);
	peli_ppl.appendTo($("#movies_list"));

	var index = 0;
	peliculas.forEach(function(peli){
		var peli_small = $('<div id="' + index + '" class="col-lg-2 img_peli">');
		//var img_small = $('<img id="img_ppl">').attr('src', "../assets/movies/movie" + index%3+1 + ".png");
		var img_small = $('<img id="img_ppl">').attr('src', peli.poster);
		var peli_span = $('<span class="caption scale-caption"></span>');
		var peli_title = $('<h3></h3>').text('Titulo');
		//var peli_desc_short = $('<p></p>').text(peli.descripcionPelicula);
		var peli_desc_short = $('<p></p>').text(peli.description_short);
	
		img_small.appendTo(peli_small);
		peli_title.appendTo(peli_span);
		peli_desc_short.appendTo(peli_span);
		peli_span.appendTo(peli_small);
		peli_small.appendTo($("#movies_list"));

		index++;

	});

	$(".col-lg-2").click(function(){
		var peli_id = $(this).attr('id');
		$('#img_ppl').css('background-image', 'url('+ pelis[peli_id].poster +')');
		$('#titulo_ppl').text(pelis[peli_id].titulo);
		$('#desc_ppl').text(pelis[peli_id].description_long);
	})
}

/*function mapDOM(element, json) {
    var treeObject = {};

    // If string convert to document Node
    if (typeof element === "string") {
        if (window.DOMParser) {
              parser = new DOMParser();
              docNode = parser.parseFromString(element,"text/xml");
        } else { // Microsoft strikes again
              docNode = new ActiveXObject("Microsoft.XMLDOM");
              docNode.async = false;
              docNode.loadXML(element); 
        } 
        element = docNode.firstChild;
    }

    //Recursively loop through DOM elements and assign properties to object
    function treeHTML(element, object) {
        object["type"] = element.nodeName;
        var nodeList = element.childNodes;
        if (nodeList != null) {
            if (nodeList.length) {
                object["content"] = [];
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].nodeType == 3) {
                        object["content"].push(nodeList[i].nodeValue);
                    } else {
                        object["content"].push({});
                        treeHTML(nodeList[i], object["content"][object["content"].length -1]);
                    }
                }
            }
        }
        if (element.attributes != null) {
            if (element.attributes.length) {
                object["attributes"] = {};
                for (var i = 0; i < element.attributes.length; i++) {
                    object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
                }
            }
        }
    }
    treeHTML(element, treeObject);

    return (json) ? JSON.stringify(treeObject) : treeObject;
}*/