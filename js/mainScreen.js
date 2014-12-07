
//var server = 'localhost:15000/';
var server = '54.68.165.44:15000/';

$(document).ready(function(){

	sessionStorage.server = server

	$('#fbLoginButton').click(function(){

		/*sessionStorage.facebook_id = "2222222222";
		sessionStorage.profile_pic = "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p200x200/1545553_10203027317981537_2039471252_n.jpg?oh=5f8078e0ff79dccbfedfa0a060d46722&oe=54FFCD67&__gda__=1427070840_cc236b1574e1f6f726685ac81e4fdbaf";
		sessionStorage.username = "Mili Garicoits";
		window.location = "views/home.html"; */

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
					sessionStorage.username = userName;

					FB.api(
					    "/me/picture",
					    {
					        "redirect": false,
					        "height": "60",
					        "type": "normal",
					        "width": "60"
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
						sessionStorage.username = userName;

						var idFacebook = user.id;
						sessionStorage.facebook_id = idFacebook;

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

				});

			};

		});

	});

});