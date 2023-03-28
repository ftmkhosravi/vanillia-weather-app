let apiKey = "4aa4f4c485e2f9ad87e3fd6f892979f5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=${apiKey}&units=metric`;

function displayTemperature(response){
    let temp = document.querySelector("#temperature");
    temp.innerHTML = Math.round(response.data.main.temp);
    let city = document.querySelector("#city");
    city.innerHTML = response.data.name;
    let description = document.querySelector("#description");
    description.innerHTML = response.data.weather[0].description;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = Math.round(response.data.main.humidity);
    let wind = document.querySelector("#wind");
    wind.innerHTML = Math.round(response.data.wind.speed);
    
}
axios.get(apiUrl).then(displayTemperature);