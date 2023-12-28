import './App.css'

import { useState, useEffect } from 'react'
import { format } from "date-fns";

import { LocationInput } from './components/LocationInput';
import { CurrentWeather } from './components/CurrentWeather';

let API_KEY = "b3841f0163c11996b52fe4179a864144"

function App() {
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState({});
  const [currentWeather, setCurrentWeather] = useState()

  useEffect(() => {
    const intervalId = setInterval(() => {
      let newDate = new Date();
      setDate(newDate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      async function getCurrentWeather(lat, lon) {
        let res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        let data = await res.json();
        data && setCurrentWeather({
          location: data.name,
          temp: Math.floor(data.main.temp - 273.15),
          sky: data.weather[0].main,
          skyIcon: data.weather[0].icon,
          realFeel: Math.floor(data.main.feels_like - 273.15),
          wind: (data.wind.speed).toFixed(2),
          cloud: data.clouds.all,
          humidity: data.main.humidity
        });
      }
      getCurrentWeather(location.lat, location.lon);
    }
  }, [location]);

  return (
    <>
      <LocationInput
        year={date.getFullYear()}
        month={format(date, 'MM')}
        day={format(date, 'dd')}
        hour={format(date, 'HH')}
        minute={format(date, 'mm')}
        setLocation={setLocation}
      />

      {currentWeather && (
        <CurrentWeather
          location={currentWeather.location}
          day={date.getDate()}
          // month={date.getMonth() + 1}
          month={format(date, 'MMM')}
          temp={currentWeather.temp}
          sky={currentWeather.sky}
          icon={currentWeather.skyIcon}
          realFeel={currentWeather.realFeel}
          wind={currentWeather.wind}
          cloud={currentWeather.cloud}
          humidity={currentWeather.humidity}
        />
      )}
    </>
  );
}

export default App




// UI: https://github.com/aminawinti/the-weather-forecasting?tab=readme-ov-file

// Problem: 

    // Get Date every seconds

    // Hard code city in Location Input component
