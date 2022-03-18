import React from 'react';
import avatar from '../../assets/avatar.jpg';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img style={{ maxWidth: "150px" }} src={avatar} alt="picture of myself"></img>
        </div>
        <p>
        Hello! Welcome to my portfolio! I graduated from Lehigh University with a degree in English and a double minor in Graphic Design and Supply Chain Management. Most of my work that you see below was created during a Coding Bootcamp that I took through the University of North Carolina - Chapel Hill. I learned all types of coding through this class like HTML, CSS, JavaScript, React, Node, MySQL, etc.
        </p>
        <p>
        The projects you see under portfolio are what I believe are my best projects that I have done so far and showcase what I am able to do. This website also showcases a wide variety of coding languages that I know how to use. If you have any questions about the projects that I have done, my contact information is at the bottom of my website. Also, if you want to see any other projects that I have done, you can check out my GitHub page.
        </p>
      </div>
    </section>
  );
}

export default About;
