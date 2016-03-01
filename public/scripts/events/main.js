/*
* Evento de ativar e desativar segmento de formulário
*/


var clickSegmentActive = function(){


    $('a.item.active').removeClass('active');
    $(this).addClass('active');
    var idsessaodedados = this.getAttribute('contextmenu');
    $('.sessao-de-dados').addClass('hidden');
    $('.sessao-de-dados#'+idsessaodedados).removeClass("hidden");
    
};