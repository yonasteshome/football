import React, { useEffect, useState } from "react";
import "./standing.css"; // Ensure to link the new CSS file

const Scoreboard = () => {
    const [teams, setTeams] = useState([]);

    // Sample array for team data, you can replace this with actual data from an API
    const teamsData = [
        { id: 1, name: "APPLIED", played: 0, wins: 0, draws: 0, losses: 0, goalDifference: "0:0", points: 0 },
        { id: 2, name: "CIVIL", played: 0, wins: 0, draws: 0, losses: 0, goalDifference: "0:0", points: 0 },
        { id: 3, name: "CSE", played: 0, wins: 0, draws: 0, losses: 0, goalDifference: "0:0", points: 0 },
        { id: 4, name: "ECE", played: 0, wins: 0, draws: 0, losses: 0, goalDifference: "0:0", points: 0 },
        { id: 5, name: "EPCE", played: 0, wins: 0, draws: 0, losses: 0, goalDifference: "0:0", points: 0 },
        { id: 6, name: "MECH", played: 0, wins: 0, draws: 0, losses: 0, goalDifference: "0:0", points: 0 },
        { id: 7, name: "SWE", played: 0, wins: 0, draws: 0, losses: 0, goalDifference: "0:0", points: 0 },
        { id: 8, name: "WAR", played: 0, wins: 0, draws: 0, losses: 0, goalDifference: "0:0", points: 0 }
    ];

    // Uncomment and use this if you want to fetch data from an API
    // useEffect(() => {
    //     fetch('https://api.example.com/scoreboard')
    //         .then(response => response.json())
    //         .then(data => setTeams(data))
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    // Using sample data for now
    useEffect(() => {
        setTeams(teamsData);
    }, []);

    return (
        <div id="scoreboard" className="scoreboard-section active">
            <table className="scoreboard-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="scoreboard-team-name">Team</th>
                        <th>P</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>+/-</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={team.id}>
                            <td>{index + 1}</td>
                            <td className="scoreboard-team-name">{team.name}</td>
                            <td>{team.played}</td>
                            <td>{team.wins}</td>
                            <td>{team.draws}</td>
                            <td>{team.losses}</td>
                            <td>{team.goalDifference}</td>
                            <td>{team.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Scoreboard;
