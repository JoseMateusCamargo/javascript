const grad = [0, 2, 3, 4, 5, 7, 8, 100]

const all_pass = grad.every((grad) => grad > 2)
console.log(all_pass)