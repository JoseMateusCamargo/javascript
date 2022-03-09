/*
O método at() recebe um valor inteiro e retorna o item referente ao index dele, permitindo valores positivos
ou negativos. Valores negativos contam apartir do último item do array.
 */

const list = ['php', 'python', 'javascript', 'R']

//--------------------[YES]
console.log(list.at(-1))

//--------------------[Don't do this]
console.info(list[list.length - 1])