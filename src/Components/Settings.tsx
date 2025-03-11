import { useState } from "react";
import './settings.css';

export function Settings() {
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
        console.log(`Music is now ${!isMusicOn ? 'on' : 'off'}`);
    };

    return (
        <section id="settings">
            <button className="settings-container" id="settingsButton" type="button" onClick={openPopup}>
                <img src="settings.png" alt="settings icon" className="settings-icon"/>
            </button>
            <div className={`popup ${isSettingsOpen ? 'open-popup' : ''}`}>
                <div className="popup-content">
                    <h2>Settings</h2>

                    <div className="popup-content-inner">
                        <div className="music-control">
                        <h3>Music</h3>
                        <label className="switch">
                            <input
                                type="checkbox"
                                id="musicSwitch"
                                checked={isMusicOn}
                                onChange={toggleMusic}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
                <button id="closeSettings" type="button" onClick={closePopup}>Close</button>
                </div>
            </div>
        </section>
    );
}
export default Settings;