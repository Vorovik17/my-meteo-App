function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;    
    temperatureElement.innerHTML = Math.round(temperature);
}



function searchCity(city){
    let apiKey = "47901083fb7f68883d3o11dtfa1d6b74";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(refreshWeather);
}





function heandleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    console.log (searchInput.value);

    searchCity(searchInput.value);
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", heandleSearchSubmit)

searchCity("London");