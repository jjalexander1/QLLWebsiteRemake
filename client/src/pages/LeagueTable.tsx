import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define interfaces for League and Team
interface Team {
  position: number;
  team: string;
  played: number;
  won: number;
  lost: number;
  points: number;
}

interface League {
  league: string;
  table: Team[];
}

const LeagueTables: React.FC = () => {
  const [leagues, setLeagues] = useState<League[]>([]); // State to hold multiple leagues

  useEffect(() => {
    // Fetch the league data for multiple leagues from the backend API
    axios.get<League[]>('http://localhost:5000/api/leagues')
      .then((response) => {
        setLeagues(response.data); // Set the response data to the state
      })
      .catch((error) => {
        console.error('Error fetching league data:', error);
      });
  }, []);

  return (
    <div className="leagues-container">
      {leagues.map((league) => (
        <div className="table-container" key={league.league}>
          <h3>{league.league}</h3> {/* Display league name */}
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Played</th>
                <th>Won</th>
                <th>Lost</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {league.table.map((team) => (
                <tr key={team.position}>
                  <td>{team.position}</td>
                  <td>{team.team}</td>
                  <td>{team.played}</td>
                  <td>{team.won}</td>
                  <td>{team.lost}</td>
                  <td>{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default LeagueTables;
