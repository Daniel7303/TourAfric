const flightFormDataString = localStorage.getItem("flightFormData");
const flightFormData = JSON.parse(flightFormDataString);
const baseFare = parseFloat(
  document.querySelector(
    ".fareTable > table > tbody > tr:nth-child(2) > td:nth-child(2) > span"
  ).innerText
);
const tax = parseFloat(
  document.querySelector(
    ".fareTable > table > tbody > tr:nth-child(2) > td:nth-child(3) > span"
  ).innerText
);
const grandTotal = document.querySelector(
  ".fareTable > table > tbody > tr:nth-child(2) > td:nth-child(6) > span"
);
const adultsValue = flightFormData.adults;

function extractAirportCode(inputString) {
  // Regular expression to match three uppercase letters within parentheses
  const regex = /\(([A-Z]{3})\)/;

  // Use the regular expression to find a match in the input string
  const match = inputString.match(regex);

  // Check if a match is found
  if (match && match[1]) {
    // Return the matched three-letter code
    return match[1];
  } else {
    // Return an error message or handle the case where no match is found
    return "No airport code found";
  }
}
function generateFormattedDate() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate = `${dayOfWeek} ${month} ${day} ${year}`;

  return formattedDate;
}
function generateNextDay() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();

  // Add one day to the current date
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);

  const dayOfWeek = daysOfWeek[nextDate.getDay()];
  const month = months[nextDate.getMonth()];
  const day = nextDate.getDate();
  const year = nextDate.getFullYear();

  const formattedDate = `${dayOfWeek} ${month} ${day} ${year}`;

  return formattedDate;
}
function generateRandom17DigitNumber() {
  const min = 1e16; // Minimum 17-digit number
  const max = 9.999999999999999e16; // Maximum 17-digit number

  // Generate a random number between min and max
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber.toString(); // Convert to string to ensure it's treated as a 17-digit number
}

document.addEventListener("DOMContentLoaded", function () {
  // Generate a random 17-digit number
  const toTime = localStorage.getItem("toTime");
  const fromTime = localStorage.getItem("fromTime");
  const seatName = localStorage.getItem("seatName");
  const airportTo = localStorage.getItem("airportTo");
  const airportFrom = localStorage.getItem("airportFrom");
  const randomNames = localStorage.getItem("randomNames");
  const storedPrice = localStorage.getItem("totalAmount");
  const airportCodeTo = extractAirportCode(airportTo);
  const airportCodeFrom = extractAirportCode(airportFrom);
  const random17DigitNumber = generateRandom17DigitNumber();
  const randomNumberElement = document.querySelector(".travelInner p");
  console.log("toTime:", toTime);
  console.log("fromTime:", fromTime);
  console.log("seatName:", seatName);
  console.log("airportTo:", airportTo);
  console.log("airportFrom:", airportFrom);
  console.log("randomNames:", randomNames);
  console.log("storedPrice:", storedPrice);
  
  const grandTotalAmount = tax + baseFare + storedPrice * adultsValue;
  randomNumberElement.textContent = random17DigitNumber;
  grandTotal.innerText = grandTotalAmount;
  document.querySelector(
    ".flightBox:nth-child(1) > p:nth-child(2) > span"
  ).innerText = generateFormattedDate();
  document.querySelector(
    ".flightBox:nth-child(2) > p:nth-child(2) > span"
  ).innerText = generateNextDay();
  document.querySelector(
    ".flightBox:nth-child(1) > p:nth-child(2) > b > span"
  ).innerText = fromTime;
  document.querySelector(
    ".flightBox:nth-child(2) > p:nth-child(2) > b > span"
  ).innerText = toTime;
  document.querySelector(".travelInnerGroup p:nth-child(3)").innerText =
    airportCodeTo;
  document.querySelector(".flightBox:nth-child(1) > p:nth-child(1)").innerText =
    airportFrom;
  document.querySelector(".flightBox:nth-child(2) > p:nth-child(1)").innerText =
    airportTo;
  document.querySelector(".flightLink > a > p > span:nth-child(1)").innerText =
    airportCodeFrom;
  document.querySelector(".flightLink > a > p > span:nth-child(2)").innerText =
    airportCodeTo;
  document.querySelector(".travelInnerGroup p:nth-child(1)").innerText =
    airportCodeFrom;
  document.querySelector(".seatNumber").innerText = seatName;
  document.querySelector(".bag").innerText = Math.floor(Math.random() * 5) + 1;
  document.querySelector(
    ".fareTable > table > tbody > tr:nth-child(2) > td:nth-child(5) > span"
  ).innerText = adultsValue;
  document.querySelector(
    ".fareTable > table > tbody > tr:nth-child(2) > td:nth-child(4) > span"
  ).innerText = storedPrice;
  document.querySelector(
    ".flightTotalWrapper > div > p:nth-child(2) > span"
  ).innerText = grandTotalAmount;
  document.querySelector(
    ".extrasTotalWrapper > div > p:nth-child(2) > span"
  ).innerText = grandTotalAmount;
  document.querySelector(
    ".chargeWrapper > div > p:nth-child(2) > span"
  ).innerText = grandTotalAmount;
  document.querySelector(".travelGridHead > p").innerText = randomNames;
});
