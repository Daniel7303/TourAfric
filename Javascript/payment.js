document.addEventListener("DOMContentLoaded", function () {
  const expiryDateInput = document.getElementById("expiry-date");
  const cvvInput = document.getElementById("cvv");
  const cardholderNameInput = document.getElementById("cardholder-name");
  const cardNumberInput = document.getElementById("card-number");
  // Get the flight form data from local storage

  cardNumberInput.addEventListener("input", function (event) {
    const inputValue = event.target.value;

    // Remove any non-numeric characters from the input
    const numericValue = inputValue.replace(/\D/g, "");

    // Check if the input value is different after removing non-numeric characters
    if (inputValue !== numericValue) {
      // If different, update the input value with only numeric characters
      event.target.value = numericValue;
    }

    // Format the card number
    formatCardNumber(event.target);
  });
  // Add event listener for cardholder name input
  cardholderNameInput.addEventListener("input", function (event) {
    const inputValue = event.target.value;

    // Remove any non-alphabetic characters from the input
    const alphabeticValue = inputValue.replace(/[^a-zA-Z\s]/g, "");

    // Check if the input value is different after removing non-alphabetic characters
    if (inputValue !== alphabeticValue) {
      // If different, update the input value with only alphabetic characters
      event.target.value = alphabeticValue;
    }
  });
  // Add event listener for expiry date input
  expiryDateInput.addEventListener("input", function (event) {
    const inputValue = event.target.value;

    // Remove any non-numeric characters from the input
    const numericValue = inputValue.replace(/\D/g, "");

    // Check if the input value is different after removing non-numeric characters
    if (inputValue !== numericValue) {
      // If different, update the input value with only numeric characters
      event.target.value = numericValue;
    }
  });

  // Add event listener for CVV input
  cvvInput.addEventListener("input", function (event) {
    const inputValue = event.target.value;

    // Remove any non-numeric characters from the input
    const numericValue = inputValue.replace(/\D/g, "");

    // Check if the input value is different after removing non-numeric characters
    if (inputValue !== numericValue) {
      // If different, update the input value with only numeric characters
      event.target.value = numericValue;
    }
  });
});
function formatCardNumber(input) {
  let value = input.value.replace(/\s/g, "");
  let formattedValue = "";

  for (let i = 0; i < value.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += " ";
    }
    formattedValue += value[i];
  }

  input.value = formattedValue;
}

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the stored price value from local storage
  const storedPrice = localStorage.getItem("totalAmount");
  const totalAmount = document.querySelector(".amount .price");
  const totalPerson = document.querySelector(".amount .person");
  const flightFormDataString = localStorage.getItem("flightFormData");

  // Parse the string into a JavaScript object
  const flightFormData = JSON.parse(flightFormDataString);

  // Access the 'adults' property
  const adultsValue = flightFormData.adults;

  // Now 'adultsValue' contains the value of the 'adults' property
  

  // Check if the value is not null (indicating it has been set previously)
  if (storedPrice !== null) {
    // Do something with the retrieved price value
    totalAmount.innerText = `${storedPrice * adultsValue}.00`;
    totalPerson.innerText = adultsValue;

  } else {
   
  }
});

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
    simpleToast2();
  }, 3000);
}
function simpleToast2() {
  // Get the SIMPLE-TOAST DIV
  var x = document.getElementById("simpleToast2");
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
    window.location.href = "/html/itineraryConfirmation.html";
  }, 3000);
}
