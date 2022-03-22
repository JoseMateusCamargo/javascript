/*
Documentation: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
O método repeat() constrói e retorna uma nova string com um determinado número de cópias concatenadas da string original.
 */

const sentence = 'again '

const output = `Repeat ${sentence.repeat(10)}...`
console.log(output) // Output: Repeat again again again again again again again again again again ...