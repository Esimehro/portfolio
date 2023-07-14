import React from "react";
import about from './About.module.css';

function About (){
  return (
    <div id="about" className={about.aboutMeContainer}>
      <div className={about.aboutMeHeader}>
        <h2>About Me</h2>
        <p>
        I am a passionate and detail-oriented frontend developer. I focus on building captivating websites that engage users. With an eye for aesthetics, expertise in front-end technologies, and a commitment to provide seamless user experiences, I strive to build intuitive designs that captivate and engage users. I am Seeking an internship opportunity, I am also ready to collaborate, learn, and contribute to a team that shares a vision for pushing the boundaries of web development. 
        </p>
      </div>

      <div className={about.aboutMeBody}>
        <div className={about.aboutMeBodyBlock}>
          <h4>Education</h4>
          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span> 2017-2018
            </p>
            <h4>Delta State University, Abraka, Nigeria.</h4>
            <p className={about.aboutMeText}>
              Bachelor of Science (Education) in Chemistry.
            </p>
          </div>
        </div>

        <div className={about.aboutMeBodyBlock}>
          <h4>Experience</h4>
          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span> November 2022-Present
            </p>
            <h4>Stutern Graduate Accelerator</h4>
            <p className={about.aboutMeText}>
            Mentorship to foster continuous growth in frontend web development encompassing HTML, CSS, JavaScript, Bootstrap, React.js, and database integration. Additionally, emphasized collaborative practices with backend developers, data analysts, and designers to create cohesive and efficient solutions that meet industry standards and user expectations.
            </p>
          </div>

          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span> September 2022 - November 2022
            </p>
            <h4>Prestige Coding Mentorship</h4>
            <p className={about.aboutMeText}>
            Trained young software developers transitioning into Tech. Achieved 60% students performance improvement on Html, CSS and JavaScript.
            </p>
          </div>

          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span> January 2022 - August 2022
            </p>
            <h4>Red Plus Pharmacy Limited</h4>
            <p className={about.aboutMeText}>
              Established and implemented internal controls, and administrative systems, policies and procedures to ensure that the firm’s day to day operational activities are effective. Monitored products displayed on shelves, and as well as the general appearance of the pharmacy.            
            </p>
          </div>

          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span> September 2021 - January 2022
            </p>
            <h4>Swivel Codes Limited</h4>
            <p className={about.aboutMeText}>
            Handled the overall financial management, budgeting and monitoring of project expenditures. Implement internal controls, and administrative systems, policies and procedures to ensure that the firm’s day to day operational activities are effective.           
            </p>
          </div>

          <div className={about.aboutMeBodyText}>
            <p className={about.aboutMeDates}>
              <span></span> November 2020 - September 2021
            </p>
            <h4>Scillafield Solutions Limited</h4>
            <p className={about.aboutMeText}>
            Worked closely with associates to analyze, plan and develop requirements and standards in reference to scheduled projects. Set up regular technical team meetings to determine progress and address any questions or challenges regarding projects    
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
 export default About;