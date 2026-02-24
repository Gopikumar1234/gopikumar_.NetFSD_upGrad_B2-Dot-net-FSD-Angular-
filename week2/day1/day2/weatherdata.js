// weather.js

const weatherURL =
  "https://api.open-meteo.com/v1/forecast?latitude=17.3850&longitude=78.4867&current_weather=true";

// Async/Await Version
const fetchWeather = async () => {
  try {
    const response = await fetch(weatherURL);

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    const { temperature, windspeed } = data.current_weather;

    console.log(`
🌤 Weather Report
-------------------
Temperature : ${temperature}°C
Wind Speed  : ${windspeed} km/h
`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
};

// 🔥 IMPORTANT: Call function
fetchWeather();