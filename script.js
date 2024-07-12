const apiKey ='YOUR_ACTUAL_API_KEY'; // API key 
const weatherInfo = document.getElementById('weatherInfo');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function() {
    const cityInput = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const { name, main, wind } = data;
            const { temp, humidity } = main;
            const { speed } = wind;

            const weatherHTML = `
                <h2>Weather in ${name}</h2>
                <p>Temperature: ${temp}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${speed} m/s</p>
            `;
            weatherInfo.innerHTML = weatherHTML;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
        });
});
