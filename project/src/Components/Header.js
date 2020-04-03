import React from 'react';
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'

function Header() {
  return (
    <Card>
    <nav className='nav'>
      <Link className='covid19' to='/'>
        <h1>Covid 19</h1>
      </Link>
      <Link className='about' to='/about/'>
        <h1>About</h1>
      </Link>
    </nav>
    </Card>
  );
}

export default Header;