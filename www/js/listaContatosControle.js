angular.module("projetoBranco").controller("listaContatosControle", function($scope, listaContatosService){
	
	$scope.titulo = "Lista de Contatos";

	$scope.listaContatos =  listaContatosService.getListaContatos();
	//[{nome:"joao"}, {nome:"Maria"}, {nome:"Tereza"}];
	
});