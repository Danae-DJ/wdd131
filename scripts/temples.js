// Update the footer year
const yearSpan = document.getElementById('currentYear');
yearSpan.textContent = new Date().getFullYear();

// Update the last modified date
const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.textContent = navMenu.classList.contains('show') ? 'X' : '☰';
});
