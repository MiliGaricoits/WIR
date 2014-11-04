

$(document).ready(function(){

	FB.init({//la app tiene que tener una url
		appId      : 'id-app',
	    status     : true,
	    xfbml      : true,
	    version    : 'v2.0'
	});

	FB.getLoginStatus(function(response){

		if (response.status === 'connected') {

			// the user is logged in and has authenticated your
			// app, and response.authResponse supplies
			// the user's ID, a valid access token, a signed
			// request, and the time the access token 
			// and signed request each expire

		} 
		else if (response.status === 'not_authorized'){

			// the user is logged in to Facebook, 
			// but has not authenticated your app

		}
		else{

			// the user isn't logged in to Facebook.
			
			FB.login(function(){

				FB.api('/me/likes', function(response) {

					//en response vienen los likes de guacho

				});

			});

		};

	});

});