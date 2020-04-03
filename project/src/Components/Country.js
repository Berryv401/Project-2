import React from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import {Card} from 'react-bootstrap'


const Country = (props) => {
  const countryFilter = props.summary.filter(summary => summary.Country === props.match.params.id)
  const countryMap = countryFilter.map((source, index) => {
    return(
      <Card key={index} className='Country'>
        <h1 className='CountryName'>Country - {source.Country}</h1>
      
      <ReactBootStrap.Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>New Confirmed</th>
          <th>Total Confirmed</th>
          <th>New Deaths</th>
          <th>Total Deaths</th>
          <th>NewRecovered</th>
          <th>TotalRecovered</th>
        </tr>
      </thead>
      <tbody>
        <tr className='tr'>
          <td>{source.NewConfirmed}</td>
          <td>{source.TotalConfirmed}</td>
          <td>{source.NewDeaths}</td>
          <td>{source.TotalDeaths}</td>
          <td>{source.NewRecovered}</td>
          <td>{source.TotalRecovered}</td>
        </tr>
      
      </tbody>
    </ReactBootStrap.Table>
    </Card>
    )
  })
    return (
      <Card>
        {countryMap}
        <img src='https://ewscripps.brightspotcdn.com/dims4/default/a282788/2147483647/strip/true/crop/599x337+3+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F1a%2F51%2F7f44ea8e46e1b0ff7d6d2fe8d0db%2Fcoronavirus.jpg' alt=''/>
      </Card>
    );
  }

export default Country;