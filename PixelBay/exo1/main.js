
//Anchored 
//Déclaration variables
let MarketName = "PixelBay"
console.log("nom de la boutique: "+MarketName)

let stock = 500;
console.log("Stock initial: "+stock)

let Newstock = 350;
console.log("Nouveau stock: "+Newstock)

let Revenus = 2250;
console.log("Revenus de la vente: "+Revenus + "€")

promo();
function promo (){
//promotion spéciale
let StockPerc = 30;
//Calcule si le jeu vendu et a la valeur de la promotion spcéciale diviser par 100 et multiplier par la valeur du stock - produit en croix 
let jeuxvendu = (StockPerc / 100) * stock;
//affichage deu nouveaux stock en faisant une soustraction
stock -= jeuxvendu;
 console.log("Nouveau stock: "+stock)

 //CA calcule les jeux vendus sont multiplier par le stock de jeux de 15, ce qui est égales au revenu
 let stock__jeu = 15;
 let revenu__Stock = jeuxvendu * stock__jeu;
 console.log("Nouveau stock: "+revenu__Stock)

 console.log(`nom de la boutique: `+ MarketName + ` Nombre de jeux en stock: `+ stock + ` Revenus de la vente: ` + revenu__Stock)
}

