<img src="https://i.ibb.co/M6nBBb0/mascote.png" align="right" width="150">

# JavaScript

## Tips

- Trabalhando com `Query String` (converta formulário - objeto - adicione elemento).
    - Convertendo FormData de um formulário em Query String
      usando [URLSearchParams.](https://developer.mozilla.org/pt-BR/docs/Web/API/URLSearchParams)
    - Convertendo FormData de um formulário em Query String
      usando [.serialize() jQuery.](https://api.jquery.com/serialize/)
    - Adicionando objeto em Query String método 1.
    - Convertendo objeto em Query String método 2.
- Get `Query Parameters` de uma URL.
- Capitalizar `toUpperCase` primeira letra.
- Reverter string.
- Retorna o _status_ online do navegador.
- Trabalhando com `localStorage`.
- Check se data é valida.
- Limpar todos os `cookies`.
- Use `performance.now` para medir a velocidade de execução.
- `repeat()` Repetir uma determinada string concatenada na string original.
- Retorne os parametros de uma URL usando new `URL()`.

---

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