// Capitalize first letter

const capitalize = ([first, ...rest]) => {
    return first.toUpperCase() + rest.join('')
}

console.info(capitalize('user'))