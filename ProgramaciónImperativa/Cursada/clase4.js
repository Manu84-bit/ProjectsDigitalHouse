let uno, dos

uno = 20
dos = uno
uno = 30

console.log(dos)

let nombre, edad, cumpleaños, ciudad, ocupacion, hobbie

nombre = "Manu"
edad = 20
cumpleanos = "marzo"
ciudad = "Bogotá"
ocupacion = "diseñador"
hobbie = "pintar"

console.log( nombre + " dice que tiene " + edad + " y que cumple en " + cumpleanos + ". Ahora vive en " 
+ ciudad + ", le gusta su trabajo como " + ocupacion + " y le gusta, cuando puede, " + hobbie + ".")


edades = [23, 37, 40, 38, 50, 60]

for(let i = 0; i < edades.length; i++) {
    console.log(edades[i]*365)
}


let num1, num2, resultado

num1 = 20.3
num2= 45.7
resultado = num1 + num2
console.log(resultado)


// Ejercicio 1

let myAge = 37
let maxAge = 120

let snack = "pistachos"

let snacksXDay = 50


function remainingSnacks (actualAge, maxA, snacksPerDay) {
    let yearsRemaining = maxA - actualAge
    let snacksPerYear = snacksPerDay * 365
    let remainingS = yearsRemaining * snacksPerYear

    return remainingS
}


console.log("Me faltan consumir " + remainingSnacks(myAge,maxAge, snacksXDay) + " " + snack)


//Ejercicio 2

let travelDays = 30
let maxBudget = 900
let budgetComida = 500
let cantComida = 90
let budgetXComida = budgetComida/cantComida

console.log("Puedes gastar " + budgetXComida + " en cada comida, si quieres que te alcance la plata los " 
+ travelDays + " días de viaje.")

//Calculadora de IMC

let personas = [["Manu", 37, 67, 1.70],
                ["Pilar", 25, 58, 1.72]];


function calculateIMC (pesoKm, alturaM) {
     let imc = pesoKm / (alturaM * alturaM)
     return Math.round(imc)
}

function printIMC (name, age, imc) {
    console.log (name + " tiene " + age + " años y su índice de masa corporal es " + imc + "\n")
}

for (let i = 0; i < personas.length; i++) {
    printIMC(personas[i][0], personas[i][1], calculateIMC(personas[i][2], personas[i][3]))
}