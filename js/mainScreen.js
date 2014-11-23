


server = 'localhost:15000/';
var globales = Globales.getInstance();
globales.setServer(server);

$(document).ready(function(){

	$('#fbLoginButton').click(function(){

		FB.getLoginStatus(function(response){

			if (response.status === 'connected') {

				var idFacebook = response.authResponse.userID;
				var userName;
				// the user is logged in and has authenticated your
				// app, and response.authResponse supplies
				// the user's ID, a valid access token, a signed
				// request, and the time the access token 

				globales.setFacebookID(idFacebook);

				FB.api('/me', function(user) {
				
					userName = 'lala';

					FB.api('/me/movies', function(peliculas) {

						var container = $('center');

						container.append('</br>');
						container.append('</br>');

						for (var i = 0; i<peliculas.data.length; i++){
							container.append('</br>');
							container.append(peliculas.data[i].name);
						};

						container.append('</br>');
						console.log(peliculas);
	
						$.ajax({
	                        type : "POST",
	                        url: "http://"+server+"saveUserData",
	                        data: "nombre="+userName+"&idFacebook="+idFacebook+"&peliculas="+peliculas.data,
	                        contentType: 'application/x-www-form-urlencoded',
	                        dataType: 'json'
	                    }).done(function(response){
	                    	console.log('done');
	                    	window.location = "file:///Users/miligaricoits/Repository/WIR/WIR/views/home.html";

	                    }).fail(function(jqXHR, textStatus){

	                    	console.log('fail');

						};
	
					});

				});

			} 
			else{

				// the user isn't logged in to Facebook.
				
				FB.login(function(){

					FB.api('/me', function(user) {
				
						userName = 'lala';

						FB.api('/me/movies', function(peliculas) {

							var container = $('center');

							container.append('</br>');
							container.append('</br>');

							for (var i = 0; i<peliculas.data.length; i++){
								container.append('</br>');
								container.append(peliculas.data[i].name);
							};

							container.append('</br>');
							console.log(peliculas);
		
							$.ajax({
		                        type : "POST",
		                        url: "http://"+server+"saveUserData",
		                        data: "nombre="+userName+"&idFacebook="+idFacebook+"&peliculas="+peliculas.data,
		                        contentType: 'application/x-www-form-urlencoded',
		                        dataType: 'json'
		                    }).done(function(response){

		                    	console.log('done');
		                    	window.location = "file:///Users/miligaricoits/Repository/WIR/WIR/views/home.html";

		                    }).fail(function(jqXHR, textStatus){

		                    	console.log('fail');

							};
		
						});

					});

				}, {scope: 'user_likes'});

			};

		});

	});

});