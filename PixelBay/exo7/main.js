// Variables déclarés
let stockCible = 100;
let jeuxEnStock = 0;
let livraison = 0;


//la boucle while, tant que mon stock de jeu et plus petit que mon le stock que je vise
//Alors Jeux en stock augmente de 5 en 5 et les livraison aussi pour arriver à 100 jeux
//et un total de 20 livraison
while (jeuxEnStock < stockCible) {
  jeuxEnStock += 5;
  livraison++;
}

console.log(livraison);
console.log(jeuxEnStock);