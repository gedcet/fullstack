import './App.css';
import { useEffect, useState } from 'react'
import axios from "axios";
import Countrys from './Countrys';

const App = () =>
{
  const [countrys, setCountrys] = useState([])
  const [filterValue, setfilterValue] = useState("")
  let API_URL = 'https://restcountries.com/v3.1/all'
  let API_URL_weather=''
  const api_key = process.env.REACT_APP_API_KEY
  

  const handleFilterChange = (event) =>
  {
    console.log(event.target.value)
    setfilterValue(event.target.value)
  }

  const fetchCountrys = async () =>
  {
    try
    {
      const result = await axios.get(`${API_URL}`);
      setCountrys(result.data);
    }
    catch (err)
    {
      console.log(err)
    }
  }

  useEffect(fetchCountrys, []);

  return (
    <div className="App">
      <h2>Find country</h2>
      <form>  <input onChange={handleFilterChange} />
      </form>
      <h2><Countrys countrys={countrys} filterValue={filterValue} setfilterValue={setfilterValue}/></h2>
      <p>{api_key}</p>
    </div>
  );
}

export default App;
