

let inventaire = ["wracraft", "zelda", "BioShock", "Fable", "The Witcher"]
inventaire.push("Shadow of the Mordor", "Mario")
inventaire.shift()

for (let i = 0; i < inventaire.length; i++){
    console.log(`Article : ${i} ${inventaire[i]}`)

}

