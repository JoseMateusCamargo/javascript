/*
Documentation: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set
O objeto Set permite que você armazene valores únicos de qualquer tipo,desde valores primitivos a referências a objetos.
 */

const numbers = [1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 0, 0]
console.log(numbers) // Output: [1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 0, 0]

const unique_numbers = [...new Set(numbers)]
console.log(unique_numbers) // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]