import React, {useState} from 'react'
import Icon from  '../components/theme_icon.js'
import Menu from './menu.js'


export default function Header(props) {
    
function toggleMenu() {
    //toggles slide menu
    const menuBtn = document.querySelector('.menubar-el') 
    menuBtn.classList.toggle("is-active")
    //toggles blur overlay filter
    const overlayFilter = document.querySelector('#overlay')
    overlayFilter.classList.toggle("is-active")

    toggleMenuIcon()

    }

    // need to switch between burger and close
    const barmenu = "fa-solid fa-bars"
    const closemenu = "fa-solid fa-xmark"
    const [menuIcon, setMenuIcon] = useState(barmenu)

    function toggleMenuIcon() {
        setMenuIcon((setMenuIcon) => (setMenuIcon === closemenu ? barmenu : closemenu))
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

//mouseup event for clicking outside div
    document.addEventListener('mouseup', function(e) {
        const container = document.getElementById('menubar-el');
        const overlayFilter = document.querySelector('#overlay');
        setMenuIcon((setMenuIcon) => (setMenuIcon = barmenu))
            const menuBtnClose = document.querySelector("#menu-btn")
       
            if (overlayFilter.contains(e.target)) {
            //menupanel removed
            container.classList.remove("is-active")
            //blur filter removed
            overlayFilter.classList.remove("is-active")
            //color change for toggle button removed 
            menuBtnClose.classList.remove("colorchange")

        }
    });

    return (
        
            
            <nav className='header'>
                <div className='not-perm'>
                    
                    <p className='logo_name'>nicole park</p>
                    <Icon handleClick={props.handleClick} toggleSuggestion={props.toggleSuggestion} toggleSuggestionOff={props.toggleSuggestionOff} toggleMouseDown={props.toggleMouseDown} mode={props.mode} />
                
                </div>

                <div id='menu-btn' onClick={toggleMenu}><i className={menuIcon} id='menu-btn-selector'></i></div>
                <Menu toggleMenu={toggleMenu} menuIcon={menuIcon}/>
            
            </nav>
        
    )
}

