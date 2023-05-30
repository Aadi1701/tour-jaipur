import React from 'react';
import NavbarData from '../../Utils/NavbarData.js';
import './style.css'
import Logo from '../../assets/tour-logo-transparent.png'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header=()=>{
  return(
    <div className= "app-header">
      <nav className= "nav-bar">
         <img className='logo' src={Logo} alt='logo'/>
          <GiHamburgerMenu className='ham'/>
          <ul className='nav-bar-item-group'>
            {
              NavbarData.map((item,pos)=><li className={pos===0?'active':`nav-bar-item`} key={pos}>{item.name}</li>)
            }
            
          </ul>
      </nav>
    </div>
   );
  }

export default Header;
