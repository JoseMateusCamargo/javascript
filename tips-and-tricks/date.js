const date_ = new Date()
const day = date_.getDate()
const month = date_.getMonth() + 1
const year = date_.getFullYear()
const yesterday = date_.getDate() - 1
console.log(`${day}/${month}/${year}`) // Console: 15/8/2021
console.log(`${yesterday}/${month}/${year}`) // Console: 14/8/2021

//[2]-------------------------------------------------//

console.log(new Date().toJSON().slice(0, 10)) // Console: 2021-08-15

//[3]-------------------------------------------------//

console.log(new Date().toUTCString().slice(5, 16)) // Console: 15 Aug 2021

//[Extra]---------------------------------------------//

const data_string = new Date('10/08/2015 00:00:00')
data_string.toLocaleString() // 08/10/2015 00:00:00
data_string.toString() // Thu Oct 08 2015 00:00:00 GMT-0300 (Horário Padrão de Brasília)
data_string.toUTCString() // Thu, 08 Oct 2015 03:00:00 GMT
console.log(data_string.toLocaleString() + '\n' + data_string.toString() + '\n' + data_string.toUTCString())