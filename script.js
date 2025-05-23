
        const apiKey = "d302e92fe101f11df94a7d7a818dd9ad";
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response = await fetch(apiURL + city + `&appid=${apiKey}`);
            const data = await response.json();
            
            if(data.cod === "404"){
                document.querySelector(".error").style.display = "block"
                document.querySelector(".weather").style.display = "none"
            }
            else{
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            

            if (data.weather[0].main === "Clouds"){
                weatherIcon.src = "images/cloudy.png";
            }
            else if (data.weather[0].main === "Clear"){
                weatherIcon.src = "images/sun.png";
            }
            else if (data.weather[0].main === "Rain"){
                weatherIcon.src = "images/rain.png";
            }
            else if (data.weather[0].main === "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            }
            else if (data.weather[0].main === "Mist"){
                weatherIcon.src = "images/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }

        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })
  