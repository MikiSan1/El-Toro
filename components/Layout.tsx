
import React from 'react';
import { ScreenName } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: ScreenName;
  onNavigate: (screen: ScreenName) => void;
  showNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, activeScreen, onNavigate, showNav = true }) => {
  return (
    <div className="flex flex-col h-full bg-[#f6f6f8]">
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {children}
      </div>
      
      {showNav && (
        <nav className="bg-white/80 backdrop-blur-lg border-t border-gray-100 px-6 pb-8 pt-3 flex justify-between items-center sticky bottom-0 z-50">
          <button 
            onClick={() => onNavigate('DASHBOARD')}
            className={`flex flex-col items-center gap-1 ${activeScreen === 'DASHBOARD' ? 'text-primary' : 'text-gray-400'}`}
          >
            <span className={`material-symbols-outlined ${activeScreen === 'DASHBOARD' ? 'fill-1' : ''}`}>home</span>
            <span className="text-[10px] font-bold">Home</span>
          </button>
          
          <button 
            onClick={() => onNavigate('SCHEDULE')}
            className={`flex flex-col items-center gap-1 ${activeScreen === 'SCHEDULE' ? 'text-primary' : 'text-gray-400'}`}
          >
            <span className={`material-symbols-outlined ${activeScreen === 'SCHEDULE' ? 'fill-1' : ''}`}>calendar_month</span>
            <span className="text-[10px] font-bold">Schedule</span>
          </button>
          
          <button 
            onClick={() => onNavigate('NOTIFICATIONS')}
            className={`flex flex-col items-center gap-1 ${activeScreen === 'NOTIFICATIONS' ? 'text-primary' : 'text-gray-400'}`}
          >
            <div className="relative">
              <span className={`material-symbols-outlined ${activeScreen === 'NOTIFICATIONS' ? 'fill-1' : ''}`}>notifications</span>
              {activeScreen !== 'NOTIFICATIONS' && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
              )}
            </div>
            <span className="text-[10px] font-bold">Alerts</span>
          </button>
          
          <button 
            onClick={() => onNavigate('PROFILE')}
            className={`flex flex-col items-center gap-1 ${activeScreen === 'PROFILE' ? 'text-primary' : 'text-gray-400'}`}
          >
            <span className={`material-symbols-outlined ${activeScreen === 'PROFILE' ? 'fill-1' : ''}`}>manage_accounts</span>
            <span className="text-[10px] font-bold">Profile</span>
          </button>
        </nav>
      )}
      
      {/* iOS Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-300 rounded-full"></div>
    </div>
  );
};

export default Layout;
