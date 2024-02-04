let input = document.getElementById("searchField")
let inputButton = document.getElementById("searchButton")
let dropButton = document.getElementById("dropButton")

let i = 0
inputButton.addEventListener("click", getValue);
dropButton.addEventListener("click", toggleDropDown)

input.onkeydown = function (e) {
    if (e.key === 'Enter') {
        getValue()
    }
    
}

function getValue() {
    //Initalizing and fetching API

    let myCity = document.getElementById("searchField").value
    let myKey = "2e7ab11015602d7d8c302c7e61e44627"
    let myAPI =`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metric&appid=${myKey}`
    let showCity = document.getElementById("showCity")
    let showTemp = document.getElementById("temp")
    let showFeelsLike = document.getElementById("feelsLike")
    let showWeather = document.getElementById("weather")
    let showMaxMin = document.getElementById("minMax")

    fetch(myAPI)
    .then( response => response.json())
    .then(data => {
    console.log(data)
    //Icon 
    var iconcode = data.weather[0].icon
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    var img = document.getElementById("wicon");
    img.src = iconurl
    var src = document.getElementById("icon");
    img.style.display = "block"
    src.appendChild(img);
    // Show information on screen
    showCity.textContent = `${data.name}, ${data.sys.country}`
    showTemp.textContent = `${data.main.temp}°` 
    showFeelsLike.textContent = `Feels like ${data.main.feels_like}°`
    showWeather.textContent = `${data.weather[0].description}`
    showMaxMin.textContent = `H:${data.main.temp_max}° / L:${data.main.temp_min}°`
    // Recent Search
    recentSearch(myCity,data.sys.country)


 })


}

function toggleDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function recentSearch(myCity,country) {

 
    let dropDwn = document.getElementById("myDropdown")
    let para = document.createElement("p")
    para.setAttribute(`id`, `dropDownText`)
    let node = document.createTextNode(myCity + "," + country)
    para.appendChild(node)
    dropDwn.appendChild(para)
    console.log(para.id)
    console.log(recentSearch);
}
