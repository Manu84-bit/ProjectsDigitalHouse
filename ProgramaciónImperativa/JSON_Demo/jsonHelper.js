const fs = require('fs');

let jsonHelper = {

    leerJson: function (nombreArchivo) {
        let list =[]
        let autoJSON = fs.readFileSync(nombreArchivo, 'utf-8')
        let autoJS = JSON.parse(autoJSON)
        for (x of autoJS) {
          list.push(x)
        }
        return list
    
      },

      escribirJson: function(nombreArchivo, dato) {
        let alist = this.leerJson(nombreArchivo)
        alist.push(dato)

        let mlist = JSON.stringify(alist)
        fs.writeFileSync(nombreArchivo, mlist)
        return alist
      },

      rescribirJson: function(nombreArchivo, arr){
        let arrJSON = JSON.stringify(arr)
        fs.writeFileSync(nombreArchivo, arrJSON)
      }

  
}




module.exports = jsonHelper