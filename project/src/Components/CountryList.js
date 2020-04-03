import React from 'react';
import { Link } from 'react-router-dom'
import * as ReactBootStrap from 'react-bootstrap'
import {Card} from 'react-bootstrap'

const CountryList = ({Country, TotalConfirmed, TotalDeaths, TotalRecovered}) => {

  return (
    <Card>
    <tr className='mainList'>
        <ReactBootStrap.Table responsive>  
    <thead>
      <tr className='trMobile'>
        <th className='mobile'>Country Name</th>
        <th className='mobile'>Total Confirmed</th>
        <th className='mobile'>Total Deaths</th>
        <th className='mobile'>Total Recovered</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <Link className='CountryLink' to={`/Country/${Country}`}>{Country}</Link>
        <td className='mobile'>{TotalConfirmed}</td>
        <td className='mobile'>{TotalDeaths}</td>
        <td className='mobile'>{TotalRecovered}</td>
      </tr>
    </tbody>
  </ReactBootStrap.Table>
  
  
    </tr>
    </Card>
  );
}

export default CountryList;