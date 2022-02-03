// Simple methods to parse table to JSON.

function table_to_JSON(table) {
    const obj = {}
    let row, rows = table.rows
    let i = 0, iLen = rows.length
    for (; i < iLen; i++) {
        row = rows[i]
        obj[row.cells[0].textContent] = row.cells[1].textContent
    }
    return JSON.stringify(obj)
}

console.log(table_to_JSON(document.querySelectorAll("table")[1])) // Get second table

//--------------------------------------------------//

// Use reduce.call to get indices: value
const t = document.querySelectorAll("table")[4]
const j = [].reduce.call(t.rows, function (res, row) {
    res[row.cells[0].textContent] = row.cells[1].textContent
    return res
}, {})

console.log(JSON.stringify(j, null, 2))