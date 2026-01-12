
import React from 'react';
import { ScreenName } from '../types';
import Layout from '../components/Layout';

interface DashboardProps {
  onNavigate: (screen: ScreenName) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <Layout activeScreen="DASHBOARD" onNavigate={onNavigate}>
      <div className="p-6 pt-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">dataset</span>
            </div>
            <span className="font-bold text-xl">El Toro</span>
          </div>
          <div className="size-11 rounded-full bg-white shadow-sm flex items-center justify-center relative">
            <span className="material-symbols-outlined text-gray-600">notifications</span>
            <span className="absolute top-2.5 right-3 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Monday, Oct 14</p>
          <h1 className="text-3xl font-bold mt-1">Good Morning, Alex</h1>
        </div>

        <div className="bg-primary rounded-[2rem] p-8 mb-8 shadow-xl shadow-primary/20 relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-white/80 mb-2">
              <span className="material-symbols-outlined text-lg">location_on</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Current Location: HQ Office</span>
            </div>
            <h3 className="text-white text-[28px] font-bold mb-6">Ready for your shift?</h3>
            <button className="bg-white text-primary px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 active:scale-95 transition-transform shadow-lg shadow-black/5">
              <span className="material-symbols-outlined">play_circle</span>
              Start Work
            </button>
          </div>
          <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-white/10 text-[180px] rotate-12">gps_fixed</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Monthly Schedule', sub: 'View Shifts', icon: 'calendar_month', color: 'blue' },
            { label: 'Messages', sub: '3 New Updates', icon: 'chat_bubble', color: 'amber', badge: 3 },
            { label: 'Shift Swap', sub: 'Trade Shifts', icon: 'swap_horiz', color: 'purple' },
            { label: 'My Profile', sub: 'Settings', icon: 'person', color: 'emerald' },
          ].map((card, i) => (
            <div 
              key={i} 
              className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-gray-50 flex flex-col gap-4 relative active:scale-95 transition-transform cursor-pointer"
              onClick={() => card.label === 'Monthly Schedule' ? onNavigate('SCHEDULE') : card.label === 'My Profile' ? onNavigate('PROFILE') : null}
            >
              {card.badge && (
                <span className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{card.badge}</span>
              )}
              <div className={`w-12 h-12 rounded-2xl bg-${card.color}-50 flex items-center justify-center text-${card.color}-600`}>
                <span className="material-symbols-outlined text-2xl">{card.icon}</span>
              </div>
              <div>
                <p className="text-[15px] font-bold leading-tight">{card.label}</p>
                <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-tight">{card.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Next Shift</h4>
            <span className="text-primary text-xs font-bold">View All</span>
          </div>
          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-gray-50 group active:scale-[0.98] transition-all">
            <div className="size-14 bg-gray-50 rounded-xl flex flex-col items-center justify-center">
              <span className="text-[10px] font-bold text-gray-400">OCT</span>
              <span className="text-xl font-bold text-primary leading-none">15</span>
            </div>
            <div className="flex-1">
              <p className="text-base font-bold">Morning Receptionist</p>
              <p className="text-sm text-gray-500">08:00 AM - 04:00 PM</p>
            </div>
            <span className="material-symbols-outlined text-gray-300">chevron_right</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
