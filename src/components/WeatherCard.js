


function WeatherCard ({data}){
    
    // const [weatherInfo, setWeatherInfo]=
    return(
        <div className="weatherCard">
           { data.name ?  <h2><span>Today's Forecast for</span> {data.name}</h2> : <p></p> }
      
           {/* <p><span>Temp:</span> {data.main.temp}°</p>  */}

            { data.weather ?  <p><span>Weather:</span> {data.weather[0].main}<br/> Description: {data.weather[0].description}</p> : <p></p> }

            { data.main ?  <p><span>Temp:</span> {data.main.temp}°</p> : <p></p> }

            { data.main ?  <p><span>Humidity:</span> {data.main.humidity}%</p> : <p></p> }

            { data.main ?  <p><span>Feels Like:</span> {data.main.feels_like}°</p> : <p></p> }

            { data.wind ?  <p><span>Wind Speed:</span> {data.wind.speed} mph</p> : <p></p> }

        </div>
    )
}


export default WeatherCard