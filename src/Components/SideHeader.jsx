

// components/SideLayout/index.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoIosChatboxes } from "react-icons/io";

import { 
  ChevronRight, 
  ChevronLeft,
  LayoutDashboard,
  Calendar,
  ShoppingCart,
  Users,
  Table,
  Map,
  LineChart,
  CreditCard,
  LogOut
} from 'lucide-react';

const navigationItems = [
  { id: '/', name: 'Dashboard', icon: LayoutDashboard },
  { id: '/calendar', name: 'Calendar', icon: Calendar },
  { id: '/chat', name: 'Chats', icon: IoIosChatboxes },
  { id: '/ecommerce', name: 'Ecommerce', icon: ShoppingCart },
  { id: '/users', name: 'User List', icon: Users },
  { id: '/table', name: 'Table', icon: Table },
  { id: '/map', name: 'Map', icon: Map },
  { id: '/chart-table', name: 'Chart Table', icon: LineChart },
  { id: '/card', name: 'Card', icon: CreditCard },
  { id: '/logout', name: 'Logout', icon: LogOut }
];

const SideLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (path === '/logout') {
      // Handle logout logic here
      return;
    }
    navigate(path);
  };

  return (
    <aside className={`
      relative flex flex-col
      bg-[#22354e] transition-all duration-300 ease-in-out
      ${isSidebarCollapsed ? 'w-20' : 'w-64'}
    `}>
      <button 
        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        className="absolute -right-3 top-6 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-100 transition-colors"
        aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isSidebarCollapsed ? 
          <ChevronRight className="w-4 h-4" /> : 
          <ChevronLeft className="w-4 h-4" />
        }
      </button>

      <nav className="mt-12 flex-grow">
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item.id)}
                className={`
                  w-full p-3 flex items-center gap-3
                  transition-colors duration-200
                  ${location.pathname === item.id 
                    ? 'text-white bg-[#2c4366]' 
                    : 'text-slate-400 hover:bg-[#2c4366] hover:text-white'}
                  ${isSidebarCollapsed ? 'justify-center' : 'justify-start'}
                `}
              >    
                <item.icon className="w-6 h-6" />
                {!isSidebarCollapsed && 
                  <span className="text-sm font-medium">{item.name}</span>
                }
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideLayout;