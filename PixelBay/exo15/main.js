
let nombreMax = 151;

fizzbuzz()
function fizzbuzz (){
let tab = [];
//lancer une boucle a partir de 1 pour boucler jusqu'au nombre max de 151 
 for(let i = 1; i <= nombreMax; i++){
    //si l'indice de nombreMax est divisible par 5 alors on ajoute "buzz" sur le tableau tab pour tous les nombres divisible par 5
 if (i % 5 == 0){
    tab.push("buzz");
}
    //si l'indice de nombreMax est divisible par 3 alors on ajoute "Fizz" sur le tableau tab pour tous les nombres divisible par 3
else if (i % 3 ==0 ){
    tab.push("Fizz")

}
    //si l'indice de nombreMax est divisible par 3 où par 5 alors on ajoute "fizzBuzz" sur le tableau tab pour tous les nombres divisible par 3 et 5
if (i % 3 == 0 || i % 5 == 0) {
    tab.push("fizzBuzz");
}
// on ajoute le reste des nombres non divisble par les autres conditions au tableau tab et on le console.log
else {
    tab.push(i);
}
}

console.log(tab)
}
