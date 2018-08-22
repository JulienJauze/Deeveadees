
$(document).ready(function () {

    $.ajax({
        // requete get pour récupérer la liste de film
        type:"GET",
        url: "http://127.0.0.1:13107/films",
        dataType: 'json',
        success : function(data){
            loadpage3(data);
        },
        error : function(param1,param2){
            alert("erreur");
        }
    });        
});

// création de l'interface liste de film
function loadpage3(listeDeFilm) {

$("#contenu").empty();
var table = $("<table>");
   $("#contenu").append(table);
   $(table).addClass("table table-dark").append($("<thead>").append($("<tr>").append($("<th>").text("Titre")).append($("<th>").text("Auteur")).append($("<th>").text("Modifier")).append($("<th>").text("Supprimer"))));
var tbody = $("<tbody>");
$(table).append(tbody);
for(var i = 0; i < listeDeFilm.length; i++){
var tr = $("<tr>");
$(tr).append($("<td>").text(listeDeFilm[i].titre)).append($("<td>").text(listeDeFilm[i].auteur)).append($("<td>").append($("<button>").addClass("btn btn-primary btn-block").text("modifier"))).append($("<td>").append($("<button>").addClass("btn btn-danger btn-block").text("supprimer").attr("onclick","deleteFilm("+ listeDeFilm[i].id +");")));
$(tbody).append(tr);
   }};

/////////////////////////////////////////////////////////////////////////////////////////////////


function addFilm(){
    
    var film = {
        
        titre : $("#titre").val(),
        jaquette : $("#jaquette").val()
           
        
    };
    // requete post pour l'ajout d'un film
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:13107/films/add",
        data: film,
        dataType: 'json',
        success : function(retour){
            alert("Envoi réussi");
        },
        error : function(retour){
            alert("erreur de l'envoi");
        }
    });
    // requete get pour l'ajout dynamique 
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:13107/films",
        dataType: 'json',
        success : function(ndata){
            loadpage3(ndata);
        },
        error : function(retour){
            alert("erreur de l'envoi");
        }
    });       
};

//////////////////////////////////////////////////////////////////////////////////////////////

function deleteFilm(id){
    
    //requete post pour simuler la suppression en récupérant l'id du film
     $.ajax({
        type: "POST",
        url: "http://127.0.0.1:13107/films/" + id,
        dataType: 'json',
        success : function(retour){
            alert("suppression réussi");
        },
        error : function(retour){
            alert("erreur de suppression");
        }
    });
    
    // requete get pour mettre a jour la liste
     $.ajax({
   
        type:"GET",
        url: "http://127.0.0.1:13107/films",
        dataType: 'json',
        success : function(data){
            loadpage3(data);
        }
    });        
};

    
    
    
    
    
    
    
  

