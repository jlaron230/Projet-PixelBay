//la variable like a pour affection l'id button de mon html
let like = document.getElementById("button")
let compteur = 0;

//évenement au click, lorsque l'utilisateur appuie sur le boutton
like.addEventListener('click', function(e) {
//Le compteur augmente en fonction du click
compteur ++;
let ajout = document.getElementById("compteur")
//Ajout d'un texte et du compteur dans l'id compteur du html 
ajout.textContent = "Vous avez liké " + compteur + " fois"
console.log(compteur)
})