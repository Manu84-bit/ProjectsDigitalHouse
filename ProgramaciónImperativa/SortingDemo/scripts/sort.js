let fruit = ["🍓","🍊","🍌","🥝","🥥", "🍎"];
let appleShelf = document.getElementById("apple_shelf");
let orangeShelf = document.getElementById("orange_shelf");


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) { // loop que va del mayor índice del array hasta el primero (o sea, 0).
        let j = Math.floor(Math.random() * (i + 1)); // j es un índice al azar entre 0 y el mayor índice en la primera corrida, luego el indice anteiror al mayor y así sucesivamente.
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// console.log(fruit)
// console.log(shuffleArray(fruit))


function sortFruits(){
    randomIndex = Math.floor(Math.random() * fruit.length)
    for(let i= 0; i < fruit.length; i++) {
        if (fruit[i] === fruit[randomIndex]) {
            appleShelf.textContent += fruit[i];
        } else {
            orangeShelf.textContent += fruit[i];
        }
    }
}

sortFruits();

// console.log (fruit)