import React from "react";

import numberToString from "../../../utilities/numbertoString"
import generateClassModifiers from "../../../utilities/generateClassModifiers" 


function Timer ({minutes, seconds, isColorFliped, isWorkFinished}) {
  const isThemeFliped = generateClassModifiers(isColorFliped, isWorkFinished, "timer--border-green", "timer--border-red")
  const sessionTitle = generateClassModifiers(isColorFliped, isWorkFinished, "session-title--font-green", "session-title--font-red")
  const timerTitle = generateClassModifiers(isColorFliped, isWorkFinished, "timer-title--font-green", "timer-title--font-red")

  return (
    <div className={`timer ${isThemeFliped}`}>
      <h2 className={`session-title ${sessionTitle}`}>{isWorkFinished ? "BREAK SESSION" : "WORK SESSION"}</h2>
      <h1 className={`timer-title ${timerTitle}`}>{numberToString(minutes)}:{numberToString(seconds)}</h1>
    </div>
  )
} 

export default Timer