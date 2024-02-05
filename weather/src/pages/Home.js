
import Forecast from "../components/Forecast";

function Home() {
  return (
    <>
        <Forecast/>
        <footer>
          Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a><br></br>
          <a href="https://www.weatherapi.com/" title="Free Weather API">
            <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"/>
          </a>
        </footer>
    </>
  )
}

export default Home