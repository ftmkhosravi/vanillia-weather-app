let apiKey = "4aa4f4c485e2f9ad87e3fd6f892979f5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=${apiKey}&units=metric`;

function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days =["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    if(minutes<10){
        minutes = `0${minutes}`
    }
    if(hours<10){
        hours = `0${hours}`
    }
    return `${day}  ${hours}:${minutes}`;
}



function displayTemperature(response){
    let temp = document.querySelector("#temperature");
    let city = document.querySelector("#city");
    let description = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let icon = document.querySelector("#icon");
    temp.innerHTML = Math.round(response.data.main.temp);
    city.innerHTML = response.data.name;
    description.innerHTML = response.data.weather[0].description;
    humidity.innerHTML = Math.round(response.data.main.humidity);
    wind.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt *1000);
    icon.setAttribute("src" , `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    icon.setAttribute("alt" , `response.data.weather[0].description`);
    
    
}
axios.get(apiUrl).then(displayTemperature);