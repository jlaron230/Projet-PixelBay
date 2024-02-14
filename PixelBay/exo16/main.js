

let inventaire = ["warcraft", "zelda", "BioShock", "Fable", "The Witcher"]
//ajout de deux noms de jeux dans le tableau inventaire
inventaire.push("Shadow of the Mordor", "Mario")
//Supprime le premier élément du tableau "warcraft"
inventaire.shift()

for (let i = 0; i < inventaire.length; i++){
    //boucle le tableau et affiche le répértoire du tableau par rapport à l'indice i du tableau pour tous les éléments
    console.log(`Article : ${i} ${inventaire[i]}`)

}

