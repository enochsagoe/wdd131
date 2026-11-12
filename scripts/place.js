// Wind chill formula (metric): returns the result in °C.
// Only called when the temperature and wind speed meet the viable conditions.
function calculateWindChill(tempC, windKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * windKmh ** 0.16 + 0.3965 * tempC * windKmh ** 0.16;
}

document.addEventListener('DOMContentLoaded', () => {
  // Footer: current year and last modified date
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('modified').textContent = document.lastModified;

  // Static weather values (real-time data comes in a later course)
  const temperatureC = 10;
  const windSpeedKmh = 5;

  document.getElementById('temp-value').textContent = `${temperatureC} °C`;
  document.getElementById('wind-value').textContent = `${windSpeedKmh} km/h`;

  // Wind chill: display N/A unless the conditions are met
  let windChillText = 'N/A';

  if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    windChillText = `${calculateWindChill(temperatureC, windSpeedKmh).toFixed(1)} °C`;
  }

  document.getElementById('wind-chill').textContent = windChillText;
});