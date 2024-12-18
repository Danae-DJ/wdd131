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
const reviewCount = localStorage.getItem("reviewCount") || 0;
document.getElementById("reviewCountDisplay").textContent =
  `Reviews Submitted: ${reviewCount}`;

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
   event.preventDefault();
  
  
  const newReviewCount = parseInt(reviewCount) + 1;
  localStorage.setItem("reviewCount", newReviewCount);

  document.getElementById("reviewCountDisplay").textContent =
  `Reviews Submitted: ${newReviewCount}`;

  form.submit();
});