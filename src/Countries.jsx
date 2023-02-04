
import React, { useEffect,useState } from 'react'
import axios from 'axios';
import _ from 'lodash';
function Countries() {
  const [countries, setCountries] = useState([]);
  const [filters, setFilters] = useState(['region','subregion'])
  const [filterValues, setFilterValues] = useState([])
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  useEffect(()=>{
    var temp={}
    filters.forEach((filter)=>{
      temp={...temp,[filter]:[]}
    });
    setSelectedFilters({...temp})
    axios.get("https://restcountries.com/v2/all").then((res)=>{
      setCountries([...res.data])
      setFilteredCountries([...res.data])
    })
  },[])

  useEffect(()=>{
    var temp=[];
    filters.forEach((filter)=>{
      var values=JSON.parse(JSON.stringify(_.groupBy(countries,filter)));
      temp = {...temp,[filter]:{...values}}
    })
    setFilterValues([...Object.entries(temp)])
  },[countries])
  
  useEffect(()=>{
    console.log(selectedFilters)
    if(selectedFilters.length===0 || selectedFilters.region.length===0 && selectedFilters.subregion.length===0 ){
      setFilteredCountries([...countries])
    }
    else{
      var temp = [...countries];
      temp = temp.filter((country)=>{
        if(selectedFilters.region.length>0 && selectedFilters.region.includes(country.region)){
          return true
        }
        if(selectedFilters.subregion.length>0 && selectedFilters.subregion.includes(country.subregion)){
          return true
        }
        
        return false
      })
      setFilteredCountries([...temp])
    }
  },[selectedFilters])

  function applyFilter(filter,ev){
    
    var temp = JSON.parse(JSON.stringify(selectedFilters))
    if(ev.target.checked){
     temp[filter].push(ev.target.value)
    }
    else{
      temp[filter].splice(temp[filter].indexOf(ev.target.value),1)
    }
    setSelectedFilters({...temp})
  }
  return (
    <div>
      <h1>Countries</h1>
      <div className='d-flex flex-wrap'>
        <div id="filters" className='border border-1' style={{width:'20%'}}>
          <ul>
            {
              filterValues && filterValues.map((filter)=>{
                return(<li>
                  <h5>{filter[0]}</h5>
                  {
                    Object.keys(filter[1]).map((a)=>{
                      return <div className='text-break'><input type='checkbox' value={a} onChange={(e)=>{applyFilter(filter[0],e)}}></input>:{a}</div>
                    })
                  }
                </li>)
              })
            }
          </ul>

        </div>
        <div id="countries" className='border border-1' style={{width:'80%'}}>
          <div className='d-flex flex-wrap'>
            {
              filteredCountries.map((country)=>{
                return (
                  <div className='w-25'>
                    <div className='m-4'>
                      <b>{country.name}</b>
                      <img src={country.flag} width="100%" alt="" />
                    </div>
                  </div>
              )
              })
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Countries