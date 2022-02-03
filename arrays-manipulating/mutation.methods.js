const fruits = ["🍏", "🍌", "🍒", "🍑", "🥑"]

// Inserts element at the end
fruits.push("🥭") // 6
console.log(fruits) // ["🍏", "🍌", "🍒", "🍑", "🥑", "🥭"]

// Removes last element
fruits.pop() // "🥭"
console.log(fruits) // ["🍏", "🍌", "🍒", "🍑", "🥑"]

// Inserts element at the start
fruits.unshift("🍉") // 6
console.log(fruits) // ["🍉", "🍏", "🍌", "🍒", "🍑", "🥑"]

// Removes first element
fruits.shift() // "🍉"
console.log(fruits) // ["🍏", "🍌", "🍒", "🍑", "🥑"]