const fruits = ["🍏", "🍌", "🍒", "🍑", "🥑"] // yes, emoji arrays are cool

// ✅ A simple loop to print elements
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// ✅✅ A better implementation
// implicit breaking condition but no index variable
for (fruit of fruits) {
    console.log(fruit)
}

// ✅✅✅ An even better implementation
// implicit breaking condition with optional access to index
fruits.forEach((fruit, _index) => {
    console.log(fruit)
});

// While loops are not included for brevity