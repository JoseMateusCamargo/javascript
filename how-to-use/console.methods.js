/*
O objeto console fornece acesso ao console de debug do navegador (por exemplo, o Web Console do Firefox).
O seu funcionamento específico varia de navegador para navegador, mas existe um conjunto de ferramentas que na prática
são fornecidas normalmente.
 */

//--------------------[console.info()]
console.info('Information message')

//--------------------[console.error()]
console.error('Error message')

//--------------------[console.warn()]
console.warn('Warning message')

//--------------------[console.assert()]
// Assertiveness that takes two parameters
let type = false
console.assert(type === true, 'Information: ' + type)

//--------------------[console.counter()]
console.count()
console.count()
console.count()

//--------------------[console.group()]
console.group()
console.log('log 1')
console.log('log 2')
console.log('log 3')
console.groupEnd()

//--------------------[console.time()]
// Start a stopwatch
console.time()
console.assert(type === true, 'Information: ' + type)
console.timeEnd()

//--------------------[console.table()]
// Object example
const months = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July"}
console.table(months)

// An array of arrays example
console.table([["January", "March"], ["March", "April"], ["May", "June"]])

// String array example
console.table(["January", "March", "March"])

//--------------------[console.trace()]
// Inform the trail left by the functions
function one() {
    function two() {
        console.trace()
    }

    two()
}

one()

//-------------------- [console.clear()]
console.log('Look at the trash...')
// Output: Look at the trash...
console.clear()
// Output: Console was cleared