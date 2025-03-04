import { useState } from "react";

export function Settings () {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    // const [isMusicOn, setIsMusicOn] = useState(true);

    return (
        <section id = 'settings' className= 'flex items-center mt-20 justify-start'>
            <div className = "settings-container flex flex-col items-center w-180 h-180 rounded-2xl bg-[#da935d]">
                <div className = "py-15">
                    <button id = "settingsButton" type = "button" onClick = {() => setIsSettingsOpen(!isSettingsOpen)}>
                        Settings
                    </button>
                </div>
            </div>
        
        {setIsSettingsOpen && (
            <div className = "settings-options flex flex-col items-center w-180 h-180 rounded-2xl bg-[#da935d]">
                <div className= "settings-options flex flex-row justify-center">
                    <h2>Settings</h2>

                    <button onClick={() => setIsSettingsOpen(false)}>
                        Close
                    </button>
                </div>
            </div>
        )}
        </section>
    );
}