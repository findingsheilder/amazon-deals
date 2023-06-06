// Get all the buy buttons on the page
const buyButtons = document.querySelectorAll('.buy-button');

// Attach click event listeners to each buy button
buyButtons.forEach(button => {
  button.addEventListener('click', handleBuyButtonClick);
});

// Handle the click event for the buy button
function handleBuyButtonClick(event) {
  event.preventDefault();

  // Get the affiliate link associated with the clicked button
  const affiliateLink = event.target.href;

  // Perform any necessary tracking or analytics here

  // Redirect the user to the affiliate link
  window.location.href = affiliateLink;
}
