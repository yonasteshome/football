import React from 'react';
import "../maincontent/maincontent.css";
import image1 from '../../image/firstsection.jpg'; // Update the path as per your folder structure
import image2 from '../../image/secondsection.jpg'; // Update the path as per your folder structure

const MainContent = () => {
    return (
        <main>
            <section id="home" className="hero-section">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h2>Feel the Spirit of Football</h2>
                    <p>Witness the passion, energy, and excitement of the ASTU Football Cup.</p>
                    <a href="#about" className="cta-button">Discover More</a>
                </div>
            </section>

            <section className="section">
                <img src={image1} alt="Football Match" />
                <div className="section-content">
                    <h3>The ASTU Football Cup - A Memorable Event</h3>
                    <p>
                        The ASTU Football Cup is not just a competition; it’s a celebration of skill, teamwork, and community spirit.
                        Every year, students from across the university come together to cheer for their favorite teams, forming bonds
                        and creating memories that last a lifetime.
                    </p>
                </div>
            </section>

            <section className="section reverse">
                <img src={image2} alt="Football Match" />
                <div className="section-content">
                    <h3>A Celebration of Football</h3>
                    <p>
                        Whether you're a player showcasing your talent on the field or a fan in the stands, the ASTU Football Cup 
                        brings out the best in everyone. It’s a time when friendships are strengthened, rivalries are intensified, 
                        and football magic happens.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-section">
                <h3>Contact Us</h3>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </section>

            <footer>
                <p>&copy; 2024 ASTU Football Cup. All rights reserved.</p>
            </footer>
        </main>
    );
};

export default MainContent;
