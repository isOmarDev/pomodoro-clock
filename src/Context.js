import React, {useState, useEffect} from "react"
const Context = React.createContext()

import handlePlay from "./utilities/handlePlay"
import handleFlipColor from "./utilities/handleFlipColor"
import handleIncrement from "./utilities/handleIncrement"
import handleDecrement from "./utilities/handleDecrement"
import handleSettings from "./utilities/handleSettings"
import handleReset from "./utilities/handleReset"

function ContextProvider({children}) {
  const [workLength, setWorkLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5)
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const [isWorkFinished, setIsWorkFinished] = useState(false)
  const [isColorFliped, setIsColorFliped] = useState(false)

  // watches over worklength and set the mintues to the desired worklength
  useEffect(() => {
    setMinutes(workLength)
    setSeconds(0) // resets seconds when the timer is paused and user choose different work length 
  }, [workLength])

  // watchs over seconds to handle counted seconds, minutes and initiate breaklengh when work time comes to an end
  useEffect(() => {
    // when work timer reach 0 in sec and min and isworkfinished state is still false , 
    // stop timer, wait few secs then initiate break time and set isworkfinished to true and play the time again
    if(minutes===0 && seconds===0 && isWorkFinished===false) {
      setIsOn(false)
      setTimeout(() => {
        setMinutes(breakLength)
        setIsWorkFinished(true)
        setIsOn(true)
      }, 1000);
    // when work timer reach 0 in sec and min and isworkfinished state turns  true , 
    // stop timer and reset the timer to its initial state
    } else if(minutes===0 && seconds===0 && isWorkFinished){
      setIsOn(false)
      handleReset(setWorkLength, setBreakLength, setMinutes, setSeconds, setIsOn, setIsWorkFinished)
    // this handles the decrementation of minutes
    } else {
      setMinutes(prevMin => seconds===59 && prevMin!==0 ? prevMin - 1 
                          : prevMin)
    }
  }, [seconds])

  // watches over isOn(if the timer is on) , if true the interval decrements seconds,
  // and it cleans the interval on render
  useEffect(() => {
    let countDown 
    if(isOn) {
      countDown = setInterval(() => {
        setSeconds(prevSec => prevSec===0 && minutes!==0 ? 59 
                            : prevSec===0 && minutes===0 ? 0
                            : prevSec<=59 ? prevSec - 1
                            : prevSec)
      }, 1000);
    }
    return () => clearInterval(countDown)
  }, [isOn])

  handlePlay
  handleFlipColor
  handleIncrement
  handleDecrement
  handleSettings  
  handleReset

  return (
    <Context.Provider 
      value={{breakLength,
              setBreakLength,
              workLength,
              setWorkLength,
              minutes,
              setMinutes,
              seconds,
              setSeconds,
              isOn,
              setIsOn,
              isWorkFinished,
              setIsWorkFinished,
              isColorFliped, 
              setIsColorFliped,
              handlePlay,
              handleFlipColor,
              handleIncrement,
              handleDecrement,
              handleSettings,
              handleReset}}
    >
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}
