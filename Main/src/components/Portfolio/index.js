import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'meal-crafter',
      description: 'HTML/CSS/JavaScript/APIs',
      link: "https://dubosews.github.io/Meal_Crafter/",
      repo: " https://github.com/dubosews/Meal_Crafter"
    },
    {
      name: 'weather-dashboard',
      description: 'JavaScript/API',
      link: "https://ebeltz.github.io/weather-dashboard-by-city/",
      repo: "https://github.com/ebeltz/weather-dashboard-by-city"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://ebeltz.github.io/run-buddy/",
      repo: "https://github.com/ebeltz/run-buddy"
    },
    {
      name: 'wine-share',
      description: 'Node.js/Handlebars/mySQL/Express.js',
      link: "https://wine-share.herokuapp.com/",
      repo: "https://github.com/acdodd17/wine-share/tree/main"
    },
    {
      name: 'talkie-box',
      description: 'MERN',
      link: "https://dashboard.heroku.com/apps/protected-forest-66303/deploy/heroku-git",
      repo: "https://github.com/wcastellan/talkie-box"
    },
    {
      name: 'note-taker',
      description: 'Express.js',
      link: "https://note-take-22.herokuapp.com/",
      repo: "https://github.com/ebeltz/dont-forget-note-taker"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
