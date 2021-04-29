import React from "react";

import generateClassModifiers from "../../../utilities/generateClassModifiers" 


function SvgBackground ({isColorFliped, isWorkFinished}) {

  const isThemeFilped = isColorFliped===true && isWorkFinished===false
                      ? <svg width="100%" height="100%">
                          <defs>
                            <pattern id="pattern" width="13" height="13" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(133)">
                              <rect id="pattern-background" width="400%" height="400%" fill="rgba(0, 0, 0,1)"/>
                              <path fill="rgba(13, 181, 86,1)" d="M-10 30h60v11h-60zM-10-10h60v11h-60"/>
                              <path fill="rgba(0, 0, 0,1)" d="M-10 29h60v5h-60zM-10-11h60v5h-60z"/>
                            </pattern>
                          </defs>
                          <rect fill="url(#pattern)" height="100%" width="100%"/>
                        </svg>
                      : isColorFliped===false && isWorkFinished===false ? 
                        <svg width="100%" height="100%">
                          <defs>
                            <pattern id="pattern" width="13" height="13" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(133)">
                              <rect id="pattern-background" width="400%" height="400%" fill="rgba(0, 0, 0,1)"/>
                              <path fill="rgba(255, 40, 38,1)" d="M-10 30h60v11h-60zM-10-10h60v11h-60"/>
                              <path fill="rgba(0, 0, 0,1)" d="M-10 29h60v5h-60zM-10-11h60v5h-60z"/>
                            </pattern>
                          </defs>
                          <rect fill="url(#pattern)" height="100%" width="100%"/>
                        </svg>
                      : isColorFliped===true && isWorkFinished===true ? 
                        <svg width="100%" height="100%">
                          <defs>
                            <pattern id="pattern" width="13" height="13" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(133)">
                              <rect id="pattern-background" width="400%" height="400%" fill="rgba(0, 0, 0,1)"/>
                              <path fill="rgba(255, 40, 38,1)" d="M-10 30h60v11h-60zM-10-10h60v11h-60"/>
                              <path fill="rgba(0, 0, 0,1)" d="M-10 29h60v5h-60zM-10-11h60v5h-60z"/>
                            </pattern>
                          </defs>
                          <rect fill="url(#pattern)" height="100%" width="100%"/>
                        </svg>
                      : isColorFliped===false && isWorkFinished===true ?
                        <svg width="100%" height="100%">
                          <defs>
                            <pattern id="pattern" width="13" height="13" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(133)">
                              <rect id="pattern-background" width="400%" height="400%" fill="rgba(0, 0, 0,1)"/>
                              <path fill="rgba(13, 181, 86,1)" d="M-10 30h60v11h-60zM-10-10h60v11h-60"/>
                              <path fill="rgba(0, 0, 0,1)" d="M-10 29h60v5h-60zM-10-11h60v5h-60z"/>
                            </pattern>
                          </defs>
                          <rect fill="url(#pattern)" height="100%" width="100%"/>
                        </svg> 
                      : null
                      
  const overLay = generateClassModifiers(isColorFliped, isWorkFinished, "red-overlay--background-green", "red-overlay--background-red")
                     
  return (
    <> 
      {isThemeFilped}
      <div className={`red-overlay ${overLay}`}></div>
    </>
  )
} 

export default SvgBackground



