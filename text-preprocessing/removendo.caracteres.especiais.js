/*
Como remover acentos usando String.prototype.normalize do ES6, seguido de um String.prototype.replace

Funcionamento:
'Á'.length; // 1 => String Á em UTF-18 tem 1 dígito
'Á'.normalize('NFD').length; // 2 => String Á em Unicode tem 2 dígitos: \u0041\u0301

console.log('\u0041\u0301'); // Á => Se tentarmos representar Unicode, vamos obter o seguinte resultado
 */

//--------------------[Removendo todos os caracteres especiais]
// Remover os acentos e outros caracteres especiais como /.?!(), substituindo tudo menos letras e números.
const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç/.,~!@#$%&_-12345 SS';
const parsed = str.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
console.log(parsed); // AEIOUaeiouaeiouaeiouCc12345SS

// Para remover espaços, basta adicionar \s:
// str.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '') // AEIOUaeiouaeiouaeiouCc12345 SS

//--------------------[Substituindo caracteres especiais e com acentos]
'Esta é uma frase # @ @'.replace(/[^\w\-]+/g, '-'); // 'Esta-uma-frase-'

// Remover somente os acentos e depois substituirmos outros caracteres especiais
'Esta é uma frase # @ @'.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\-]+/g, '-'); // 'Esta-e-uma-frase-'

//--------------------[Função completa]
const replaceSpecialChars = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/([^\w]+|\s+)/g, '-') // Substitui espaço e outros caracteres por hífen
        .replace(/\-\-+/g, '-')    // Substitui multiplos hífens por um único hífen
        .replace(/(^-+|-+$)/, ''); // Remove hífens extras do final ou do inicio da string
}

console.log(replaceSpecialChars('Esta é uma frase!!!'));