import React, { useState } from "react";
import "../nav/nav.css"; // Assuming your CSS file is still linked
import Standing from "../Standing/standing";
import Schedule from "../schedule/schedule";
import Teams from "../Teams/teams";

const Nav = () => {
    const [activeSection, setActiveSection] = useState('standings'); // Default section

    const showSection = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="navbar-container">
           
            <nav className="navbar">
                <div 
                    className={`navbar-item ${activeSection === 'schedule' ? 'navbar-active' : ''}`} 
                    onClick={() => showSection('schedule')}
                >
                    ⚽️ Schedule
                </div>
                <div 
                    className={`navbar-item ${activeSection === 'standings' ? 'navbar-active' : ''}`} 
                    onClick={() => showSection('standings')}
                >
                    📊 Standings
                </div>
            
                <div 
                    className={`navbar-item ${activeSection === 'Live' ? 'navbar-active' : ''}`} 
                    onClick={() => showSection('Live')}
                >
                    🔔 Live
                </div>
            </nav>

            <div className="navbar-section-container">
                {activeSection === 'standings' && <Standing />}
                {activeSection === 'schedule' && <Schedule />}
                {activeSection === 'teams' && <Teams />}
                {/* Add more sections here if needed */}
            </div>
        </div>
    );
};

export default Nav;
