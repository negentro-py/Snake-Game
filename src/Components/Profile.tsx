import React, { useState } from 'react';

interface ProfileProps {
    onSave: (username: string, bio: string) => void;
}

export function Profile({ onSave }: ProfileProps) {
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');

    const handleSave = () => {
        if (username.trim() && bio.trim()) {
            onSave(username, bio);
            alert('Profile saved successfully!');
        } else {
            alert('Please fill out both fields.');
        }
    };

    return (
        <div className="profile-container pixel-font retro-glow p-6 rounded-xl border-4 border-[#9a3bd2] bg-gradient-to-b from-[#0f0516] to-[#9a3bd2]">
            <h2 className="text-[#da935d] text-center mb-4 retro-flicker">Set Your Profile</h2>
            <div className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pixel-text p-2 bg-[#0f0516] text-[#da935d] border-2 border-[#9a3bd2] rounded"
                />
                <textarea
                    placeholder="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="pixel-text p-2 bg-[#0f0516] text-[#da935d] border-2 border-[#9a3bd2] rounded"
                />
                <button
                    onClick={handleSave}
                    className="pixel-text p-2 bg-[#9a3bd2] text-[#da935d] border-2 border-[#da935d] rounded hover:bg-[#da935d] hover:text-[#9a3bd2] transition-colors"
                >
                    Save Profile
                </button>
            </div>
        </div>
    );
}