// SCRIPT FOR MANUALLY INPUTTING DATA INTO THE DB


const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create a new database connection
const db = new sqlite3.Database(path.join(__dirname, 'league.db'), (err) => {
  if (err) {
    console.error('Error opening database ' + err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create tables
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS teams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    points INTEGER DEFAULT 0,
    wins INTEGER DEFAULT 0,
    losses INTEGER DEFAULT 0,
    draws INTEGER DEFAULT 0
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS matches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    homeTeam TEXT NOT NULL,
    awayTeam TEXT NOT NULL,
    homeScore INTEGER,
    awayScore INTEGER,
    date TEXT NOT NULL
  )`);

  // Insert initial data if needed
  const teams = [
    { name: 'Team A' },
    { name: 'Team B' },
  ];

  const stmt = db.prepare(`INSERT INTO teams (name) VALUES (?)`);
  for (const team of teams) {
    stmt.run(team.name);
  }
  stmt.finalize();
});

// Close the database connection when the script ends
process.on('exit', () => {
  db.close();
});

module.exports = db;
