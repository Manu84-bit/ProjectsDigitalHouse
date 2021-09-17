// Para esto debemos completar la función procesar. Esta recibe dos parámetros:

// 1. El primer parámetro es un array.

// 2. El segundo parámetro que recibe es una función (al que solemos llamar callback).

// La función deberá retornar un array donde cada elemento es el resultado de aplicar 
// la función pasada a un elemento del array pasado.
let urls = ["www.google.com","www.yahoo.com"]

// let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
// console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
// let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
// console.log(largoDeElmentos); // imprime [ 14, 13 ]

function procesar(arr, callback){
    let nArr =[]
    for (x of arr) {
        nArr.push(callback(x));
    }
    return nArr;
}

function agregarHttp(url){
    return "http"+url;
}

function largoDeElmentos(str) {
    return str.length;
}

console.log(procesar(urls,agregarHttp))
console.log(procesar(urls,agregarHttp))