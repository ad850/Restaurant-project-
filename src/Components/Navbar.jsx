import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (


        <div id="contain">
        

            <div id="nav">
            <span id="logo"/>
                
                <NavLink exect to="/" activeClassName="One" className="link1">Menu</NavLink>
                <NavLink to="/Location" activeClassName="One" className="link1">Reviews</NavLink>
                <NavLink to="/Reservation" activeClassName="One" className="link1">Reservation</NavLink>
                <NavLink to="/About" activeClassName="One" className="link1">AboutUs</NavLink>


            </div>


        </div>
    )
}

export default Navbar
