import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h2>Welcome to the League Table App</h2>
      <p>
        This app provides a real-time display of the current standings in the league, 
        with randomly generated results for each team. You can navigate to the "League Table" 
        page to view the latest rankings and results.
      </p>
    </div>
  );
};

export default Home;