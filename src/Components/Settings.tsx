import { useState } from "react";

export function Settings(){
    const [isSettingsOpen, seIsSettingsOpen] = useState(false);
    const [isMusicOn, setIsMusicOn] = useState(false);

    return (
        <section id='settings' className='flex items-center mt-20 justify-center'>
            <div className="settings-container flex flex-col items-center  w-180 h-180 rounded-2xl bg-[#da935d]">
                <div className="settings-options flex flex-row justify-center">
                    <button id="settingsButton" type="button">
                        Settings
                    </button>
                </div>
            </div>
        </section >
    )
}
