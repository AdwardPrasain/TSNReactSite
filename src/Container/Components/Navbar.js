import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import '../Assets/Styles/Navbar.css'
import logo from '../Assets/Images/logoo.png'


function Navbar() {

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)


  return (
    <div>
        <nav className='navbar fixed-top'>
          <div className={color ? 'nav nav-bar' : 'nav'}>
          <div className='navOne'>
          
        <a href='#home' className="nav-link" id='hover'>HOME</a>
        <a href='#aboutUs' className="nav-link" id='hover'>ABOUT</a>
        <a href='#services' className="nav-link" id='hover'>SERVICES</a>
        <a href ="#contact" className="nav-link" id='hover'>CONTACT</a>
       
        </div>
        <div className='navTwo'>
      
        <Link to='/product' className='nav-link' id='hovers'>OUR PRODUCTS</Link>
        </div>
          </div>
      </nav>
            <div className='logo'>
            <img src={logo} alt='logo'/>
            <label>Technology Solution Nepal</label>
            </div>
      </div> 
  )
}

export default Navbar