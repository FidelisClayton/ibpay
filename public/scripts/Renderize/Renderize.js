
function Renderize() {

}

Renderize.prototype.renderize = function(id,fields) {

    angular.element("#"+fields.contextmenu).html(new Renderize().HTML(id,fields));
    angular.element('.ui.dropdown').dropdown();
    segmentFormActive();

};


/* construção de UMA SESSÃO DE DADOS */
/******** SAIDA DESTA FUÇÃO É COMO O SEGUINTE: ********/
/* 
<div class="ui form segment">
  <div class="ui ribbon label" style="margin-bottom: 15px;">Sessão de Dados: Família</div>
    <div class="field">
      <label for="Cidadao-pPai">Pai</label> <input name="Cidadao-pPai" class="semAcentosECaracteres semEspaco semNumeros" type="text">
    </div>
</div>
 */
Renderize.prototype.HTML = function(key , sessaoDeDados) {
    
    var classField = '';
    
    for(var i in sessaoDeDados.fields) {
      
        var dataObj = sessaoDeDados.fields[i] ;
        var idField = Object.keys(dataObj)[0];
        var field = dataObj[idField];
              
        classField +='<div class="field" id='+ idField +' required>'+ field + '</div>';
    }
    
    var content = ("Sessão de Dados: "+ key).toUpperCase();
    
    var html ='<div class="ui form segment">'+
    '<div class="ui ribbon label" style="margin-bottom: 15px;">'+
    content +'</div>'+ classField + '</div>';

    return html;
};
	
