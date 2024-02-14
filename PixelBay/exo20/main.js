// Code de départ
let collection = [
    // Votre code pour créer la collection de jeux
    {
        titre: "Space Adventure",
        anneeSortie: 1984,
        scores: [85, 85, 90, 78, 88]
    },

    {
        titre: "Minecraft",
        anneeSortie: 2011,
        scores: [85, 55, 40, 65, 90]
    },

    {
        titre: "Pong",
        anneeSortie: 1972,
        scores: [21, 75, 86, 33, 75]
    },
    // ...
]

testJeu(collection);
//affiche le titre, la sorti du jeu en année et les scores des jeux
function testJeu (a){
    console.log(`Affichage du score pour le ${a[0].titre} qui est sorti en ${a[0].anneeSortie}, les scores sont de ${a[0].scores}` );

 for (let i=0; i< a.length; i++){
    //pour toutes la collection
//effectue l'addition de tous les scores avec la méthode reduce(), critiqueTotal récupère l'opération d'addition des scores diviser par la longeur des scores qui est donc de 5 et nous renvoi le résultat total
//console.log(`Affichage du score pour ${a[i].titre} qui est sorti en ${a[i].anneeSortie}, les scores sont de ${a[i].scores}` );

    const sumTotal = a[i].scores.reduce((acc, curr) => acc + curr, 0 );
    let critiqueTotal = sumTotal / a[i].scores.length;

   // console.log(`La moyenne des critiques pour le jeu ${a[i].titre}, sorti en ${a[0].anneeSortie} et d'une critique de ${critiqueTotal} / 100`);

 }
//la même opération mais pour un objet de la collection
    const sum = a[0].scores.reduce((acc, curr) => acc + curr, 0);
    let critique = sum / a[0].scores.length;
   // console.log(`La moyenne de la critique pour le jeu ${a[0].titre}, sorti en ${a[0].anneeSortie} et de ${critique} / 100`);
}