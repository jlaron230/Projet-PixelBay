
//affichage de la classe d'objets jeuX avec leur données spécifique
let jeu1 = {
        Titre : 'warcraft1',
        AnneeDeSortie : '94',
        Genre :'Strategie',
        Score : '75'
    }

let jeu2 = {
        Titre : 'Pong',
        AnneeDeSortie : '72',
        Genre :'Arcade',
        Score : '88'
    }

    affichage(jeu1, jeu2)
//Je récupère en paramètre les deux classes d'objets jeuX
    function affichage (warcraft, pong){
        console.log(warcraft, pong);
    }
    //calcul du score de chaque jeux multiplier par l'année de sortie diviser par 100
    function GetPopularite (jeu1, jeu2) {
        //calcul du score de popularité pour par rapport au score et l'année de sortie du jeu en faisant un produit en croix
        let popularite1 = jeu1.Score * jeu1.AnneeDeSortie / 100;
        let popularite2 = jeu2.Score * jeu2.AnneeDeSortie / 100;
        console.log(`Popularité de ${jeu1.Titre} est de ${popularite1}`, `Popularité de ${jeu2.Titre} est de ${popularite2}`);
    }


GetPopularite(jeu1, jeu2)