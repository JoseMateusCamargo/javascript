<img src="https://i.ibb.co/M6nBBb0/mascote.png" align="right" width="150">

# JavaScript

## Tips

- Trabalhando com **Query String** (converta formulário - objeto - adicione elemento).
    - Convertendo FormData de um formulário em Query String
      usando [URLSearchParams.](https://developer.mozilla.org/pt-BR/docs/Web/API/URLSearchParams)
    - Convertendo FormData de um formulário em Query String
      usando [.serialize() jQuery.](https://api.jquery.com/serialize/)
    - Adicionando objeto em Query String método 1.
    - Convertendo objeto em Query String método 2.


- Capitalizar `toUpperCase` primeira letra.
- Use `performance.now` para medir a velocidade de execução.
- `repeat()` Repetir uma determinada string concatenada na string original.
- Retorne os parametros de uma URL usando new `URL()`.

---

**Trabalhando com **Query String** (converta formulário - objeto - adicione elemento)**

````Javascript
//--------------------[Convertendo FormData de um formulário em Query String usando URLSearchParams]
const params = new URLSearchParams(new FormData(document.getElementById('formId'))).toString()
console.log(params) // home=BR&item=1&provider=1&order=1243546765&nf=000000000000054&pallete=2&quantity=1200

//--------------------[Convertendo FormData de um formulário em Query String usando .serialize() jQuery]
const params = $('#formId').serialize()
console.log(params) // home=BR&item=1&provider=1&order=1243546765&nf=000000000000054&pallete=2&quantity=1200

//--------------------[Adicionando objeto em Query String método 1]
// ?post=1234&action=edit
const params = new URLSearchParams(window.location.search) //1234
const postID = params.get('post')
if (postID && params.has('action')) {
    params.append('active', '1')
}
const newParameters = params.toString() // ?post=1234&action=edit&active=1

//--------------------[Convertendo objeto em Query String método 2]
const object = {
    text: '111', date_from: '2022-01-01', date_to: '2022-02-02'
}

let query_string = Object.keys(object).map(key => `${key}=${object[key]}`).join('&')
console.log(query_string)
````

**Capitalizar `toUpperCase` primeira letra**

````Javascript
const capitalize = ([first, ...rest]) => {
    return first.toUpperCase() + rest.join('')
}

console.info(capitalize('user'))
````

**`repeat()` Repetir uma determinada string concatenada na string original.**

O método repeat() constrói e retorna uma nova string com um determinado número de cópias concatenadas da string
original.
[Documentação.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

````Javascript
const sentence = 'again '
const output = `Repeat ${sentence.repeat(10)}...`
console.log(output) // Output: Repeat again again again again again again again again again again ...
````

**Use `performance.now` para medir a velocidade de execução.**

Use` performance.now` para medir a velocidade de execução, a API de desempenho fornecerá uma medição muito mais precisa.

````Javascript
const start = performance.now();

for (let i = 0; i < 1e4; i++) {
    console.log('Using performance.now ...')
}

const end = performance.now();
const time = start - end
console.log(time)
````

**Retorne os parametros de uma URL usando new `URL()`.**

O URL()construtor retorna um URL objeto recém-criado representando a URL definida pelos parâmetros.
Documentation: https://developer.mozilla.org/en-US/docs/Web/API/URL/URL

````Javascript
const url = new URL('https://teste.com/path/to/jmc?query=set')

console.log(url.host) // teste.com
console.log(url.pathname) // path/to/jmc
console.log(url.searchParams.get('query')) // set

console.log(url)

/*
URL {
href: 'https://teste.com/path/to/jmc?query=set',
origin: 'https://teste.com',
protocol: 'https:',
username: '',
password: '',
host: 'teste.com',
hostname: 'teste.com',
port: '',
pathname: '/path/to/jmc',
search: '?query=set',
searchParams: URLSearchParams { 'query' => 'set' },
hash: ''
}
*/
````