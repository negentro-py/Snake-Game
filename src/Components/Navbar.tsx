import { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // To decode the JWT token

interface NavbarProps {
    openProfile: () => void; // Function to open the profile popup
}

export function Navbar({ openProfile }: NavbarProps) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [user, setUser] = useState(null); // Store user information

    // Handle Google login success
    const handleLoginSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        setUser(decoded); // Save user info
        setIsProfileOpen(false); // Close dropdown after login
    };

    // Handle Google login error
    const handleLoginError = () => {
        console.log("Login Failed");
    };

    // Handle logout
    const handleLogout = () => {
        googleLogout();
        setUser(null); // Clear user info
        setIsProfileOpen(false); // Close dropdown after logout
    };

    return (
        <GoogleOAuthProvider clientId="495792993426-i02vm28u37f8nmv0g76gueqbe17l256o.apps.googleusercontent.com">
            <nav className="w-full h-16 bg-gradient-to-r from-[#f8f1fc] to-[#e79995] shadow-md flex items-center justify-end px-6">
                {/* Profile Avatar */}
                <div className="relative">
                    <div
                        className="avatar cursor-pointer"
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                    >
                        <div className="ring-2 ring-white ring-offset-2 ring-offset-[#e79995] w-10 h-10 rounded-full">
                            <img
                                src={user?.picture || "./src/assets/avatar.png"}
                                alt="Profile Avatar"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Dropdown Menu */}
                    {isProfileOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[#e79995]">
                            <ul className="py-2">ray-200"
                                {user && ( // Only show Profile button if user is logged in
                                    <li>
                                        <button
                                            onClick={openProfile} // Open Profile popup
                                            className="w-full text-left px-4 py-2 text-[#9a3bd2] hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            <h3>Profile</h3>
                                        </button>
                                    </li>
                                )}
                                {!user && (
                                    <li>
                                        <div className="px-4 py-2">
                                            <GoogleLogin
                                                onSuccess={handleLoginSuccess}
                                                onError={handleLoginError}
                                                text="login"
                                                shape="pill"
                                                size="medium"
                                                width="200"
                                                className="w-full justify-center"
                                            />
                                        </div>
                                    </li>
                                )}
                                {user && (
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-[#9a3bd2] hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            <h3>Logout</h3>
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </GoogleOAuthProvider>
    );
}