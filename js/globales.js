var Globales = new function Globales(){
	
	var instance = this;

	this.facebook_id = null;
	this.server;

	this.resetValues = function(){
		this.facebook_id = null;
		this.server = '';
	}

	Globales.getInstance = function(){
		return instance;
	}

	this.getFacebookID = function(){
		return this.facebook_id;
	}

	this.getServer = function(){
		return this.server;
	}

	this.setFacebookID = function(id){
		this.facebook_id = id;
	}

	this.setServer = function(server){
		this.server = server;
	}

	return Globales;
}