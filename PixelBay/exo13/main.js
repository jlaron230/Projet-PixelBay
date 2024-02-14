
//Variable prompt fait référence à l'id konami contenu dans un input
let prompt1 = document.getElementById('konami');
let styleDesign = document.getElementById('design');
//le code pour le cheat code, avec les mots clés, les flèches en keydown
let code = ["ArrowUp", "ArrowUp", "ArrowDown", 
"ArrowDown", "ArrowLeft", "ArrowRight", 
"ArrowLeft", "ArrowRight", "b", "a"]
console.log(code);

//évènement au moment où l'on relâche une touche du clavier
prompt1.addEventListener('keydown', function(event) {
    //console.log(event.key);
     // récupère les mots clés de code et vérifie que les mots clés taper
     //par l'utilisateur sont de la même valeur que celle du tableau de cheat codes
    for (var i = 0; i < code.length; i++) {
    if (code[i] == prompt1.value){
        style()
        //console.log("good");
    }
}

})
//ajoute du style dans le css dans l'id design du body pour afficher un fond d'écran et informé l'utilisateur
function style (){
    alert("Code Konami activé !")
    styleDesign.classList.add('konami-activated');
//console.log("good");
}