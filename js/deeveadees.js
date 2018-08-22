// liaison entre la directive "ng-app" et la couche métier (afficher une liste de film)
var deeveadeesModule = angular.module('deeveadees', []);

//définis un controller
deeveadeesModule.controller('listeDeFilms', function ($scope) {
    $scope.modalShower = false;

    $scope.Films = [
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

    $scope.film = {

        id: 0,
        titre: "",
        jaquette: ""


    };


    // affiche la modale 
    $scope.detail = function (id) {
        // le film par son id est stocké dans la variable film
        $scope.film = $scope.getFilm(id);
        $scope.modalShower = true;

    };

    $scope.hideModal = function () {
        $scope.modalShower = false;
    };
    // fonction pour récup un film par son id
    $scope.getFilm = function (id) {
            for(var i = 0; i<$scope.Films.length; i++){
               if($scope.Films[i].id === id){
                
                return $scope.Films[i];
               }
                
            }
         

    };







});

