// Get all <a> elements with flight details
var flightLinks = document.querySelectorAll('.flight-deals a');

// Add a click event listener to each <a> element
flightLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Prevent the default behavior (page reload)
    event.preventDefault();

    // Extract the values from the clicked link
    var fromValue = link.querySelector('.from-location').textContent;
    var toValue = link.querySelector('.to-location').textContent;

    // Set the values in the "From" and "To" dropdowns
    setSelectedOption('from', fromValue);
    setSelectedOption('to', toValue);

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

  document.addEventListener('DOMContentLoaded', function () {
    // Get all anchor links in the navbar
    var navLinks = document.querySelectorAll('.flight-deals a');

    // Add click event listener to each link
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior (jumping to the anchor)

        // Scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    });
  });


