import React from "react";
import myphoto from "../assets/me.jpg"
import "../css/About.css";
import DraggableWindow from "../components/windowDrag.jsx";
import { Education, Skills, DA } from "../components/aboutlist.ts";

function About() {

  const EduTile = ({ education }) => {
    return (
      <div className="edu-info">
        <h3>{education.name}</h3>
        <h3>{education.degree}</h3>
        <h4>{education.speciality}</h4>
        <p>{education.description}</p>
      </div>
    );
  };

  const SkillTile = ({ skills }) => {
    return (
      <div className="tech-list" title={skills.name}>
        <img src={skills.icon} />
        <p>{skills.name}</p>
      </div>
    )
  }

  const Analytics = ({ da }) => {
    return (
      <div className="tech-list" title={da.name}>
        <img src={da.icon} />
        <p>{da.name}</p>
      </div>
    )
  }

  return (
    <DraggableWindow title="About me">
      <div className="about" style={{ height: '600px' }}>
        <div class="profile">
          <h2>About me</h2>
          <img src={myphoto} className="me" />
          <h3>Vera Bazarova</h3>
          <h4>Data Scientist, Analyst, Developer, Hobbyist Designer</h4>
          <hr />
          <p><b>Hi, I’m Vera!👋</b>  By day (and often night), I’m a data science newbie happily drowning in Python code, machine learning tutorials, and way too many open browser tabs. I love asking questions like "Wait, how does this AI thing actually work?" and "Can I make my model stop being dramatic?"
            When I’m not knee-deep in datasets, you’ll find me nerding out over: <br />
            <em>✨ AI breakthroughs (ChatGPT, explain yourself.) <br />
              ✨ Messy-but-fun coding projects (Spoiler: Debugging wins.) <br />
              ✨ Connecting with fellow learners (Let’s cry over validation curves together!)</em> <br />
            This blog is my no-judgment zone for sharing wins, fails, and "Ohhh, that’s why!" moments. Think of it like a coffee chat with a friend who’s just as obsessed with data as you are. ☕📊
          </p>
        </div>
        <div class="education">
          <h2>Education</h2>
          <div className="edu-list">
            {Education.map(education => (
              <EduTile key={education.id} education={education} />
            ))}
          </div>
          <div>
            <h2>Languages</h2>
            <span><b>English - B1</b></span><br />
            <span><b>German - A1</b></span><br />
            <span><b>Japanese - A1</b></span><br />
          </div>
        </div>
        <div class="Skills">
          <h2>Stack</h2>
          <h3>Data Analysis & Data Science</h3>
          <div className="tech-grid">
            {DA.map(da => (
              <Analytics key={da.id} da={da} />
            ))}
          </div>
          <h3>Other</h3>
          <div className="tech-grid">
            {Skills.map(skills => (
              <SkillTile key={skills.id} skills={skills} />
            ))}
          </div>

        </div>
      </div>
    </DraggableWindow>
  );
}

export default About;