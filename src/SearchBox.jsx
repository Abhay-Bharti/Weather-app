import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchBox({ getResult }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "af6e70793d375c2cf37f881b491bea16";
    let [err, setErr] = useState(false);
    let [cityName, setCityName] = useState("");

    const handleCitySearch = (event) => {
        setCityName(event.target.value);
    }

    const getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: cityName.toUpperCase(),
                temp: jsonResponse.main.temp,
                humidity: jsonResponse.main.humidity,
                maxTemp: jsonResponse.main.temp_max,
                minTemp: jsonResponse.main.temp_min,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                windSpeed: jsonResponse.wind.speed,
            }
            setErr(false);
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCityName("");
            let newInfo = await getWeatherInfo();
            getResult(newInfo);
            setErr(false);
        } catch (err) {
            setErr(true);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={cityName} onChange={handleCitySearch} style={{ width: "400px", marginTop: "1em" }} />
                <Button variant="contained" endIcon={<SearchIcon />} type='submit' style={{ marginLeft: "1em", height: "4em", marginTop: "1em" }}>Search</Button>
            </form>
            {err && <h2 style={{ color: 'red' }}>City Not Found !!</h2>}
        </>
    )
}