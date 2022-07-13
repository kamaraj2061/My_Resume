import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>

      <div className='jumbotron text-center' id='heading'>
        <h1 className='myname'>Kamaraj</h1>
        <p className='myoccupation'>Software developer </p>
        <div class="container-fluid nav-container">
          <ul className='nav nav-justified' id='navigation'>
            <li className='nav-item'><Link to='/' className='nav-link active navbar-text'>Home</Link></li>
            <li className='nav-item'><a href='https://github.com/' className='nav-link active navbar-text'>project</a></li>
            <li className='nav-item'><Link className='nav-link active navbar-text' to='/contact'>contact</Link></li>
            <li className='nav-item'><a className='nav-link active navbar-text'href={'#'}>git</a></li>
          </ul>
        </div>
      </div>
      <a href='mailto:kamaraj2061@gmail.com'>Send Mail to me</a>
    </div>

  )
}
