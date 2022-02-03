const colors = ['red', 'green', 'blue']

Array.prototype.carousel = function (index) {
    const length = this.length
    return this[((index % length) + length) % length]
}

for (let i = 0; i <= 5; i++) {
    console.log(colors.carousel(i))
}