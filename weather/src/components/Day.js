
function Day({day}) {
  return (
    <>
      <h4>Temperature</h4>
      <p>Max: {day.maxtemp_c}C | {day.maxtemp_f}F</p>
      <p>Min: {day.mintemp_c}C | {day.mintemp_f}F</p>
      <p>Avg: {day.avgtemp_c}C | {day.avgtemp_f}F</p>

      <p>Max Wind: {day.maxwind_kph}kph | {day.maxwind_mph}mph</p>
      <p>Total Precipitation: {day.totalprecip_mm}mm | {day.totalprecip_in}in</p>
      <p>Total Snow: {day.totalsnow_cm}cm</p>
      <p>Avg Visibility: {day.avgvis_km}km | {day.avgvis_miles}mi</p>
      <p>Avg Humidity: {day.avghumidity}</p>
      <p>Chance of Rain: {day.daily_chance_of_rain}%</p>
      <p>Chance of Snow: {day.daily_chance_of_snow}%</p>
      <p>UV index: {day.uv}</p>

      <p>Condition: {day.condition.text}</p>
      <img src={day.condition.icon}/>
    </>
  )
}

export default Day;