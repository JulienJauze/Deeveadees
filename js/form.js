function addFilm(){
    
    var film = {
        
        titre : $("#titre").val(),
        jaquette : $("#jaquette").val()
  
        
    };
    
    $.ajax({
        type: "POST",
        url: "127.0.0.1:13107/films/add",
        data: film,
        success : function(retour){
            alert("Envoi réussi");
        }
        ,
        error : function(retour){
            alert("erreur de l'envoi");
        }
    });
    
    
}

