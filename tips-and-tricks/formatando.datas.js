// Formatando data

//--------------------[1 Método] => 30/06/2022
const data = new Date()
const dateFormat = data.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric'})
console.log(dateFormat)

//--------------------[2 Método] => 30/6/2022
const date_ = new Date()
const day = date_.getDate()
const month = date_.getMonth() + 1
const year = date_.getFullYear()
const yesterday = date_.getDate() - 1
console.log(`${day}/${month}/${year}`)

//--------------------[3 Método] => 2022-06-30
console.log(new Date().toJSON().slice(0, 10))

//--------------------[4 Método] => 30 Jun 2022
console.log(new Date().toUTCString().slice(5, 16))

//--------------------[Extra]
const data_string = new Date('10/08/2015 00:00:00')
data_string.toLocaleString() // 08/10/2015 00:00:00
data_string.toString() // Thu Oct 08 2015 00:00:00 GMT-0300 (Horário Padrão de Brasília)
data_string.toUTCString() // Thu, 08 Oct 2015 03:00:00 GMT
console.log(data_string.toLocaleString() + '\n' + data_string.toString() + '\n' + data_string.toUTCString())