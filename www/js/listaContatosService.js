angular.module("projetoBranco").factory("listaContatosService", function(){
	var _getListaContatos = function(){
		return [{nome:"Joao"}, {nome:"Maria"}, {nome:"Tereza"}];
	}

	return {
		getListaContatos: _getListaContatos 
	};
});