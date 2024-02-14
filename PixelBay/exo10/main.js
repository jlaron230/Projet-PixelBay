// Variables définis
let jeux = ["Space Adventure", "Castle Quest", "Mystery Island", "Robot Wars", "Jungle Journey", "Racing Rush", "Pirate's Treasure", "Alien Invasion", "Super Sports", "Haunted Mansion", "Galactic Odyssey", "Winter Wonderland"];
let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
let liste = document.getElementById("listeJeux");

//Naviguer dans la boucle for pour tous les jeux compris dans le tableau
for (let i = 0; i < jeux.length; i++) {
console.log(jeux[i]);

//crée un élément li dans ma balise ol de mon document html et l'ajoute en enfant avec appendchild
let li = document.createElement("li");
li.textContent = jeux[i];
liste.appendChild(li);
}