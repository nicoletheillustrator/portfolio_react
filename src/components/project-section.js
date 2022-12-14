import React from "react";

export default function ProjectSection(props) {
    return(
        <section id='projects_feature' className="project-section">
            <h1 id='project-headline'>/the projects</h1>
            <p id='project-headline-descript'><span className="bold">Take a look at what I've done so far!</span> Being a self-learned developer, I try to improve my skills by learning on my own and coding to things that interest me, to keep enthusiasm as I code. Enjoying the ongoing journey.</p>

           <div className="project-grid">{props.projectcard}</div>
        </section>
    )
}