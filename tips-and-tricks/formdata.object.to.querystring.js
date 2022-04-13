//--------------------[Using URLSearchParams]
// Documentation: https://developer.mozilla.org/pt-BR/docs/Web/API/URLSearchParams
const params = new URLSearchParams(new FormData(document.getElementById('formId'))).toString()
console.log(params) // home=BR&item=1&provider=1&order=1243546765&nf=000000000000054&pallete=2&quantity=1200

//--------------------[Using .serialize() jQuery]
// Documentation: https://api.jquery.com/serialize/
const params = $('#formId').serialize()
console.log(params) // home=BR&item=1&provider=1&order=1243546765&nf=000000000000054&pallete=2&quantity=1200