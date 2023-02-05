import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import CountryMap from './CountryMap'
function CountryDetails() {
  var {code} = useParams();
  const [country, setCountry] = useState({})
  useEffect(()=>{
    axios.get(`https://restcountries.com/v2/alpha/${code}`).then((res)=>{
      setCountry({...res.data})
    })
  },[])
  return (
    <div className="p-4 d-flex flex-wrap ">
      <div className="w-50">
        <CountryMap latlng={country.latlng} country={country.name}></CountryMap>
      </div>
      <div className="w-50">
        {JSON.stringify(country)}
      </div>
    </div>
  )
}
export default CountryDetails