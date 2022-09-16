import React from "react";
import contactbtns from "../data/contact-icons"


export default function FooterSection() {
    
    const renderList = contactbtns.map((item) =>
<li key={item.id}><a href={item.linkTo} className={item.iconClass}> </a></li>
    );

    return(
        <section id="footer_contact_me" className="footer-section">
            <p className="footer-name">i'm Nicole Park</p>

            <p className="footer-headline"> let's get in touch</p>

            <div className="footer-btn-wrapper"><button 
            className="footer-btn">/contact me</button>
            
            </div>
<div className="icon-wrapper">
    
                <ul className="icon-ul">
                    {renderList}
                </ul>
</div>
<div className="email-wrapper">
        <a href="nicole-park@naver.com">nicole-park@naver.com</a>
</div>
<p id="footer-ending">designed and built by Nicole Park</p>
        </section>
    )
}