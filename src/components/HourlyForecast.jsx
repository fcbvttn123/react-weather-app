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
            <p>Time: {props.time}</p>
            <p>Icon: {imageName}</p>
            <img src={`../../public/weather-icons/${imageName}.png`} />
            <p>Temp: {props.temp}</p>
        </div>
    )
}