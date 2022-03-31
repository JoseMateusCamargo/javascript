/*
Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine

Retorna o status online do navegador. A propriedade retorna um valor booleano, com truesignificado online e false
offline. A propriedade envia atualizações sempre que a capacidade do navegador de se conectar à rede muda.
A atualização ocorre quando o usuário segue links ou quando um script solicita uma página remota. Por exemplo,
a propriedade deve retornar falsequando os usuários clicarem nos links logo após perderem a conexão com a internet.
 */

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

function updateOnlineStatus(e) {
    const condition = navigator.onLine ? `You're online! 😄` : `You're offline! 😢`;
    console.log(`${condition}`)
}