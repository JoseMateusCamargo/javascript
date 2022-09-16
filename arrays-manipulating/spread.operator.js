//--------------------[Copiando um array]
const fruits = ['🍏', '🍊', '🍌', '🍉', '🍍']
const moreFruits = [...fruits];
console.log(moreFruits) // Array(5) [ "🍏", "🍊", "🍌", "🍉", "🍍" ]
fruits[0] = '🍑'
console.log(...[...fruits, '...', ...moreFruits]) //  🍑 🍊 🍌 🍉 🍍 ... 🍏 🍊 🍌 🍉 🍍

//--------------------[Concatenando array]
const myArray = [`🤪`, `🐻`, `🎌`]
const yourArray = [`🙂`, `🤗`, `🤩`]
const ourArray = [...myArray, ...yourArray]
console.log(...ourArray) // 🤪 🐻 🎌 🙂 🤗 🤩

//--------------------[Usando função Math]
const numbers = [37, -17, 7, 0]
console.log(Math.min(numbers)) // NaN
console.log(Math.min(...numbers)) // -17
console.log(Math.max(...numbers)) // 37

//--------------------[Usando array como argumento]
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

//--------------------[Adicionando um item a uma lista]
const fewFruit = ['🍏', '🍊', '🍌']
const fewMoreFruit = ['🍉', '🍍', ...fewFruit]
console.log(fewMoreFruit) //  Array(5) [ "🍉", "🍍", "🍏", "🍊", "🍌" ]

//--------------------[Combinando objetos]
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

/* //--------------------[Convertendo NodeList para array]
    [...document.querySelectorAll('div')]
 */

//--------------------[Uma nota sobre a cópia por referência]
const array = ['😉', '😊', '😇']
const copyWithEquals = array // Changes to array will change copyWithEquals
const copyWithSpread = [...array] // Changes to array will not change copyWithSpread

array[0] = '😡' // Whoops, a bug

console.log(...array) // 😡 😊 😇
console.log(...copyWithEquals) // 😡 😊 😇
console.log(...copyWithSpread) // 😉 😊 😇

//--------------------[Cuidado com deeply-nested Gotcha!]
const nestedArray = [['😉'], ['😊'], ['😇']]
const nestedCopyWithSpread = [...nestedArray] // The spread operator makes a shallow copy

nestedArray[0][0] = '😡' // Whoops, a bug

console.log(...nestedArray) // 😡 😊 😇
console.log(...nestedCopyWithSpread) // 😡 😊 😇

// A deep copy would require a library like lodash or Ramda's R.clone() method

// Font: https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab