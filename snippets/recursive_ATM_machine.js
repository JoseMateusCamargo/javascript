const cell = [100, 50, 20, 10, 5];

const max_cell = function (value, index) {
    let i = index
    while (i < cell.length && cell[i] > value) {
        i++
    }
    return i
}

const recursive = function (value, index) {
    const max = max_cell(value, index)

    if (max >= cell.length) return []

    for (let i = max; i < cell.length; i++) {
        const rest = value - cell[i]

        if (rest === 0) return [cell[i]]

        for (let j = i; j < cell.length; j++) {
            const get = recursive(rest, j)

            if (get.length > 0) {
                get.unshift(cell[i])
                return get
            }
        }
    }

    return []
}

const get_some_money = function (value) {
    return recursive(value, 0)
}

//  Be careful with loop :)
for (let i = 990; i < 1005; i++) {
    let cells = get_some_money(i).toString()
    if (cells.length > 0) {
        console.log("Extract " + i.toString())
        console.log("Cells  " + cells)
    } else {
        console.log("Invalid Value " + i.toString() + ", try with other value.")
    }
}