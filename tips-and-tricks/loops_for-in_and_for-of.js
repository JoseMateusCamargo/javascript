// Difference between using for in and for of.

const months = ["January", "February", "March", "April", "May", "June", "July"]

for (let key in months) {
    console.log(key)
}

for (let key of months) {
    console.log(key)
}