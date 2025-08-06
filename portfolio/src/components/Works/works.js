// Works/works.js
import React from "react";
import "./works.css";
import textutilsImg from "../../assets/TextUtils.png";
import hrDashboardImg from "../../assets/hrdashboard.png";
import XOGame from "../../assets/XOGame.png"; 
import rideloop from "../../assets/rideloop.png";

const projects = [
  {
    title: "TextUtils Web Application",
    description:
      "A Django-based text editor that removes punctuation, capitalizes text, trims lines, and counts characters.",
    techStack: ["Django", "Python", "HTML", "CSS"],
    image: textutilsImg,
    codeLink: "https://github.com/Janhavibhamare/Text-Utils",
    showButton: true,
  },
  {
    title: "HR Analytics Dashboard",
    description:
      "Interactive dashboard created using Power BI to analyze workforce data like attrition rate and departmental performance.",
    techStack: ["Power BI", "Excel", "DAX"],
    image: hrDashboardImg,
    showButton: false,
  },
{
    title: "Tic-Tac-Toe Game (XOGame)",
    description:
      "A fun and interactive GUI-based XO game built using Python and Tkinter. Supports two-player mode and has a clean interface.",
    techStack: ["Python", "Tkinter"],
    image: XOGame,
    codeLink: "https://github.com/Janhavibhamare/XOGame",
    showButton: true,
  },
  {
  title: "RideLoop – Ride Sharing App",
  description:
    "Rideloop is a smart vehicle rental app that lets users quickly find, book, and unlock nearby vehicles through a simple and modern interface.",
  techStack: ["node.js", "PostgreSQL", "React.js", "JWT", "Tailwind"],
  image: rideloop,
  codeLink: "https://github.com/Janhavibhamare/ride-loop",
  showButton: false,         
  status: "in-progress",     // Custom field for badge
}
];

const Works = () => {
  return (
    <section className="works-section" id="portfolio">
      <h2 className="section-title">💼 My Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className={`project-card ${
              project.status === "in-progress" ? "in-progress" : ""
            }`}
            key={index}
          >
            {project.status === "in-progress" && (
              <span className="project-badge">🚧 In Progress</span>
            )}
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <p className="tech-used">🛠 {project.techStack.join(", ")}</p>
            {project.showButton && (
              <div className="buttons">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Code
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;