import { useEffect, useState } from "react";
import Current from "./Current";
import Hourly from "./Hourly";
import Day from "./Day";
import Location from "./Location";
import '../App.css';

function Forecast() {

  const [search, setSearch] = useState("Toronto");
  const [userInput, setUserInput] = useState("");
  const [units, setUnits] = useState("metric");
  const [isMetric, setIsMetric] = useState(true);

  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  const [dayInfo, setDayInfo] = useState({});

  useEffect(() => {
    getForecast();
  }, [search]);

  const getForecast = async () => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${search}&days=3`)
    .then( async res => {
      const data = await res.json();

      if (res.status === 200) {
        // set initial values
        setLocation(data.location);
        setCurrent(data.current);
        setForecast(data.forecast.forecastday);
        setDayInfo(data.forecast.forecastday[0]);
      } else {
        setLocation(null)
      }
    });

    
  }

  const updateDayInfo = (event, index) => {
    setDayInfo(forecast[index]);
  }

  const inputHandler = (e) => {
    setUserInput(e.target.value)
  }

  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(userInput)
    
  }

  const setToMetric = () => {
    setUnits("metric")
    setIsMetric(true)
  }

  const  setToImperial = () => {
    setUnits("imperial");
      setIsMetric(false)
  }


  return (
    <>
      <div className="background-panel">

        {/* search bar */}
        <form onSubmit={searchHandler}>
          <input type="text" placeholder="Location" onChange={inputHandler}/>
          <button type="submit">Search</button>
        </form>

        {location && <>
          <Location location={location}/>

          {/* unit selector buttons */}
          <button onClick={setToMetric} disabled={isMetric}>
            Metric
          </button>

          <button onClick={setToImperial} disabled={!isMetric}>
            Imperial
          </button>

          <div className="info-container">
            <div className="forecast-info">

              {/* daily conditions info */}
              {dayInfo.day && dayInfo.day.condition &&
                <Day day={dayInfo.day} unitSystem={units} date={dayInfo.date}/>
              }

              {/* date selector buttons */}
              <div className="buttons-container">
              {forecast.map((day, index) => {
                return (
                  <div key={day.date}>
                    <button className="date-btn" onClick={event => updateDayInfo(event, index)}>
                      {day.date}
                      {day.day &&
                        <img src= {day.day.condition.icon}/>
                      }
                    </button>
                  </div>
                )
              })}
              </div>
            </div>

            {/* current conditions info */}
            <div>
            {current.condition &&
                <Current current={current} unitSystem={units}/>
            }
            </div>
          </div>

          {/* hourly info graph */}
          {dayInfo.hour &&
            <Hourly hourlyInfo={dayInfo.hour} unitSystem={units}/>
          }
        </>}
        {!location && 
          <p>invalid location</p>
        }
      </div>

    </>
  )
}

export default Forecast;