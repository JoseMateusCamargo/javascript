//-------------------- [1 mode]
function characterCount1(word, character) {
    const reducer = (accumulator, current) => (accumulator += current.includes(character) | false)
    return [...word].reduce(reducer, 0)
}

//-------------------- [2 mode]
function characterCount2(word, character) {
    return word.split(character).length - 1;
}

console.log(characterCount1('javascript is fuckded', 'a'))
console.log(characterCount2('javascript is fuckded', 'a'))