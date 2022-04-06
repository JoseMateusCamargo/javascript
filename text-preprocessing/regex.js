// Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string.

const text = "ga3m2e.8o-/*ver"
const regex = /([^A-zÀ-ÿ]|_)/g
const result = text.replace(regex, '')
console.log({result}) // Console: {result: "gameover"}

//--------------------------------------------------//

// With groups.
// Groups and Ranges, ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges

const dateRegex = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/

const match = dateRegex.exec('2021-05-19')
const {groups} = match
const {year, month, day} = groups
console.log({day, month, year}) // Console: {day: "19", month: "05", year: "2021"}

// Or
const dateRegex2 = /(?<year2>[0-9]{4})-(?<month2>[0-9]{2})-(?<day2>[0-9]{2})/

const {groups: {year2, month2, day2}} = dateRegex2.exec('2021-05-19')
console.log({day2, month2, year2}) // Console:  {day2: "19", month2: "05", year2: "2021"}