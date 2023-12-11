function simpleToast() {
  // Get the SIMPLE-TOAST DIV
  var x = document.getElementById("simpleToast");
  // Add the "show" class to DIV
  x.className = "show";
  var authLinks = document.querySelectorAll('.auth');
  for (var i = 0; i < authLinks.length; i++) {
    authLinks[i].style.display = 'none';
  }
  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");

    // Redirect to /index.html after the toast is hidden
    window.location.href = "/index.html";
  }, 3000);
}

