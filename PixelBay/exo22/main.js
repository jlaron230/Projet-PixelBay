//j'appel une variable qui prend récupère la classe .defil de mon fichier html dans style
let defilement = document.querySelector(".defil")
// évenement au scroll qui appel la fonction du scroll
document.addEventListener("scroll", function() {
scroll()
})
//les deux variables qui prennent en méthodes le scroll en hauteur et le scroll y avec ses coordonnées
//applique un effet de style sur la classe .defil pour la largeur du footer
function scroll () {
let ScollTop = document.documentElement.scrollTop;
let ScrollHeight = document.documentElement.scrollHeight
//defilement = '5%'
defilement.style.width = (ScollTop / ScrollHeight) * 100 + '0%';
}

// Appel de la fonction de filtrage et affichage des résultats

// Ajoutez ici les fonctions pour interagir avec la collection