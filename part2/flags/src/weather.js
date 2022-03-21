import React, { useEffect } from "react";
import axios from "axios";

const Weather = (props) =>
{
    const [CapitalTemp, setCapitalTemp] = useState("")
    let api_URL_weather = 'https://api.openweathermap.org/data/2.5/weather?q='
    let api_miestas = props.capital[0]
    let api_appid = "&appid="
    const api_key = process.env.REACT_APP_API_KEY
    
    const fetchWeather = async () =>
    {
        try
        {
            const url = `${api_URL_weather}${api_miestas}${api_appid}${api_key}`
            const result = await axios.get(url);
            CapitalTemp = result.data.main.temp/32
            console.log(CapitalTemp)
            
        }
        catch (err)
        {
            console.log(err)
        }
    }

useEffect(fetchWeather, [])

    return (
        <div>
            {CapitalTemp+""} C
        </div>
    )
}

export default Weather