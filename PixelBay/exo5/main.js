
//Le prompt pour rentrée les codes
let codeSecret = prompt("Quel est le code secret utilisé?");

//appel de Switch par rapport au code secret 
switch (codeSecret) {

  case "Alpha":
    //si je rentre le code, l'alerte se lance, cela basculera en fonction du code lancé dans le prompt
    alert("Lancer la promotion de la semaine!");
    break;

  case "Bravo":
    alert("Réorganiser la section des jeux rétro!");
    break;

  case "Charlie":
    alert("Préparer la zone de démonstration pour les nouveaux arrivages!");
    break;

  case "Charlie":
    alert("Vérifier l'inventaire des accessoires!");
    break;

}