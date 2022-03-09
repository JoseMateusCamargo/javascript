const USELESS_WORDS = ['-', '+', '--', '|', '*', '**', '/', '\\', '.', ',']

console.log(`USELESS_WORDS Used: [${USELESS_WORDS.join(" ")}]`)

function remove_stopwords(sentence) {
    let tokens = sentence.split(" ")
    return tokens.filter(token => !USELESS_WORDS.includes(token)).join(' ')
}

console.log(remove_stopwords(' - Hello, world . + '))