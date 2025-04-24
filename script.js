async function getWeather() {
    const city = document.getElementById("cityInput").value || "Mumbai"; // default fallback
    const url = `https://api.weatherapi.com/v1/current.json?key=ba45dabbef19452b85414607252404&q=${city}&aqi=no`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
  
      const {
        location: { name, region, country },
        current: { temp_c, condition, humidity, wind_kph },
      } = data;
  
      document.getElementById("weatherResult").innerHTML = `
        <h3>${name}, ${country}</h3>
        <img src="https:${condition.icon}" alt="${condition.text}" />
        <p><strong>${temp_c}°C</strong> - ${condition.text}</p>
        <p>💧 Humidity: ${humidity}%</p>
        <p>💨 Wind: ${wind_kph} km/h</p>
      `;
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("weatherResult").innerHTML = `<p>Could not fetch weather data.</p>`;
    }
  }
  

  