


let letters = ["a","b","c","d","e"]

function mayuscular(arr){
    let arr2 = []
    for (let x of arr) {
        
       x = x.toUpperCase()
        arr2.push(x)
    }
    return arr2
}   

console.log(letters)
console.log(mayuscular(letters))
