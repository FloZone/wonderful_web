// API key from openweathermap: https://home.openweathermap.org/api_keys
const apiKey = "7b1a599796a365aa6eed709b6b1a8223";

function init() {
  // Clock
  startTime()

  let hide = getParam("hide", "")

  // Weather
  // Disable weather
  if(hide.includes("weather")) {
    document.getElementById("weather").style.display = "none"
    return
  }
  if(hide.includes("city")) document.getElementById("weather-city").style.display = "none"
  if(hide.includes("icon")) document.getElementById("weather-desc").style.display = "none"
  if(hide.includes("temp")) document.getElementById("weather-desc").style.display = "none"
  if(hide.includes("desc")) document.getElementById("weather-desc").style.display = "none"
  displayWeather(getParam("city", "epinal"))

  // Footer
  if(hide.includes("footer")) document.getElementById("footer").style.display = "none"
}

function getParam(name, def_value = null) {
  let result = def_value, tmp = []
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=")
      if (tmp[0] === name) result = decodeURIComponent(tmp[1])
    })
  return result
}

function startTime() {
  let now = new Date()
  let h = checkTime(now.getHours())
  let m = checkTime(now.getMinutes())
  document.getElementById("hh").innerHTML = h
  document.getElementById("mm").innerHTML = m

  setTimeout(startTime, 500)
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i
}

function displayWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const { main, name, sys, weather } = data
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
    document.getElementById("weather-icon").src = icon
    document.getElementById("weather-city").innerHTML = name
    document.getElementById("weather-temp-value").innerHTML = Math.round(main.temp)
    document.getElementById("weather-desc").innerHTML = weather[0]["description"]

    setTimeout(function() {
      displayWeather(city)
    }, 1000 * 60 * 15)
  })
  .catch(() => {
    console.log("Invalid city " + city)
  })
}
