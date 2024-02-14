//déclaration prompt qui ne renvoie que des valeurs numériques
let years = parseInt(prompt('Enter une année:'));

vald(years);
//si l'année défini par l'utilisateur est divisible par 4 et si l'année est supérieur à une limite que j'ai imposé "1000"
// alors l'année est bisextile, sinon si ce n'est pas le cas, l'année n'est pas bisextile
function vald (years) {
if (years % 4 == 0) {
 if (years > 1000){
    alert(`l'année ${years} est bisextile`)
    console.log(years);
    }
} else{
    alert(`l'année ${years} n'est pas bisextile`)
    console.log(years);
}
}