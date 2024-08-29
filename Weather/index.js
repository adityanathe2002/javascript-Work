
const apiKey = "6e5029b6bfa675888e0880297430be82";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);
        

        // Update the UI with weather data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; 

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src="https://cdn-icons-png.flaticon.com/128/4735/4735072.png"
        }
        else if(data.weather[0].main == "Drizzel"){
            weatherIcon.src="https://cdn-icons-png.flaticon.com/128/3093/3093390.png"
        }
        else if(data.weaher[0].main == "Mist"){
            weatherIcon.src="./weather3"
        }

        document.querySelector(".weather").style.display="block"

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})



