// Return part of string before a certain character.

const text = 'Q1.0';
let substring = '.'

//-------------------- [Using substring() method]
console.log(text.substring(0, text.indexOf(substring)))
console.log(text.substring(text.indexOf(substring) + substring.length))

//-------------------- [Using function]
function getStringAfterSubstring(parentString, substring) {
    return parentString.substring(parentString.indexOf(substring) + substring.length)
}

function getStringBeforeSubstring(parentString, substring) {
    return parentString.substring(0, parentString.indexOf(substring))
}

console.log(getStringAfterSubstring(text, substring))
console.log(getStringBeforeSubstring(text, substring))