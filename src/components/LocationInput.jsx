import { useState, useEffect } from "react"

let API_KEY = "b3841f0163c11996b52fe4179a864144"

export function LocationInput(props) {
    const [inputValue, setInputValue] = useState("")
    const [location, setLocation] = useState({})

    function handleInputChange(e) {
        setInputValue(e.target.value)
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        getLocationInformation()
    }

    async function getLocationInformation() {
        let res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${API_KEY}`)
        let data = await res.json()
        data && setLocation({lat: data[0].lat, lon: data[0].lon})
    }

    // Pass location data up to App.jsx
    useEffect(() => {
        props.setLocation({lat: location.lat, lon: location.lon})
    }, [location])

    return (
        <form onSubmit={handleFormSubmit}>
            <p>{props.year}-{props.month}-{props.day} {props.hour}:{props.minute} GMT</p>
            <input type="text" name="" id="" value={inputValue} onChange={handleInputChange}/>
            <button>Submit</button>
        </form>
    )
}