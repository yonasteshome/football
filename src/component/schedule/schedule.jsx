import React from 'react';
import './schedule.css'; // Ensure to link the new CSS file

const Schedule = () => {
    return (
        <div id="schedule" className="schedule-section active">
            <h2 className="schedule-title">Match Schedule</h2>
            <div id="matchSchedule">
                {/* Week 1 */}
                <div className="schedule-week">
                    <h3 className="week-title">Week 1</h3>
                    <div className="schedule-match">
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" alt="Barcelona Logo" className="team-logo" />
                        <div className="match-details">
                            <h3 className="match-title">Barcelona vs Madrid</h3>
                            <p className="match-info">Date: October 15, 2024</p>
                            <p className="match-info">Time: 8:00 PM</p>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" alt="Real Madrid Logo" className="team-logo" />
                    </div>
                    <div className="schedule-match">
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" alt="Barcelona Logo" className="team-logo" />
                        <div className="match-details">
                            <h3 className="match-title">Barcelona vs Madrid</h3>
                            <p className="match-info">Date: October 15, 2024</p>
                            <p className="match-info">Time: 8:00 PM</p>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" alt="Real Madrid Logo" className="team-logo" />
                    </div>
                    <div className="schedule-match">
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" alt="Barcelona Logo" className="team-logo" />
                        <div className="match-details">
                            <h3 className="match-title">Barcelona vs Madrid</h3>
                            <p className="match-info">Date: October 15, 2024</p>
                            <p className="match-info">Time: 8:00 PM</p>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" alt="Real Madrid Logo" className="team-logo" />
                    </div>
                    <div className="schedule-match">
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" alt="Barcelona Logo" className="team-logo" />
                        <div className="match-details">
                            <h3 className="match-title">Barcelona vs Madrid</h3>
                            <p className="match-info">Date: October 15, 2024</p>
                            <p className="match-info">Time: 8:00 PM</p>
                            
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" alt="Real Madrid Logo" className="team-logo" />
                    </div>
                    {/* Duplicate match elements as needed */}
                </div>

                {/* Week 2 */}
                <div className="schedule-week">
                    <h3 className="week-title">Week 2</h3>
                    <div className="schedule-match">
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" alt="Barcelona Logo" className="team-logo" />
                        <div className="match-details">
                            <h3 className="match-title">Barcelona vs Madrid</h3>
                            <p className="match-info">Date: October 15, 2024</p>
                            <p className="match-info">Time: 8:00 PM</p>
                            
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" alt="Real Madrid Logo" className="team-logo" />
                    </div>
                    <div className="schedule-match">
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" alt="Barcelona Logo" className="team-logo" />
                        <div className="match-details">
                            <h3 className="match-title">Barcelona vs Madrid</h3>
                            <p className="match-info">Date: October 15, 2024</p>
                            <p className="match-info">Time: 8:00 PM</p>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" alt="Real Madrid Logo" className="team-logo" />
                    </div>
                    <div className="schedule-match">
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" alt="Barcelona Logo" className="team-logo" />
                        <div className="match-details">
                            <h3 className="match-title">Barcelona vs Madrid</h3>
                            <p className="match-info">Date: October 15, 2024</p>
                            <p className="match-info">Time: 8:00 PM</p>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" alt="Real Madrid Logo" className="team-logo" />
                    </div>
                    <div className="schedule-match">
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" alt="Barcelona Logo" className="team-logo" />
                        <div className="match-details">
                            <h3 className="match-title">Barcelona vs Madrid</h3>
                            <p className="match-info">Date: October 15, 2024</p>
                            <p className="match-info">Time: 8:00 PM</p>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" alt="Real Madrid Logo" className="team-logo" />
                    </div>
                    {/* Duplicate match elements as needed */}
                </div>
            </div>
        </div>
    );
};

export default Schedule;
