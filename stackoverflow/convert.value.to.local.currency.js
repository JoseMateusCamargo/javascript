// Convert value to local currency

function converter(value) {
    let option = {style: 'currency', currency: 'BRL'}
    return value.toLocaleString('pt-BR', option)
}

console.log(converter(8300))