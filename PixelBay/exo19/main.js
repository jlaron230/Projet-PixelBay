

let jeuxRetro = [
    {
    Titre : 'Zelda',
    Genre :'RPG',
    AnneeDeSortie : '1999'
    },

    {
    Titre : 'Sonic',
    Genre :'Arcade',
    AnneeDeSortie : '2000'
    },
    {
    Titre : 'Mario',
    Genre :'Arcade',
    AnneeDeSortie : '1983'
    }
    
]

let jeuxModerne = [
    {
    Titre : 'The Witcher',
    Genre :'RPG',
    AnneeDeSortie : '1999'
    },

    {
    Titre : 'Battlefield',
    Genre :'FPS',
    AnneeDeSortie : '1999'
    },
    {
    Titre : 'Starfield',
    Genre :'Action/Adventure',
    AnneeDeSortie : '2023'
    }
    
]

creerJeuRetro(jeuxRetro, jeuxModerne)

 function creerJeuRetro(titre, genre, anneedesortie){
    return afficherListeJeux( titre, genre, anneedesortie);
    
}
//afficher la liste des jeux
function afficherListeJeux (a,b,c){
console.log(a,b,c) //
return calculerMoyenneAnneesSortie(jeuxRetro, jeuxModerne);
}
//calculer la longeur du paramètre a et b de jeux rétro et jeux moderne pour ajouter les années de sortie diviser par la longeur des 
//années de sortie, récupère le résultat qui additionne les deux moyenne diviser par 1000
function calculerMoyenneAnneesSortie(a,b){
    let moyennea = 0;
    let moyenneb = 0;
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        moyennea += a[i].AnneeDeSortie / a.length
        //* a[i].AnneeDeSortie  / a.length;

    }

    for (let i = 0; i < b.length; i++) {
        moyenneb  += b[i].AnneeDeSortie / b.length
        Math.floor(moyenneb)
    }
    result = moyennea + moyenneb / 1000
    console.log(result)


}
