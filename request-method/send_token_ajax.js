//-------------------- [Set the headers in a $.ajax request]
$.ajax({
    url: "http://localhost:8080/login",
    type: 'GET',
    // Fetch the stored token from localStorage and set in the header
    headers: {"Authorization": localStorage.getItem('token')}
});

//-------------------- [Using JWT authentication]
$.ajax({
    url: "http://localhost:8080/login",
    type: "POST",
    headers: {Authorization: $`Bearer ${localStorage.getItem("token")}`},
    data: formData,
    error: function (err) {
        switch (err.status) {
            case "400":
                // Bad request
                break;
            case "401":
                // Unauthorized
                break;
            case "403":
                // Forbidden
                break;
            default:
                // Something bad happened
                break;
        }
    },
    success: function (data) {
        console.log("Success!");
    }
});