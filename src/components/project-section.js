import React from "react";

export default function ProjectSection(props) {
    return(
        <section id='projects_feature' className="project-section">
            <h1 id='project-headline'>/the projects</h1>
            <p id='project-headline-descript'><span className="bold">Take a look at what I've done so far!</span> As a self-learned developer, getting my hands dirty and just taking a go at websites I have in mind, that I would like to make, help me further my own education. </p>

           <div className="project-grid">{props.projectcard}</div>
        </section>
    )
}