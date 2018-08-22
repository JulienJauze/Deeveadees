var url = window.location.href;
var id = parseInt(url.substring(url.lastIndexOf("=")+1));

   $(document).ready(function () {

    $.ajax({

        type:"GET",

        url: "http://127.0.0.1:13107/films/" + id,

        dataType: 'json',

        success : function(data){

            loadpage2(data);

        },

        error : function(param1,param2){

            alert("erreur");

        }

    });        

}); 

function loadpage2(fichefilm){

        $("#header").attr("src",fichefilm.header);
        $("#miniature1").attr("src",fichefilm.vignette1);
        $("#miniature2").attr("src",fichefilm.vignette2);
        $("#miniature3").attr("src",fichefilm.vignette3);
        $("#subtitle1").text(fichefilm.soustitre1);
        $("#subtitle2").text(fichefilm.soustitre2);
        $("#subtitle3").text(fichefilm.soustitre3);
        $("#descriptif").text(fichefilm.description);
  
}   


