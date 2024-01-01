import {weatherIconMap} from "../weatherIconMap"

export function HourlyForecast(props) {
    let imageName = null
    weatherIconMap.forEach((value, key) => {
        let isFound = key.find(e => e === props.icon)
        if(isFound || isFound === 0) {
            imageName = value
            return
        }
    })

    return (
        <div className="hourly-forecast">
            <p>{props.time}</p>
            <img width={"30px"} src={`../../public/weather-icons/${imageName}.png`} />
            <p>{props.temp} &deg;C</p>
        </div>
    )
}