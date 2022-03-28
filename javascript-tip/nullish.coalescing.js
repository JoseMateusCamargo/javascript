/*
Documentation: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

O operador de coalescência nula (??) é um operador lógico que retorna o seu operando do lado direito quando o seu
operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
Util quando se trabalho com números.

Ao contrário do operador lógico OR (||), o operando esquerdo é retornado se houver um valor falsy (falso) que não
seja null ou undefined. Em outras palavras, se você usar || para obter algum valor padrão para outra variável foo,
você pode enfrentar comportamentos inesperados se você considerar algum valor falseável como utilizável (eg. '' ou 0).
Veja abaixo alguns exemplos:
 */

let price_1 = 0
let price_2

// Atribuindo um padrão se "preço" não estiver definido.
const default_price_1_not_set = price_1 || 10
const default_price_2_not_set = price_2 || 20

console.log(`Price 1: ${default_price_1_not_set}, Price 2: ${default_price_2_not_set}`) // Price 1: 10, Price 2: 20


let price_3 = 0
let price_4

// Atribuindo um padrão se "preço" não estiver definido.
const default_price_1_set = price_3 ?? 30
const default_price_2_set = price_4 ?? 40

console.log(`Price 1: ${default_price_1_set}, Price 2: ${default_price_2_set}`) // Price 1: 0, Price 2: 40