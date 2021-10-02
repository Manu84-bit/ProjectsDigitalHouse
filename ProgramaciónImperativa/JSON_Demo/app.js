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
    },

    eliminarAuto(patent){
        for(x of this.autos){
            if (x.patente === patent){
                let index = this.autos.indexOf(x)
                this.autos.splice(index,1)
            }else{
                console.log("El carro con esa patente no está en el inventario")
            }
        }
        jsonHelper.rescribirJson('AUTOS.json', this.autos)
    }
    
    
}

// concesionario.agregarAuto("VolksWagen", "Jetta", 2000, 43330, "BDF454")
// concesionario.venderAuto("WAV703")
// console.log(concesionario.totalDeVentas())
concesionario.eliminarAuto("DHP456")

