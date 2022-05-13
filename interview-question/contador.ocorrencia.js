const frequencies = (arr) =>
    arr.reduce((a, v) => {
        a[v] = a[v] ? a[v] + 1 : 1
        return a
    }, {})

console.log(frequencies(['a', 'b', 'b', 'f', 'b', 'b', 'w']))
// { a: 1, b: 4, f: 1, w: 1 }

console.log(frequencies([...'contador de ocorrencia']))
// { c: 3, o: 4, n: 2, t: 1, a: 2, d: 2, r: 3, ' ': 2, e: 2, i: 1 }