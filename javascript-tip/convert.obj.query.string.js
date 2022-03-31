const object = {
    text: '111', date_from: '2022-01-01', date_to: '2022-02-02'
}

let query_string = Object.keys(object).map(key => `${key}=${object[key]}`).join('&')
console.log(query_string)