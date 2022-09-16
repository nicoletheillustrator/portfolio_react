import React from "react";
export default function SkillSection(props) {
    return(
        <section className="skill-section">
            <div className="skill-grid">{props.cards}</div>
        </section>
    )
}