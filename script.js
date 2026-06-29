const apiKey = "6a71e683c22f3910c2337685a3e857f5";

async function getWeather() {

    const city = document.getElementById("city").value;
    const result = document.getElementById("result");

    try {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        result.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>🌥 Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind: ${data.wind.speed} m/s</p>
        `;

    } catch (error) {
        result.innerHTML = `<p>${error.message}</p>`;
    }
}