import React from "react";

export default function SkillCards(props) {
    return (
        
                <div className="skill-card">
                    <div id="icon-skill" className={props.skills.iconClass}></div>
                    <p className="skill-name">{props.skills.skillName}</p>
                </div>
           
    )
}