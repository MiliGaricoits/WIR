
//var server = 'localhost:15000/';
var server = '54.68.165.44:15000/';

$(document).ready(function(){

	sessionStorage.server = server
	//var globales = new Globales();
	//globales.setServer(server);

	$('#fbLoginButton').click(function(){
/*
		sessionStorage.facebook_id = "2222222222";
		window.location = "views/home.html";
*/
		FB.getLoginStatus(function(response){

			if (response.status === 'connected') {

				var idFacebook = response.authResponse.userID;
				var userName;
				// the user is logged in and has authenticated your
				// app, and response.authResponse supplies
				// the user's ID, a valid access token, a signed
				// request, and the time the access token 

				sessionStorage.facebook_id = idFacebook;

				FB.api('/me', function(user) {
					
					userName = user.name;
					//userName = 'lala';

					FB.api(
					    "/me/picture",
					    {
					        "redirect": false,
					        "height": "200",
					        "type": "normal",
					        "width": "200"
					    },
					    function (response) {
					      if (response && !response.error) {
					        
					        sessionStorage.profile_pic = response.data.url;
					      }
					    }
					);
	
					$.ajax({
                        type : "POST",
                        url: "http://"+server+"saveUserData",
                        data: "nombre="+userName+"&idFacebook="+idFacebook,
                        contentType: 'application/x-www-form-urlencoded',
                        dataType: 'json'
                    }).done(function(response){
                    	console.log('done');
                    	window.location = "views/home.html";

                    }).fail(function(jqXHR, textStatus){

                    	console.log('fail');

					});

				});

			} 
			else{

				// the user isn't logged in to Facebook.
				
				FB.login(function(){

					FB.api('/me', function(user) {
				
						userName = user.name;

						var idFacebook = user.id;
						sessionStorage.facebook_id = idFacebook;
						//userName = 'lala';

						FB.api(
						    "/me/picture",
						    {
						        "redirect": false,
						        "height": "200",
						        "type": "normal",
						        "width": "200"
						    },
						    function (response) {
						      if (response && !response.error) {
						        
						        sessionStorage.profile_pic = resopnse.data.url;
						      }
						    }
						);

						$.ajax({
	                        type : "POST",
	                        url: "http://"+server+"saveUserData",
	                        data: "nombre="+userName+"&idFacebook="+idFacebook,
	                        contentType: 'application/x-www-form-urlencoded',
	                        dataType: 'json'
	                    }).done(function(response){

	                    	console.log('done');
	                    	window.location = "views/home.html";

	                    }).fail(function(jqXHR, textStatus){

	                    	console.log('fail');

						});

					});

				});

			};

		});

	});

});