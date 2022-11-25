<img src="https://i.ibb.co/M6nBBb0/mascote.png" align="right" width="130">

# JavaScript e JQuery

## Entendo Object.()

Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor.

#### _Let's Code!_

- Método `Object.values()`.
- Método `Object.seal()`.
- Método `Object.freeze()`.
- [Dominando `Object literal`.](https://github.com/JoseMateusCamargo/javascript/blob/master/object/obj.literal.js)

---

**Método `Object.values()`**

[Object.values()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
retorna um array com os valores das propriedades de um dado objeto, na mesma ordem provida
pelo for...in laço (sendo a diferença que o laço for-in também enumera as propriedades na cadeia prototype).

```Javascript
const json_data = '{"name":"Hello Everybody", "gender":"Male"}'
const obj = JSON.parse(json_data)
Object.values(obj).forEach(item => console.log(item))
```

**Método `Object.seal()`**

[Object.seal()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)
sela um Objeto, evitando que novas propriedades sejam adicionadas ou removidas à ele
e marcando todas as propriedades existentes como não configuráveis. Valores das propriedades
atuais ainda podem ser alterados desde que essas propriedades sejam graváveis (writable).

```Javascript
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
```

**Método `Object.freeze()`**

[Object.freeze()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele;
impede que as propriedades existentes sejam removidas; e impede que propriedades existentes, ou sua inumerabilidade,
configurabilidade, ou capacidade de escrita sejam alteradas. Em essência o objeto é efetivamente imutável.
O método retorna o objeto congelado.

```Javascript
const smart = {model: 'XXX-xxx', storage: 256}
Object.freeze(smart)
console.log(smart)

delete smart.model // TypeError: Cannot add property nationality, object is not extensible
smart['color'] = 'white'
smart.storage = 512
console.log(smart)
```