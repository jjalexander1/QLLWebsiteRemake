import React from 'react';
import Articles from '../components/Articles';

const News: React.FC = () => {
  return (
    <div className="news-container">
      <h2>News Page</h2>
      <Articles />
    </div>
  );
};

export default News;