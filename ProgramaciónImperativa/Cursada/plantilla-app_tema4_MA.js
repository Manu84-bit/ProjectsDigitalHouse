const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tres partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Manuel Amado";
const tema = "TEMA 4";

const arrayProfesionales = [
  {
    id: 0,
    estaHabilitado: false,
    nombre: "Huber Wilkins",
    email: "huberwilkins#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 3,
  },
  {
    id: 1,
    estaHabilitado: true,
    nombre: "Goldie Haley",
    email: "goldiehaley#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 3,
  },
  {
    id: 2,
    estaHabilitado: false,
    nombre: "Pena Landry",
    email: "penalandry@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 9,
  },
  {
    id: 3,
    estaHabilitado: false,
    nombre: "Leanne Burch",
    email: "leanneburch#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 13,
  },
  {
    id: 4,
    estaHabilitado: false,
    nombre: "Haynes Fuentes",
    email: "haynesfuentes@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 75,
  },
  {
    id: 5,
    estaHabilitado: true,
    nombre: "Tamika Fuentes",
    email: "tamikanewman@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 32,
  },
  {
    id: 6,
    estaHabilitado: true,
    nombre: "Russo Baldwin",
    email: "russobaldwin@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 67,
  },
  {
    id: 7,
    estaHabilitado: true,
    nombre: "Dodson Shaffer",
    email: "dodsonshaffer#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 2,
  },
  {
    id: 8,
    estaHabilitado: true,
    nombre: "Guerra Bright",
    email: "guerrabright#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 6,
  },
  {
    id: 9,
    estaHabilitado: true,
    nombre: "Dina Navarro",
    email: "dinanavarro@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 8,
  },
  {
    id: 10,
    estaHabilitado: false,
    nombre: "Stafford Watts",
    email: "staffordwatts@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
  },
  {
    id: 11,
    estaHabilitado: false,
    nombre: "Joni Avery",
    email: "joniavery@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 6,
  },
  {
    id: 12,
    estaHabilitado: true,
    nombre: "Mayra Tran",
    email: "mayratran@speedbolt.com",
    especialidad: "Oftamologia",
    cantidadConsultas: 2,
  },
  {
    id: 13,
    estaHabilitado: false,
    nombre: "Ward Dale",
    email: "warddale@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 23,
  },
];

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

let appProfesionales = {
// A.
  profesionales: arrayProfesionales,
// B
  listarProfesionales(arr){
    for(let i=0; i< arr.length; i++){
      if(arr[i].estaHabilitado) {
        arr[i].estaHabilitado = "ok"
      }else{
        arr[i].estaHabilitado = "inactivo"
      }

      console.log(
      `id ${arr[i].id} ${arr[i].estaHabilitado}, ${arr[i].especialidad}, ${arr[i].nombre}, consultas: ${arr[i].cantidadConsultas}, email: 
${arr[i].email}`)
    }  
  },
// C

  filtrarHabilitadosPorEspecialidad(especialidad){
    let arrayHabilitados = []
    for(let i=0; i < this.profesionales.length; i++){
      if((this.profesionales[i].estaHabilitado === true || this.profesionales[i].estaHabilitado === "ok")
          && this.profesionales[i].especialidad === especialidad){
        arrayHabilitados.push(this.profesionales[i])
      }
    }
    return arrayHabilitados
  },

  // D
  buscarPorID(id){
    let profBuscado;
    for(let i= 0; i < this.profesionales.length; i++){
      if(this.profesionales[i].id === id){
        profBuscado = this.profesionales[i]
        break;
      }
    }
    return profBuscado
  },

// E
realizarConsulta(idb){
  let profConsulta = this.buscarPorID(idb)
  profConsulta.cantidadConsultas += 1
  return profConsulta
},

// F
corregirEmails(){
  let nuevoArr = this.profesionales
  for(let i=0; i < this.profesionales.length; i++){
    if(this.profesionales[i].email.includes("#")){
      this.profesionales[i].email = this.profesionales[i].email.replace("#","@");

    }
  }
  return nuevoArr
}

}
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarProfesional");
appProfesionales.listarProfesionales(arrayProfesionales)
console.log(o);

console.log(v, oo + "   C. filtrarHabilitadosPorEspecialidad('Cardiologia')");
// Ejecución aquí
console.log(appProfesionales.filtrarHabilitadosPorEspecialidad("Cardiologia"))
console.log(o);

console.log(v, oo + " D. buscarPorId(1)");
// Ejecución aquí
console.log(appProfesionales.buscarPorID(1))
console.log(o);

console.log(v, oo + "  E. realizarConsulta(12)");
// Ejecución aquí
console.log(appProfesionales.realizarConsulta(12))
console.log(o);

console.log(v, oo + " F. corregirEmails");
// Ejecución aquí
console.log(appProfesionales.corregirEmails())
console.log(o);
