import React from 'react';
import './line-up.css';

const Lineup = () => {
  return (
    <div className="lineup-team-container">
      <div className="lineup-field-container">
        <div className="lineup-center-line"></div>
        <div className="lineup-penalty-box lineup-top"></div>
        <div className="lineup-penalty-box lineup-bottom"></div>
        <div className="lineup-goal-area lineup-top"></div>
        <div className="lineup-goal-area lineup-bottom"></div>
        <div className="lineup-center-circle"></div>
        
        {/* Players */}
        <div className="lineup-player lineup-p1">1</div> {/* Goalkeeper */}
        <div className="lineup-player lineup-p2">2</div> {/* Left Back */}
        <div className="lineup-player lineup-p3">3</div> {/* Center Back 1 */}
        <div className="lineup-player lineup-p4">4</div> {/* Center Back 2 */}
        <div className="lineup-player lineup-p5">5</div> {/* Right Back */}
        <div className="lineup-player lineup-p6">6</div> {/* Midfielder Left */}
        <div className="lineup-player lineup-p7">7</div> {/* Midfielder Center */}
        <div className="lineup-player lineup-p8">8</div> {/* Midfielder Right */}
        <div className="lineup-player lineup-p9">9</div> {/* Forward Left */}
        <div className="lineup-player lineup-p10">10</div> {/* Forward Center */}
        <div className="lineup-player lineup-p11">11</div> {/* Forward Right */}
      </div>

      <div className="lineup-list-container">
        <h2>Player List</h2>
        {[...Array(11)].map((_, i) => (
          <div className="lineup-player-info" key={i}>
            <img
              src="https://img.lovepik.com/free-png/20210926/lovepik-cartoon-customer-service-avatar-png-image_401451024_wh1200.png"
              className="lineup-player-avatar"
              alt={`Player ${i + 1}`}
            />
            <span className="lineup-player-name">Player {i + 1}</span>
            <span className="lineup-player-position">
              {i === 0 ? 'GK' : i < 5 ? 'DF' : i < 8 ? 'MF' : 'FW'}
            </span>
            <span className="lineup-player-number">{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lineup;
