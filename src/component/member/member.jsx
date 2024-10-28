import React from 'react';
import './member.css';

const Member = () => {
    const clubData = {
        name: "Manchester City FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
        coach: {
            name: "Pep Guardiola",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wyZ6LtR3CngFsJST2yv8zZfIuF7Ya5FddQ&s",
        },
        players: [
            { name: "Rúben Dias", position: "Defender", number: 3, image: "https://via.placeholder.com/100" },
            { name: "Ederson", position: "Goalkeeper", number: 31, image: "https://via.placeholder.com/100" },
            { name: "Kevin De Bruyne", position: "Midfielder", number: 17, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40m-srJEF1GHTaOibFzIsHTWbVeFlda35eg&s" },
            { name: "Erling Haaland", position: "Forward", number: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXZFd08P52d6ho_teMABIaLjMzxDx5pe30Q&s" },
            { name: "Jack Grealish", position: "Winger", number: 10, image: "https://via.placeholder.com/100" },
            { name: "Rúben Dias", position: "Defender", number: 3, image: "https://via.placeholder.com/100" },
            { name: "Ederson", position: "Goalkeeper", number: 31, image: "https://via.placeholder.com/100" },
            { name: "Kevin De Bruyne", position: "Midfielder", number: 17, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40m-srJEF1GHTaOibFzIsHTWbVeFlda35eg&s" },
            { name: "Erling Haaland", position: "Forward", number: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXZFd08P52d6ho_teMABIaLjMzxDx5pe30Q&s" },
            { name: "Jack Grealish", position: "Winger", number: 10, image: "https://via.placeholder.com/100" },
            { name: "Rúben Dias", position: "Defender", number: 3, image: "https://via.placeholder.com/100" },
            { name: "Ederson", position: "Goalkeeper", number: 31, image: "https://via.placeholder.com/100" },
            { name: "Kevin De Bruyne", position: "Midfielder", number: 17, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40m-srJEF1GHTaOibFzIsHTWbVeFlda35eg&s" },
            { name: "Erling Haaland", position: "Forward", number: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXZFd08P52d6ho_teMABIaLjMzxDx5pe30Q&s" },
            { name: "Jack Grealish", position: "Winger", number: 10, image: "https://via.placeholder.com/100" }
        ]
    };

    return (
        <div>
            <div id="header">
                <img src={clubData.logo} alt={`${clubData.name} Logo`} id="logo" />
                <h1 id="title">{clubData.name}</h1>
            </div>
            <section id="player-list">
                {/* Coach Card */}
                <div id="coach-card">
                    <img src={clubData.coach.image} alt={clubData.coach.name} />
                    <h3>{clubData.coach.name}</h3>
                    <p>Position: Head Coach</p>
                </div>

                {/* Player Cards */}
                {clubData.players.map((player, index) => (
                    <div className="player-card" key={index}>
                        <img src={player.image} alt={player.name} />
                        <h3>{player.name}</h3>
                        <p>Position: {player.position}</p>
                        <p>Number: {player.number}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Member;
