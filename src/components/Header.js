import React, {useState} from 'react'
import Icon from  '../components/theme_icon.js'
import Menu from './menu.js'


export default function Header(props) {
    

    // need to switch between burger and close
    const barmenu = "fa-solid fa-bars"
    const closemenu = "fa-solid fa-xmark"

    const [menuIcon, setMenuIcon] = useState(barmenu)
    const menuref = React.useRef()
    
    
    
    
    function toggleMenuIcon() {
  //toggles slide menu
  
  menuref.current.classList.toggle("is-active")
//toggles blur overlay filter
        const overlayFilter = document.querySelector('#overlay')
    overlayFilter.classList.toggle("is-active")

        setMenuIcon((setMenuIcon) => (setMenuIcon === barmenu ? closemenu : barmenu))
        const menuBtnClose = document.querySelector("#menu-btn")
        menuBtnClose.classList.toggle("colorchange")
    }
//scroll event for hide and show menu bar/navbar 
    const body = document.body
    let lastScroll = 0;

    window.addEventListener('scroll', () => {

        const menuBtn = document.querySelector('.menubar-el') 
        const currentScroll = window.pageYOffset
        
        if (currentScroll <= 0) {
            body.classList.remove("scroll-up")
        }
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up")
            body.classList.add("scroll-down")
        }
        if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-down")
            body.classList.add("scroll-up")
        }
        lastScroll = currentScroll
//event for on scroll hiding menubar-vertical

        if (currentScroll) {
            menuBtn.classList.remove("is-active")
            const overlayFilter = document.querySelector('#overlay')
            overlayFilter.classList.remove("is-active")
            //deals with the menubtn style and color change. 
            setMenuIcon((setMenuIcon) => (setMenuIcon = barmenu))
            const menuBtnClose = document.querySelector("#menu-btn")
            menuBtnClose.classList.remove("colorchange")

        }

    })



    return (
        
            
            <nav className='header'>
                <div className='not-perm'>
                    
                    <p className='logo_name'>nicole park</p>
                    <Icon handleClick={props.handleClick} toggleSuggestion={props.toggleSuggestion} toggleSuggestionOff={props.toggleSuggestionOff} toggleMouseDown={props.toggleMouseDown} mode={props.mode} />
                
                </div>

                <div id='menu-btn'><i className={menuIcon} id='menu-btn-selector'  onClick={toggleMenuIcon}></i></div>
                <Menu ref={menuref}/>
            
            </nav>
        
    )
}

