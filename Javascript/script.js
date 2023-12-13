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
  




