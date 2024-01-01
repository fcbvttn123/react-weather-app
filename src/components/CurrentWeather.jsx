export function CurrentWeather({location, day, month, temp, sky, icon, realFeel, wind, cloud, humidity}) {
    return (
        <div>
            {/* Current Weather */}
            <h1 className="text-center text-lg font-bold mt-4">Current Weather</h1>
            <div className="flex items-stretch justify-between mt-3">
                <div className="flex flex-col items-center justify-between">
                    <p className="text-md text-gray-100 text-lg font-medium">{location}</p>
                    <p>Today {day} {month}</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <p className="text-md text-gray-100 text-lg font-medium">{temp} &deg;C</p>
                    <p>{sky}</p>
                </div>
                <img srcSet={`https://openweathermap.org/img/wn/${icon}.png`} />
            </div>
            {/* Air Condition */}
            <h1 className="text-center text-lg font-bold mt-10">Air Condition</h1>
            <div className="flex items-stretch justify-between mt-3">
                <div className="flex flex-col items-center justify-between">
                    <div className="flex items-center justify-between gap-x-2">
                        <span class="material-symbols-outlined">device_thermostat</span>
                        <p className="">Real Feel</p>
                    </div>
                    <p className="text-md text-gray-100 text-lg font-medium">{realFeel} &deg;C</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <div className="flex items-center justify-between gap-x-2">
                        <span class="material-symbols-outlined">air</span>
                        <p className="">Wind</p>
                    </div>
                    <p className="text-md text-gray-100 text-lg font-medium">{wind} m/s</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <div className="flex items-center justify-between gap-x-2">
                        <span class="material-symbols-outlined">cloud</span>
                        <p className="">Clouds</p>
                    </div>
                    <p className="text-md text-gray-100 text-lg font-medium">{cloud} %</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <div className="flex items-center justify-between gap-x-2">
                        <span class="material-symbols-outlined">humidity_high</span>
                        <p className="">Humidity</p>
                    </div>
                    <p className="text-md text-gray-100 text-lg font-medium">{humidity} %</p>
                </div>
            </div>
        </div>
    )
}