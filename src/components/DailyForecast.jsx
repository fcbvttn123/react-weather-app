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
            <p className=" grow-0 shrink-0 basis-1/3">{day}</p>
            <div className="grow-0 shrink-0 basis-1/3 flex items-center justify-center">
                <img className="w-10 object-cover" src={`/weather-icons/${imageName}.png`} />
            </div>
            <div className="flex items-center justify-end gap-x-4 grow-0 shrink-0 basis-1/3">
                <p>{minTemp} &deg;C</p>
                <p className="w-20 h-2 bg-red-500 rounded-full"></p>
                <p>{maxTemp} &deg;C</p> 
            </div>
        </div>
    )
}