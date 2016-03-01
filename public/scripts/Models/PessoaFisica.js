function PessoaFisica() {
    this.cor="";
    this.foto="";
    this.rcDataDoRegistro="";
    this.rcFolhaDoLivro="";
    this.rcNomeDoCartorio="";
    this.rcNomeDoLivro="";
    this.rcNumero="";
    this.religiao="";
    this.sexo="";
    this.tipoSanguineo="";
    this.necessidadeEspecial="";
    this.respPai="";
    this.respMae="";
    this.respResponsavel="";
    this.respCpf="";
}

PessoaFisica.prototype = new Pessoa();