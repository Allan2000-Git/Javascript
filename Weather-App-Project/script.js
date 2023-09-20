//create account and get the key
const API_KEY = "0ebff05334be05dc6a2878d0eb2e89cc";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const city = document.querySelector(".search-container input");
const searchButton = document.querySelector(".search-container button");
const weatherImg = document.querySelector(".weather-img");

async function getWeatherDetails(city){
    const response = await fetch(API_URL + `&q=${city}&appid=${API_KEY}`);
    const data = await response.json();

    // console.log(data);
    // console.log(data.name);
    if(!response.ok){
        document.querySelector(".error-box").style.display = "block";
        document.querySelector(".weather-box").style.display = "none";
    } else{
        document.querySelector(".city-name").textContent = data.name;
        document.querySelector(".temperature").textContent = Math.round(data.main.temp);
        document.querySelector(".humidity").textContent = data.main.humidity;
        document.querySelector(".wind").textContent = Math.round(data.wind.speed);

        if(data.weather[0].main === "Clear"){
            weatherImg.src = "./assets/images/clear.png";
        } else if(data.weather[0].main === "Clouds"){
            weatherImg.src = "./assets/images/clouds.png";
        } else if(data.weather[0].main === "Drizzle"){
            weatherImg.src = "./assets/images/drizzle.png";
        } else if(data.weather[0].main === "Mist"){
            weatherImg.src = "./assets/images/mist.png";
        } else if(data.weather[0].main === "Rain"){
            weatherImg.src = "./assets/images/rain.png";
        } else if(data.weather[0].main === "Snow"){
            weatherImg.src = "./assets/images/snow.png";
        }

        document.querySelector(".weather-box").style.display = "block";
        document.querySelector(".error-box").style.display = "none";
    }


}

searchButton.addEventListener("click",()=>{
    getWeatherDetails(city.value);
    city.textContent = "";
});