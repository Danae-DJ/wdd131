const lastModDate = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("lastModified").textContent = "Last Modified: " + lastModDate.toLocaleDateString('en-US', options);