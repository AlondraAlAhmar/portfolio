import React from "react";
import './skills.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import java from '../../assets/java.png';
import git from '../../assets/git.png';
import react from '../../assets/react.png';
import sql from '../../assets/sql.png';
import php from '../../assets/php.png';
import c from '../../assets/c.png';

const Skills = () => {
  return (
   <section id="skillsSection">
    <div>
        <ul className="list">
            <li>Proficient in HTML, CSS, and JavaScript to build intuitive user interfaces.</li>
            <li>Familiarity with popular frameworks such as React.js for building dynamic and efficient web applications.</li>
            <li>Experienced in using Git for collaborative and version-controlled development.</li>
            <li>Ability to create websites that work seamlessly across various devices and screen sizes.</li>
            <li>Understanding how to integrate and consume APIs for data retrieval.</li>
            <li>Developed and maintained server-side logic using PHP, contributing to the functionality of dynamic web applications.</li>
            <li>Implemented and optimized SQL queries for efficient database interactions and data retrieval.</li>
            <li>Effective communication, problem-solving, attention to detail, and a willingness to learn and adapt to new technologies.</li>
        </ul>
    </div>
   <div className="skills">
    <img src={html} alt='' className='skillsImg'/>
    <img src={css} alt='' className='skillsImg'  />
    <img src={js} alt='' className='skillsImg' />
    
    <img src={java} alt='' className='skillsImg' />
    <img src={git} alt='' className='skillsImg'  />
    <img src={c} alt='' className='skillsImg' />

    <img src={php} alt='' className='skillsImg' />
    <img src={react} alt='' className='skillsImg' /> 
    <img src={sql} alt='' className='skillsImg' />
    
    </div>
   </section>
  );
}

export default Skills;