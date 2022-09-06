<img src="https://i.ibb.co/M6nBBb0/mascote.png" align="right" width="150">

# JavaScript

## How to Use (manual)

- **Generator**.
- Como usar `JSON.stringify()`.
- Trabalhando com **Clausures**.
- Usando o operador nullish coalescing `??` em validação de variáveis.
- `padStart()` como preenche a string original com um determinado caractere.
- Criando uma _Syntax Highlighter_.
- Metodos de uso de `console.log`.
    - console.info.
    - console.error.
    - console.warn.
    - console.assert() _Assertividade que leva dois parâmetros_.
    - console.counter().
    - console.group().
    - console.time() _Iniciando um cronometro_.
    - console.table()
        - Exemplo de um array de arrays.
        - Exemplo de array de strings.
    - console.trace() _Informe o rastro deixado pelas funções_.
    - console.clear().
    - Aplique CSS à sainda do console usando a diretiva "%c.

---

**Generator**

```javascript
const my_base = _ => Promise.resolve([{name: 'user 1'}, {name: 'user 2'}])

// my_base poderia ser um generator que entrega dados do banco paginados
async function* processGenerators() {
    for (const item of await my_base()) {
        yield item.name.toUpperCase();
    }
}

// pos processamento sobre demanda
for await (const item of processGenerators()) {
    console.log(item)
}

//--------------------[Normal function]
async function process() {
    const data = await my_base()
    return data.map(item => item.name.toUpperCase())
}

const data = await process()
data.forEach(item => console.log(item))

// Credits: Erick Wendel
```

**Trabalhando com Clausures**

Uma `closure` (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
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

O método `JSON.stringify()` converte valores em javascript para uma String JSON. Esses valores podem ser substituidos
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

O método estático `String.raw()` é uma função tag de modelos literais.
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

O método `padStart()` preenche a string original com um determinado caractere, ou conjunto de caracteres,
(várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. O preenchimento
é aplicado antes do primeiro caractere da string original. A string original não é modificada.

````Javascript
const card_number = '262536748846645355'
const last_number = card_number.slice(-4)
const masked = last_number.padStart(card_number.length, "*")
console.log(masked)
````

**Metodos de uso de `console.log`.**

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

// Aplique CSS à sainda do console usando a diretiva "%c"
const style = `b
color: #bc2e1e;
padding: 5px;
background: #edde9c;
text-shadow: 0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4, 2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 
3px 2px 2px #5dabcd, 3px 4px 2px #378ab4, 4px 3px 3px #5dabcd, 4px 5px 3px #378ab4, 5px 4px 2px #5dabcd, 
5px 6px 2px #378ab4, 6px 5px 2px #5dabcd, 6px 7px 1px #378ab4, 7px 6px 1px #5dabcd, 7px 8px 0px #378ab4, 
8px 7px 0px #5dabcd;
`
console.log("%c Hello World! 😜", style)
````

**Usando o operador nullish coalescing `??` em validação de variáveis.**

O operador de coalescência nula (??) é um operador lógico que retorna o seu operando do lado direito quando o seu
operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
Util quando se trabalho com números.

Ao contrário do operador lógico OR (||), o operando esquerdo é retornado se houver um valor falsy (falso) que não
seja null ou undefined. Em outras palavras, se você usar || para obter algum valor padrão para outra variável foo,
você pode enfrentar comportamentos inesperados se você considerar algum valor falseável como utilizável (eg. '' ou 0).
Veja abaixo alguns exemplos:

````Javascript
let price_1 = 0
let price_2

// Atribuindo um padrão se "preço" não estiver definido.
const default_price_1_not_set = price_1 || 10
const default_price_2_not_set = price_2 || 20

console.log(`Price 1: ${default_price_1_not_set}, Price 2: ${default_price_2_not_set}`) // Price 1: 10, Price 2: 20

let price_3 = 0
let price_4

// Atribuindo um padrão se "preço" não estiver definido.
const default_price_1_set = price_3 ?? 30
const default_price_2_set = price_4 ?? 40

console.log(`Price 1: ${default_price_1_set}, Price 2: ${default_price_2_set}`) // Price 1: 0, Price 2: 40
````