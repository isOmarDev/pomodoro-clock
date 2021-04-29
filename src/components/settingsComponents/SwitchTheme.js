import React, {useContext} from "react";
import {Context} from "../../Context"

function SwitchTheme ({toggleSettings}) {
  const {isOn, isColorFliped, setIsColorFliped, handleFlipColor} = useContext(Context)

  const isthemeFliped = isColorFliped ? "switch-theme--background-green" 
                                      : "switch-theme--background-red"
  const isSettingsToggled = toggleSettings ? `switch-theme ${isthemeFliped} switch-theme--fadein` 
                                           : `switch-theme ${isthemeFliped} switch-theme--fadeout`
 
  return (
    <div className={isSettingsToggled} onClick={()=>handleFlipColor(isOn, isColorFliped, setIsColorFliped)}>
      <div className="switch-theme-icon">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4OC40NyA0ODguNDciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI0NC4yMzUgMHMtMTgzLjE3NyAxNzQuNDU0LTE4My4xNzcgMzE0LjAxNmMwIDk2LjM0NyA4Mi4wMTEgMTc0LjQ1NCAxODMuMTc3IDE3NC40NTRzMTgzLjE3Ny03OC4xMDcgMTgzLjE3Ny0xNzQuNDU0YzAtMTM5LjU2Mi0xODMuMTc3LTMxNC4wMTYtMTgzLjE3Ny0zMTQuMDE2em0tMTIyLjExNyAzMTUuMDc2YzAtNjQuOTE4IDYzLjk4MS0xNTcuOTUyIDEyMi4xMTgtMjIzLjQ4OHYzMzUuODI0Yy02Ny4zMzYtLjAwMS0xMjIuMTE4LTUwLjM4OC0xMjIuMTE4LTExMi4zMzZ6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />      </div>
      <p>FLIP COLORS</p>
    </div>
  )
} 

export default SwitchTheme