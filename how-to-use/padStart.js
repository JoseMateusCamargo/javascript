/*
O método padStart() preenche a string original com um determinado caractere, ou conjunto de caracteres,
(várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. O preenchimento
é aplicado antes do primeiro caractere da string original. A string original não é modificada.
 */

const card_number = '262536748846645355'
const last_number = card_number.slice(-4)
const masked = last_number.padStart(card_number.length, "*")
console.log(masked)