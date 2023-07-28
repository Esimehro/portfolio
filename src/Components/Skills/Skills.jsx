import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import skill from "./Skills.module.css";

function Skills () {
  return (
    <div id="skill" className={skill.skillContainer}>
      <h2>My Skills</h2>
      <div className={skill.container}>
        <div className={skill.mainSkillContainer}>
          <h3>Technical Skills</h3>
          <div className={skill.skillBlock}>
          <div>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck  className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Html5, CSS3</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon} />
              <div className={skill.mySkills}>
                <h3>JavaScript</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck  className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>React</h3>
                <p>Experienced</p>
              </div>
            </div>
         </div>

         <div>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon} />
              <div className={skill.mySkills}>
                <h3>GIT</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck  className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>SASS</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck  className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Bootstrap</h3>
                <p>Experienced</p>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className={skill.mainSkillContainer}>
          <h3>Soft Skills</h3>
          <div className={skill.skillBlock}>
          <div>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Communication</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Leadership</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Attention to detail</h3>
                <p>Experienced</p>
              </div>
            </div>
         </div>

         <div>
            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Time Management</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Team player</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className={skill.mySkillsContainer}>
              <BsPatchCheck className={skill.icon}/>
              <div className={skill.mySkills}>
                <h3>Problem Solving</h3>
                <p>Experienced</p>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};
export default Skills;