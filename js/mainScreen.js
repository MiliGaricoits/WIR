

$(document).ready(function(){

	$('#fbLoginButton').click(function(){

		FB.getLoginStatus(function(response){

			if (response.status === 'connected') {

				// the user is logged in and has authenticated your
				// app, and response.authResponse supplies
				// the user's ID, a valid access token, a signed
				// request, and the time the access token 

				FB.api('/me/movies', function(response) {

					var container = $('center');

					container.append('</br>');
					container.append('</br>');

					for (var i = 0; i<response.data.length; i++){
						container.append('</br>');
						container.append(response.data[i].name);
					};

					container.append('</br>');
					console.log(response);

				});

			} 
			else{

				// the user isn't logged in to Facebook.
				
				FB.login(function(){

					FB.api('/me/movies', function(response) {

						var container = $('center');

						container.append('</br>');
						container.append('</br>');

						for (var i = 0; i<response.data.length; i++){
							container.append('</br>');
							container.append(response.data[i].name);
						};

						container.append('</br>');
						console.log(response);

					});

				}, {scope: 'user_likes'});

			};

		});

	});

});