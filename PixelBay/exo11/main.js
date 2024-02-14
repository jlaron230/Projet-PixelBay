// Code de depart
let reduc = 0;

//function promo d'été avec le paramètre dans le console log de 15
function SummerPromo (prixJeu){
//réduction est égale à prix du jeu / 100 * par la réduction, produit en croix 
 reduc = 20;
 reduc = (prixJeu /100) * reduc;
 //Le prix de mon jeux moins la réduction est égales au prix avec la promotion
 prixJeu = prixJeu - reduc;

 return prixJeu;
}

//function promo Hiver avec le paramètre dans le console log de 120
function WinterPromo (prixJeu){
//réduction est égale à prix du jeu / 100 * par la réduction, produit en croix
    reduc = 30;
    reduc = (prixJeu /100) * reduc;
    prixJeu = prixJeu - reduc;
//Le prix de mon jeux moins la réduction est égales au prix avec la promotion
    return prixJeu;
    
}

//function promo personnalisé avec le paramètre dans le console log de 120 et de 15 pour la réduction
function CustomPromo (prixJeu, reduCustom){
//la réduction est égale au prix du jeu diviser par 100 et multiplier par la promotion reduCustom
   let reduc = (prixJeu /100) * reduCustom;
   //Le prix de mon jeux moins la réduction est égales au prix avec la promotion
    prixJeu = prixJeu - reduc;
   
    return prixJeu;
    
}

// Exemple d'utilisation des fonctions

console.log("Prix après promotion d'été :", SummerPromo(15));
console.log("Prix après promotion d'hiver :", WinterPromo(120));
console.log("Prix après promotion spéciale (15% de réduction) :", CustomPromo(120, 15));