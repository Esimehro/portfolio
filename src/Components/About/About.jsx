import React from "react";
import about from './About.module.css';

function About() {
  return (
    <div id="aboutme" className={about.aboutMeContainer}>
      <div className={about.aboutMeContent}>
        <div className={about.aboutMeHeader}>
          <h2>About Me</h2>
          <p>
As a detail-oriented frontend developer with over 3 years of experience, I specialize in crafting scalable web applications using React, TypeScript, and modern CSS frameworks. My expertise spans component architecture, state management, API integration, and responsive design, with a strong focus on writing maintainable code and building accessible, high-performance user experiences.          </p>
          <p>
My focus is on developing engaging digital experiences that merge aesthetic appeal with functional excellence. Leveraging expertise in frontend technologies and user-centered design principles, I create intuitive interfaces that drive user engagement. I'm eager to partner with visionary teams to redefine what's possible in web development.</p>
        </div>
      </div>
    </div>
  );
}

export default About;