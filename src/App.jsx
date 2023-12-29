import './App.css'

import { useState, useEffect } from 'react'
import { format } from "date-fns";

import { LocationInput } from './components/LocationInput';
import { CurrentWeather } from './components/CurrentWeather';
import { HourlyForecast } from './components/HourlyForecast';

let API_KEY = "b3841f0163c11996b52fe4179a864144"

function App() {
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState({});
  const [currentWeather, setCurrentWeather] = useState()
  const [next24Hrs, setNext24Hrs] = useState(null)

  function getTheNext24HoursForecast(data) {
    let multipleDateStr = data.hourly.time

    let currentHour = date.getHours()
    // Find the current date (by hour) from the parameter array (parameter contains an array of 168 dates as strings)
    let str = multipleDateStr.find(str => {
      let d = new Date(str)
      let h = d.getHours()
      if(h == currentHour) {
        return str
      }
    })
    // Get the index of the string inside the parameter array
    let i = multipleDateStr.indexOf(`${str}`)

    // Create an array of info objects for the next 24 hour forecast
    let arr = []
    let max = i + 24
    for(let r = i; r < max; r++) {
      arr.push({
        time: multipleDateStr[r],
        temp: data.hourly.temperature_2m[r],
        icon: data.hourly.weather_code[r]
      })
    }
    setNext24Hrs(arr)
  }

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

  useEffect(() => {
    if (location.lat && location.lon) {
      async function getHourlyForecast(lat, lon) {
        let res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=43.5789&longitude=-79.6583&hourly=temperature_2m,weather_code`
        );
        let data = await res.json()
        getTheNext24HoursForecast(data)
      }
      getHourlyForecast(location.lat, location.lon);
    }
  }, [location]);

  return (
    <>
      <LocationInput
        year={date.getFullYear()}
        month={format(date, "MM")}
        day={format(date, "dd")}
        hour={format(date, "HH")}
        minute={format(date, "mm")}
        setLocation={setLocation}
      />

      {currentWeather && (
        <CurrentWeather
          location={currentWeather.location}
          day={date.getDate()}
          month={format(date, "MMM")}
          temp={currentWeather.temp}
          sky={currentWeather.sky}
          icon={currentWeather.skyIcon}
          realFeel={currentWeather.realFeel}
          wind={currentWeather.wind}
          cloud={currentWeather.cloud}
          humidity={currentWeather.humidity}
        />
      )}

      {next24Hrs && (
        <div>
          <h1>Today's Forecast</h1>
          <div>
            {next24Hrs.map((e, i) => (
              <HourlyForecast key={i} time={e.time} temp={e.temp} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App




// UI: https://github.com/aminawinti/the-weather-forecasting?tab=readme-ov-file

// Problem: 

    // Get Date every seconds

    // Hard code city in Location Input component
