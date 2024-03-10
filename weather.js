const apikey = "0d3d63e804a0d916191c38b318a44842";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBTN = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather (city){
    const response = await fetch(apiURL +city+ `&appid=${apikey}`);

    if(response.status == 404)
    { 
        document.querySelector(".error").style.display="block"; 
        document.querySelector(".weather").style.display="none"; 
      }else{     
    var data = await response.json();   
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"Km/h";
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main == "Rian"){
        weatherIcon.src="images/rian.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src="images/snow.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display="none"; 
}

}

searchBTN.addEventListener("click",()=>{
    checkWeather(searchBox.value);

})

