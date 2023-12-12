function generateRandomValues() {
  const userEmail = localStorage.getItem("loggedInUserEmail");
  if (!userEmail) {
    window.location.href = "/html/login.html";
    return; // Stop further execution of the function
  }
  // Generate and set other random values
  let timeDifferenceText;
  const fromPlaceElement = document.querySelector(".from-place");
  const toPlaceElement = document.querySelector(".to-place");
  document.querySelector(".random-airport-from").innerText =
    generateRandomAirport(fromPlaceElement.innerText);
  document.querySelector(".random-airport-to").innerText =
    generateRandomAirport(toPlaceElement.innerText);

  const randomTime1 = generateRandomTime();
  const randomTime2 = generateRandomTime();
  document.querySelector(".random-time-1").innerText = randomTime1;
  document.querySelector(".random-time-2").innerText = randomTime2;
  const timeDifference = calculateTimeDifference(randomTime1, randomTime2);
  document.querySelector(".random-duration").innerText = timeDifference;
  document.querySelector(".random-number").innerText = generateRandomNumber();
  document.querySelector(".random-digit").innerText = generateRandomDigit();
  document.querySelector(".random-alpha").innerText = generateRandomAlpha();
  document.querySelector(".price").innerText = generateRandomPrice();
}
function generateRandomAirport(place) {
  // Map of cities or countries to popular airports
  const airportMapping = {
    America: [
      "John F. Kennedy International Airport (JFK)",
      "Los Angeles International Airport (LAX)",
      "Chicago O'Hare International Airport (ORD)",
    ],
    KENYA: [
      "Jomo Kenyatta International Airport (NBO)",
      "Moi International Airport (MBA)",
    ],
    Dubai: ["Dubai International Airport (DXB)"],
    "South Africa": [
      "O.R. Tambo International Airport (JNB)",
      "Cape Town International Airport (CPT)",
    ],
    Nigeria: [
      "Murtala Muhammed International Airport (LOS)",
      "Nnamdi Azikiwe International Airport (ABV)",
    ],
    Egypt: [
      "Cairo International Airport (CAI)",
      "Sharm El Sheikh International Airport (SSH)",
    ],
    Singapore: ["Changi Airport (SIN)"],
    // Add more mappings as needed...
    "Mambase, Kenya": [
      "Moi International Airport (MBA)",
      "Jomo Kenyatta International Airport (NBO)",
    ],
    "Garden City, Singapore": ["Changi Airport (SIN)"],
    "Cape Town, South Africa": [
      "O.R. Tambo International Airport (JNB)",
      "Cape Town International Airport (CPT)",
    ],
    "East Coast, America": [
      "John F. Kennedy International Airport (JFK)",
      "Los Angeles International Airport (LAX)",
      "Chicago O'Hare International Airport (ORD)",
    ],
    "China City, China Town": [
      "Beijing Capital International Airport (PEK)",
      "Shanghai Pudong International Airport (PVG)",
    ],
    "Cario, Egypt": [
      "Cairo International Airport (CAI)",
      "Sharm El Sheikh International Airport (SSH)",
    ],
  };

  // Get the array of airports for the given place
  const airportsForPlace = airportMapping[place];

  // Return a randomly selected airport from the array
  return airportsForPlace
    ? airportsForPlace[Math.floor(Math.random() * airportsForPlace.length)]
    : "Unknown Airport";
}

function calculateTimeDifference(time1, time2) {
  // Parse the time strings to Date objects
  const date1 = new Date(`2023-12-12 ${time1}`);
  const date2 = new Date(`2023-12-12 ${time2}`);

  // Calculate the difference in minutes
  const differenceInMilliseconds = date2 - date1;
  const differenceInMinutes = Math.abs(differenceInMilliseconds / (1000 * 60));

  // Calculate hours and remaining minutes
  const hours = Math.floor(differenceInMinutes / 60);
  const remainingMinutes = Math.round(differenceInMinutes % 60);

  return `${hours}hr ${remainingMinutes}m`;
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

// You can implement the other generateRandom* functions as needed
// ...

// Attach the generateRandomValues function to the 'BOOK' button's click event

// Wrap your code in the DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
  // Attach the generateRandomValues function to the 'BOOK' button's click event
  // Check if flight form data is present in local storage
  const flightFormData = localStorage.getItem("flightFormData");

  if (flightFormData) {
    // Parse the stored JSON data
    const formData = JSON.parse(flightFormData);

    // Use the form data as needed in flightDetails2.js
    console.log("Flight Form Data:", formData);
    const toPlaceElement = document.querySelector(".to-place");
    const fromPlaceElement = document.querySelector(".from-place");

    if (toPlaceElement && fromPlaceElement) {
      // Set the innerText of the elements to formData values
      toPlaceElement.innerText = formData.to;
      fromPlaceElement.innerText = formData.from;
    }
  }
  const loggedInUserData = localStorage.getItem("loggedInUserData");

  if (loggedInUserData) {
    // Parse the stored JSON data
    const userData = JSON.parse(loggedInUserData);
    const passNameElement = document.querySelector(".passName");

    if (passNameElement) {
      // Check if userData.name exists, if not, generate a random name
      const passengerName = userData.name
        ? userData.name
        : generateRandomName();

      // Set the innerText of the passName element to the chosen name
      passNameElement.innerText = passengerName;

      // Log the chosen name to the console
      console.log("Passenger Name:", passengerName);
    }

    // Function to generate a random name
    
    // Use the user data as needed in flightDetails2.js
    console.log("User Data:", userData.name, userData.email);
  }
  generateRandomName()
  generateRandomValues();
});
function generateRandomName() {
  const names = [
    "John",
    "Alice",
    "Bob",
    "Eva",
    "David",
    "Sophia",
    "Michael",
    "Olivia",
  ];
  const randomName = names[Math.floor(Math.random() * names.length)];
  console.log("Generated Random Name:", randomName); // Log the generated random name
  return randomName;
}
