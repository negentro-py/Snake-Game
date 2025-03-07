import { useState } from "react";

export function Settings () {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isMusicOn, setIsMusicOn] = useState(true);

    const openPopup = () => {
        setIsSettingsOpen(true);
      };
    
    const closePopup = () => {
        setIsSettingsOpen(false);
      };

    const toggleMusic = () => {
        setIsMusicOn(!isMusicOn);
        };

    return (
        <section id="settings">
            <button id="settingsButton" type="button" onClick={openPopup}> 
                <img src="/icons8-settings-48.png" alt="settings icon" />
            </button>
        <div className={`popup ${isSettingsOpen ? 'open-popup' : ''}`}>
            <div className="popup-content">
                <h2>Settings</h2>
          
            <div className="popup-content-inner">
                <p>Music</p>
                    <label className="switch">
                        <input 
                        type="checkbox" 
                        id="musicSwitch" 
                        checked={isMusicOn}
                        onChange={toggleMusic}
                        />
                <span className="slider round"></span>
            </label>
            <button id="closeSettings" type="button" onClick={closePopup}>Close</button>
          </div>
        </div>  
      </div>
    </section>
    );
}
export default Settings;