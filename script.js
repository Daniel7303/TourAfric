function toggleNav() {
  var nav = document.querySelector('ul');
  nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'flex' : 'none';
}
function toggleDropDown() {
  const logDown = document.querySelector('.logout')
  logDown.style.display = logDown.style.display == "block" ? "none" : "block"

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
// Function to show the flight details link
function showFlightDetailsLink() {
  // Your logic to determine whether to show or hide the element
  const shouldShow = true;

  // Store the flag in local storage
  localStorage.setItem("showFlightDetails", shouldShow);
}

// Usage on page load
document.addEventListener("DOMContentLoaded", function () {
  const flightDetails = document.getElementById("flightDetails");

  // Retrieve the flag from local storage
  const shouldShow =
    localStorage.getItem("showFlightDetails") === "true" && userEmail;

  // Set the display property based on the flag
  flightDetails.style.display = shouldShow ? "block" : "none";
});
document.querySelector("span.copyright_text > span").innerText =
  new Date().getFullYear();
