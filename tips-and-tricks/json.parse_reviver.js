// Using the Reviver Function in JSON.parse

let reviver = JSON.parse(`{  "abc": 123,  "def": 456,  "ghi": 0}`, (key, value) => {
    if (key.startsWith('ab')) {
        return undefined
    }
    return value
})
console.log(reviver)

//--------------------------------------------------//

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