import './App.css'

import { useState, useEffect } from 'react'

import { LocationInput } from './components/LocationInput';

function App() {
    const [date, setDate] = useState(new Date())
    const [location, setLocation] = useState({})

    useEffect(() => {
      const intervalId = setInterval(() => {
        let newDate = new Date();
        setDate(newDate);
      }, 1000);

      return () => clearInterval(intervalId); 
    }, []);

    useEffect(() => {
        console.log(location)
    }, [location])

    return (
        <LocationInput year={date.getFullYear()} month={date.getMonth() + 1} day={date.getDate()} hour={date.getHours()} minute={date.getMinutes()} setLocation={setLocation}/>
    )
}

export default App




// UI: https://github.com/aminawinti/the-weather-forecasting?tab=readme-ov-file

// Problem: 

    // Get Date every seconds

    // Hard code city in Location Input component
