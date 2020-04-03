import React,{useState, useEffect} from 'react';
import CountryList from './CountryList';
import {Card} from 'react-bootstrap'

function CountryData(props) {

const [search, setSearch] = useState('')
const [summary, setSummary] = useState([])


  useEffect(() => {
    getSummary()
  }, []);

  const getSummary = async () => {
    const response = await fetch(`https://api.covid19api.com/summary`)
    const data = await response.json()
    setSummary(data.Countries)
  }
  const handleSearch = e => {
    setSearch(e.target.value)
  }
  const onSearch = e => {
    e.preventDefault()
  }

  const filtering = summary.filter( summary =>{
    return summary.Country.toLowerCase().includes( search.toLowerCase())
  })

  return (
    <Card className='CountryData'>
      <form onSubmit={onSearch} className='searchForm' />
      <input 
      className='searchBar' 
      type='text' 
      value={search} 
      onChange={handleSearch}
      />
      <button className='searchBar' type='submit'>
        Search
      </button>
      <h3 className='desktop'>Country</h3>
      {
        filtering.map((summary, i) => (
          <CountryList className='List'
          key={i} 
          Country={summary.Country} 
          TotalConfirmed={summary.TotalConfirmed} 
          TotalDeaths={summary.TotalDeaths} 
          TotalRecovered={summary.TotalRecovered}
          />
        ))
      }
    </Card>
  );
}

export default CountryData;