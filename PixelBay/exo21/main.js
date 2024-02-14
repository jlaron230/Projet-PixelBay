let collection = [
    {
        titre: "Space Adventure",
        anneeSortie: 1984,
        genre: "Arcade",
        scores: [85, 87, 90, 78, 88] 
    },

    {
        titre: "Mario",
        anneeSortie: 1985,
        genre: "Arcade",
        scores: [90, 20, 75, 85, 15] 
    },

    {
        titre: "Starfield",
        anneeSortie: 2023,
        genre: "Aventure",
        scores: [35, 66, 75, 59, 13] 
    },

    {
        titre: "World of Warcraft",
        anneeSortie: 2004,
        genre: "RPG",
        scores: [56, 76, 80, 96, 22] 
    },

    {
        titre: "The Legend of Zelda: Breath of the Wild",
        anneeSortie: 2017,
        genre: "Action-aventure",
        scores: [97, 95, 98, 96, 100] 
    },

    {
        titre: "The Witcher 3: Wild Hunt",
        anneeSortie: 2015,
        genre: "Action-RPG",
        scores: [92, 94, 95, 93, 96] 
    },

    {
        titre: "Grand Theft Auto V",
        anneeSortie: 2013,
        genre: "Action-aventure",
        scores: [97, 96, 95, 93, 98] 
    },

    {
        titre: "Red Dead Redemption 2",
        anneeSortie: 2018,
        genre: "Action-aventure",
        scores: [97, 93, 94, 98, 95] 
    },

    {
        titre: "Dark Souls III",
        anneeSortie: 2016,
        genre: "Action-RPG",
        scores: [89, 91, 90, 87, 92] 
    },

    {
        titre: "The Last of Us Part II",
        anneeSortie: 2020,
        genre: "Action-aventure",
        scores: [94, 93, 95, 92, 96] 
    },

    {
        titre: "Super Mario Odyssey",
        anneeSortie: 2017,
        genre: "Plates-formes",
        scores: [97, 95, 98, 96, 100] 
    },

    {
        titre: "Uncharted 4: A Thief's End",
        anneeSortie: 2016,
        genre: "Action-aventure",
        scores: [93, 92, 94, 91, 95] 
    }
    // ...
]
// variables pour l'année de limite
let limitTime = 2015;
//tableau d'un objet pour le type de genre de jeux
let TypeGenre = [{
  genre: "Action-aventure",
}]
filterDate(collection)
// Définition de la fonction de filtrage par date
function filterDate (collection) {
    // Utilisation de la méthode filter() pour filtrer les jeux sortis après 1980
    let jeuxFiltres = collection.filter(jeu => jeu.anneeSortie > limitTime);

    // Retourne la liste des jeux filtrés
     for (let genreObj of TypeGenre) {
        let genre = genreObj.genre;
        let jeuxFiltresParGenre = jeuxFiltres.filter(jeu => jeu.genre === genre);
       console.log(`Jeux du genre ${genre}:`);
       //la boucle forEach pour récupéré la classe de la collection et afficher le titre des jeux et leur années de sortie
        jeuxFiltresParGenre.forEach(jeu => {
           console.log(`- ${jeu.titre} (${jeu.anneeSortie})`);
       });
}
}

filterDate(collection);
