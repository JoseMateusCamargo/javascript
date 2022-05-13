const frequencies = (arr) =>
    arr.reduce((a, v) => {
        a[v] = a[v] ? a[v] + 1 : 1
        return a
    }, {})

console.log(frequencies(['a', 'b', 'b', 'f', 'b', 'b', 'w'])) // { a: 1, b: 4, f: 1, w: 1 }