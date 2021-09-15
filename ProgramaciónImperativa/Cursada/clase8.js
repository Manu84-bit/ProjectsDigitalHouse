// //funciones, IF, terciario


// let numero = 53


// function esNumPar(num){
//     if (num%2 === 0){
//         return "es Par"
//     }else {
//         return "no es Par"
//     }
// }

// function esPar (num){
//     return num%2 === 0? "es par": "no es par"
// }

// let isEven = function(num) {
//     return num%2 === 0? "es par": "no es par"
// }

// let esNumeroPar = num => num%2 === 0? "es par": "no es par"


// // console.log(esNumPar(numero))
// // console.log(esNumeroPar(numero))
// // console.log (esPar(numero))
// // console.log(isEven(numero))

// var rating = "regular"

// switch (rating){
//     case "mala":
//         console.log(`Calificaste la peli como ${rating}. Lo lamentamos.`)//JavaScript template literals require backticks (alt + 96).
//         break;
//     case "buena":
//         console.log(`Calificaste la peli como ${rating}. Nos alegra.`)
//         break;
//     default:
//         console.log("Ingresaste un valor inválido")
    
// }


function cuadradoDeUnNumero (num){
    if (typeof num === "number") {
        return num * num;
    } else {
        return "No es posible operar con el tipo de dato " + typeof num;
    }
}

console.log(cuadradoDeUnNumero(4));

let str = "Me gusta programar en javaScript"
let slicedStr = str.slice(str.indexOf("gusta"), str.indexOf("gusta") + "gusta".length);
console.log(slicedStr)


function noParesDeContarImparesHasta(numero){
    // Escribe aqui tu código
    var count = 0
    for (let i = 0; i <= numero; i++){
        if (i%2 == 1){
            count++;
        }
    }
    return count
}

console.log(noParesDeContarImparesHasta(5))


let numeros = [3,6,7,6,9,5]

function encontreUn5 (numeros) {
    let count = 0
    do {
        if (numeros[count] === 5) {
            console.log("Se encontró un 5!")
        }
        count++
    }while (count <numeros.length)
}

encontreUn5(numeros)

function tablaDeMultiplicar(numero) {
    //Escribí tu código aquí   
    let count = 1 
    while (count <= 10){
        console.log (
           numero + " * " + count + " = " + 				numero*count)
        count++
    } 
}

tablaDeMultiplicar(5)

