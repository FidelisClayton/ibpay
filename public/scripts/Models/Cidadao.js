function Cidadao(){
	this.cpf = "";
	this.cmCategoria = "";
	this.cmDataDeEmissao = new Date();
	this.cmNumero = "";
	this.ctDataDeEmissao = "";
	this.ctNumero = "";
	this.ctSerie = "";
	this.estadoCivil = "";
	this.nacionalidade = "";
	this.naturalidade = "";
	this.rgDataDeEmissao = new Date();
	this.rgNumero = "";
	this.rgOrgaoExpeditor = "";
	this.rgUf = "";
	this.teNumero = "";
	this.teSecao = "";
	this.teZona = "";
	this.pisPasep = "";
	this.fpFormacao = "";
	this.fpNumeroDeOrdemDoConselho = "";
	this.fpConselho = ""
	this.fpProfissao="";
	this.fpGrauDeInstrucao = "";
	this.cnhNumero = "";
	this.cnhCategoria = "";
	this.cnhValidade = "";
	this.ssNis = "";
	this.ssNumeroCaixa = "";
	this.ssNumeroRegistro = "";
	this.status = "";
	this.funcionarios = new Array();
	this.documentos = new Array();
}

Cidadao.prototype = new PessoaFisica();