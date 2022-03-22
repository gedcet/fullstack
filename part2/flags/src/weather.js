import axios from "axios";
import { useEffect, useState } from 'react'

const Weather = (props) =>
{
    const [CapitalTemp, setCapitalTemp] = React.useState("")
    let api_URL_weather = 'https://api.openweathermap.org/data/2.5/weather?q='
    let api_miestas = props.capital[0]
    let api_appid = "&appid="

    const api_key = process.env.REACT_APP_API_KEY

    //https://stackoverflow.com/questions/19477324/how-do-i-calculate-the-temperature-in-celsius-returned-in-openweathermap-org-jso
    const kelvin_to_celsius = function (kelvin)
    {
        return kelvin - 273.15;
    }

    const fetchWeather = async () =>
    {
        try
        {
            const url = `${api_URL_weather}${api_miestas}${api_appid}${api_key}`
            const result = await axios.get(url);

            // console.log(result.data);
            const celsius = kelvin_to_celsius(result.data.main.temp);
            setCapitalTemp(celsius);

           

        }
        catch (err)
        {
            console.log(err)
        }
    }

    React.useEffect(fetchWeather, [])

    return (
        <div>
            {parseFloat(CapitalTemp).toFixed(2)} C
        </div>
    )
}

export default Weather