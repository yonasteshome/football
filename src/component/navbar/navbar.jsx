import React from 'react';
import "../navbar/navbar.css"
import Club from '../../pages/teams/teams';
import Live from '../../pages/live/live';
import Home from '../../pages/home/home';
import ball from '../../image/3D-soccer-ball-on-transparent-background-PNG-removebg-preview.png'
const NavBar = () => {
    return (
        <header>
            <div className="logo">
                <img 
                    src={ball} 
                    alt="Football Logo"
                />
                <h1>ASTU League</h1>
                
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#Teams">Teams</a></li>
                    <li><a href="#Live">Live</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
