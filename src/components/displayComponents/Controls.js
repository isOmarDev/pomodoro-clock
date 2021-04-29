import React, {useContext} from "react";
import {Context} from "../../Context"

import SvgBackground from "./controlsSubComponents/SvgBackground"
import Timer from "./controlsSubComponents/Timer" 
import Buttons from "./controlsSubComponents/Buttons"
import generateClassModifiers from "../../utilities/generateClassModifiers" 

function Controls () {
  const {setWorkLength,
         setBreakLength,
         minutes,
         setMinutes,
         seconds,
         setSeconds,
         isOn, 
         setIsOn,
         isColorFliped,
         isWorkFinished,
         setIsWorkFinished, 
         handlePlay, 
         handleReset} = useContext(Context)
   
  const isThemeFliped = generateClassModifiers(isColorFliped, isWorkFinished, "controls-and-timer--border-green", "controls-and-timer--border-red")
  
  return (
    <div className={`controls-and-timer ${isThemeFliped}`}>
      <SvgBackground isColorFliped={isColorFliped} isWorkFinished={isWorkFinished} />
      <Buttons setWorkLength={setWorkLength}  
               setBreakLength={setBreakLength}
               setMinutes={setMinutes}  
               setSeconds={setSeconds}
               isOn={isOn} 
               setIsOn={setIsOn} 
               isColorFliped={isColorFliped}
               isWorkFinished={isWorkFinished}
               setIsWorkFinished={setIsWorkFinished} 
               handlePlay={handlePlay} 
               handleReset={handleReset} />
      <Timer minutes={minutes} seconds={seconds} isColorFliped={isColorFliped} isWorkFinished={isWorkFinished} />
    </div> 
  )
} 

export default Controls

















