import * as weatherService from './services/weatherService';
import './App.css'
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import { useState } from 'react';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import { useEffect } from 'react';


const App = () => {
    const [weather, setWeather] = useState({});

    const fetchData = async (city) => {
      const data = await weatherService.show(city);
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
  setWeather(newWeatherState);
    };

useEffect(() => {

  const fetchDefaultData = async () => {
    const data = await weatherService.show('Atlanta');
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  }
  fetchDefaultData()
}, []);

    console.log('State:', weather);


    return (
      <main>
        <h1>Weather API</h1>
        <WeatherSearch fetchData={fetchData}/>
        <WeatherDetails weather={weather}/>

      </main>
    );
};

export default App
