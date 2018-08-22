// import du framework "express"
var express = require("express");
var bodyParser = require("body-parser");

// creation d'un objet "express"
var app = express();
app.listen(13107,"127.0.0.1");
console.log("Server open...");

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
        titre: "- Retour vers le Futur -",
        jaquette: "./images/futur4.jpg"
    }
];

var detailfilm = [
    
    {
        id: 1,
        header: "./images/die1.jpg",
        vignette1: "./images/cristal.jpg",
        vignette2: "./images/58.jpg",
        vignette3: "./images/enfer.jpg",
        description: "La saga met en vedette un policier, John McClane, qui n'a pas peur de recourir aux méthodes musclées pour mettre fin aux agissements criminels d'adversaires peu scrupuleux. En même temps, il vit des problèmes personnels qui minent sa vie professionnelle. Dans chacun des films, McClane est confronté à des terroristes nombreux, rusés, lourdement armés et impitoyables (en général, des anciens militaires reconvertis dans le banditisme). Tous les films se caractérisent par un dialogue direct (par téléphone) avec le chef des terroristes. Ces échanges ne manquent pas d'humour et marquent à chaque fois une gradation dans l'action. McClane affronte les terroristes et les tue toujours à lui seul, bénéficiant rarement d'aide extérieure et d'autres armes que son pistolet. Les films contiennent beaucoup de scènes d'action, le travail d'enquête progressant au fur et à mesure que les différents obstacles sont vaincus"
    
    },
    {
        id: 2,
        header: "./images/mad1.jpg",
        vignette1: "./images/max1.jpg",
        vignette2: "./images/max2.jpg",
        vignette3: "./images/max3.jpg",
        soustitre1: "mad max 1",
        soustitre2: "mad max 2",
        soustitre3: "mad max 3",
        description: "Ancien policier de la route, Max Rockatansky (Tom Hardy) erre désormais seul au volant de son bolide (une Ford Falcon XB 351) dans un monde dévasté où les clans de cannibales, les sectes et les gangs de motards s'affrontent dans des déserts sans fin pour l'essence et l'eau. L'un de ces clans est aux ordres de « Immortan Joe » (Hugh Keays-Byrne), un ancien militaire devenu leader tyrannique2. L'une de ses plus fidèles partisanes, l'« imperator » Furiosa (Charlize Theron), le trahit et s'enfuit avec un bien d'une importance capitale pour le chef de guerre : ses « épouses », un groupe de jeunes femmes lui servant d'esclaves et de « pondeuses."
    },
    {
        id: 3,
        header: "./images/jurassic.jpg",
        vignette1: "./images/jurassic1.jpg",
        vignette2: "./images/jurassic2.jpg",
        vignette3: "./images/jurassic3.jpg",
        soustitre1: "jurassic park",
        soustitre2: "jurassic park 2",
        soustitre3: "jurassic park 3",
        description: "John Parker Hammond, le PDG de la puissante compagnie InGen, parvient à donner vie à des dinosaures grâce à la génétique et décide de les utiliser dans le cadre d’un parc d'attractions qu’il compte ouvrir sur une île au large du Costa Rica. Avant l'ouverture, il fait visiter le parc à un groupe d'experts pour obtenir leur aval. Pendant la visite, une tempête éclate et un informaticien corrompu par une entreprise rivale en profite pour couper les systèmes de sécurité afin de voler des embryons de dinosaures. En l'absence de tout système de sécurité pendant plusieurs heures, les dinosaures s'échappent sans mal, mais le cauchemar des visiteurs ne fait que commencer..."
    },
    {
        id: 4,
        header: "./images/dependance.jpg",
        vignette1: "./images/id1.jpg",
        vignette2: "./images/id2.jpg",
        vignette3: "./images/id3.jpg",
        soustitre1: "independance day",
        soustitre2: "independance day",
        soustitre3: "independance day",
        description: "Independence Day (parfois abrégé ID4) est un film de science-fiction américain réalisé par Roland Emmerich et sorti en 1996. Il raconte l'invasion d'extraterrestres venus piller les ressources de la Terre, devant lesquels des groupes d'individus et de familles fuient et convergent vers le désert du Nevada. Avec le reste de la population américaine, ils espèrent participer à une bataille de la dernière chance pour la survie de l'espèce humaine. Symboliquement cette bataille a lieu le 4 juillet, le jour de la fête nationale américaine."
    },
    {
        id: 5,
        header: "./images/martian.jpg",
        vignette1: "./images/martian1.jpg",
        vignette2: "./images/martian2.jpg",
        vignette3: "./images/martian3.jpg",
        soustitre1: "The martian",
        soustitre2: "The martian",
        soustitre3: "The martian",
        description: "En 2035, l'équipage de la mission de la NASA Ares III est à l’œuvre sur le sol de Mars lorsque survient une tempête d'une intensité particulièrement élevée. La fusée qu'ils doivent utiliser pour repartir risque d'être déséquilibrée par le vent et détruite. L'équipage doit absolument quitter Mars avant que l'inclinaison de la fusée ne dépasse un seuil critique et ne les empêche de décoller. Alors que les astronautes se replient vers la fusée, l'un d'entre eux, Mark Watney, est frappé par une antenne. Il est happé par le vent et disparaît. Ses collègues le laissent pour mort, après quelques recherches de la commandante Lewis. Placés sous la menace de la destruction de leur fusée, ils décident de décoller sans lui...."
    },
    {
        id: 6,
        header: "./images/futur.jpg",
        vignette1: "./images/futur1.jpg",
        vignette2: "./images/futur2.jpg",
        vignette3: "./images/futur3.jpg",
        soustitre1: "Retour vers le Futur 1",
        soustitre2: "Retour vers le Futur 2",
        soustitre3: "Retour vers le Futur 3",
        description: "1985. Le jeune Marty McFly mène une existence anonyme auprès de sa petite amie Jennifer, seulement troublée par sa famille en crise et un proviseur qui serait ravi de l'expulser du lycée. Ami de l'excentrique professeur Emmett Brown, il l'accompagne un soir tester sa nouvelle expérience : le voyage dans le temps via une DeLorean modifiée. La démonstration tourne mal : des trafiquants d'armes débarquent et assassinent le scientifique. Marty se réfugie dans la voiture et se retrouve transporté en 1955. Là, il empêche malgré lui la rencontre de ses parents, et doit tout faire pour les remettre ensemble, sous peine de ne pouvoir exister..."
    }
   
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.get("/", function(request,response){
            
           response.send("Acceuil");
});

// récupération de la liste de Film
app.get("/films", function(request,response){
            
            response.setHeader('Access-Control-Allow-Origin', '*');
            response.setHeader("content-Type","application/json");
            response.status(200).json(listeDeFilm);
           
});



// récupération d'un film par son ID
app.get("/films/:id", function(request,response){
            
            response.setHeader('Access-Control-Allow-Origin', '*');
            let idFilm = parseInt(request.params.id);
            let film;
            for (var i = 0; i<detailfilm.length; i++){
                   film = detailfilm[i];
                    if(idFilm === detailfilm[i].id){ 
                          response.setHeader("content-Type","application/json");
                          response.status(200).json(film);
}
}
                          response.status(404).send("film inconnu");        
});


// génération de l'id d'un film
function generateId(){
    var idMax = 0;
    for (var i in listeDeFilm){
        if(listeDeFilm[i].id > idMax){
            idMax = listeDeFilm[i].id;
        }
    }
return idMax + 1;
}


// ajout d'un film dans la liste   
app.post("/films/add",function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
     let film = req.body;
     film["id"] = generateId();
    
                        listeDeFilm.push(film);
                        res.status(200).json(req.body);

});


// pour la suppression on cherche le film par son id comme pour le "getById"
app.post("/films/:id", function(request,response){
            
            response.setHeader('Access-Control-Allow-Origin', '*');
            let idFilm = parseInt(request.params.id);
            let film;
            for (var i = 0; i<listeDeFilm.length; i++){
                   film = listeDeFilm[i];
                    if(idFilm === listeDeFilm[i].id){ 
                          listeDeFilm.splice(i,1);
                          break;
                         
}
}
                          
                          response.setHeader('Content-Type', 'application/json');
                          response.status(200).send(listeDeFilm);        
});

