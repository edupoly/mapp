import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

function Countries() {
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    axios.get("https://restcountries.com/v2/all").then((res)=>{
      setCountries([...res.data])
    })
  },[])
  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {
          countries.map((c)=>{
            return <li>
              <Link to={`/countryDetails/${c.alpha2Code}`}>{c.name}</Link>
              </li>
          })
        }
      </ul>
    </div>
  )
}
export default Countries