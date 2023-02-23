import React from "react";

export default function ProjectCard(props) {

let tech = props.dta.projectTech
let className = "fa-solid fa-window-maximize";
let techList = tech.map((item, index)=> 
<li className="tech-li" key={index}>{item} </li>);

if (props.dta.projectLink === undefined) {
    className = "";
}
 return(
    
           
                <div className="project-card-view-box">
                            <p className="feature-p">Featured Project</p>
                        <p className="project-card-name">{props.dta.projectName}</p>
                        <p className="project-card-descript">{props.dta.projectDescription}</p>
                        <ul className="tech-ul">{techList}</ul>
                            <div className="project-icons">
                                <a
                                    className="giticon" target="_blank" href={props.dta.projectHref} rel="noreferrer"> <i className="fa-brands fa-github giticon"></i></a>
                                    <a
                                    className="giticon" target="_blank" href={props.dta.projectLink} rel="noreferrer"><i className={className}></i></a>
                            </div>

                        </div>
    )
}