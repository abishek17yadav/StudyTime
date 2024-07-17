// ProfilePage.js
import React from 'react';

function Profile() {
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg', // Sample avatar URL
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non nibh sit amet orci lobortis tempor.'
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-lg w-full mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="flex items-center mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" src={user.avatar} alt="Profile" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          <p className="text-gray-700">{user.bio}</p>
        </div>
        <div className="px-6 py-2 bg-gray-200">
          <h2 className="text-lg font-semibold mb-2">Settings</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-6 h-6 mr-2 text-gray-500">📅</span> Update Profile
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 mr-2 text-gray-500">🔒</span> Change Password
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 mr-2 text-gray-500">📧</span> Manage Emails
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
