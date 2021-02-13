import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav () {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100) {
              handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }

    }, []);


    return ( 
    <div className={`nav ${show && "nav__black"}`}>
        <img className="nav_logo"
        src="https://michael-jeter.com/logo.png"
        alt="Netflix Logo"/>

        <img className="nav_avatar"
        src="https://michael-jeter.com/profile__logo.png"
        alt="Netflix Logo" />

    </div>

    )
}


export default Nav;
