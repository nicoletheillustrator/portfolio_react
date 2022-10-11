import React from 'react'


const Menu = React.forwardRef((props, ref) => (

            <div className='menubar-pos'>
            
                <div className='menubar-el' ref={ref} id='menubar-el'>
                    <ul className='menubar-ul'>
                        <div className='space-holder'></div>
                        
                    
                        <a className='menubar-li' href="#hero-section">about me</a>
                        <a className='menubar-li' href="#skills_feature">skills</a>
                       <a className='menubar-li' href="#projects_feature">projects</a>
                       <a  className='menubar-li' href="#footer_contact_me">contact</a>
            
                        <li className='menubar-li'><a className='resume-btn' href="resume_01.pdf" target="_blank" rel="noopener noreferrer">resume</a></li>
                    </ul>

                </div>
            </div>
    ));

export default Menu;