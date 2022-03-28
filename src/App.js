import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import WeatherCard from './components/WeatherCard';
import  fetchData  from './services/constants';


function App() {
// weatherData is where we store the response  data from our API call
// value is where we keep track of what is being inserted into our input field

// console.log(data)
  // const [weatherData, setWeatherData] = useState({
  //   weather:{},
  //   value: ''       // METHOD 1
  // })



  const [weatherData, setWeatherData] = useState({})
  const [value, setValue] = useState('')    // METHOD 2
  

const handleChange = async (event) =>{
  setValue(event.target.value)
}

const searchButton = async (event) =>{
  const data = await fetchData(value);
  setWeatherData(data)

}

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input onChange={(event) => handleChange(event)} onClick={(event) => searchButton(event)} />
      
      <WeatherCard data={weatherData}/>
    
    </div>
  );
}

export default App;
