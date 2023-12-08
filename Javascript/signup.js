function simpleToast() {
    // Get the SIMPLE-TOAST DIV
    var x = document.getElementById("simpleToast");
    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.className = x.className.replace("show", "");

        // Redirect to /index.html after the toast is hidden
        window.location.href = "/index.html";
    }, 3000);
}
