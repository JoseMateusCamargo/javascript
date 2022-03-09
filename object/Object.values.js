/*
Documentation: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values
O método Object.values() retorna um array com os valores das propriedades de um dado objeto, na mesma ordem provida
pelo for...in laço (sendo a diferença que o laço for-in também enumera as propriedades na cadeia prototype).
*/

const json_data = '{"name":"Hello Everybody", "gender":"Male"}'
const obj = JSON.parse(json_data)
Object.values(obj).forEach(item => console.log(item))