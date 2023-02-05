
import React, { useEffect,useRef,useState } from 'react'
import axios from 'axios';
import _, { filter } from 'lodash';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Icon from '@mui/material/Icon';
import { Link, useNavigate } from 'react-router-dom';
function Countries() {
  const [countries, setCountries] = useState([]);
  const [cview, setCview] = useState('grid')
  const [filters, setFilters] = useState(['region','subregion'])
  const [filterValues, setFilterValues] = useState([])
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  var navigate = useNavigate()
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
  function search(e){
    var temp = [...filteredCountries]
    temp = countries.filter((country)=>{
      var cstring = JSON.stringify(country).toLowerCase();
      return cstring.includes(e.target.value.toLowerCase())
    })
    setFilteredCountries([...temp])
  }
  function goto(link){
    navigate("/countryDetails/"+link)
  }
  return (
    <div>
      <h1>Countries</h1>
      <div className='d-flex flex-wrap'>
        <div id="filters" className='border border-1' style={{width:'20%'}} >
          {

              selectedFilters.region && (selectedFilters.region.length>0 || selectedFilters.subregion.length>0) && (
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
            )
          }
          
        
          <div className='m-4'>
            {
              filterValues && filterValues.map((filter)=>{
                return(<div className='m-2'>
                  <h5>{filter[0]}</h5>
                  {
                    Object.keys(filter[1]).map((a)=>{
                      return <div className='text-break'>
                        <input type='checkbox' checked={selectedFilters[filter[0]].includes(a)} value={a} onChange={(e)=>{applyFilter(filter[0],e)}}></input>:{a}
                      </div>
                    })
                  }
                </div>)
              })
            }
          </div>

        </div>
        <div id="countries" className='border border-1' style={{width:'80%'}}>
          <div className='border m-3 p-2 d-flex justify-content-between align-items-center'>
            <div>
              <b>Sort by Population</b>&nbsp;&nbsp;&nbsp;
              <i onClick={()=>{sortFilteredCountries('asc')}}  style={{cursor:'pointer'}}>Ascending</i>&nbsp;&nbsp;
              <i onClick={()=>{sortFilteredCountries('des')}} style={{cursor:'pointer'}}>Descending</i>
            </div>
            <div>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200 }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search country' }}
                onChange={search}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            </div>
            <div>
              <Icon onClick={()=>{setCview('list')}} style={{cursor:'pointer'}}>format_list_bulleted</Icon>
              <Icon onClick={()=>{setCview('grid')}} style={{cursor:'pointer'}}>grid_view</Icon>
            </div>

          </div>
          <div className='d-flex flex-wrap m-2 align-items-center'>
            {
              cview==='grid' && (filteredCountries.map((country)=>{
                return (

                    <div className='w-25' onClick={()=>{goto(country.alpha2Code)}}>
                      <div className='m-4'>
                        <b>{country.name}</b>
                        <img src={country.flag} width="100%" alt="" />
                        <div className='text-end'>
                          <b>Population:{country.population}</b>
                        </div>
                      </div>
                    </div>

                )
              }))
            }
            {
              cview==='list' && (filteredCountries.map((country)=>{
                return (
                  <div className='w-100 border border-2 m-2'>
                    <div className='m-2 d-flex'>
                      <div>
                        <img src={country.flag} width="200px" alt="" />
                      </div>
                      <div className='m-3'>
                        <b>{country.name}</b>
                        <h5>Population:{country.population}</h5>
                        <h5>Area:{country.area}</h5>
                      </div>
                      <div className='m-3'>
                        <b>Capital:{country.capital}</b>
                        <h5>Region:{country.region}</h5>
                        <h5>Language:{country.languages[0].name}</h5>
                      </div>
                    </div>
                  </div>
                )
              }))
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Countries