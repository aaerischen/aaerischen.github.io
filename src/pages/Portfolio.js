import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import DraggableWindow from "../components/windowDrag.jsx";
import "../css/Portfolio.css";
import "@react95/core/themes/win95.css";
import "@react95/core/GlobalStyle";
import { Project } from "../components/ProjectList.ts";
import Arrow from "../assets/arrow.png";
import Arrow1 from "../assets/arrow1.png";
import Folder from "../assets/folder.png";
import Refresh from "../assets/refresh.png";
function Portfolio() {
  const Location = useLocation();
  const { id } = useParams();

  const ProjectTile = ({ project }) => {
    return (
      <Link to={`/project/${project.id}`}>
        <button className="project-tile">
          <img src={project.icon} alt={project.name} className="project-icon" />
          <span className="project-name" > {project.name} </span>
        </button>
      </Link>
    );
  };

  function ProjectPage() {
    const { id } = useParams(); // Получаем id из URL
    const project = Project.find((p) => p.id === Number(id));
    if (!project) return <div>Проект не найден!</div>;

    return (
      <div className="project-page">
        <span className="project-title" > {project.name} </span>
        <img src={project.icon} alt={project.name} className="project-pic" />
        <p>{project.description}</p>
        <a href={project.link} target="_blank">Source code</a>
      </div>
    )
  };

  return (
    <div>
      <DraggableWindow title="Portfolio">
        
        <div className="path">
          <Link to="/" title="Back"><img className="back" src={Arrow} /></Link>
          <Link title="Forward"><img className="forward" src={Arrow1} /></Link>
          <div className="textfield"><p className="adress">{Location.pathname}</p></div>
          
        </div>
        {Location.pathname === "/" && (
          <div className="project-grid">
            {Project.map(project => (
              <Link to={`/${Project.id}`}>
                <ProjectTile key={project.id} project={project} />
              </Link>
            ))}
          </div>
        )}
        {id && <ProjectPage project={Project.find(p => p.id === id)} />}
      </DraggableWindow>
    </div>

  );
}

export default Portfolio;