/*
Documentation: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
O método Object.seal() sela um Objeto, evitando que novas propriedades sejam adicionadas ou removidas à ele
e marcando todas as propriedades existentes como não configuráveis. Valores das propriedades
atuais ainda podem ser alterados desde que essas propriedades sejam graváveis (writable).
*/

const people = {name: "people One", age: 33}
people.name = "people One One"
people["nationality"] = "Brazilian"
delete people.age
console.log(people)

const people_seal = {name: "people Seal", age: 33}
Object.seal(people_seal)
people_seal.name = "people Seal Seal"
people_seal["nationality"] = "Brazilian" // TypeError: Cannot add property nationality, object is not extensible
delete people_seal.age
console.log(people_seal)