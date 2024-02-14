// Variable qui va récupérer mon id "displayContainer" dans mon html
let conteneur = document.getElementById("displayContainer");
let numeroDuJeu = prompt("Entrez le numéro du jeu (1, 2, 3 ou 4):");

switch (numeroDuJeu) {
//en fonction de la valeur que j'ai entrée dans le prompt, cela affichera le texte défini dans le document html
      case "1":
    conteneur.innerHTML = "Space Adventure";
      break;

      case "2":
    conteneur.innerHTML = "Castle Quest";
      break;

      case "3":
    conteneur.innerHTML = "Mystery Island";
      break;

      case "4":
    conteneur.innerHTML = "Robot Wars";
      break;

}