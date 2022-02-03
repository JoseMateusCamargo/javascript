// New array
Array.of("🍏", "🍌", "🍒"); // ["🍏", "🍌", "🍒"]
Array(3).fill("⭐️"); // ["⭐️", "⭐️", "⭐️"]

// From array-like object
Array.from("hello") // ["h", "e", "l", "l", "o"]

// From iterable
Array.from([1, 2, 3], (x) => x * 2) // [2, 4, 6]

// From object
const person = {name: "John", age: "23"}

Object.keys(person) // ["name", "age"]
Object.values(person) // ["John", "23"]
Object.entries(person) // [["name", "John"], ["age", "23"]]