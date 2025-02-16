
        const apiKey = 'c6cdd267649f2a94a6be91e0ba1824a4';  

        function getWeather() {
            const location = document.getElementById('location').value;

            if (!location) {
                alert("Please enter a location!");
                return;
            }

            fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === '404') {
                        alert("City not found");
                    } else {
                        displayWeather(data);
                    }
                })
                .catch(error => {
                    alert("Error fetching weather data");
                    console.log(error);
                });
        }

        function displayWeather(data) {
            const weatherInfo = document.getElementById('weatherInfo');
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const city = data.name;
            const country = data.sys.country;

            weatherInfo.innerHTML = `
                <h2>${city}, ${country}</h2>
                <div class="temp">${temp}°C</div>
                <div class="description">${description}</div>
                <p><strong>Humidity:</strong> ${humidity}%</p>
                <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
            `;
        }
