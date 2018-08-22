
var listeDeFilm = [
    {
        id: 1,
        titre: "- DieHard -",
        jaquette: "./images/d04.jpg"

    },
    {
        id: 2,
        titre: "- Madmax -",
        jaquette: "./images/madmax.jpg"

    },
    {
        id: 3,
        titre: "- Jurassic Park -",
        jaquette: "./images/Jurassicpark.jpg"

    },
    {
        id: 4,
        titre: "- Independance Day -",
        jaquette: "./images/independanceday.jpg"
    },
    {
        id: 5,
        titre: "- Seul sur Mars -",
        jaquette: "./images/mars.jpg"
    },
    {
        id: 6,
        titre: "- Braveheart -",
        jaquette: "./images/braveheart.jpg"
    }

];

var contenu = document.getElementById("content");

createEverything();

function createEverything() {

    for (var i = 0; i < listeDeFilm.length; i++) {

        var film = listeDeFilm[i];

        var col = document.createElement("div");
        col.className = "col-sm-4";

        var titles = document.createElement("p");
        titles.className = "title";
        titles.innerHTML = film.titre;
        col.appendChild(titles);

        var image = document.createElement("img");
        image.className = "img-responsive";
        image.setAttribute("src", film.jaquette);
        col.appendChild(image);

        var bouton = document.createElement("a");
        bouton.className = "btn btn-primary btn-block";
        bouton.innerHTML = "Voir la Fiche";
        col.appendChild(bouton);



        contenu.appendChild(col);
    }
}














//    //gestion du titre:
//    let baliseTitre = document.createElement("h2");
//    baliseTitre.innerHTML = film.titre;
//    div.appendChild(baliseTitre);
//    //gestion de l'image:
//    let image = document.createElement("img");
//    image.setAttribute("src",film,jaquette);
//    div.appendChild(image);
//
//    //gestion de la description
//    
//    //apres avoir fabriquer notre structure de film
//    contenu.appendChild(div);



//function duplicateTemplate(){
//    
//    for (var i = 0; i<listeDeFilm.length; i++){
//        
//        let film = listeDeFilm[i];
//        //duplication de la balise "template"
//        let template = document.getElementById("film").cloneNode(true);
//        contenu.appendChild(template);
//        template.id = film.id;
//        //on efface la classe Hiden de film
//        template.className = "";
//        //récupération des enfants de la balise
//        let baliseTitre = template.children[0];
//        let baliseImaege = template.children[1];
//        let baliseDescription = template.children[2];
//        //Mise a jour des données dans la vue
//        baliseTitre.innerHTML = film,titre;
//        baliseImage.setAttribute("src",film,jaquette);
//        baliseDescription.innerHTML = film, description;
//        
//        contenu.appendChild(div);
//}
//}


