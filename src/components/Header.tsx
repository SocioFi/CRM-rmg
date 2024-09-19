import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">BRM Dashboard</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/notifications" className="text-gray-600 hover:text-gray-900">
                Notifications
              </Link>
            </li>
            <li>
              <Link href="/settings" className="text-gray-600 hover:text-gray-900">
                Settings
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;