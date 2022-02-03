// Convertendo segundos em horas

function secToHour(seconds) {
    const isoString = new Date(seconds * 1000).toISOString().substr(11, 8)
    const [hour, minute, second] = isoString.split(':');

    return `${hour}:${minute}:${second}`.replace(/^00:/, "")
}

console.log(secToHour(7548))