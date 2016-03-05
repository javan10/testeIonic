angular.module("projetoBranco").factory("listaContatosService", function(){
	var _getListaContatos = function(){
		return [{nome:"joao"}, {nome:"Maria"}, {nome:"Tereza"}];
	}

	return {
		getListaContatos: _getListaContatos 
	};
});