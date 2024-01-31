

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
    console.log("klikk")
    console.log(myCity)
    fetch(myAPI)
    .then( response => response.json())
    .then(data => {
    console.log(data)
    console.log(data.main.temp)
    console.log(data.main.temp_min)
    console.log(data.main.temp_max)
    
 })


}

