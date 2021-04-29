import React, {useContext} from "react";
import {Context} from "../../Context"


import WorkIcrementDecrement from "./workAndBreakSubComponents/WorkIcrementDecrement";

function ChangeWorkTime ({toggleSettings}) {
  const {workLength, setWorkLength, setBreakLength, isOn, isColorFliped, handleIncrement, handleDecrement} = useContext(Context)
  
  const isthemeFliped = isColorFliped ? "work-interval--font-border-green" 
                                      : "work-interval--font-border-red"
  const isSettingsToggled = toggleSettings ? `work-interval ${isthemeFliped} work-interval--fadein`
                                           : `work-interval ${isthemeFliped} work-interval--fadeout`
  const workIcon = isColorFliped
                  ? <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDYgNTEyLjAwNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzYwLjgwMSAyMTMuNDgzIDEyLjkxMS03Ny40NjFoMjAuMDA0bDIzLjk5NCAxMjBoMzAuNTkxbC0yNy41ODktMTM3Ljk0NGMtMS40MDYtNy4wMDItNy41NTktMTIuMDU2LTE0LjcwNy0xMi4wNTZoLTI3LjI5NWwxMi4wOS03Mi41MzljMS4zNjItOC4xNzQtNC4xNi0xNS44OTQtMTIuMzM0LTE3LjI1Ni04LjE0NS0xLjUwOS0xNS44OTQgNC4xNDYtMTcuMjU2IDEyLjMzNGwtMzAgMTgwYy0xLjYyMSA5LjcyNyA0Ljk1MyAxNS45MjYgMTIuMzQ0IDE3LjIwOSA3LjM5MiAxLjI4MyAxNS42LTIuMzUgMTcuMjQ3LTEyLjI4N3oiIGZpbGw9IiMwZGI1NTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjU2LjAwNiA0OTYuMDIyaDMwYzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTEzNWMwLTMzLjEzOC0yNi44NjMtNjAtNjAtNjBoLTEyMWMtMTAuOTc3IDAtMjEuMTQtMy4xNzctMzAtOC4zNDR2MzguMzQ0YzAgMTYuNTY3IDEzLjQzMSAzMCAzMCAzMGgxMjF2MTM1YzAgOC4yODQgNi43MTYgMTUgMTUgMTV6IiBmaWxsPSIjMGRiNTU2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTEyMC4wMDYgNDM2LjAyMnYzMGgtMTVjLTguMjkxIDAtMTUgNi43MDktMTUgMTVzNi43MDkgMTUgMTUgMTVoNjBjOC4yOTEgMCAxNS02LjcwOSAxNS0xNXMtNi43MDktMTUtMTUtMTVoLTE1di0zMGgzMWMxNi41NjkgMCAzMC0xMy40MzMgMzAtMzAgMC0xNi41NjktMTMuNDMxLTMwLTMwLTMwaC0xMjF2LTQ1YzAtMTUxLjgwMi0zMC4yOTMtMjE0LjEzMS0zMS41ODItMjE2LjcwOS0zLjcyMS03LjM5Ny0xMi43LTEwLjM3MS0yMC4xMjctNi43MDktNy40MTIgMy43MDYtMTAuNDE1IDEyLjcxNS02LjcwOSAyMC4xMjcuMjkyLjU3MSAyOC40MTggNTguNTA2IDI4LjQxOCAyMDMuMjkxIDAgNS4yMzUgMCA2My43MDQgMCA2MCAwIDI0Ljg1MyAyMC4xNDcgNDUgNDUgNDV6IiBmaWxsPSIjMGRiNTU2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTQ5Ny4wMDYgMjg2LjAyMmMtNi40NDIgMC0xOTYuNDEgMC0xODkuNDA4IDAgNy44MTcgOC42NjggMTMuODg1IDE4Ljc5MiAxNy44OCAzMGg5NS41Mjh2MTY1YzAgOC4yOTEgNi43MDkgMTUgMTUgMTVzMTUtNi43MDkgMTUtMTV2LTE2NWg0NmM4LjI5MSAwIDE1LTYuNzA5IDE1LTE1cy02LjcwOS0xNS0xNS0xNXoiIGZpbGw9IiMwZGI1NTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PGNpcmNsZSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGN4PSIxMjEuMDA2IiBjeT0iNzYuMDIyIiByPSI0NSIgZmlsbD0iIzBkYjU1NiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtOTEuMDA2IDE1MS4wMjJ2NzVjMCAxNi41NjcgMTMuNDMxIDMwIDMwIDMwaDEwNWM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1IDAtMjQuODUzLTIwLjE0Ny00NS00NS00NWgtNDV2LTQ1YzAtMTYuNTY5LTEzLjQzMS0zMC0zMC0zMHMtMzAgMTMuNDMxLTMwIDMweiIgZmlsbD0iIzBkYjU1NiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
                  : <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDYgNTEyLjAwNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzYwLjgwMSAyMTMuNDgzIDEyLjkxMS03Ny40NjFoMjAuMDA0bDIzLjk5NCAxMjBoMzAuNTkxbC0yNy41ODktMTM3Ljk0NGMtMS40MDYtNy4wMDItNy41NTktMTIuMDU2LTE0LjcwNy0xMi4wNTZoLTI3LjI5NWwxMi4wOS03Mi41MzljMS4zNjItOC4xNzQtNC4xNi0xNS44OTQtMTIuMzM0LTE3LjI1Ni04LjE0NS0xLjUwOS0xNS44OTQgNC4xNDYtMTcuMjU2IDEyLjMzNGwtMzAgMTgwYy0xLjYyMSA5LjcyNyA0Ljk1MyAxNS45MjYgMTIuMzQ0IDE3LjIwOSA3LjM5MiAxLjI4MyAxNS42LTIuMzUgMTcuMjQ3LTEyLjI4N3oiIGZpbGw9IiNmZjI4MjYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjU2LjAwNiA0OTYuMDIyaDMwYzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTEzNWMwLTMzLjEzOC0yNi44NjMtNjAtNjAtNjBoLTEyMWMtMTAuOTc3IDAtMjEuMTQtMy4xNzctMzAtOC4zNDR2MzguMzQ0YzAgMTYuNTY3IDEzLjQzMSAzMCAzMCAzMGgxMjF2MTM1YzAgOC4yODQgNi43MTYgMTUgMTUgMTV6IiBmaWxsPSIjZmYyODI2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTEyMC4wMDYgNDM2LjAyMnYzMGgtMTVjLTguMjkxIDAtMTUgNi43MDktMTUgMTVzNi43MDkgMTUgMTUgMTVoNjBjOC4yOTEgMCAxNS02LjcwOSAxNS0xNXMtNi43MDktMTUtMTUtMTVoLTE1di0zMGgzMWMxNi41NjkgMCAzMC0xMy40MzMgMzAtMzAgMC0xNi41NjktMTMuNDMxLTMwLTMwLTMwaC0xMjF2LTQ1YzAtMTUxLjgwMi0zMC4yOTMtMjE0LjEzMS0zMS41ODItMjE2LjcwOS0zLjcyMS03LjM5Ny0xMi43LTEwLjM3MS0yMC4xMjctNi43MDktNy40MTIgMy43MDYtMTAuNDE1IDEyLjcxNS02LjcwOSAyMC4xMjcuMjkyLjU3MSAyOC40MTggNTguNTA2IDI4LjQxOCAyMDMuMjkxIDAgNS4yMzUgMCA2My43MDQgMCA2MCAwIDI0Ljg1MyAyMC4xNDcgNDUgNDUgNDV6IiBmaWxsPSIjZmYyODI2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTQ5Ny4wMDYgMjg2LjAyMmMtNi40NDIgMC0xOTYuNDEgMC0xODkuNDA4IDAgNy44MTcgOC42NjggMTMuODg1IDE4Ljc5MiAxNy44OCAzMGg5NS41Mjh2MTY1YzAgOC4yOTEgNi43MDkgMTUgMTUgMTVzMTUtNi43MDkgMTUtMTV2LTE2NWg0NmM4LjI5MSAwIDE1LTYuNzA5IDE1LTE1cy02LjcwOS0xNS0xNS0xNXoiIGZpbGw9IiNmZjI4MjYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PGNpcmNsZSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGN4PSIxMjEuMDA2IiBjeT0iNzYuMDIyIiByPSI0NSIgZmlsbD0iI2ZmMjgyNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtOTEuMDA2IDE1MS4wMjJ2NzVjMCAxNi41NjcgMTMuNDMxIDMwIDMwIDMwaDEwNWM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1IDAtMjQuODUzLTIwLjE0Ny00NS00NS00NWgtNDV2LTQ1YzAtMTYuNTY5LTEzLjQzMS0zMC0zMC0zMHMtMzAgMTMuNDMxLTMwIDMweiIgZmlsbD0iI2ZmMjgyNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />


  return (
    <div className={isSettingsToggled}>
      <WorkIcrementDecrement workLength={workLength} setWorkLength={setWorkLength} setBreakLength={setBreakLength} isOn={isOn} isColorFliped={isColorFliped} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      <div className="icon-title-wrapper">
        <div className="break-icon">
          {workIcon}        
        </div>
        <p>WORK LENGTH</p>
      </div>
    </div>
  )
} 

export default ChangeWorkTime