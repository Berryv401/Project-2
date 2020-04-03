import React, {useEffect, useState} from 'react';
import CountryData from './CountryData'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header';
import About from './About'
import Country from './Country'
import Footer from './Footer'

function Main(props) {
  const [summary, setSummary] = useState([])
  
  
    useEffect(() => {
      getSummary()
    }, []);
  
    const getSummary = async () => {
      const response = await fetch(`https://api.covid19api.com/summary`)
      const data = await response.json()
      setSummary(data.Countries)
    }
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          
          <Route path='/' exact component={CountryData} />
          <Route path='/about/' exact component={About} />
          <Route path ='/Country/:id' exact render={props => <Country {...props} summary={summary} />}/>
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default Main;