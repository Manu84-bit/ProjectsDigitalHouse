// Crear una función que convierta pulgadas en centímetros.
// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.


let pulgAcentimetros = pulg => pulg*2.54;

console.log(pulgAcentimetros(4))

//  Crear una función que recibe un string y lo convierte en una una URL. 
// ej: “pepito” es devuelto como “http://www.pepito.com”

let strAurl = str => "http://www." + str + ".com"
console.log(strAurl("digital"))

// Crear una función que recibe un string y devuelve la misma frase pero con admiración.
let strAdmiración = str => str+"!"
console.log(strAdmiración("Hola"))

// Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
let edadPerro = edadhumana => edadhumana*7
console.log(edadPerro(4))
// Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
// PD: considera que tu mes de trabajo tiene 40 horas.

let calcularHTrabajo = sueldoM => sueldoM/40
console.log(calcularHTrabajo(1500))

// Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y 
//calcule el imc de una persona.  Luego, ejecutar la función probando diferentes valores.

let calculadorIMC = (altura, peso) => peso/(altura**2)
 console.log(calculadorIMC(1.57, 48))

// Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 
// Investiga que hace el método de strings .toUpperCase()

let upper = str => str.toUpperCase()
console.log(upper("minúscula"))

// Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
// pista: te servirá revisar que hace la palabra reservada typeof.
let tipoDato = param => typeof param
console.log(tipoDato([1,2,4]))

let circunferencia = radio => Math.PI*2*radio
console.log(circunferencia(5))

//CALLBACKS



// Array de nombres
const nombres = ['Martin','Homero','Cosme','Steven','Adam'];

function buscarNombre(nombre, callback){
    let resultado;
    for(x of nombres){
         if (x === nombre) {
            resultado = x
            break;
         } else {
            resultado = ""
         }
     }

     return callback(resultado)
}


let  mostrarResultado = (res) => res === "" ? "Valor no encontrado": "El nombre fue encontrado"

//Ejemplo de invocación con callback como argumento
console.log(buscarNombre('Cosme',mostrarResultado))
