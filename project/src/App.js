import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Main from './Components/Main'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <Router>
      <div className="App"> 
       
        <Main className='CountryLink'/>
      </div>
    </Router>
  );
}

export default App;
