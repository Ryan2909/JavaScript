//inputs
const valeur1 = document.getElementById("val1");
const valeur2 = document.getElementById("val2");
const resultat = document.getElementById("result");

//buttons
const addbutton = document.getElementById("add");
const subbutton = document.getElementById("sub");
const multiplybutton = document.getElementById("multiply");
const dividebutton = document.getElementById("divide");

console.log(valeur1)
console.log(valeur2)
console.log(resultat)

console.log(add)
console.log(sub)
console.log(multiply)
console.log(divide)

function add(valeur1, valeur2){
    resultat.value=Number.parseInt(valeur1)+Number.parseInt(valeur2);
}
function sub(valeur1, valeur2){
    resultat.value=Number.parseInt(valeur1)-Number.parseInt(valeur2);
}
function multiply(valeur1, valeur2){
    resultat.value=Number.parseInt(valeur1)*Number.parseInt(valeur2);
}
function divide(valeur1, valeur2){
    let val2 = Number.parseInt(valeur2)
    if(val2===0){
        alert('impossible de diviser par 0')
        return new Error ('Division par 0')
    }
    resultat.value = Number.parseInt(valeur1.value)/Number.parseInt(valeur2.value);
}

addbutton.addEventListener('click', function () {
    console.log(valeur1.value+valeur2.value)
})
subbutton.addEventListener('click', function () {
    console.log(valeur1.value - valeur2.value)
})
multiplybutton.addEventListener('click', function () {
    console.log(valeur1.value * valeur2.value)
})
dividebutton.addEventListener('click', function () {
    console.log(valeur1.value / valeur2.value)
})
