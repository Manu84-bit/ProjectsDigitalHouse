const jsonHelper = require('./jsonHelper')

let concesionario = {
    autos: jsonHelper.leerJson('AUTOS.json'),
    agregarAuto: function (marca, modelo, anio, precio, patente, vendido = false){
        let autoNuevo ={
            marca: marca,
            modelo: modelo,
            anio: anio,
            precio: precio,
            patente: patente,
            vendido: vendido
        }
        jsonHelper.escribirJson('AUTOS.json', autoNuevo)
        console.log("Vehículo agregado correctamente")
    },
    venderAuto: function (patent){
        let autoBuscado;
        for (x of this.autos){
            if(x.patente === patent){
                autoBuscado = x
                break;
            }
        }
        autoBuscado.vendido = true
        jsonHelper.rescribirJson('AUTOS.json', this.autos)
        console.log("El vehículo: "+ autoBuscado.marca + " " + autoBuscado.modelo + " ha sido vendido")
    },

    totalDeVentas: function() {
        let total = 0
        for (x of this.autos){
            if(x.vendido){
                total += x.precio
            }
        }
        return total
    }
    
    
}

// concesionario.agregarAuto("VolksWagen", "Jetta", 2000, 43330, "BDF454")
// concesionario.venderAuto("WAV703")
// console.log(concesionario.totalDeVentas())


//Todo: 

// Crea un método llamado eliminarAuto el cual deberá recibir una patente por parámetro y eliminar el vehículo
// indicado. Investiga cómo podés hacer para poder eliminar un elemento en específico de un array. Luego deberás
// actualizar la base de datos siguiendo los pasos para actualizar la lista como en puntos anteriores.
