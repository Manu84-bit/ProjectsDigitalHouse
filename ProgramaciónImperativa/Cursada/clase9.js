let peliculas = ["a","b","c","d","e", "f", "g", "h"]


function peliculasMayusculas(arr, index=0){
    arr[index] = arr[index].toUpperCase()
    index++
    if (index < arr.length) {
        peliculasMayusculas(arr,index)} 
    return arr
}

peliculas = peliculasMayusculas(peliculas)

console.log(peliculas)