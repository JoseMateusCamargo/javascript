// Copying an array
const fruits = ['🍏', '🍊', '🍌', '🍉', '🍍']
const moreFruits = [...fruits];
console.log(moreFruits) // Array(5) [ "🍏", "🍊", "🍌", "🍉", "🍍" ]
fruits[0] = '🍑'
console.log(...[...fruits, '...', ...moreFruits]) //  🍑 🍊 🍌 🍉 🍍 ... 🍏 🍊 🍌 🍉 🍍

// Concatenating array
const myArray = [`🤪`, `🐻`, `🎌`]
const yourArray = [`🙂`, `🤗`, `🤩`]
const ourArray = [...myArray, ...yourArray]
console.log(...ourArray) // 🤪 🐻 🎌 🙂 🤗 🤩

// Using Math functions
const numbers = [13, -4, 7, -9]
console.log(Math.min(numbers))      // NaN
console.log(Math.min(...numbers))   // -9
console.log(Math.max(...numbers))   // 13

// Using an array as arguments
const fruitStand = ['🍏', '🍊', '🍌']
const sellFruit = (f1, f2, f3) => {
    console.log(`Fruits for sale: ${f1}, ${f2}, ${f3}`)
}
sellFruit(...fruitStand) // Fruits for sale: 🍏, 🍊, 🍌
fruitStand.pop()
fruitStand.pop()
fruitStand.push('🍉')
fruitStand.push('🍍')
sellFruit(...fruitStand) // Fruits for sale: 🍏, 🍉, 🍍
fruitStand.pop()
fruitStand.pop()
sellFruit(...fruitStand, '🍋') // Fruits for sale: 🍏, 🍋, undefined

// Adding an item to a list
const fewFruit = ['🍏', '🍊', '🍌']
const fewMoreFruit = ['🍉', '🍍', ...fewFruit]
console.log(fewMoreFruit) //  Array(5) [ "🍉", "🍍", "🍏", "🍊", "🍌" ]

// Combining objects
const objectOne = {hello: "🤪"}
const objectTwo = {world: "🐻"}
const objectThree = {...objectOne, ...objectTwo, laugh: "😂"}
console.log(objectThree) // Object { hello: "🤪", world: "🐻", laugh: "😂" }
const objectFour = {
    ...objectOne, ...objectTwo, laugh: () => {
        console.log("😂".repeat(5))
    }
}
objectFour.laugh() // 😂😂😂😂😂

// A note about copying by reference
const array = ['😉', '😊', '😇']
const copyWithEquals = array // Changes to array will change copyWithEquals
const copyWithSpread = [...array] // Changes to array will not change copyWithSpread

array[0] = '😡' // Whoops, a bug

console.log(...array) // 😡 😊 😇
console.log(...copyWithEquals) // 😡 😊 😇
console.log(...copyWithSpread) // 😉 😊 😇