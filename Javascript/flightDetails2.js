function generateRandomValues() {
  // Retrieve 'From' and 'To' values from the URL parameters
  const form = document.querySelector("form");
  const urlParams = new URLSearchParams(window.location.search);
  const fromValue = urlParams.get("from");
  const toValue = urlParams.get("to");
  const airlineName = "American Airlines " + generateRandomTime();
  const flightDuration = generateRandomDuration();
  const flightPrice = generateRandomPrice();

  // Construct the URL with parameters
  const url = `/html/flightDetails2.html?airlineName=${airlineName}&flightDuration=${flightDuration}&flightPrice=${flightPrice}`;

  // Redirect to the next page with parameters
  window.location.href = url;
  console.log("Function called");

  // Log 'From' and 'To' values to the console
  console.log("From:", fromValue);
  console.log("To:", toValue);

  // Set 'From' and 'To' values
  document.querySelector(".from-place").innerText = fromValue;
  document.querySelector(".to-place").innerText = toValue;

  // Generate and set other random values
  document.querySelector(".random-airport").innerText = generateRandomAirport();
  document.querySelector(".random-time").innerText = generateRandomTime();
  document.querySelector(".random-duration").innerText =
    generateRandomDuration();
  document.querySelector(".random-number").innerText = generateRandomNumber();
  document.querySelector(".random-digit").innerText = generateRandomDigit();
  document.querySelector(".random-alpha").innerText = generateRandomAlpha();
  document.querySelector(".price").innerText = generateRandomPrice();
}

function generateRandomTime() {
  // Generate random time, e.g., 7:00-10:45
  const hours = Math.floor(Math.random() * 12) + 1; // Random hour (1-12)
  const minutes = Math.floor(Math.random() * 60); // Random minute (0-59)
  return `${hours}:${minutes}`;
}
function generateRandomDigit() {
  // Generate a random number from 1 to 250
  return Math.floor(Math.random() * 250) + 1;
}
function generateRandomAlpha() {
  // Generate a random number from 1 to 50
  const randomNumber = Math.floor(Math.random() * 50) + 1;

  // Generate a random uppercase letter from A to F
  const randomLetter = String.fromCharCode(Math.floor(Math.random() * 6) + 65);

  return randomNumber + randomLetter;
}

function generateRandomDuration() {
  // Generate random duration, e.g., 3hr 45m
  const hours = Math.floor(Math.random() * 6) + 1; // Random hour (1-6)
  const minutes = Math.floor(Math.random() * 60); // Random minute (0-59)
  return `${hours}hr ${minutes}m`;
}

function generateRandomPrice() {
  // Generate random price between 500 and 2500
  return Math.floor(Math.random() * (2500 - 500 + 1)) + 500;
}

function generateRandomNumber() {
  // Generate a random number and alphabet for a flight ticket
  const randomNumber = Math.floor(Math.random() * 100000);
  const randomAlphabet = String.fromCharCode(
    Math.floor(Math.random() * 6) + 65
  ); // Random letter (A-F)
  return `${randomNumber}${randomAlphabet}`;
}

function generateRandomAirport() {
  // Array of example airports
  const airports = [
    "Airport A",
    "Airport B",
    "Airport C",
    "Airport D",
    "Airport E",
  ];

  // Pick a random airport from the array
  const randomIndex = Math.floor(Math.random() * airports.length);
  return airports[randomIndex];
}

// You can implement the other generateRandom* functions as needed
// ...

// Attach the generateRandomValues function to the 'BOOK' button's click event
document
  .querySelector("button")
  .addEventListener("click", generateRandomValues);
