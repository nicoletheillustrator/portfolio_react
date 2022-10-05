import './main_css/main.scss'
import { createContext } from "react";
import React, { useState, useEffect } from "react";
import sun from "./data/images/sun-solid.svg"
import moon from "./data/images/moon-icon.svg"
import skillIcons from './data/skill-icons';
import data from './data/project-data';
import { Header, HeroSection, AboutSection, SkillCards, SkillSection, ProjectSection, ProjectCard, FooterSection, MouseOnMode} from './components';
import Loader from './components/loader';
export const ThemeContext = createContext(null);


// 👇 Sets localStorage
      const useLocalState = (key, defaultValue) => {
        const [value,setValue] = useState(
          () => {
            const storedValue = localStorage.getItem(key);
            return storedValue === null ? defaultValue : JSON.parse(storedValue)
          }
        )
          useEffect(()=> {
            const listener = (e) => {
              if (e.storageArea === localStorage && e.key === key) {
                setValue(JSON.parse(e.newValue))
              }
            }
            window.addEventListener("storage", listener)

            return () => {
              window.removeEventListener("storage", listener)
            }

          }, [key])

        const setValueInLocalSstorage = (newValue) => {
          setValue((currentValue) => {

            const result = typeof newValue === "function" ? newValue(currentValue) : newValue
            localStorage.setItem(key, JSON.stringify(result))
            return result
          })
        }
        return[value, setValueInLocalSstorage]
      }



function App() {



//👇 these hooks are for the theme and emoticon which is going to local storage
  const [theme, setTheme] = useLocalState("theme", "light");
  const [mode, setMode] = useLocalState("mode", sun)  

//👇toggleMode is for changing the sun to moon during toggle theme//

function toggleMode() {
  setMode((setMode) => (setMode === sun ? moon : sun))
}
  const toggleTheme = () => {
  setTheme((curr) =>(curr === "light" ? "dark" : "light" ));
};

function rippleEffect() {
  const btnWrap = document.getElementById('wrap')

  let ripples = document.createElement('span');
  ripples.classList.add('ripple-span')
 btnWrap.appendChild(ripples);
  setTimeout(() => {
    ripples.remove()
  },950);
  
}
function handleClick(){
  toggleTheme()
  toggleMode()
  rippleEffect()
}

  function toggleSuggestion() {
    const tipSugg = document.getElementById('mouse-event')
    tipSugg.style.display = 'block'
    if (mode === sun)
    {
      tipSugg.textContent = 'Switch to dark'
    } else
    {
      tipSugg.textContent = 'Switch to light'
    }
  }
 //👇 toggleSuggestions are a component that hides and shows when hovered on, giving a tip to the user
function toggleSuggestionOff() {
  const tipSugg = document.getElementById('mouse-event')
    tipSugg.style.display = 'none'
    
}
function toggleMouseDown() {
  const tipSugg = document.getElementById('mouse-event')
    tipSugg.style.display = 'none'
}

const cards = skillIcons.map(item => {
  return (
    <SkillCards 
    
    
    skills={item} 
    key={item.id}
    
    />
  )
});
const proData = data.map(item => {
  return (
<ProjectCard 
  dta={item}
  key={item.id}          
/>
  )
});

//👇 No functions() beyond this point 👇 
  return (
   
    <div className="App" id={theme}>
      <Loader />
      <div id='overlay'></div> 
       <Header handleClick={handleClick} toggleSuggestion={toggleSuggestion} toggleSuggestionOff={toggleSuggestionOff} toggleMouseDown={toggleMouseDown} mode={mode}/>
       <MouseOnMode />
      <section className='page-section'>
        <HeroSection />
        <AboutSection />
        <SkillSection cards={cards}/>
        
     
        <ProjectSection projectcard={proData} />
      
        <FooterSection />
      </section>
    </div>
  );
}

export default App;