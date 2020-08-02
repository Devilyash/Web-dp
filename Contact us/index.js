var email = document.getElementById("email");
linebreak = document.createElement("br");
function sendEmail() {
    var mobile = document.getElementById('mobile').value;
    var yourMessage = document.getElementById("message").value;
    var first = document.getElementById("firstname").value;
    var last = document.getElementById("lastname").value;
    document.location.href = "mailto:yashgoyalg400@gmail.com?subject="
        + encodeURIComponent(first + " " + last)
        + "&body=" + encodeURIComponent(mobile) + encodeURIComponent("\n") + encodeURIComponent(yourMessage);
}

