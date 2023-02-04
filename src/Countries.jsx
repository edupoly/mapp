
import React, { useEffect,useState } from 'react'
import axios from 'axios';
import _ from 'lodash';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
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
  function handleDelete(k,v){
    var temp = JSON.parse(JSON.stringify(selectedFilters))
    temp[k].splice(temp[k].indexOf(v),1)
    setSelectedFilters({...temp})
  }
  function sortFilteredCountries(order){
    var temp = [...filteredCountries]
    temp.sort((a,b)=>{
      if(a.population>b.population){
        return order==='asc'?-1:1
      }
      else{
        return order==='asc'?1:-1
      }
    })
    setFilteredCountries([...temp])
  }
  return (
    <div>
      <h1>Countries</h1>
      <div className='d-flex flex-wrap'>
        <div id="filters" className='border border-1' style={{width:'20%'}}>
          <div className='border border-1 m-2 p-2 d-flex flex-wrap' >
            <Stack direction="row" className='overflow-scroll' spacing={1}>
              {
                Object.keys(selectedFilters).map((key)=>{
                  return selectedFilters[key].map((val)=>{
                    return <Chip size="small" label={val} variant="outlined" className='text-break' onDelete={()=>{handleDelete(key,val)}} />
                  })
                })
              }
            </Stack>
          </div>
        
          <ul>
            {
              filterValues && filterValues.map((filter)=>{
                return(<li>
                  <h5>{filter[0]}</h5>
                  {
                    Object.keys(filter[1]).map((a)=>{
                      return <div className='text-break'>
                        <input type='checkbox' checked={selectedFilters[filter[0]].includes(a)} value={a} onChange={(e)=>{applyFilter(filter[0],e)}}></input>:{a}
                      </div>
                    })
                  }
                </li>)
              })
            }
          </ul>

        </div>
        <div id="countries" className='border border-1' style={{width:'80%'}}>
          <div className='border m-2 p-2'>
            <b>Sort by Population</b>&nbsp;&nbsp;&nbsp;
            <i onClick={()=>{sortFilteredCountries('asc')}}>Ascending</i>&nbsp;&nbsp;
            <i onClick={()=>{sortFilteredCountries('des')}}>Descending</i>
          </div>
          <div className='d-flex flex-wrap'>
            {
              filteredCountries.map((country)=>{
                return (
                  <div className='w-25'>
                    <div className='m-4'>
                      <b>{country.name}</b>
                      <img src={country.flag} width="100%" alt="" />
                      <div className='text-end'>
                        <b>Population:{country.population}</b>
                      </div>
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