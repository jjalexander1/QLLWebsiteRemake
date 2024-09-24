import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the structure of the article data
interface Article {
  id: number;
  title: string;
  body: string;
  publishedAt: string;
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Fetch the articles from the Strapi API
    axios.get('http://localhost:1337/api/articles')
      .then((response) => {
        setArticles(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <small>{new Date(article.publishedAt).toDateString()}</small>
        </div>
      ))}
    </div>
  );
};

export default Articles;
