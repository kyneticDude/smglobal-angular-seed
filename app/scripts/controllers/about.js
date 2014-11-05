'use strict';

(function(){
	var app = angular.module('smglobalApp', [ ]);

  	app.controller('AboutCtrl', function() {
    	this.partners = accreditation;
  	});

  	var accreditation = {
  		name: 'Technology Partners',
  		description: 'SM Global Tech partners with great market leaders in the technology industry bringing you<br>
the latest hardware and software capabilities', 
		image: 'images/partners/microsoft-logo.jpg',
	}
})();
