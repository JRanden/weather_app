

let input = document.getElementById("searchField")
let inputButton = document.getElementById("searchButton")


inputButton.addEventListener("click", getValue);

input.onkeydown = function (e) {
    if (e.key === 'Enter') {
        getValue()
    }
    
}

function getValue() {
    let myCity = document.getElementById("searchField").value
    let myKey = "2e7ab11015602d7d8c302c7e61e44627"
    let myAPI =`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metric&appid=${myKey}`
    let showCity = document.getElementById("showCity")
    let showTemp = document.getElementById("temp")
    let showFeelsLike = document.getElementById("feelsLike")
    let showWeather = document.getElementById("weather")
    let showMaxMin = document.getElementById("minMax")

    console.log("klikk")
    console.log(myCity)
    fetch(myAPI)
    .then( response => response.json())
    .then(data => {
    console.log(data)
    var iconcode = data.weather[0].icon
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    var img = document.getElementById("wicon");
    img.src = iconurl
    var src = document.getElementById("icon");
    img.style.display = "block"
    src.appendChild(img);
    showCity.textContent = `${myCity}`
    showTemp.textContent = `${data.main.temp}°` 
    showFeelsLike.textContent = `Feels like ${data.main.feels_like}°`
    showWeather.textContent = `${data.weather[0].description}`
    showMaxMin.textContent = `H:${data.main.temp_max}° / L:${data.main.temp_min}°`
 })


}

