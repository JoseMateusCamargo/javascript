const str = 'Jshhhfje9998'

String.prototype.reverseString = function () {
    return [...this].reverse().join('')
}

console.log(str.reverseString())