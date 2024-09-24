const express = require('express');
const app = express();
app.use(express.json());

// In-memory database
let teams = [
  { id: 1, name: 'Team A', points: 35, wins: 10, losses: 5, draws: 2 },
  { id: 2, name: 'Team B', points: 25, wins: 7, losses: 8, draws: 1 },
];

let matches = [
  { id: 1, homeTeam: 'Team A', awayTeam: 'Team B', homeScore: 2, awayScore: 1, date: '2024-09-20T15:00:00Z' },
];

// Get all teams
app.get('/api/teams', (req, res) => {
  res.json(teams);
});

// Get team details
app.get('/api/teams/:teamId', (req, res) => {
  const team = teams.find(t => t.id === parseInt(req.params.teamId));
  if (!team) return res.status(404).send('Team not found');
  res.json(team);
});

// Add a new team
app.post('/api/teams', (req, res) => {
  const newTeam = {
    id: teams.length + 1,
    name: req.body.name,
    points: 0,
    wins: 0,
    losses: 0,
    draws: 0
  };
  teams.push(newTeam);
  res.status(201).json(newTeam);
});

// Update team stats
app.put('/api/teams/:teamId', (req, res) => {
  const team = teams.find(t => t.id === parseInt(req.params.teamId));
  if (!team) return res.status(404).send('Team not found');

  team.points = req.body.points;
  team.wins = req.body.wins;
  team.losses = req.body.losses;
  team.draws = req.body.draws;
  res.json(team);
});

// Get match results
app.get('/api/matches/results', (req, res) => {
  res.json(matches);
});

// Get league standings
app.get('/api/standings', (req, res) => {
  const standings = teams.map((team, index) => ({
    position: index + 1,
    team: team.name,
    points: team.points,
    played: team.wins + team.losses + team.draws,
    won: team.wins,
    lost: team.losses
  }));
  res.json(standings);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
