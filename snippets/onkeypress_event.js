// document.addEventListener("keydown", onKeyPressed) // Use to add event in element

function key(event) {
    // Use to block ENTER
    if (event.which === 13) {
        alert("No no no ... ENTER not working");
        return false;
    }

    let keyCode = event.keyCode;
    let key = event.key;
    console.log('Key Code: ' + keyCode + ' Key: ' + key);
}

document.body.onkeypress = key;