<img src="https://i.ibb.co/M6nBBb0/mascote.png" align="right" width="150">

# JavaScript

## How to Use

- Como usar `JSON.stringify()`.
- Trabalhando como **Clausures**.
- `padStart()` como preenche a string original com um determinado caractere.
- Criando uma _Syntax Highlighter_.
- Metodos de uso de `console.log`.

---

**Trabalhando como Clausures**

Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
[Documentação.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures)

````Javascript
const outer = () => {
    let n = 42
    const inner = () => {
        // Inner não pode acessar a variável n
        console.log(n)
    }

    return inner()
}

const inner = outer()
inner()
````

**Como usar `JSON.stringify()`**

O método JSON.stringify() converte valores em javascript para uma String JSON. Esses valores podem ser substituidos
especificando a função replacer, ou incluindo somente as propriedades específicas, quando o array do replacer for
especificado. [Documentação.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

````Javascript
const some_obj = {name: 'one', age: 33, online: true}

JSON.stringify(some_obj, null, 2)
/* output:
{
    "name": "one",
    "age": 33,
    "online": true
 } */

JSON.stringify(some_obj) // {"name": "one",    "age": 33,    "online": true }
````

**Criando uma _Syntax Highlighter_**

O método estático String.raw() é uma função tag de modelos literais.
[Documentação.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/raw)

````Javascript
const markup = `
<div class="tweet">
    <div class="box d-flex justify-content-between">
        <div class="col-9">
            <div class="icon-text mb-md-2 ml-1">
                <span class="text-black-75" style="font-size: 1.2rem;"> Title</span><br />
            </div>
        </div>
    </div>
</div>`;

const markup_highlight = String.raw`
<div class="tweet">
    <div class="box d-flex justify-content-between">
        <div class="col-9">
            <div class="icon-text mb-md-2 ml-1">
                <span class="text-black-75" style="font-size: 1.2rem;"> Title</span><br />
            </div>
        </div>
    </div>
</div>`
````

**`padStart()` como preenche a string original com um determinado caractere**.

O método padStart() preenche a string original com um determinado caractere, ou conjunto de caracteres,
(várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. O preenchimento
é aplicado antes do primeiro caractere da string original. A string original não é modificada.

````Javascript
const card_number = '262536748846645355'
const last_number = card_number.slice(-4)
const masked = last_number.padStart(card_number.length, "*")
console.log(masked)
````

**Metodos de uso de `console.log`.**

- console.info.
- console.error.
- console.warn.
- console.assert() _Assertividade que leva dois parâmetros_.
- console.counter().
- console.group().
- console.time() _Iniciando um cronometro_.
- console.table()
    - Exemplo de um array de arrays.
    - String array example.
- console.trace() _Informe o rastro deixado pelas funções_.
- console.clear().

````Javascript
console.info('Information message')
console.error('Error message')
console.warn('Warning message')

let type = false
console.assert(type === true, 'Information: ' + type) // Assertividade que leva dois parâmetros

console.count()
console.count()
console.count()

console.group()
console.log('log 1')
console.log('log 2')
console.log('log 3')
console.groupEnd()

console.time() // Iniciando um cronometro
console.assert(type === true, 'Information: ' + type)
console.timeEnd()

const months = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July"}
console.table(months)
console.table([["January", "March"], ["March", "April"], ["May", "June"]]) // Exemplo de um array de arrays
console.table(["January", "March", "March"]) // Exemplo de array de strings


function one() {
    function two() {
        console.trace()
    }

    two()
}

one()

console.log('Look at the trash...') // Look at the trash...
console.clear() // Console was cleared
````