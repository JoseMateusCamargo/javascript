<img src="https://i.ibb.co/M6nBBb0/mascote.png" align="right" width="150">

# JavaScript

## Desenrolando

- Math API
    - `abs` -valor absoluto do número.
    - `floor` - valor inteiro do número.
    - `log` - logaritimo natural do número (base E).
    - `min` - retorna o menor número.
    - `max` - retorna o maior número.
    - `pow` - portencia do número.
    - `random` - gera uma número randomico.
    - `round` - arredonda o número para inteiro mais proximo.
    - `sin` - seno do número.
    - `sqrt` - raiz quadrada do número.
    - `tan` - tangente do número.
- Objeto
    - Adicionando e acessando propriedades.
    - Utilizando função como método declarada dentro do objeto.

---

**Math API**

```Javascript
let variable = 9

variable.toExponential(2) // '9.00e+0'
variable.toFixed(2) // '9.00'
variable.toPrecision(1) // '9'
variable.toString() // '9'
variable.valueOf() // 9
```

**Objeto**

Adicionando e acessando propriedades

```Javascript
const personal = {name: "Javascript", type: "computer language"}

console.log(personal.type) // computer language
console.log(personal['type']) // computer language

delete personal.type // apagando propriedade do objeto
```

Utilizando função como método declarada dentro do objeto

```Javascript
const getType = function () {
    return this.type
}

const personal = {name: "Javascript", type: "computer language", getType: getType}

console.log(personal.getType()) // computer language
```