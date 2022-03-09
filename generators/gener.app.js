//--------------------[Normal function]
const my_base = _ => Promise.resolve([
    {name: 'user 1'}, {name: 'user 2'}
])

async function process() {
    const data = await my_base()
    return data.map(
        item => item.name.toUpperCase()
    )
}

const data = await process()
data.forEach(item => console.log(item))


//--------------------[Generators function]
// my_base poderia ser um generator que entrega dados do banco paginados
async function* processGenerators() {
    for (const item of await my_base()) {
        yield item.name.toUpperCase();
    }
}

// pos processamento sobre demanda
for await (const item of processGenerators()) {
    console.log(item)
}

// Credits: Erick Wendel