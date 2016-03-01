var menuSecretaria = function(groups)
{
    var secretarias = {};
    var listadesecretariasEsubordinadas = Object.keys(groups);
  
    for(var i in listadesecretariasEsubordinadas)
    {
        var secretarianome = listadesecretariasEsubordinadas[i].split(':')[0];
        var subordinada = listadesecretariasEsubordinadas[i].split(':')[1];
                    
        if(Object.keys(secretarias).indexOf(secretarianome)===-1)
        {
            secretarias[secretarianome]=[subordinada];
        }
        else
        {
            secretarias[secretarianome].push(subordinada);  
        }
    }
    return secretarias;
};