import React from 'react';
import NavbarData from '../../Utils/NavbarData.js';
import './style.css'

const NavBarCard=(props)=>{
  return(
    <div className="NavBarCard">
     <img className="NavBarCard-image" src={props.image} alt="small-logo" />
     <h4 className="NavBarCard-name">{props.name}</h4>
    </div>
  );
}

const createNavbarCard=(dataNavbar)=>{
  return(
    <NavBarCard
     key={dataNavbar.id}
     image={dataNavbar.image}
     name={dataNavbar.name}
    />
  );
}

const Header=()=>{
  return(
    <div className= "app-header">
      <nav className= "nav-bar">

      </nav>
    </div>
   );
  }

export default Header;
