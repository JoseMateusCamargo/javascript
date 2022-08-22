<img src="https://i.ibb.co/M6nBBb0/mascote.png" align="right" width="150">

# JavaScript and JQuery

## Trabalalhando com Arrays in JavaScript

- Remover dublicados de qualquer tipo in array usando objeto Se.
- Encontrando item com `array.find`.
- Usando `array.at` para retornar o item referente a sua index.
- Use `array.every` to check if all elements pass the test.
- Removendo valor `False` no array.
- Encontrando id máximo em um array de objetos (`array.forEach`, `map`, `reduce` &
  `Math.max`)
  . [Source](https://github.com/JoseMateusCamargo/javascript/blob/master/arrays-manipulating/find.max.id.array.objects.js)

---

**Encontrando item com `array.find`**

Função array.find para localizar no array, caso encontrado o objeto é retornado

````Javascript
const users = [{name: 'Mat', age: 39}, {name: 'Pol', age: 40}, {name: 'Jon', age: 41}]

users.find((user: {age:number, name:string}) => {
    return user.name === 'Jon'
})

// ou pode remover os parênteses e chaves para retornar não explicitamente

users.find(user => user.name === 'Jon')
````

**Remover dublicados de qualquer tipo in array
usando [objeto Se](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set)**

O objeto Set permite que você armazene valores únicos de qualquer tipo,desde valores primitivos a referências a objetos.

````Javascript
const numbers = [1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 0, 0]
console.log(numbers) // Output: [1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 0, 0]

const unique_numbers = [...new Set(numbers)]
console.log(unique_numbers) // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
````

**Usando `array.at` para retornar o item referente a sua index**

O método at() recebe um valor inteiro e retorna o item referente ao index dele, permitindo valores positivos
ou negativos. Valores negativos contam apartir do último item do array.

````Javascript
const list = ['php', 'python', 'javascript', 'R']

//--------------------[YES]
console.log(list.at(-1))

//--------------------[Don't do this]
console.info(list[list.length - 1])
````

**Use `array.every` to check if all elements pass the test**

````Javascript
const grad = [0, 2, 3, 4, 5, 7, 8, 100]
const all_pass = grad.every((grad) => grad > 2)
console.log(all_pass)
````

**Removendo valor `False` no array**

````Javascript
Boolean("")
const data = ['', null, 'crazy', 1, false, 0, null]
const filter = data.filter(Boolean)
console.log(filter)
````

---

> [Static methods.](https://github.com/JoseMateusCamargo/javascript/blob/master/arrays-manipulating/static.methods.js)  
> Esses métodos são usados para criar novas matrizes ou converter objetos iteráveis
> e semelhantes a matrizes em matrizes.

> [Mutation methods.](https://github.com/JoseMateusCamargo/javascript/blob/master/arrays-manipulating/mutation.methods.js)  
> Os métodos a seguir são métodos de instância ou métodos prototípicos.
> Eles são chamados em uma instância de array específica para aplicar mutações.

> [Traditional loops.](https://github.com/JoseMateusCamargo/javascript/blob/master/arrays-manipulating/traditional.loops.js)  
> Usando um loop tradicional com todas as suas variantes (ou seja, for, for-of e .forEach () loops).

> [Replacing traditional loops.](https://github.com/JoseMateusCamargo/javascript/blob/master/arrays-manipulating/replacing.traditional.loops.js)  
> Usando (.map(), .filter(), .find() & .findIndex(), .reduce(), .every() & .some() e .sort()).

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

**Trabalhando com ES6 features**

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

### Direitos de uso (Use rights)

<p>
  Você tem todo o direito de usar esse material para seu próprio aprendizado.<br/>
  You can use this material for your own learning.
</p>