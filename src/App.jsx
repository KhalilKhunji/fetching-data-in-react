import { useState } from 'react';
import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch';
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  const [weather, setWeather] = useState({});
  
  const getWeather = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);  
  };

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch getWeather={getWeather}/>
      <WeatherDetails weather={weather} />
    </main>
  );
};

export default App;