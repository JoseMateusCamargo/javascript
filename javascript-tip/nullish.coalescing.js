/*
O operador coalescing nulo devolverá o seu operador à direita quando o lado esquerdo estiver nulo ou indefinido,
não apenas falso. Util quando se trabalho com números.
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