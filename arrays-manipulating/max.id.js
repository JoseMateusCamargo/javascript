/*
  Alguns metodos para encontrar o maior ID em um array, usando:

 . Array.forEach
 . Array.map
 . Array.reduce
 . Math.max

 Para medir a performance podemos usar console.time() & console.timeEnd()
 . Array.forEach : 0.053955078125 ms
 . Array.map : 0.042236328125 ms
 . Array.map smart : 0.046875 ms
 . Array.reduce : 0.0361328125 ms
 . Math.max 0.032958984375 ms
 */

const characters = [
    {id: 1, first: "Tim", last: "Draper"},
    {id: 17, first: "David", last: "Boies"},
    {id: 199, first: "Tim", last: "Kemp"},
    {id: 75, first: "Henry", last: "Mosley"},
    {id: 444, first: "Elizabeth", last: "Holmes"},
    {id: 95, first: "Donald", last: "Lucas"},
    {id: 186, first: "Larry", last: "Ellison"},
    {id: 364, first: "Channing", last: "Robertson"},
    {id: 285, first: "Charles", last: "Fleischmann"},
    {id: 33, first: "John", last: "Howard"}
]

// Array.forEach
let max = 0
characters.forEach(character => {
    if (character.id > max) {
        max = character.id
    }
})
console.log('forEach: ', max)

// Array.map
const ids = characters.map(user => user.id)
const sorted = ids.sort((a, b) => a - b)
let max_map = (sorted[sorted.length - 1])
console.log('map: ', max_map)

let max_map_smart = characters.map(user => user.id).sort((a, b) => a - b)[characters.length - 1]
console.log('map_smart: ', max_map_smart)

// Array.Reduce
const max_reduce = characters.reduce(
    (max, character) => (character.id > max ? character.id : max), characters[0].id
)
console.log('reduce: ', max_reduce)

// Math.max
let max_math = Math.max(...characters.map(user => user.id))
console.log('math: ', max_math)