import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2>About The Quiz League of London</h2>
        <p>
          The Quiz League of London ('QLL') is an independent, self-administered quiz league. Our purpose is to promote and oversee quiz competitions on behalf of our member teams. You'll find the Constitution of the QLL <a href="/path/to/constitution.pdf" target="_blank" rel="noopener noreferrer">here</a> and find details of our Committee <a href="/path/to/committee.pdf" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
        <p>
          Our main competition is a League Championship played on Tuesday evenings from late September through to the spring. Although league matches normally take place in a pub, and many participants also take part in pub quizzes, league matches are different from pub quizzes. League matches are between two teams of four players. Quizzes consist of 64 questions played over eight rounds, with each player asked a question in turn in each round. A player can answer their own question for two points or pass to a teammate for one point. An incorrect answer results in the question being offered to the opposing team for one point. The full rules can be found <a href="/path/to/rules.pdf" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
        <p>
          We also have team knock-out Cup and Plate competitions, played in the spring, a team Summer Friendly League, and individual and other team competitions. In addition, we run a number of other events each year – a Charity Quiz, the London Open Quiz Festival and a Summer Social. Details of all our competitions and events are <a href="/path/to/events.pdf" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
        <p>
          New players and teams for the League are always very welcome! We think you'll find QLL matches to be one of the most exciting forms of quiz available, meet new and interesting people, and learn a lot. If you would like to join the QLL, please complete the form <a href="/join" target="_blank" rel="noopener noreferrer">here</a> and we’ll get back to you.
        </p>
      </section>

      <section className="history-section">
        <h2>History</h2>
        <p>
          The QLL was formed in 1990 as the South London Quiz League (SLQL). The founding father of the League, who remains our Honorary Life President, was Donald Yule. Donald had previously been a stalwart of the Warrington Quiz League and wanted to play the same format in London.
        </p>
        <p>
          Donald founded the SLQL with Brian Evans and Barry Scott, and the league began in the 1990-91 season when four teams did battle, with Manor Arms (based at the pub of that name in Clapham) winning the title. Other teams included Manor Colts, also based at the Manor Arms, the Jimmy Hill Club (who continued as Jay H Seedy, Accrington Cylindricals, and finally Accies until the 2019-20 season, when they disbanded due to the lockdown), and Old Grammarians. The next six seasons saw Manor Colts, renamed as Manor Athletic, dominate, winning four league titles and running-up twice more. They remain in the league today, having become Atletico Manor and finally, since 2003-04, Atletico.
        </p>
        {/* Additional history text can be added here as needed */}
        <p>
          For more historical details, see our <a href="/path/to/history.pdf" target="_blank" rel="noopener noreferrer">History Document</a>.
        </p>
      </section>
    </div>
  );
};

export default About;
