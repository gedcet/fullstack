import axios from "axios";
import { useEffect, useState } from 'react'

const Weather = (props) =>
{
    const [CapitalTemp, setCapitalTemp] = useState("")
    const [CapitalWind, setCapitalWind] = useState("")
    const [CapitalCondition, setCapitalCondition] = useState("")
    let api_URL_weather = 'https://api.openweathermap.org/data/2.5/weather?q='
    let api_miestas = props.capital[0]
    let api_appid = "&appid="
    const api_key = process.env.REACT_APP_API_KEY
    const api_oro_icon1 = 'http://openweathermap.org/img/wn/'
    const api_oro_icon3 = ".png"

    // let unixSauleTeka = 1647922645;//saule teka
    // let unixSauleLeidziasi = 1647967103;//saule leidziasi
    // let dateSaulesPatekejimas = new Date(unixSauleTeka * 1000);
    // let dateSaulesNusileidimas = new Date(unixSauleLeidziasi * 1000);
    // let nowTime = Date.now() / 1000;
    //  console.log("     saule teka " + unixSauleTeka);
    //  console.log("saule leidziasi " + unixSauleLeidziasi);
    //  console.log("          dabar " + nowTime);

    // if ((nowTime > unixSauleTeka) && (nowTime < unixSauleLeidziasi))
    // {
    //     //console.log("diena ")
    //     let DayNight = "d";
    // }
    // else
    // {
    //     //console.log("naktis ")
    //     let DayNight = "n";
    // }

    //https://stackoverflow.com/questions/19477324/how-do-i-calculate-the-temperature-in-celsius-returned-in-openweathermap-org-jso
    const kelvin_to_celsius = function (kelvin)
    { return kelvin - 273.15; }

    const fetchWeather = async () =>
    {
        try
        {
            const url = `${api_URL_weather}${api_miestas}${api_appid}${api_key}`
            const result = await axios.get(url);

            const celsius = kelvin_to_celsius(result.data.main.temp);
            const wind = result.data.wind.speed;
            const WCondIcon = result.data.weather[0].icon;
            setCapitalTemp(celsius);
            setCapitalWind(wind);
            const WeatherIconUrl = `${api_oro_icon1}${WCondIcon}${api_oro_icon3}`
            setCapitalCondition(WeatherIconUrl);
        }
        catch (err)
        {
            console.log(err)
        }
    }

    useEffect(fetchWeather, [])

    return (
        <div>
            <p>Weather in {api_miestas + " "}</p>
            <p>temperature {parseFloat(CapitalTemp).toFixed(2)} °C</p>
            <p><img src={CapitalCondition} /></p>
            <p>Wind speed {CapitalWind} m/s</p>
        </div>
    )
}

export default Weather