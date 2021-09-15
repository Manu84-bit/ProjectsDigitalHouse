const persona = {
    identificador: 0,
    estaHabilitado: false,
    honorarioConsulta: 2007.68,
    edad: 29,
    nombre: "Huber Wilkins",
    sexo: "male",
    email: "huberwilkins@speedbolt.com",
    telefono: "+1 (926) 409-3726",
    direccion: "197 Stuart Street, Bowmansville, South Dakota, 4723",
    especialidad: "Neumonologia",
    cantidadConsultas: 0,
    puntuacion: 0,
    printData(){
        console.log(
    `${this.nombre}, con el identificador ${this.identificador}, vive en ${this.direccion}, su 
especialidad es ${this.especialidad}, su puntuación es ${this.cantidadConsultas}`)
    }
 }


module.exports = persona