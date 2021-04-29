import React, {useState} from "react";

import Controls from "./components/displayComponents/Controls";
import SettingsToggle from "./components/settingsComponents/SettingsToggle";
import SwitchTheme from "./components/settingsComponents/SwitchTheme";
import ChangeBreakTime from "./components/settingsComponents/ChangeBreakTime";
import ChangeWorkTime from "./components/settingsComponents/ChangeWorkTime";

function App () {
  const [toggleSettings, setToggleSettings] = useState(true) 

  return (
    <>
      <div className="display">
        <Controls />
      </div>
      <div className="settings">
        <SwitchTheme toggleSettings={toggleSettings}/>
        <ChangeBreakTime toggleSettings={toggleSettings} />
        <ChangeWorkTime toggleSettings={toggleSettings} />
        <SettingsToggle toggleSettings={toggleSettings} setToggleSettings={setToggleSettings} />
      </div>
    </>
  )
} 

export default App