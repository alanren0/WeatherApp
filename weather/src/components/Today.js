
function Today({current}) {
  return (
    <>
      <p>Last Updated: {current.last_updated}</p>
      <p>Condition: {current.condition.text}</p>
      <img src={current.condition.icon}/>

      <p>Temperature: {current.temp_c}C | {current.temp_f}F</p>
      <p>Feels Like: {current.feelslike_c}C | {current.feelslike_f}F</p>
      <p>Precipitation: {current.precip_mm}mm | {current.precip_in}in</p>
      <p>Humidity: {current.humidity}</p>
      <p>Wind: {current.wind_kph}kph | {current.wind_mph}mph</p>
    </>
  )
}

export default Today;