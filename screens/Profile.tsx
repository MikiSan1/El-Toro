
import React from 'react';
import { ScreenName } from '../types';
import Layout from '../components/Layout';

interface ProfileProps {
  onNavigate: (screen: ScreenName) => void;
}

const Profile: React.FC<ProfileProps> = ({ onNavigate }) => {
  return (
    <Layout activeScreen="PROFILE" onNavigate={onNavigate}>
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md px-6 py-4 pt-10 border-b border-gray-100 flex items-center">
        <span className="material-symbols-outlined text-primary cursor-pointer" onClick={() => onNavigate('DASHBOARD')}>arrow_back_ios</span>
        <h2 className="text-lg font-bold flex-1 text-center pr-8">Profile</h2>
      </div>

      <div className="bg-white px-6 pt-10 pb-12 flex flex-col items-center">
        <div className="relative mb-6">
          <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100">
            <img 
              alt="Avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKVEa2cGjl3PySFfgZwdzOU-QIQ0vucXWIOM_gd7cIKLuiz5IkmgTu4wpF25ZHdvhH03RYXtoLUSH0OKdn9zblwDxGUCQiKOTDoWFvAQnYh9r9UqKG-718-L2RKfGt7Jo8fppHQJ_IsI0JvVoh9WfVtiClGI-PcqsUgQ41EbR3sAE1ZT9F3s70fpwMxVTbLzHa3Dqe-arqD0JKguVdnC29lSRaZj7K7N6RMm_uUOb0r6Euz5oy1Td4d3oLXYyKcT6WYLTfXLwa13bA" 
            />
          </div>
          <button className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full border-4 border-white shadow-lg">
            <span className="material-symbols-outlined text-sm">edit</span>
          </button>
        </div>
        <h1 className="text-2xl font-bold">Marcus Thompson</h1>
        <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mt-1">Senior Shift Supervisor</p>
      </div>

      <div className="px-6 py-8">
        <h3 className="px-2 pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Work Statistics</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-gray-50">
            <div className="text-primary mb-2">
              <span className="material-symbols-outlined fill-1">schedule</span>
            </div>
            <div className="text-2xl font-bold">158h</div>
            <div className="text-[10px] text-gray-400 font-bold uppercase mt-1">Total this month</div>
          </div>
          <div className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-gray-50">
            <div className="text-green-500 mb-2">
              <span className="material-symbols-outlined fill-1">task_alt</span>
            </div>
            <div className="text-2xl font-bold">24</div>
            <div className="text-[10px] text-gray-400 font-bold uppercase mt-1">Shifts completed</div>
          </div>
        </div>
      </div>

      <div className="px-6 py-2">
        <h3 className="px-2 pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Personal Information</h3>
        <div className="bg-white rounded-[1.5rem] overflow-hidden border border-gray-50 shadow-sm">
          <div className="flex items-center gap-4 p-5 border-b border-gray-50 active:bg-gray-50 transition-colors cursor-pointer">
            <div className="size-11 rounded-full bg-blue-50 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Email Address</p>
              <p className="font-bold text-sm mt-0.5">m.thompson@workforce.com</p>
            </div>
            <span className="material-symbols-outlined text-gray-200">chevron_right</span>
          </div>
          <div className="flex items-center gap-4 p-5 active:bg-gray-50 transition-colors cursor-pointer">
            <div className="size-11 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Phone Number</p>
              <p className="font-bold text-sm mt-0.5">+1 (555) 012-3456</p>
            </div>
            <span className="material-symbols-outlined text-gray-200">chevron_right</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        <h3 className="px-2 pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Security Settings</h3>
        <div className="bg-white rounded-[1.5rem] overflow-hidden border border-gray-50 shadow-sm">
          <div 
            onClick={() => onNavigate('CHANGE_PASSWORD')}
            className="flex items-center gap-4 p-5 border-b border-gray-50 active:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="size-11 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
              <span className="material-symbols-outlined">lock</span>
            </div>
            <div className="flex-1 font-bold text-sm">Change Password</div>
            <span className="material-symbols-outlined text-gray-200">chevron_right</span>
          </div>
          <div className="flex items-center gap-4 p-5 active:bg-gray-50 transition-colors cursor-pointer">
            <div className="size-11 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
              <span className="material-symbols-outlined">fingerprint</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm">Biometrics</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Face ID & Touch ID enabled</p>
            </div>
            <div className="relative inline-flex items-center cursor-pointer">
              <div className="w-11 h-6 bg-primary rounded-full transition-colors"></div>
              <div className="absolute right-1 top-1 bg-white size-4 rounded-full shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-20">
        <button 
          onClick={() => window.location.reload()}
          className="w-full h-16 flex items-center justify-center gap-3 rounded-[1.5rem] bg-white text-red-500 font-bold shadow-sm border border-gray-50 active:scale-[0.98] transition-all"
        >
          <span className="material-symbols-outlined font-bold">logout</span>
          Logout
        </button>
        <p className="text-center text-[10px] text-gray-400 font-bold uppercase mt-8 tracking-[0.2em]">App Version 2.4.12 (Build 892)</p>
      </div>
    </Layout>
  );
};

export default Profile;
