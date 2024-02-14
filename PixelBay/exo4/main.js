 //Déclaration des variables et du prompt que l'utilisateur rentrera
let games = parseInt(prompt("combien de jeux vidéo sont arrivés en stock aujourd'hui ?"))
let etagères = 0;
let modulo = 10;

//si les jeux sont supérieur à zéro et que la valeurs des jeux entrées
// par l'utilisateur et le pourcentage du modulo de 10 alors le nombres d'étagères 
// et égal a la valeur des jeux diviser par 10
if (games > 0){
if (games % modulo == 0){
  etagères = games / modulo;
 console.log(games)
 console.log(etagères)
 alert(`Il y a ${games} jeux pour ${etagères} etagère remplis`);
 //on calcule le pourcentage entre les jeux et le modulo de 10
 //les étagères sont égal au nombre deu jeu diviser par 10, on arrondi avec Math.floor
 // pour obtenir le résultat du reste des jeux en fonction du remplissage des étagères
 // si j'ai 15 jeux vidéos, le résultat sera de 1 étagère rempli avec un reste de 5 jeux
}else {
 let result = games % modulo;
 etagères = Math.floor(games / modulo); 
  console.log(result)
  console.log(etagères)
  alert(`Il reste ${result} jeux pour ${etagères} etagère remplis`);
}
}
//Si la valeur entrée et de 0 où moins, il n'y a pas de valeur.
if (games <= 0){
  alert(`Il n'y a aucune valeur`);
}