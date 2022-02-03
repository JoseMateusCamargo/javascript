const myVar = setInterval(myTimer, 1000);

function myTimer() {
    console.log("Loop with setInterval!")
    const d = new Date()
    console.log(d.toLocaleTimeString())
}

function myStopFunction() {
    console.log("Stopping loop with clearInterval!")
    clearInterval(myVar)
}