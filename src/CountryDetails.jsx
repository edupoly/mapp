import axios from "axios"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

function CountryDetails() {
  var params=useParams();
  
  const [country, setCountry] = useState({})
  useEffect(()=>{
    axios.get(`https://restcountries.com/v2/alpha/${params.x}`)
    .then(res=>{
      setCountry({...res.data})
    })
  },[])
  return (
    <div>
      <h1>CountryDetails</h1>
      {
        <div>
          <h1>{country.name}</h1>
          <h1>{country.capital}</h1>
        </div>
      }
    </div>
  )
}

export default CountryDetails
