import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Download my <a href="https://github.com/ebeltz/react-portfolio/blob/main/Main/src/assets/Elizabeth%20Beltz%20Resume.pdf">resume</a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Handlebars</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
          <li>MERN</li>
          <li>Inquirer</li>
          <li>NoSQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
