 //Déclaration des variables et des ventes de jeu
const MagasinName = "PixelBay"
let gameVente = 49;

vente()
function vente (){
  //Condition si le nombre de vente de jeu est supérieur à 100
if (gameVente > 100){
  console.log(`le magasin ${MagasinName} organise une grande promotion`)
}
 //Condition si le nombre de vente de jeu est supérieur à 50 et inférieur a 100
else if (gameVente => 50 && gameVente <= 100){
    console.log(`le magasin ${MagasinName} effectue une réorganisation de son espace de vente.`)
}
 //Condition si le nombre de vente de jeu est à inférieur 50
else if (gameVente < 50){
    console.log(`le magasin ${MagasinName} lance une campagne de publicité.`)
}
}