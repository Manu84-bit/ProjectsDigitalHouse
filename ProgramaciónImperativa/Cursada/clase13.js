// Debés crear una función llamada arregloDeObjetos que reciba un número como parámetro y devuelva un 
//arreglo de objetos que tengan una propiedad llamada `valor` que contenga el valor del número y sus anteriores.

// Ejemplo:
// arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
// arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]

// function arregloDeObjetos(num){
//     let array = []
//     for (i = 1; i <= num; i++){
//         array.push({valor: i})
//     }
//     return array
// }

// console.log(arregloDeObjetos(5))


// Debés crear una función llamada arregloDeObjetosDos que reciba un número y 
//una palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad 
//llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.

// Ejemplo:
// arregloDeObjetosDos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]
// arregloDeObjetosDos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}]

// function arregloDeObjetosDos(num, str){
//     let array= []
//     for (i = 1; i <= num; i++){
//         array.push({[str]:i})  //los corchetes cuadrados toman el parámetro de la función para que no lo lea como un string común.
//     }
//     return array
// }

// console.log(arregloDeObjetosDos(2,"Chau"))


//la lista de clientes.

let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!

  let banco = {
      clientes: arrayCuentas,

      consultarCliente(titular) {
         for (x of this.clientes){
             if(x.titularCuenta === titular) {
                 return x
             }
         }
      },

      deposito(titular, CantDinero){ 
      for (x of this.clientes)
      {
        if (x.titularCuenta === titular){
            x.saldoEnPesos += CantDinero
            console.log( "Deposito realizado, su nuevo saldo es: " + x.saldoEnPesos)
        }
      }
      

    },

    extraccion (titular, monto) {
        let mensaje1 = "Fondos insuficientes"
        let mensaje2 = "Extracción realizada correctamente, su nuevo saldo es "
        for (x of this.clientes){
          if (x.titularCuenta === titular){
            x.saldoEnPesos -= monto
             console.log (x.saldoEnPesos < 0 ? mensaje1: mensaje2 + x.saldoEnPesos)
            }
        }

    }
  }

console.log(banco.consultarCliente("Ansel Ardley"))
banco.deposito("Jarret Lafuente", 100)
banco.extraccion("Jarret Lafuente", 300)


function Alumno(name, ID, gradesList) {
    this.name = name
    this.ID = ID
    this.gradesList = gradesList
}

let estudiantes = []
let alumno1 = new Alumno("Óscar", "5656", [3, 2 , 1 ,3])
let alumno2 = new Alumno("María", "2556", [3, 4 , 2.8 ,3])

estudiantes.push(alumno1)
estudiantes.push(alumno2)

function pasaOPierde(alumno) {
    let sum = 0
    let avg = 0

    for (let i = 0; i < alumno.gradesList.length; i++){
        sum+= alumno.gradesList[i]
    }   
        avg = sum/alumno.gradesList.length
    if(avg < 3) {
        console.log(`${alumno.name}, con ID ${alumno.ID}, pierde la materia. Su promedio es ${avg}`)
    } else {
        console.log(`${alumno.name}, con ID ${alumno.ID}, pasó. Su promedio es ${avg}`)
    }

}

for(x of estudiantes){
pasaOPierde(x)
}