import { useEffect, useState } from "react";

function Day({day, unitSystem, date}) {

  useEffect(() => {
    updateMeasurements();
  }, [day]);

  const [measurements, setMeasurements] = useState({});
  const [units, setUnits] = useState({});


  const updateMeasurements = () => {
    setMeasurements({
      "metric": {
        "maxT": day.maxtemp_c,
        "minT": day.mintemp_c,
        "avgT": day.avgtemp_c,
        "maxWind": day.maxwind_kph,
        "totalPrecip": day.totalprecip_mm,
        "avgVis": day.avgvis_km,
      },
      "imperial": {
        "maxT": day.maxtemp_f,
        "minT": day.mintemp_f,
        "avgT": day.avgtmp_f,
        "maxWind": day.maxwind_mph,
        "totalPrecip": day.totalprecip_in,
        "avgVis": day.avgvis_miles,
      }
    });

    setUnits({
      "metric": {
        "temp": "C",
        "wind": "kph",
        "precip": "mm",
        "vis": "km"
      },
      "imperial": {
        "temp": "F",
        "wind": "mph",
        "precip": "in",
        "vis": "mi"
      }
    });
  }

  return (
    <>
      <h4>Day Conditions for {date}</h4>
      <div className="day-info-container">
        <div className="day-info">
          <p><strong>{day.condition.text}</strong></p>
          <img src={day.condition.icon}/>
        </div>
      {measurements && measurements.metric && measurements.imperial && unitSystem && 
        <>
          <div className="day-info">
            <p><strong>Max:</strong> {measurements[unitSystem]["maxT"]} {units[unitSystem]["temp"]} </p> 
            <p><strong>Min:</strong> {measurements[unitSystem]["minT"]} {units[unitSystem]["temp"]} </p> 
            <p><strong>Avg:</strong> {measurements[unitSystem]["avgT"]} {units[unitSystem]["temp"]} </p> 
          </div>
          <div className="day-info">
            <p><strong>Max Wind:</strong> {measurements[unitSystem]["maxWind"]} {units[unitSystem]["wind"]} </p> 
            <p><strong>Total Precip:</strong> {measurements[unitSystem]["totalPrecip"]} {units[unitSystem]["precip"]} </p> 
            <p><strong>Avg Humidity:</strong> {day.avghumidity}</p>
          </div>
          <div className="day-info">
            <p><strong>Avg Vis:</strong> {measurements[unitSystem]["avgVis"]} {units[unitSystem]["vis"]} </p>
            <p><strong>Chance of Rain:</strong> {day.daily_chance_of_rain}%</p>
            <p><strong>Chance of Snow:</strong> {day.daily_chance_of_snow}%</p>
            <p><strong>UV index:</strong> {day.uv}</p>
          </div>
        </>
      }
      </div>
    </>
  )
}

export default Day;