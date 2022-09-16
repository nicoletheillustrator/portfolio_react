import React from "react";
import { createContext } from "react";
export const ThemeContext = createContext(null);


export default function Icon(props) {
    return (
         <div className="mode-wrapper" onClick={props.handleClick} onMouseOut={props.toggleSuggestionOff} onMouseDown={props.toggleMouseDown} >
         <img  className="mode-icon" src={props.mode} alt="theme icon" onMouseEnter={props.toggleSuggestion}></img>
          <div id='wrap' ></div>
            </div>
    )
}