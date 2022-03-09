/*
XMLHttpRequest é um objeto que fornece funcionalidade ao cliente para transferir dados entre um cliente e um servidor.
Ele fornece uma maneira fácil de recuperar dados de um URL sem ter que fazer uma atualização de página inteira.
Isso permite que uma página da Web atualize apenas uma parte do conteúdo sem interromper o que o usuário esteja fazendo.
XMLHttpRequest é usado constantemente na programação de AJAX.
 */

//-------------------- [XMLHttpRequest synchronous]
const url = "https://dicasdejavascript.com.br/exemplo.txt";
const syn = new XMLHttpRequest();
syn.open("GET", url, false); // Requisição síncrona (pois o terceiro parâmetro da função open é false).
syn.send(); // Ou seja, a execução do código para no método send() enquanto a requisição não retorna do servidor.
console.log(syn.responseText);

//--------------------[XMLHttpRequest asynchronous]
// O script CONTINUARÁ mesmo que a requisição não tenha retornado do servidor.

const async = new XMLHttpRequest();
async.open("GET", url, true);

async.onreadystatechange = function () { // Função chamada quando a requisição retornar do servidor.
    console.log(async.responseText);
    console.log(async.readyState);
    console.log(async.status);
}

async.send();