
//Variable jeux
let jeux = ["Space Adventure", "Castle Quest", "Mystery Island",
 "Robot Wars", "Jungle Journey", "Racing Rush", 
 "Pirate's Treasure", "Alien Invasion", "Super Sports", "Haunted Mansion", "Galactic Odyssey", "Winter Wonderland"];

//Variable mois
 let mois = ["Janvier", "Février", "Mars", "Avril",
 "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

 //si i est inférieur à la longeur du tableau mois alors i va s'itérer jusqu'a 
 //la longeur du tableau
 for (let i = 0; i < mois.length; i++){
       //Affiche l'alerte pour les jeux en fonction des mois de l'année
        alert(`${mois[i]} ${jeux[i]}`);
 }