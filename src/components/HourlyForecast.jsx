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
        <div className="min-w-2/10 px-4 maxWidth680px:min-w-3/10 maxWidth680px:px-1">
            <div className="rounded py-1 flex flex-col items-center justify-between gap-y-2 hourly-forecast-component">
                <p className="text-gray-100">{props.time}</p>
                <img width={"30px"} src={`/weather-icons/${imageName}.png`} />
                <p className="text-md text-gray-100 text-lg font-medium">{props.temp} &deg;C</p>
            </div>
        </div>
    )
}