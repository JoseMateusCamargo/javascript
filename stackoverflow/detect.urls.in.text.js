// Como detectar URL in texto e retornar como Link.

let detect = (text) => {
    return text.replace(/(https?:\/\/[^\s]+)/g, "<a href='$1' target='_blank' >$1</a>")
}

console.log(detect('https://example.com is a great site, and other https://other.example.com '))