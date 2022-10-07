import React from 'react'


export default function Menu() {
    return (
            <div className='menubar-pos'>
            
                <div className='menubar-el' id='menubar-el'>
                    <ul className='menubar-ul'>
                        <div className='space-holder'></div>
                        
                    
                        <li className='menubar-li'><a href=".hero-section">about me</a></li>
                        <li className='menubar-li'><a href="#skills_feature">skills</a></li>
                        <li className='menubar-li'><a href="#projects_feature">projects</a></li>
                        <li className='menubar-li'><a href="#footer_contact_me">contact</a></li>
                    
            
                        <li className='menubar-li'><button className='resume-btn' href="./data/images/resume_01.pdf" target="_blank" rel="noopener noreferrer">resume</button></li>
                    </ul>

                </div>
            </div>
    )
}