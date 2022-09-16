<img src="https://i.ibb.co/M6nBBb0/mascote.png" align="right" width="130">

# JavaScript

## Dicas e Truques

- Obter substring _antes_ ou _depois_ de um caracter especifico.
- Acessando elemento usando `ByXpath`.
- Formatando datas.
- Como detectar URL in texto e retornar como `Link`.
- Capitalizar `toUpperCase` primeira letra.
- Reverter string.
- Retorna o _status_ online do navegador.
- Trabalhando com `localStorage`.
- Check se data é valida.
- Limpar todos os `cookies`.
- Use `performance.now` para medir a velocidade de execução.
- `repeat()` Repetir uma determinada string concatenada na string original.
- Retorne os parametros de uma URL usando new `URL()`.
- Converter valor para moeda local.
- Convertendo segundos em horas.
- Como parar loop `setInterval`.
- Trabalhando com `Query String` (converta formulário - objeto - adicione elemento).
    - Convertendo FormData de um formulário em Query String
      usando [URLSearchParams.](https://developer.mozilla.org/pt-BR/docs/Web/API/URLSearchParams)
    - Convertendo FormData de um formulário em Query String
      usando [.serialize() jQuery.](https://api.jquery.com/serialize/)
    - Adicionando objeto em Query String método 1.
    - Convertendo objeto em Query String método 2.
- Get `Query Parameters` de uma URL.

---

**Acessando elemento usando `ByXpath`**

```Javascript
function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

console.log(getElementByXpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[3]/center/input[1]'))
```

**Obter substring _antes_ ou _depois_ de um caracter especifico**

```Javascript
const text = 'Q1.0';
let substring = '.'

//-------------------- [Using substring() method]
console.log(text.substring(0, text.indexOf(substring)))
console.log(text.substring(text.indexOf(substring) + substring.length))

//-------------------- [Using function]
function getStringAfterSubstring(parentString, substring) {
    return parentString.substring(parentString.indexOf(substring) + substring.length)
}

function getStringBeforeSubstring(parentString, substring) {
    return parentString.substring(0, parentString.indexOf(substring))
}

console.log(getStringAfterSubstring(text, substring))
console.log(getStringBeforeSubstring(text, substring))
```

**Como detectar URL in texto e retornar como `Link`**

```Javascript
let detect = (text) => {
    return text.replace(/(https?:\/\/[^\s]+)/g, "<a href='$1' target='_blank' >$1</a>")
}

console.log(detect('https://example.com is a great site, and other https://other.example.com '))
```

**Trabalhando com `Query String` (converta formulário - objeto - adicione elemento)**

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

**Get `Query Parameters` de uma URL**

```Javascript
const getParameters = (URL) => {
    URL = JSON.parse('{"' + decodeURI(URL.split("?")[1])
        .replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

    return JSON.stringify(URL);
};
getParameters(window.location) // { search : "easy", page : 3 }
```

**Capitalizar `toUpperCase` primeira letra**

````Javascript
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
capitalize("follow for more")
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
[Documentação.](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL)

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

**Reverter string**

```JavaScript
const str = 'Jshhhfje9998'

String.prototype.reverseString = function () {
    return [...this].reverse().join('')
}

console.log(str.reverseString())
```

**Retorna o _status_ online do navegador**

A propriedade retorna um valor booleano, com true significado online e false
offline. A propriedade envia atualizações sempre que a capacidade do navegador de se conectar à rede muda.
A atualização ocorre quando o usuário segue links ou quando um script solicita uma página remota. Por exemplo,
a propriedade deve retornar falsequando os usuários clicarem nos links logo após perderem a conexão com a internet.
[Documentação.](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine)

````Javascript
window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

function updateOnlineStatus(e) {
    const condition = navigator.onLine ? `You're online! 😄` : `You're offline! 😢`;
    console.log(`${condition}`)
}
````

**Trabalhando com `localStorage`**

```Javascript
// First page
window.onload = function () {
    const getInput = prompt("Hey type something here: ");
    localStorage.setItem("storageName", getInput);
}

// Second page
window.onload = alert(localStorage.getItem("storageName"));
```

**Check se data é valida**

```Javascript
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
isDateValid("December 17, 1995 03:24:00"); // True
```

**Limpar todos os `cookies`**

```Javascript
const clearCookies = document.cookie.split(';')
    .forEach(cookie => document.cookie = cookie.replace(/^ +/, '')
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
```

**Encontrar o dia de um ano**

```Javascript
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date()) // 272
```

**Calcular dias entres duas datas**

```Javascript
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
dayDif(new Date("2020-10-21"), new Date("2021-10-22")) // 366
```

**Gerar hexadecimal randomico**

```Javascript
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log(randomHex()); // #92b008
```

**Converter valor para moeda local**

```javascript
function converter(value) {
    let option = {style: 'currency', currency: 'BRL'}
    return value.toLocaleString('pt-BR', option)
}

console.log(converter(8300))
```

**Convertendo segundos em horas**

```Javascript
function secToHour(seconds) {
    const isoString = new Date(seconds * 1000).toISOString().substr(11, 8)
    const [hour, minute, second] = isoString.split(':');

    return `${hour}:${minute}:${second}`.replace(/^00:/, "")
}

console.log(secToHour(7548))
```

**Como parar loop `setInterval`**

```Javascript
const myVar = setInterval(myTimer, 1000);

function myTimer() {
    console.log("Loop with setInterval!")
    const d = new Date()
    console.log(d.toLocaleTimeString())
}

function myStopFunction() {
    console.log("Stopping loop with clearInterval!")
    clearInterval(myVar)
}
```

**Formatando datas**

```Javascript
//--------------------[1 Método] => 30/06/2022
const data = new Date()
const dateFormat = data.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric'})
console.log(dateFormat)

//--------------------[2 Método] => 30/6/2022
const date_ = new Date()
const day = date_.getDate()
const month = date_.getMonth() + 1
const year = date_.getFullYear()
const yesterday = date_.getDate() - 1
console.log(`${day}/${month}/${year}`)

//--------------------[3 Método] => 2022-06-30
console.log(new Date().toJSON().slice(0, 10))

//--------------------[4 Método] => 30 Jun 2022
console.log(new Date().toUTCString().slice(5, 16))

//--------------------[Extra]
const data_string = new Date('10/08/2015 00:00:00')
data_string.toLocaleString() // 08/10/2015 00:00:00
data_string.toString() // Thu Oct 08 2015 00:00:00 GMT-0300 (Horário Padrão de Brasília)
data_string.toUTCString() // Thu, 08 Oct 2015 03:00:00 GMT
console.log(data_string.toLocaleString() + '\n' + data_string.toString() + '\n' + data_string.toUTCString())
```

**Usando a função `Reviver` em `JSON.parse`**

```Javascript
let reviver = JSON.parse(`{  "abc": 123,  "def": 456,  "ghi": 0}`, (key, value) => {
    if (key.startsWith('ab')) {
        return undefined
    }
    return value
})
console.log(reviver)

// Using Callback
let reviver_callback = (key, value) => {
    if (key.endsWith('hi')) {
        return undefined
    }
    return value
}

const json = `{ "abc": 123,  "def": 456,  "ghi": 0}`
const objectRevived = JSON.parse(json, reviver_callback)
console.log(objectRevived)
```