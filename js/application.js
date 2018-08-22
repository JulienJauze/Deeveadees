// interaction avec le serveur
$(document).ready(function(){
var contenu = $("#content2");

$(document).ready(function () {

    $.ajax({

        type:"GET",

        url: "http://127.0.0.1:13107/films",

        dataType: 'json',

        success : function(data){

            loadpage(data);

        },

        error : function(param1,param2){

            alert("erreur");

        }

    });        

});

// manipulation du DOM
    function loadpage(listeDeFilm) {

    for (var i = 0; i < listeDeFilm.length; i++) {
        
        var film = listeDeFilm[i];
        
        var col = $("<div>").addClass("col-sm-4");
        
        var titles = $("<p>").addClass("title").text(film.titre);
        $(col).append(titles);
        
        var image = $("<img>").addClass("img-responsive").html(film.titre).attr("src",film.jaquette);
        $(col).append(image);
        
        var bouton = $("<a>").addClass("btn btn-primary btn-block").text("Voir la Fiche").attr("href","http://localhost:8383/Deeveadees/details.html?id=" + film.id);
        $(col).append(bouton);
        
        $(contenu).append(col);
    }
};
});

