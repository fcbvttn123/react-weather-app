import {weatherIconMap} from "../weatherIconMap"

export function DailyForecast({day, icon, minTemp, maxTemp}) {
    let imageName = null

    weatherIconMap.forEach((value, key) => {
        let isFound = key.find(e => e === icon)
        if(isFound || isFound === 0) {
            imageName = value
            return
        }
    })

    return (
        <div className="w-full flex items-center justify-between">
            <p>{day}</p>
            <img width={"20px"} src={`/weather-icons/${imageName}.png`} />
            <div className="flex items-center gap-x-4">
                <p>{minTemp} &deg;C</p>
                <p className="w-20 h-2 bg-red-500 rounded-full"></p>
                <p>{maxTemp} &deg;C</p> 
            </div>
        </div>
    )
}