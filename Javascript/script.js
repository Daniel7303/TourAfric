// Common functionality for login and signup forms

function handleLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate the email and password as needed

  // Store data in local storage
  localStorage.setItem("loggedInUserEmail", email);

  // Log the stored data
  console.log("Login Data:", {
    email: localStorage.getItem("loggedInUserEmail"),
  });

  // Perform login logic or redirect to another page
  // For simplicity, I'll just show a toast
  simpleToast("Login Successful!...");
}

function handleSignup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate the entered data as needed

  // Store data in local storage
  localStorage.setItem("loggedInUserData", JSON.stringify({ name, email }));
  localStorage.setItem("loggedInUserEmail", email);

  // Log the stored data
  console.log("Signup Data:", {
    email: localStorage.getItem("loggedInUserData"),
  });

  // Perform signup logic or redirect to another page
  // For simplicity, I'll just show a toast
  simpleToast("Signup Successful!...");
}

function togglePasswordVisibility() {
  // Toggle password visibility logic (if needed)
}

function simpleToast(message) {
  // Toast implementation (if needed)
}

// Check if user data is present in local storage
const userEmail = localStorage.getItem("loggedInUserEmail");
console.log("this is the users", userEmail);

// Get references to the login and signup links
const loginLink = document.getElementById("loginLink");
const signupLink = document.getElementById("signupLink");
const imgLink = document.getElementById("imgLink");

// Function to hide the login and signup links
function hideAuthLinks() {
  if (loginLink && signupLink) {
    loginLink.style.display = "none";
    signupLink.style.display = "none";
    imgLink.style.display = "block";
  }
}

// Function to show the login and signup links
function showAuthLinks() {
  if (loginLink && signupLink) {
    loginLink.style.display = "block";
    signupLink.style.display = "block";
    imgLink.style.display = "none";
  }
}

// Check if user data is present and hide/show links accordingly
if (userEmail) {
  hideAuthLinks();
} else {
  showAuthLinks();
}

// Function to check if the user is logged in
function checkLoggedIn(event) {
  // Check if the user is logged in (this is just an example condition)

  if (userEmail) {
  } else {
    event.preventDefault();
    // You can display a message or redirect to the login page here
    // alert("Please log in to access the Contact Us page.");
    // Example redirect to the login page
    window.location.href = "/html/login.html";
  }
}

// Add click event listener to the Contact Us link
const contactLink = document.getElementById("contactLink");
contactLink.addEventListener("click", checkLoggedIn);

// Add this JavaScript function in your script
function storeFormData() {
  const onewayElement = document.getElementById("oneway");
  const roundTripElement = document.getElementById("roundTrip");
  const fromElement = document.getElementById("from");
  const toElement = document.getElementById("to");
  const departureElement = document.getElementById("departure");
  const returnElement = document.getElementById("return");
  const adultsElement = document.getElementById("adults");

  if (
    !onewayElement ||
    !roundTripElement ||
    !fromElement ||
    !toElement ||
    !departureElement ||
    !returnElement ||
    !adultsElement
  ) {
    console.error("One or more form elements not found!");
    return;
  }

  const tripType = onewayElement.checked
    ? "oneway"
    : roundTripElement.checked
    ? "roundTrip"
    : null;

  if (!tripType) {
    console.error("Please select a trip type!");
    return;
  }

  const formData = {
    tripType,
    from: fromElement.value,
    to: toElement.value,
    departure: departureElement.value,
    return: returnElement.value,
    adults: adultsElement.value,
  };

  // Store the form data in local storage
  localStorage.setItem("flightFormData", JSON.stringify(formData));

  // Redirect to the flightDetails2.html page
  window.location.href = "/html/flightDetails.html";
}

document.addEventListener("DOMContentLoaded", function () {
  var dynamicCityElement = document.querySelector(".dynamicCity");

  // Define an array of city names
  var cityNames = [
    "Mambase, Kenya",
    "Garden City, Singapore",
    "Cape Town, South Africa",
    "East Coast, America",
    "China City, China Town",
    "Cairo, Egypt",
  ];

  // Set an initial city name
  var currentCityIndex = 0;

  // Update the dynamic city every 4 seconds
  setInterval(function () {
    // Update the content of the dynamicCity element
    dynamicCityElement.innerText = cityNames[currentCityIndex];

    // Move to the next city in the array
    currentCityIndex = (currentCityIndex + 1) % cityNames.length;
  }, 4000);
  // Get the element where you want to display the dynamic price
  var dynamicPriceElement = document.querySelector(".dynamicPrice");

  // Set an initial price range
  var minPrice = 500;
  var maxPrice = 3000;

  // Update the dynamic price range every 4 seconds
  setInterval(function () {
    // Generate random prices within the specified range
    var newMinPrice =
      Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
    var newMaxPrice =
      Math.floor(Math.random() * (maxPrice - newMinPrice + 1)) + newMinPrice;

    // Update the content of the dynamicPrice element
    dynamicPriceElement.innerText = `$${newMinPrice}-$${newMaxPrice}`;
  }, 4000);
  // Get the element where you want to display the dynamic day
  var dynamicDayElement = document.querySelector(".dynamicDay");

  // Get the current date
  var currentDate = new Date();

  // Define an array of weekdays
  var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get the current day index (0-6)
  var currentDayIndex = currentDate.getDay();

  // Get the current day abbreviation
  var currentDayAbbreviation = weekdays[currentDayIndex];

  // Get the current date
  var currentDateNumber = currentDate.getDate();

  // Get the current month abbreviation
  var currentMonthAbbreviation = getMonthAbbreviation(currentDate.getMonth());

  // Display the dynamic day in the specified format
  dynamicDayElement.innerText = `${currentDayAbbreviation}, ${currentMonthAbbreviation} ${currentDateNumber}th`;
});

// Function to get the abbreviation for the month
function getMonthAbbreviation(monthIndex) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[monthIndex];
}
