import { useState } from "react";

export default function Navbar() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleProfileClick = () => {
        setIsProfileOpen(!isProfileOpen);
        if (!isProfileOpen) {
          window.open("/profile", "Profile", "width=600,height=400");
        }
      };
    return (
        <div>
            <nav className="flex items center justify-center w-full h-12 bg-[#da935d] px-4">
                <button className="ml-auto bg-[#9a3bd2] text-white font-semibold rounded px-4 py-1 hover:bg-[#e79995]"
                onClick={handleProfileClick}>
          Profile
                </button>
            
            </nav>
        </div>
    )
}