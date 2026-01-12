
import React from 'react';
import { ScreenName } from '../types';
import Layout from '../components/Layout';

interface ScheduleProps {
  onNavigate: (screen: ScreenName) => void;
}

const Schedule: React.FC<ScheduleProps> = ({ onNavigate }) => {
  return (
    <Layout activeScreen="SCHEDULE" onNavigate={onNavigate}>
      <header className="px-6 pt-10 pb-4 bg-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">Monthly Plan</h1>
        <div className="flex gap-2">
          <button className="p-2.5 rounded-full bg-gray-50 text-gray-600">
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>
          <button className="p-2.5 rounded-full bg-gray-50 text-gray-600">
            <span className="material-symbols-outlined text-[22px]">notifications</span>
          </button>
        </div>
      </header>

      <div className="bg-white px-6">
        <div className="flex items-center justify-between py-4">
          <h2 className="text-xl font-bold">June 2024</h2>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer">chevron_left</span>
            <span className="material-symbols-outlined text-primary cursor-pointer">chevron_right</span>
          </div>
        </div>

        <div className="grid grid-cols-7 mb-4">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
            <div key={day} className="text-center text-[10px] font-bold text-gray-400 py-2">{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-2 mb-6">
          {Array.from({ length: 31 }, (_, i) => {
            const day = i + 1;
            const isSelected = day === 12;
            const hasShift = [1, 3, 4, 6, 10, 11, 12, 13, 17, 18, 20].includes(day);
            return (
              <div key={day} className={`h-12 flex flex-col items-center justify-center relative rounded-xl transition-all cursor-pointer ${isSelected ? 'bg-primary text-white font-bold' : ''}`}>
                <span className="text-sm font-medium">{day}</span>
                {hasShift && (
                  <div className="flex gap-0.5 absolute bottom-1.5">
                    <div className={`size-1 rounded-full ${isSelected ? 'bg-white' : 'bg-primary'}`}></div>
                    {day === 17 && <div className="size-1 rounded-full bg-primary"></div>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex-1 bg-gray-50 rounded-t-[2.5rem] shadow-inner mt-2 p-6 overflow-hidden flex flex-col">
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6"></div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg">Wednesday, June 12</h3>
          <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">1 Shift</span>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="font-bold text-lg">Morning Shift</h4>
                <p className="text-sm text-gray-400 font-medium">Supervisor: Michael Scott</p>
              </div>
              <span className="material-symbols-outlined text-gray-300">more_vert</span>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">schedule</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Time</p>
                  <p className="font-bold">08:00 AM - 04:30 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Location</p>
                  <p className="font-bold">Main Office - Warehouse B</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-50">
              <button className="flex-1 h-12 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20">Clock In</button>
              <button className="size-12 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined">map</span>
              </button>
            </div>
          </div>

          <div className="bg-orange-50/50 p-5 rounded-[1.5rem] border border-orange-100 flex gap-4">
            <span className="material-symbols-outlined text-orange-500">info</span>
            <div>
              <p className="text-sm font-bold text-orange-800">Daily Task</p>
              <p className="text-xs text-orange-700/80 leading-relaxed mt-1">Inventory audit scheduled for 10:00 AM. Please ensure scanner is fully charged.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
