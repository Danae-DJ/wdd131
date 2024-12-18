
const lastModDate = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("lastModified").textContent =
  "Last Modified: " + lastModDate.toLocaleDateString('en-US', options);

const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const productSelect = document.getElementById("productName");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  productSelect.appendChild(option);
})

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