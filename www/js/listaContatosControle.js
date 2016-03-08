angular.module("projetoBranco").controller("listaContatosControle", function($scope, listaContatosService, $cordovaContacts, $ionicPlatform){
	
	$scope.titulo = "Lista de Contatos";

	$scope.listaContatos =  listaContatosService.getListaContatos();

	$scope.contacts = {};  
	//[{nome:"joao"}, {nome:"Maria"}, {nome:"Tereza"}];

	/*$scope.addContact = function() {
	    $cordovaContacts.save($scope.contact).then(function(result) {
	        console.log('Contact Saved!');
	    }, function(err) {
	        console.log('An error has occured while saving contact data!');
	    });
    };*/

    $scope.getAllContacts = function() {
    	/*function onSuccess(contacts) {
		    alert('Found ' + contacts.length + ' contacts.');
		};

		function onError(contactError) {
		    alert('onError!');
		};*/
    	//var fields = options.fields || ['id', 'displayName'];
    	var options = {};
    	//if ($ionicPlatform.isAndroid()) {
      		options.hasPhoneNumber = true;
      		options.fields=  [ 'displayName'];
      		options.filter="";
      		         //hasPhoneNumber only works for android.
    	//};
    	//var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    	//$cordovaContacts.find({filter : '', fields:  [ 'displayName']}).then(function(allContacts) //{filter : '', fields:  [ 'displayName']}
    	$cordovaContacts.find(options).then(function(allContacts) //{filter : '', fields:  [ 'displayName']}
    		{ //omitting parameter to .find() causes all contacts to be returned
        	$scope.contacts = allContacts;
        	console.log(JSON.stringify(allContacts));
    	});

	};


	/*$scope.removeContact = function() {
	     
	    $scope.removeContact = {};   // We will use it to save a contact
	    $scope.removeContact.displayName = 'Gajotres'; // Contact Display Name          
	     
	    $cordovaContacts.remove($scope.removeContact).then(function(result) {
	        console.log('Contact Deleted!');
	        console.log(JSON.stringify(result));
	    }, function(error) {
	        console.log('An error has occured while deleting contact data!');
	        console.log(JSON.stringify(error));
	    });
	}  */
	

});