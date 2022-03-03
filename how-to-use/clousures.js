// Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
// Documentation: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures

const outer = () => {
    let n = 42
    const inner = () => {
        // Inner cand access the varibale n
        console.log(n)
    }

    return inner()
}

const inner = outer()
inner()