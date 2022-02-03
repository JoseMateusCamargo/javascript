const clock = document.getElementById('real-clock') // Div id

setInterval(function () {
    //clock.innerHTML = ((new Date).toLocaleString().substr(11, 8))
    console.log('Example 1: ' + ((new Date).toLocaleString().substr(11, 8)))
}, 1000)

const myVar = setInterval(myTimer, 1000);

function myTimer() {
    let d = new Date(), displayDate;
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        displayDate = d.toLocaleTimeString('pt-BR');
    } else {
        displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Sao_Paulo'});
    }
    // document.getElementById("demo").innerHTML = displayDate;
    console.log('Example 2: ' + displayDate)
}