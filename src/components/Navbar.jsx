import React from 'react';
import { Link } from 'react-router-dom';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

function Navbar() {
  const profileImageUrl = 'https://randomuser.me/api/portraits/men/1.jpg';

  return (
    <nav className="bg-gray-200 px-4 py-3 flex justify-between">
      <div className="flex items-center text-xl">
      </div>

      <div className="flex items-center gap-x-5">
        <div>
          <NotificationsNoneOutlinedIcon className="text-black w-6 h-6 hover:shadow hover:bg-gray-300" />
        </div>

        <div className="relative flex items-center group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
            <img
              className="w-full h-full object-cover"
              src={profileImageUrl}
              alt="Profile"
            />
          </div>
          <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-hover:block top-full right-0">
            <ul className="py-2 text-sm text-gray-900">
              <li>
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
              </li>
              <li>
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
              </li>
              <li>
                <Link to="/logout" className="block px-4 py-2 hover:bg-gray-100">Log Out</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Add Login and Register options */}
        <div className="flex items-center gap-x-4">
          <Link to="/login" className="text-black hover:text-blue-600">Login</Link>
          <Link to="/register" className="text-black hover:text-blue-600">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
