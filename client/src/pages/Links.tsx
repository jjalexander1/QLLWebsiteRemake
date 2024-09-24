import React from 'react';

const Links: React.FC = () => {
  return (
    <div className="links-container">
      <h1>Useful Links</h1>

      <section>
        <h2>Code of Practice</h2>
        <ul>
          <li>
            <a href="/path/to/CodeOfPractice.pdf" target="_blank" rel="noopener noreferrer">
              Code of Practice (PDF)
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Rules</h2>
        <ul>
          <li>
            <a href="/path/to/TeamQuizRules.pdf" target="_blank" rel="noopener noreferrer">
              Team Quiz Rules (PDF)
            </a>
          </li>
          <li>
            <a href="/path/to/IndividualQuizRules.pdf" target="_blank" rel="noopener noreferrer">
              Individual Quiz Rules (PDF)
            </a>
          </li>
          <li>
            <a href="/path/to/BuzzerQuizRules.pdf" target="_blank" rel="noopener noreferrer">
              Buzzer Quiz Rules (PDF)
            </a>
          </li>
          <li>
            <a href="/path/to/OtherQuizRules.pdf" target="_blank" rel="noopener noreferrer">
              Other Quiz Rules (PDF)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Links;