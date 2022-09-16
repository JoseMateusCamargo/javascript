<img src="https://i.ibb.co/M6nBBb0/mascote.png" align="right" width="130">

# JavaScript e JQuery

## Trabalhando com Arrays in JavaScript

- _Check_ se um array está vazio.
- Remover valores duplicados em um array.
- Encontrando item com função `array.find`.
- Remover valores dublicados de qualquer tipo in array usando objeto `set`.
- Retornar o item referente a sua index usando `array.at`.
- Checar se todos os elementos passam no teste usando `array.every`.
- Removendo valor `False` em um array.
- _Static methods_ (convertendo ou criando novas matrizes)
- _Mutation methods_ (inserir, remover..) itens em um array.
- Trabalhando com **loop** :b`for-in`, `for-of`, `.forEach`.
- Outros métodos de instância pura que não alteram o array.
- Trabalhando com ES6 features (_nova versão do javascript_).
- [Encontrando id máximo em um array de objetos](https://github.com/JoseMateusCamargo/javascript/blob/master/arrays-manipulating/find.max.id.array.objects.js) :
  `array.forEach`, `map`, `reduce` e `Math.max`.
- [Usando outros metodos de loop](https://github.com/JoseMateusCamargo/javascript/blob/master/arrays-manipulating/replacing.traditional.loops.js) :
  `map`, `filter`, `find`, `findIndex`, `reduce`, `every`, `some`, `sort` ...
- [Trabalhando com _spread operator_ `(…)`.]()

---

**_Check_ se um array está vazio**

```Javascript
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;
isNotEmpty([1, 2, 3]); // True
```

**Remover valores duplicados em um array**

```Javascript
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
```

**Encontrando item com `array.find`**

Usando função array.find para localizar no array, caso encontrado o objeto é retornado

````Javascript
const users = [{name: 'Mat', age: 39}, {name: 'Pol', age: 40}, {name: 'Jon', age: 41}]

users.find((user: {age:number, name:string}) => {
    return user.name === 'Jon'
})

// ou pode remover os parênteses e chaves para retornar não explicitamente
users.find(user => user.name === 'Jon')
````

**Remover valores dublicados de qualquer tipo in array
usando [objeto Set](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set)**

O objeto Set permite que você armazene valores únicos de qualquer tipo,desde valores primitivos a referências a objetos.

````Javascript
const numbers = [1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 0, 0]
console.log(numbers) // [1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 0, 0]

const unique_numbers = [...new Set(numbers)]
console.log(unique_numbers) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
````

**Retornar o item referente a sua index usando `array.at`**

O método `at()` recebe um valor inteiro e retorna o item referente ao index dele, permitindo valores positivos
ou negativos. Valores negativos contam apartir do último item do array.

````Javascript
const list = ['php', 'python', 'javascript', 'R']
console.log(list.at(-1)) //--------------------[YES]
console.info(list[list.length - 1]) //--------------------[Don't do this]
````

**Checar se todos os elementos passam no teste usando `array.every`**

````Javascript
const grad = [0, 2, 3, 4, 5, 7, 8, 100]
const all_pass = grad.every((grad) => grad > 2)
console.log(all_pass)
````

**Removendo valor `False` em um array**

````Javascript
Boolean("")
const data = ['', null, 'crazy', 1, false, 0, null]
const filter = data.filter(Boolean)
console.log(filter)
````

---

**_Static methods_ (convertendo ou criando novas matrizes)**

Esses métodos são usados para criar novas matrizes ou converter objetos iteráveis e semelhantes a matrizes em matrizes.

```Javascript
// New array
Array.of("🍏", "🍌", "🍒"); // ["🍏", "🍌", "🍒"]
Array(3).fill("⭐️"); // ["⭐️", "⭐️", "⭐️"]

// From array-like object
Array.from("hello") // ["h", "e", "l", "l", "o"]

// From iterable
Array.from([1, 2, 3], (x) => x * 2) // [2, 4, 6]

// From object
const person = {name: "John", age: "23"}

Object.keys(person) // ["name", "age"]
Object.values(person) // ["John", "23"]
Object.entries(person) // [["name", "John"], ["age", "23"]]
```

**_Mutation methods_ (inserir, remover..) itens em um array**

Os métodos a seguir são métodos de instância ou métodos prototípicos. Eles são chamados em uma instância de array
específica para aplicar mutações.

```Javascript
const fruits = ["🍏", "🍌", "🍒", "🍑", "🥑"]

// Inserts element at the end
fruits.push("🥭") // 6
console.log(fruits) // ["🍏", "🍌", "🍒", "🍑", "🥑", "🥭"]

// Removes last element
fruits.pop() // "🥭"
console.log(fruits) // ["🍏", "🍌", "🍒", "🍑", "🥑"]

// Inserts element at the start
fruits.unshift("🍉") // 6
console.log(fruits) // ["🍉", "🍏", "🍌", "🍒", "🍑", "🥑"]

// Removes first element
fruits.shift() // "🍉"
console.log(fruits) // ["🍏", "🍌", "🍒", "🍑", "🥑"]
```

**Trabalhando com loop :`for-in`, `for-of`, `.forEach`**

```Javascript
const months = ["January", "February", "March", "April", "May", "June", "July"]

// ✅ Retorna a index 
for (let key in months) {
    console.log(key)
}

// ✅✅ Condição de quebra implícita (retorna valor), mas nenhuma variável de índice.
for (let key of months) {
    console.log(key)
}

// ✅✅✅ condição de quebra implícita com acesso opcional ao índice.
fruits.forEach((fruit, _index) => {
    console.log(fruit)
})

// Loop simples para exibir elementos
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}
```

**Outros métodos de instância pura que não alteram o array**

````Javascript
const tags = ["js", "react", "node", "js"]

tags.join(", ") // "js, react, node, js"
tags.indexOf("react") // 1
tags.lastIndexOf("js") // 3
tags.reverse() // ["js", "node", "react", "js"]

// String to array
"29-10-2021".split("-") // ["29", "10", "2021"]
````

**Trabalhando com ES6 features (_nova versão do javascript_)**

````Javascript
// ------------------- Destructuring
const [apple, banana, cherries] = ["🍏", "🍌", "🍒"];
console.log(apple); // 🍏
console.log(banana); // 🍌
console.log(cherries); // 🍒

// ------------------- Default values
const [apple, banana, cherries, mango = "🥭"] = ["🍏", "🍌", "🍒"];
console.log(mango); // 🥭

// ------------------- Skipping values
const [apple, , cherries] = ["🍏", "🍌", "🍒"];
console.log(apple); // 🍏
console.log(cherries); // 🍒

// -------------------Spread operator
const [apple, ...others] = ["🍏", "🍌", "🍒"];
console.log(apple); // 🍏
console.log(others); // ["🍌", "🍒"]
````

---

#### Array methods 🚀

![alt text](../assets/img/array_methods_in_js.jpeg)