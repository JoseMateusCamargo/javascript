/*
Documentation: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
O método Object.freeze() congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele;
impede que as propriedades existentes sejam removidas; e impede que propriedades existentes, ou sua inumerabilidade,
configurabilidade, ou capacidade de escrita sejam alteradas. Em essência o objeto é efetivamente imutável.
O método retorna o objeto congelado.
 */

const smart = {model: 'XXX-xxx', storage: 256}
Object.freeze(smart)
console.log(smart)

delete smart.model // TypeError: Cannot add property nationality, object is not extensible
smart['color'] = 'white'
smart.storage = 512
console.log(smart)