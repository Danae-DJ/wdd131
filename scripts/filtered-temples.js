/*// Update the footer year
const yearSpan = document.getElementById('currentYear');
yearSpan.textContent = new Date().getFullYear();

// Update the last modified date
const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.textContent = navMenu.classList.contains('show') ? 'X' : '☰';

    // Update accessibility attribute
    hamburger.setAttribute('aria-expanded', navMenu.classList.contains('show'));
});*/

// Set the current year and last modified date
//let d = new Date();
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu functionality
const hambutton = document.querySelector("#hambutton");
const navmenu = document.querySelector("#navmenu");

hambutton.addEventListener("click", () => {
    navmenu.classList.toggle("show"); // Toggle the "show" class on the nav menu
});

// Ensure the nav menu is hidden when resizing back to larger screens
window.addEventListener("resize", () => {
    if (window.innerWidth >= 640) {
        navmenu.classList.remove("show");
    }
});
//cards: video repherence: https://www.loom.com/share/af4f1ddda0b84204b214f72b544c02b3//
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    
    // Add more temple objects here...
    {
      templeName: "Puebla Mexico",
      location: "Puebla, Mexico",
      dedicated: "2024, May, 19",
      area: 35865,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46339.jpg"
    },
    {
      templeName: "Quito Ecuador",
      location: "Quito, Ecuador",
      dedicated: "2022, November, 20",
      area: 36780,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31203.jpg"
    },
    {
        templeName: "ST. George Utah",
        location: "ST. George, Utah",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40438.jpg"
    },
  ];

createTempleCard(temples);

const nonutahLink = document.querySelector("nonutah");

nonutahLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => !temple.location.includes("Utah")));
});

function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        
        document.querySelector(".res-grid").appendChild(card);

});
}
