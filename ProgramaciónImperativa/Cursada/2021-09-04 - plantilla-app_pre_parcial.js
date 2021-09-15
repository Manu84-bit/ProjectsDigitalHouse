const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);

// Te proveemos la siguiente plantilla que tiene tres partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Manuel Amado";
const tema = "el tema que te tocó";

const departamentos = [
  {
    id: 1,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 2395.8
  },
  {
    id: 2,
    propietarios: "Dueños: Luis Perez y María Martinez",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 1597.2
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 4,
    precioAlquiler: 3993
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 1996.5
  },
  {
    id: 5,
    propietarios: "Dueños: Julieta Tols y Pablo Groming",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 11979
  },
  {
    id: 6,
    propietarios: "Dueño: Pablo Groming",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 4658.5
  },
  {
    id: 7,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 3327.5
  },
  {
    id: 8,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 9,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 10,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 11,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 4059.55
  },
  {
    id: 14,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 3993
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 16,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 17,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 665.5
  }
]


/*******************************/
/* Desarrollo de las consignas */
/*******************************/

let inmobiliaria = {
  // A
  deptos : departamentos,
  
// B
  listarDepartamentos(arr) {
    for(let i= 0; i < arr.length; i++){
      if(arr[i].disponible) {
        arr[i].disponible = "Disponible"
      } else {
        arr[i].disponible = "Alquilado"
      }
      if (arr[i].aceptaMascotas){
         arr[i].aceptaMascotas = "acepta mascotas"
      } else {
         arr[i].aceptaMascotas = "no acepta mascotas"
      }
      
      console.log(`
      id: ${arr[i].id}, 
      precio $${arr[i].precioAlquiler}, 
      está ${arr[i].disponible}, 
      ${arr[i].cantidadHabitacion} ambientes, 
      máximo ${arr[i].cantidadPersonas} personas, 
      ${arr[i].aceptaMascotas}, 
      propietarios: ${arr[i].propietarios}`)
    }
  },

  // C
  departamentosDisponibles(){
    let listaDisponibles = []
    for(let i=0; i < this.deptos.length; i++){
      if(this.deptos[i].disponible === true || this.deptos[i].disponible === "Disponible"){
        listaDisponibles.push(this.deptos[i])
      }
     
    }

    return listaDisponibles
  },

  // D
  buscarPorId(id){
    let deptoBuscado;
    for(let i=0; i < this.deptos.length; i++) {
      if (this.deptos[i].id === id) {
        deptoBuscado = this.deptos[i]
        break;
      }else{
        deptoBuscado = "No existe el departamento buscado."
      }
    }

    return deptoBuscado
  },

  // E
  buscarPorPrecio(precio){
    
    let arrDisponibles = this.departamentosDisponibles()
    let arrBuscados = []
    for(let i=0; i < arrDisponibles.length; i++){
      if(arrDisponibles[i].precioAlquiler <= precio){
        arrBuscados.push(arrDisponibles[i])
      }
    }
    return arrBuscados
  },

// F
  precioConImpuesto(porcentaje){
    let arrNuevoPrecio = this.deptos
    for (let i=0; i< this.deptos.length; i++){
      arrNuevoPrecio[i].precioAlquiler += arrNuevoPrecio[i].precioAlquiler * (porcentaje/100)
    }
    return arrNuevoPrecio
  },

// G
  simplificarPropietarios (){
    let arrNuevoMensaje = this.deptos
    for (let i=0; i< this.deptos.length; i++){
 
      if (arrNuevoMensaje[i].propietarios.includes("Dueños")){
        arrNuevoMensaje[i].propietarios = arrNuevoMensaje[i].propietarios.replace("Dueños", "Prop.")  
      } else if (arrNuevoMensaje[i].propietarios.includes("Dueño")){
        arrNuevoMensaje[i].propietarios = arrNuevoMensaje[i].propietarios.replace("Dueño", "Prop.")  
      } else if (arrNuevoMensaje[i].propietarios.includes("Dueña")){
        arrNuevoMensaje[i].propietarios = arrNuevoMensaje[i].propietarios.replace("Dueñas", "Prop.")  
      }

    }

    return arrNuevoMensaje

  }

}
// Agregar un método simplificarPropietarios que permita modificar los textos de la propiedad propietarios para que en lugar de decir “Dueños: ….”, “Dueña: ….”, etc. diga “Prop.: ….” 
// ejemplo : "Dueños: Martín Gutierrez y José Torres" pasará a ser "Prop.: Martín Gutierrez y José Torres"
// Resultado esperado: un array con los departamentos modificados;



/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarDepartamentos");
// Ejecución aquí
inmobiliaria.listarDepartamentos(departamentos)
console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
// Ejecución aquí
console.log(inmobiliaria.departamentosDisponibles())
console.log(o);

console.log(v, oo + " D. buscarPorId");
// Ejecución aquí
console.log(inmobiliaria.buscarPorId(16))
console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");
// Ejecución aquí
console.log(inmobiliaria.buscarPorPrecio(4000))
console.log(o);

console.log(v, oo + " F. precioConImpuesto");
console.log(inmobiliaria.precioConImpuesto(10))
console.log(o);

console.log(v, oo + " G. simplificarPropietarios");
console.log(inmobiliaria.simplificarPropietarios())
console.log(o);
