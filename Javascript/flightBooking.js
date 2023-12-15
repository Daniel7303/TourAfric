// Get all <a> elements with flight details
var flightLinks = document.querySelectorAll(".flight-deals a");

// Add a click event listener to each <a> element
flightLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Prevent the default behavior (page reload)
    event.preventDefault();

    // Extract the values from the clicked link
    var fromValue = link.querySelector(".from-location").textContent;
    var toValue = link.querySelector(".to-location").textContent;

    // Set the values in the "From" and "To" dropdowns
    setSelectedOption("from", fromValue);
    setSelectedOption("to", toValue);

    // Add your custom logic here if needed

    // Example: Display an alert
    // alert('Link clicked, but the page did not reload!');
  });
});

function setSelectedOption(selectId, optionText) {
  var select = document.getElementById(selectId);
  for (var i = 0; i < select.options.length; i++) {
    var option = select.options[i];
    if (option.text === optionText) {
      option.selected = true;
      break;
    }
  }
}
function flightBooking() {
  const userEmail = localStorage.getItem("loggedInUserEmail");

  // Check if the user is already on the login page
  if (userEmail && window.location.pathname !== "/html/login.html") {
    // User is logged in and not on the login page, continue with flight booking logic
  } else {
    // User is not logged in or on the login page, store the current page URL and redirect to login
    storeCurrentPage();
    window.location.href = "/html/login.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Get all anchor links in the navbar
  var navLinks = document.querySelectorAll(".flight-deals a");
  flightBooking();
  // Add click event listener to each link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior (jumping to the anchor)

      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
});

function storeCurrentPage() {
  const currentPageUrl = window.location.href;
  sessionStorage.setItem("redirectAfterLogin", currentPageUrl);
}

// Function to redirect to the login page
function redirectToLogin() {
  storeCurrentPage(); // Store the current page URL before redirecting
}
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to radio buttons
  const oneWayRadio = document.getElementById("oneway");
  const roundTripRadio = document.getElementById("roundTrip");
  const returnDateContainer = document.getElementById("returnDateContainer");

  oneWayRadio.addEventListener("change", function () {
    returnDateContainer.style.display = "none";
  });

  roundTripRadio.addEventListener("change", function () {
    returnDateContainer.style.display = "block";
  });
});
