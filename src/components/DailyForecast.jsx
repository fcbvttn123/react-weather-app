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
        <div className="w-full flex flex-wrap items-center justify-between maxWidth680px:justify-center">
            <p className="basis-1/3 maxWidth680px:text-end maxWidth680px:pr-2">{day}</p>
            <div className="basis-1/3 flex items-center justify-center maxWidth680px:justify-start maxWidth680px:pl-2">
                <img className="w-10 object-cover" src={`/weather-icons/${imageName}.png`} />
            </div>
            <div className="basis-1/3 flex items-center justify-end gap-x-4 maxWidth680px:basis-full maxWidth680px:justify-center maxWidth680px:mb-3 maxWidth680px:mt-2">
                <p>{minTemp} &deg;C</p>
                <p className="w-20 h-2 bg-red-500 rounded-full"></p>
                <p>{maxTemp} &deg;C</p> 
            </div>
        </div>
    )
}