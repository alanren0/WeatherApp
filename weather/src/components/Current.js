import { useEffect, useState } from "react";

function Current({current, unitSystem}) {

  useEffect(() => {
    updateMeasurements();
  }, [current]);

  const [measurements, setMeasurements] = useState({});
  const [units, setUnits] = useState({});


  const updateMeasurements = () => {
    setMeasurements({
      "metric": {
        "temp": current.temp_c,
        "feelsLike": current.feelslike_c,
        "precip": current.precip_mm,
        "wind": current.wind_kph
      },
      "imperial": {
        "temp": current.temp_f,
        "feelsLike": current.feelslike_f,
        "precip": current.precip_in,
        "wind": current.wind_mph,
      }
    });

    setUnits({
      "metric": {
        "temp": "C",
        "wind": "kph",
        "precip": "mm",
      },
      "imperial": {
        "temp": "F",
        "wind": "mph",
        "precip": "in",
      }
    });
  }

  return (
    <>
      <h4>Current Conditions</h4>
      <p>Last Updated: {current.last_updated}</p>
      <p><strong>{current.condition.text}</strong></p>
      <img src={current.condition.icon}/>

      {measurements && measurements.metric && measurements.imperial && unitSystem && 
        <>
          <p><strong>Temperature:</strong> {measurements[unitSystem]["temp"]} {units[unitSystem]["temp"]} </p> 
          <p><strong>Feels Like:</strong> {measurements[unitSystem]["feelsLike"]} {units[unitSystem]["temp"]} </p> 
          <p><strong>Precipitation:</strong> {measurements[unitSystem]["precip"]} {units[unitSystem]["precip"]} </p> 
          <p><strong>Wind:</strong> {measurements[unitSystem]["wind"]} {units[unitSystem]["wind"]} </p> 
          <p><strong>Humidity:</strong> {current.humidity}</p>
        </>
      }
    </>
  )
}

export default Current;