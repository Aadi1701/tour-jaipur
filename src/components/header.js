import React from 'react';
import NavbarData from '../NavbarData.js';

function NavBarCard(props){
  return(
    <div className="NavBarCard">
     <img className="NavBarCard-image" src={props.image} alt="small-logo" />
     <h4 className="NavBarCard-name">{props.name}</h4>
    </div>
  );
}

function createNavbarCard(dataNavbar){
  return(
    <NavBarCard
     key={dataNavbar.id}
     image={dataNavbar.image}
     name={dataNavbar.name}
    />
  );
}

function Header(){
  return(
    <div className= "app-header">
      <nav className= "nav-bar">

        {NavbarData.map(createNavbarCard)}
      </nav>
    </div>
   );
  }

export default Header;
