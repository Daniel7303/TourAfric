// Function to filter destinations based on real-time input
function filterDestinations() {
    // Get the search input value
    var searchInput = document.querySelector('.search-input').value.toLowerCase();
  
    // Get all destination elements
    var destinations = document.querySelectorAll('.places');
  
    var foundDestination = false; // Flag to track if any destination is found
  
    // Loop through each destination
    destinations.forEach(function (destination) {
      // Get the destination name from both the h3 and p elements
      var destinationNameH3 = destination.querySelector('h3').innerText.toLowerCase();
      var destinationNameP = destination.querySelector('p').innerText.toLowerCase();
  
      // Check if the destination name includes the search input
      if (destinationNameH3.includes(searchInput) || destinationNameP.includes(searchInput)) {
        // Show the destination if it matches the search
        destination.style.display = 'block';
        foundDestination = true; // Update flag to true
      } else {
        // Hide the destination if it doesn't match the search
        destination.style.display = 'none';
      }
    });
  
    // Show/hide the "Destination not available" message based on search results
    var notAvailableMessage = document.querySelector('.not-available');
    if (!foundDestination) {
      // If no destination is found, display the message
      notAvailableMessage.style.display = 'block';
    } else {
      // If at least one destination is found, hide the message
      notAvailableMessage.style.display = 'none';
    }
  }
  
  // Add an event listener for the input event on the search input field
  document.querySelector('.search-input').addEventListener('input', filterDestinations);
  