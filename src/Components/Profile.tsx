import { useState } from "react";

interface ProfileProps {
    onSave: (username: string, bio: string) => void;
}

export function Profile({ onSave }: ProfileProps) {
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");

    const handleSave = () => {
        if (username.trim() && bio.trim()) {
            onSave(username, bio);
        } else {
            alert("Please fill out both fields.");
        }
    };

    return (
        <div className="profile-container">
            <h2 className="text-center mb-4">Set Your Profile</h2>
            <div className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                />
                <textarea
                    placeholder="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleSave}
                    className="bg-[#9a3bd2] text-white py-2 px-4 rounded hover:bg-[#7a2b9a]"
                >
                    Save Profile
                </button>
            </div>
        </div>
    );
}