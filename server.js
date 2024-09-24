const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

// Function to generate random league table data for a given league's teams
const generateRandomLeagueTable = (teams) => {
  return teams.map((team, index) => {
    const played = 10; // Fixed number of games played for all teams
    const won = Math.floor(Math.random() * played); // Random number of games won (0 to 10)
    const lost = played - won; // Games lost = total played - won
    const points = won * 3; // 3 points for each win
    
    return {
      position: index + 1,
      team: team,
      played: played,
      won: won,
      lost: lost,
      points: points
    };
  });
};

// List of teams for each league
const league1Teams = ['Team 1A', 'Team 1B', 'Team 1C', 'Team 1D', 'Team 1E', 'Team 1F', 'Team 1G', 'Team 1H', 'Team 1I', 'Team 1J'];
const league2Teams = ['Team 2A', 'Team 2B', 'Team 2C', 'Team 2D', 'Team 2E', 'Team 2F', 'Team 2G', 'Team 2H', 'Team 2I', 'Team 2J'];
const league3Teams = ['Team 3A', 'Team 3B', 'Team 3C', 'Team 3D', 'Team 3E', 'Team 3F', 'Team 3G', 'Team 3H', 'Team 3I', 'Team 3J'];

// API route to fetch data for 3 leagues with randomized points
app.get('/api/leagues', (req, res) => {
  // Generate league tables for each league
  const league1Table = generateRandomLeagueTable(league1Teams);
  const league2Table = generateRandomLeagueTable(league2Teams);
  const league3Table = generateRandomLeagueTable(league3Teams);

  // Return an array containing the tables for all three leagues
  const leagues = [
    { league: 'League 1', table: league1Table },
    { league: 'League 2', table: league2Table },
    { league: 'League 3', table: league3Table }
  ];

  res.json(leagues);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
