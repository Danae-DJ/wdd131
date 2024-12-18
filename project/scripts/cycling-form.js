// Footer date
const lastModDate = new Date(document.lastModified);
document.getElementById("lastModified").textContent = "Last Modified: " + lastModDate.toDateString();

// Current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Populate dropdown
const sections = ["Home", "Purpose", "Cycling", "Bicycles", "Equipment"];
const dropdown = document.getElementById("favoriteSection");
sections.forEach(section => {
  const option = document.createElement("option");
  option.value = section.toLowerCase();
  option.textContent = section;
  dropdown.appendChild(option);
});

// Update review count
let totalReviews = localStorage.getItem("totalReviews") || 0;
totalReviews = parseInt(totalReviews) + 1;
localStorage.setItem("totalReviews", totalReviews);
document.getElementById("totalReviews").textContent = totalReviews;