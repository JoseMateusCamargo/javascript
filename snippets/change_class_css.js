$(function () {
    $('#blue').click(function () {
        $('p')
            .css("background-color", "blue")
            .fadeOut()
            .delay(1000)
            .fadeIn()
    });

    $('#red').click(function () {
        $('p').css("background-color", "red")

        $('#message')
            .text("Cor alterada com sucesso")
            .css({color: 'red', border: '1px solid red'})
            .delay(3000)
            .addClass('green')

        $('button').removeClass('red')
    })
})