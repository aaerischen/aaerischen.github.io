import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useParams, Link } from "react-router-dom";
import { ReactDOM } from "react-dom";
import { Project } from "../components/ProjectList.ts";
import { getResource } from "../components/ProjectList.ts";
import { Frame } from "../components/frameContent.jsx"

export const ProjectPath = (type) => `/ProjectPage/${type}`;

export const ProjectTile = ({ project }) => {
    return (
        <Link to={`/projects/${project.id}`}>
            <button className="project-tile">
                <img src={project.icon} alt={project.name} className="project-icon" />
                <span className="project-name" > {project.name} </span>
            </button>
        </Link>
    );
};

export const ProjectInfo = () => {
    const { id } = useParams(); // Получаем id из URL
    const project = Project.find((p) => p.id === Number(id));
    if (!project) return <div>Проект не найден!</div>;
    return (
        <div>
            <h3>Project name: {project.name}</h3>
            <p>Placeholder xdxd</p>
        </div>
    )
}

export const ProjectPage = () => {
    const { id } = useParams(); // Получаем id из URL
    const project = Project.find((p) => p.id === Number(id));
    if (!project) return <div>Проект не найден!</div>;

    return (
        <div className="project-page">
            <h1>Project page</h1>
            {Project.map(project => (
                <ProjectInfo key={Project.id} project={project} />
            ))}
        </div>
    )
};

export const ContentPage = () => {
    <div>
        <Link to={`/projects/${Project.id}`}>
            <div className="project-grid">
                {Project.map(project => (
                    <ProjectTile key={project.id} project={project} />
                ))}
            </div>
        </Link>
        <Routes>
            <Route path="/projects" element={<ProjectTile />}>
                <Route path="/projects/:id" element={<ProjectPage />} />
            </Route>
        </Routes>
    </div>
}
