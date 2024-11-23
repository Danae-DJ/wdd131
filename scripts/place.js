// JavaScript to dynamically set the footer's year and last modified
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;



//Wind Chill Calculation //
function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
      return (
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temp * Math.pow(windSpeed, 0.16)
      ).toFixed(2);
    } else {
      return 'N/A';
    }
  }
  
  // Static values for temperature and wind speed
  const temperature = 40; // in Fahrenheit
  const windSpeed = 10; // in mph
  
  const windChill = calculateWindChill(temperature, windSpeed);
  document.querySelector('.label.weather-info').innerHTML = `
  Temperature: ${temperature}°F<br>
  Conditions: Clear<br>
  Wind: ${windSpeed} mph<br>
  Wind Chill: ${windChill}°F
`;
  