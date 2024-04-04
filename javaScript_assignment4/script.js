document.getElementById('weatherForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            const weatherDiv = document.getElementById('weatherData');
            weatherDiv.innerHTML = `
                <h2>Current Weather at ${latitude}, ${longitude}</h2>
                <p>Temperature: ${data.current_weather.temperature}°C</p>
                <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
                <p>Wind Direction: ${data.current_weather.winddirection}°</p>
            `;
        } else {
            document.getElementById('weatherData').textContent = 'Error fetching weather data.';
        }
    } catch (error) {
        document.getElementById('weatherData').textContent = 'Error: ' + error.message;
    }
});
