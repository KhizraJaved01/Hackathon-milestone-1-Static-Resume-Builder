// Select the toggle button and the skills list from the DOM
const toggleButton = document.getElementById("toggleButton");
const skillsList = document.getElementById("Skills");

// Add click event listener to the toggle button
if (toggleButton && skillsList) {
  toggleButton.addEventListener("click", () => {
    // Check if the skills list is currently hidden
    if (skillsList.style.display === "none" || skillsList.style.display === "") {
      // Show the skills list
      skillsList.style.display = "block";
    } else {
      // Hide the skills list
      skillsList.style.display = "none";
    }
  });
}
