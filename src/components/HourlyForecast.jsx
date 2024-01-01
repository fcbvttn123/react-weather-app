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
        <div className="bg-red-400 min-w-16 rounded flex flex-col items-center justify-between">
            <p>{props.time}</p>
            <img width={"30px"} src={`/weather-icons/${imageName}.png`} />
            <p className="text-md text-gray-100 text-lg font-medium">{props.temp} &deg;C</p>
        </div>
    )
}