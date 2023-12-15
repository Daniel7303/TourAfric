function simpleToast() {
  // Get the SIMPLE-TOAST DIV
  var x = document.getElementById("simpleToast");
  // Add the "show" class to DIV
  x.className = "show";
  var authLinks = document.querySelectorAll(".auth");
  for (var i = 0; i < authLinks.length; i++) {
    authLinks[i].style.display = "none";
  }
  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
    // Check if there is a stored URL in sessionStorage
    redirect();
  }, 3000);
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const icon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// login.js (or script included in your login page)
function redirect() {
  // Check if there is a stored URL in sessionStorage
  const redirectUrl = sessionStorage.getItem("redirectAfterLogin");

  // If a redirect URL is found, clear it from sessionStorage and redirect the user
  if (redirectUrl) {
    window.location.href = redirectUrl;
  } else {
    // If no redirect URL is found, redirect to the default page (e.g., "/index.html")
    window.location.href = "/index.html";
  }
}
