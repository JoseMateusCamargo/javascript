// ------------------- Destructuring
const [apple, banana, cherries] = ["🍏", "🍌", "🍒"];
console.log(apple); // 🍏
console.log(banana); // 🍌
console.log(cherries); // 🍒

// ------------------- Default values
const [apple, banana, cherries, mango = "🥭"] = ["🍏", "🍌", "🍒"];
console.log(mango); // 🥭

// ------------------- Skipping values
const [apple, , cherries] = ["🍏", "🍌", "🍒"];
console.log(apple); // 🍏
console.log(cherries); // 🍒

// -------------------Spread operator
const [apple, ...others] = ["🍏", "🍌", "🍒"];
console.log(apple); // 🍏
console.log(others); // ["🍌", "🍒"]