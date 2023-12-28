export function CurrentWeather({location, day, month, temp, sky, icon, realFeel, wind, cloud, humidity}) {
    return (
        <div>
            {/* Current Weather */}
            <h1>Current Weather</h1>
            <div>
                <div>
                    <p>{location}</p>
                    <p>Today {day} {month}</p>
                </div>
                <div>
                    <p>{temp} &deg;C</p>
                    <p>{sky}</p>
                </div>
                <img srcSet={`https://openweathermap.org/img/wn/${icon}.png`} />
            </div>
            {/* Air Condition */}
            <h1>Air Condition</h1>
            <div>
                <div>
                    <p>Real Feel</p>
                    <p>{realFeel} &deg;C</p>
                </div>
                <div>
                    <p>Wind</p>
                    <p>{wind} m/s</p>
                </div>
                <div>
                    <p>Clouds</p>
                    <p>{cloud} %</p>
                </div>
                <div>
                    <p>Humidity</p>
                    <p>{humidity} %</p>
                </div>
            </div>
        </div>
    )
}