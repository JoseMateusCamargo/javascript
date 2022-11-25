<img src="https://i.ibb.co/M6nBBb0/mascote.png" align="right" width="130">

# JavaScript e JQuery

## Snippets

#### _Let's Code!_

- **onKeyPressed** Executa um JavaScript quando um usuário pressiona uma tecla
- Contador de ocorrencias em uma **string**
- Métodos simples para converter a tabela para **JSON**
- Criando um relógio simples
- Criando carrosel
- Altere o **CSS** da classe usando **JQuery**
- [Capturar eventos do leitor de código de barras-Qrcode](./capture.barcode.reader.keyborad.wedge.js)
- [Função **recursiva** em exemplo de máquina ATM](./recursive_ATM_machine.js)
- [Como converter tabela em arquivo **.csv** e realizar download.](./table.to.csv.download.js)

---

**`onKeyPressed` Executa um JavaScript quando um usuário pressiona uma tecla**

```javascript
// document.addEventListener("keydown", onKeyPressed) // Use to add event in element

function key(event) {
    // Use to block ENTER
    if (event.which === 13) {
        alert("No no no ... ENTER not working");
        return false;
    }

    let keyCode = event.keyCode;
    let key = event.key;
    console.log('Key Code: ' + keyCode + ' Key: ' + key);
}

document.body.onkeypress = key;
```

**Métodos simples para converter a tabela para `JSON`**

```Javascript
function table_to_JSON(table) {
    const obj = {}
    let row, rows = table.rows
    let i = 0, iLen = rows.length
    for (; i < iLen; i++) {
        row = rows[i]
        obj[row.cells[0].textContent] = row.cells[1].textContent
    }
    return JSON.stringify(obj)
}

console.log(table_to_JSON(document.querySelectorAll("table")[1])) // Get second table

// Use reduce.call to get indices: value
const t = document.querySelectorAll("table")[4]
const j = [].reduce.call(t.rows, function (res, row) {
    res[row.cells[0].textContent] = row.cells[1].textContent
    return res
}, {})

console.log(JSON.stringify(j, null, 2))
```

**Contador de ocorrencias em uma `string`**

```Javascript
//-------------------- [1 mode]
function characterCount1(word, character) {
    const reducer = (accumulator, current) => (accumulator += current.includes(character) | false)
    return [...word].reduce(reducer, 0)
}

//-------------------- [2 mode]
function characterCount2(word, character) {
    return word.split(character).length - 1;
}

console.log(characterCount1('javascript is fuckded', 'a'))
console.log(characterCount2('javascript is fuckded', 'a'))
```

**Criando um relógio simples**

```Javascript
const clock = document.getElementById('real-clock') // Div id

setInterval(function () {
    //clock.innerHTML = ((new Date).toLocaleString().substr(11, 8))
    console.log('Example 1: ' + ((new Date).toLocaleString().substr(11, 8)))
}, 1000)

const myVar = setInterval(myTimer, 1000);

function myTimer() {
    let d = new Date(), displayDate;
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        displayDate = d.toLocaleTimeString('pt-BR');
    } else {
        displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Sao_Paulo'});
    }
    // document.getElementById("demo").innerHTML = displayDate;
    console.log('Example 2: ' + displayDate)
}
```

**Criando carrosel**

```Javascript
const colors = ['red', 'green', 'blue']

Array.prototype.carousel = function (index) {
    const length = this.length
    return this[((index % length) + length) % length]
}

for (let i = 0; i <= 5; i++) {
    console.log(colors.carousel(i))
}
```

**Altere o _CSS_ da classe usando _JQuery_**

```Javascript
$(function () {
    $('#blue').click(function () {
        $('p')
            .css("background-color", "blue")
            .fadeOut()
            .delay(1000)
            .fadeIn()
    });

    $('#red').click(function () {
        $('p').css("background-color", "red")

        $('#message')
            .text("Cor alterada com sucesso")
            .css({color: 'red', border: '1px solid red'})
            .delay(3000)
            .addClass('green')

        $('button').removeClass('red')
    })
})
```