import React from "react";

export default function ProjectCard(props) {

let tech = props.dta.projectTech
let techList = tech.map((item, index)=> 
<li className="tech-li" key={index}>{item} </li>
)

    return(
    
           
                <div className="project-card-view-box">
                            <p className="feature-p">Featured Project</p>
                        <p className="project-card-name">{props.dta.projectName}</p>
                        <p className="project-card-descript">{props.dta.projectDescription}</p>
                        <ul className="tech-ul">{techList}</ul>
                        <i className="fa-brands fa-github giticon"> <a
                        className="giticon" target="_blank" href={props.dta.projectHref} rel="noreferrer" > </a></i>

<div className="project-img"></div>
                        </div>
                     
            
    )
}