//--------------------[Convertendo FormData de um formulário em Query String usando URLSearchParams]
// Documentation: https://developer.mozilla.org/pt-BR/docs/Web/API/URLSearchParams
const params = new URLSearchParams(new FormData(document.getElementById('formId'))).toString()
console.log(params) // home=BR&item=1&provider=1&order=1243546765&nf=000000000000054&pallete=2&quantity=1200

//--------------------[Convertendo FormData de um formulário em Query String usando .serialize() jQuery]
// Documentation: https://api.jquery.com/serialize/
const params = $('#formId').serialize()
console.log(params) // home=BR&item=1&provider=1&order=1243546765&nf=000000000000054&pallete=2&quantity=1200

//--------------------[Adicionando objeto em Query String]
// ?post=1234&action=edit
const params = new URLSearchParams(window.location.search) //1234
const postID = params.get('post')
if (postID && params.has('action')) {
    params.append('active', '1')
}
const newParameters = params.toString() // ?post=1234&action=edit&active=1

//--------------------[Convertendo objeto em Query String]
const object = {
    text: '111', date_from: '2022-01-01', date_to: '2022-02-02'
}

let query_string = Object.keys(object).map(key => `${key}=${object[key]}`).join('&')
console.log(query_string)