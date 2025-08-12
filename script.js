// Select all toggle buttons
const toggleButtons = document.querySelectorAll(".toggle-btn");

// Loop through each button and add a click event listener
toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Find the related text container (the next sibling element)
    const sectionText = button.parentElement.nextElementSibling;

    // Toggle visibility
    if (
      sectionText.style.display === "none" ||
      sectionText.style.display === ""
    ) {
      sectionText.style.display = "block"; // Show text
      button.textContent = "Hide"; // Change button label
    } else {
      sectionText.style.display = "none"; // Hide text
      button.textContent = "Show"; // Change button label
    }
  });
});
