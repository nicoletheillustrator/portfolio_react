import React, { useEffect } from 'react';

export default function Loader() {


    const pageRef = React.useRef()
    const wolfref = React.useRef()
    const ref1 = React.useRef()
    const ref2 = React.useRef()
    const ref3 = React.useRef()
    // until a better solution comes aka more education. what works, works.
      useEffect(() => {
        setTimeout(
            function(){
           pageRef.current.style.display = "none";
        }, "4000")
      
      }, [pageRef]);
    
    return (
        <div id="loader-wrap" ref={pageRef} >
        <svg className="loader-wolf" ref={wolfref} viewBox="0 0 91 105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_233_8)">
            <path className="path-a" ref={ref1} d="M45.2601 24.2701L35.3801 23.9301L10.1401 1.08008L7.75009 46.4401L0.590088 69.3001L29.5801 89.4201L32.3101 100.2L45.2601 103.75L58.2001 100.2L60.9301 89.4201L89.9201 69.3001L82.7601 46.4401L80.3701 1.08008L55.1301 23.9301L45.2601 24.2701Z"/>
            <path className="path-b" ref={ref3}  d="M74.39 38.8001L77.12 27.8901L75.76 13.3301L63.48 26.0701L74.39 38.8001Z"/>
            <path className="path-c" ref={ref2}  d="M15.26 38.0501L12.53 27.1401L13.89 12.5901L26.18 25.3201L15.26 38.0501Z"/>
            </g>
            </svg>
        </div>
    )
    
    }
