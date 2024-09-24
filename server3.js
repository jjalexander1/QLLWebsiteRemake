const express = require('express');
const db = require('./database'); // Import the database connection
const app = express();
app.use(express.json());

// Get all teams
app.get('/api/teams', (req, res) => {
  db.all('SELECT * FROM teams', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Get team details
app.get('/api/teams/:teamId', (req, res) => {
  const id = req.params.teamId;
  db.get('SELECT * FROM teams WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) return res.status(404).send('Team not found');
    res.json(row);
  });
});

// Add a new team
app.post('/api/teams', (req, res) => {
  const { name } = req.body;
  db.run('INSERT INTO teams (name) VALUES (?)', [name], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, name });
  });
});

// Update team stats
app.put('/api/teams/:teamId', (req, res) => {
  const { points, wins, losses, draws } = req.body;
  const id = req.params.teamId;
  db.run(
    'UPDATE teams SET points = ?, wins = ?, losses = ?, draws = ? WHERE id = ?',
    [points, wins, losses, draws, id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id, points, wins, losses, draws });
    }
  );
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
