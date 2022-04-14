/*
O URL()construtor retorna um URL objeto recém-criado representando a URL definida pelos parâmetros.
Documentation: https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
 */

const url = new URL('https://teste.com/path/to/jmc?query=set')

console.log(url.host) // teste.com
console.log(url.pathname) // path/to/jmc
console.log(url.searchParams.get('query')) // set

console.log(url)

/*
URL {
  href: 'https://teste.com/path/to/jmc?query=set',
  origin: 'https://teste.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'teste.com',
  hostname: 'teste.com',
  port: '',
  pathname: '/path/to/jmc',
  search: '?query=set',
  searchParams: URLSearchParams { 'query' => 'set' },
  hash: ''
}
 */