// Update the footer year
const yearSpan = document.getElementById('currentYear');
yearSpan.textContent = new Date().getFullYear();

// Update the last modified date
const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;

