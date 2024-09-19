import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  const navItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Leads', href: '/leads' },
    { name: 'Meetings', href: '/meetings' },
    { name: 'Reports', href: '/reports' },
    { name: 'Conversations', href: '/conversations' },
    { name: 'Company Profile', href: '/company-profile' },
    { name: 'Buyer Profile', href: '/buyer-profile' },
    { name: 'Email', href: '/email' },
    { name: 'Lead Management', href: '/lead-management' },
    { name: 'Agent Management', href: '/agent-management' },
    { name: 'Help', href: '/help' },
  ];

  return (
    <nav className="bg-gray-800 w-64 min-h-screen p-4">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;