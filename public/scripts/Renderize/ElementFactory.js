
/**
*@object é um objeto como este:
* "view": {
                "title": "--",
                "readOnly": true,
                "show": false,
                "showAs": "text",
                "defaultValue": "",
                "width": "",
                "mask": "",
                "segment": "Dados Pessoais"
              }
* 
* O retorno é um objeto que possui a estrutura: 
* {"Dados Pessoais":{
   "fields":
     ["<label for="Nome">Nome</label><input type="text" name="Nome"></input>",
     "<label for="Sexo">Sexo</label><div class="ui selection dropdown"><input type="hidden" name=\"Sexo\"></input><div class=\"text\"></div><i class=\"dropdown icon\"></i><div class=\"menu\"><div class=\"item\" data-value=\"Masculino\">Masculino</div><div class=\"item\" data-value=\"Feminino\">Feminino</div><div class=\"item active\" data-value=\"\"></div></div></div>"],
   "contextmenu":"dados-pessoais, "id": "Dados-Pessoais.cpf"
   }
* }
* 
**/

/*FUNCAO PICA DAS GALÁXIAS*/
function ElementFactory() {
    
}

ElementFactory.prototype.buildSegment = function (data) {

    var formSegment = {};
    var segments = [];

    angular.forEach(data,function(value,key) {

        segments.push(new ElementFactory().createElement(value,key));
    });

    for(var i in segments) {
        /*procurando os segmentos do formulário selecionado*/
        angular.forEach(segments[i],function(value,key) {
            var valor = {};
            valor[value[1]] = value[0];
            var name_object = Object.keys(valor)[0];

            /*adiciona o nome do segmento e um array com os DOM's que lhe pertece*/
            if(Object.keys(formSegment).indexOf(key)==-1) {
                formSegment[key]= {};
                formSegment[key]['fields'] = {};
                formSegment[key]['fields'][name_object] = valor[name_object];
            }else {
                formSegment[key]['fields'][name_object] = valor[name_object];
            }

            var contextmenu = new ElementFactory().buildContextMenu(key);

            formSegment[key]['contextmenu']=contextmenu.toLowerCase();
        })
    }
    return formSegment;
};

/**
 * retorna um node a partir de um objeto JSON passado
 * @entity : nome da entidade na qual pertecente o objeto view
 * @object é um json view como o seguinte:
 * "view": {
                "title": "CPF",
                "readOnly": true,
                "show": true,
                "showAs": "text",
                "defaultValue": "",
                "width": "",
                "mask": "",
                "segment": "Dados Pessoais"
              }
  * a partir desse objeto é retornado um array de objeto, tendo como chave o segmento a que 
  * ele pertence e o valor um node html que é de acordo com o showAs desse objeto
  * no outro índice é um objeto com tendo como chave ID e o valor o nomedocampo
**/
ElementFactory.prototype.createElement = function(object,entity) {
    
    var View = object.view;
    var Data = object.data;
    this.nameInput = View.title;
    this.value = View.title.toUpperCase();
    this.defaultValues = View.defaultValue.split(",");
    this.segmentName = View.segment;
    this.response = {};
    this.id = entity || "id";
    this.entity = entity || "id";
    var html = {};
    var data = {'tag':'label','for':'${title}','html':'${title}'};
    this.label = json2html.transform(View,data);

    if(View.showAs=="select") {

        var divPai = document.createElement('div');

        var divSelection = document.createElement('div');
        divSelection.className = "ui selection dropdown";

        var input = document.createElement("input");
        input.type = "hidden";
        input.name = View.title;
        input.id = this.entity;

        var divText = document.createElement("div");
        divText.className = "text";
        divText.id=View.title;

        var icon = document.createElement("i");
        icon.className = "dropdown icon";

        var divMenu = document.createElement("div");
        divMenu.className = "menu";

        var divItemOne = document.createElement("div");
        divItemOne.className = "item";
        divItemOne.setAttribute("data-value",this.defaultValues[0]);
        divItemOne.textContent = this.defaultValues[0];

        var divItemTwo = document.createElement("div");
        divItemTwo.className = "item";
        divItemTwo.setAttribute("data-value",this.defaultValues[1]);
        divItemTwo.textContent = this.defaultValues[1];        

        var divItemDefault = document.createElement("div");
        divItemDefault.className = "item";
        divItemDefault.setAttribute("data-value","");
        divItemDefault.textContent = "";

        divPai.appendChild(divSelection);

        divSelection.appendChild(input);
        input.insertAdjacentElement("afterend",divText);
        divText.insertAdjacentElement("afterend",icon);
        icon.insertAdjacentElement("afterend",divMenu);

        divMenu.appendChild(divItemOne);
        divItemOne.insertAdjacentElement("afterend",divItemTwo);
        divItemTwo.insertAdjacentElement("afterend",divItemDefault);

        html = divPai.innerHTML;
    }
    else if(View.showAs=='text') {

        var divPai = document.createElement('div');

        var input = document.createElement('input');
        input.type = View.show ? View.showAs : "hidden";
        input.name = View.title=="--" ? "id" : View.title;
        input.id = this.entity;
        input.maxLength = Data.length;

        divPai.appendChild(input);

        html = divPai.innerHTML;
    }
    else if(View.showAs=='multiple select, data preloaded') {

        var divPai = divPai = document.createElement('div');

        var select = document.createElement("select");
        select.className = "ui fluid dropdown";
        select.setAttribute("multiple","");
        select.id = this.entity;
        // select.id = this.entity+"."+View.title.toLowerCase().replace(/á|é|í|ó|ú/g, 'u');

        var optionOne = document.createElement("option");
        optionOne.value = "maca";
        optionOne.textContent = "maca";

        var optionTwo = document.createElement("option");
        optionTwo.value = "uva";
        optionTwo.textContent = "uva";

        select.appendChild(optionOne);
        divPai.appendChild(select);

        optionOne.insertAdjacentElement("afterend",optionTwo);

        html = divPai.innerHTML;

    }
    else if (View.showAs == 'search') {

        var divPai = document.createElement('div');

        var divSearch = document.createElement('div');
        divSearch.className = "ui search";

        var input = document.createElement('input');
        input.className = "prompt "+"ng-valid ng-dirty ng-valid-parse ng-touched";
        input.type = "text";
        input.name = View.title;
        input.id = this.entity;

        var divResults = document.createElement("div");
        divResults.className = "results";

        divSearch.appendChild(input);
        divPai.appendChild(divSearch);

        divSearch.insertAdjacentElement('afterend',divResults);

        html = divPai.innerHTML;
    }
    else {
      
    }

    this.response[this.segmentName]=[this.label + html,this.id];
    return this.response;
};

ElementFactory.prototype.buildContextMenu= function(key){

    this.contextmenu= key.replace(/ /g,'-');

    return this.contextmenu;
};