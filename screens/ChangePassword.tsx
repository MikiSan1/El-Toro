
import React from 'react';

interface ChangePasswordProps {
  onNext: () => void;
  onBack: () => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ onNext, onBack }) => {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex items-center p-4 pt-8 border-b border-gray-100">
        <button onClick={onBack} className="text-[#111318] flex size-12 items-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-[#111318] text-lg font-bold flex-1 text-center pr-12">Change Password</h2>
      </div>

      <div className="p-6">
        <h1 className="text-2xl font-bold text-[#111318]">Create a new password</h1>
        <p className="text-[#616f89] text-sm mt-2">Your new password must be different from previous used passwords.</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
        <div className="space-y-2">
          <p className="text-[#111318] text-base font-medium">Current Password</p>
          <div className="flex border border-[#dbdfe6] rounded-lg overflow-hidden h-14 focus-within:ring-2 focus-within:ring-primary/20">
            <input 
              className="flex-1 border-0 p-4 text-base focus:ring-0" 
              type="password" 
              defaultValue="password123" 
            />
            <div className="flex items-center px-4 text-gray-400">
              <span className="material-symbols-outlined">visibility</span>
            </div>
          </div>
          <p className="text-primary text-sm font-semibold underline pt-1">Forgot Password?</p>
        </div>

        <div className="border-t border-gray-100"></div>

        <div className="space-y-2">
          <p className="text-[#111318] text-base font-medium">New Password</p>
          <div className="flex border border-[#dbdfe6] rounded-lg overflow-hidden h-14">
            <input className="flex-1 border-0 p-4 text-base focus:ring-0" placeholder="Enter new password" type="password" />
            <div className="flex items-center px-4 text-gray-400">
              <span className="material-symbols-outlined">visibility</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[#111318] text-base font-medium">Confirm New Password</p>
          <div className="flex border border-[#dbdfe6] rounded-lg overflow-hidden h-14">
            <input className="flex-1 border-0 p-4 text-base focus:ring-0" placeholder="Re-type new password" type="password" />
            <div className="flex items-center px-4 text-gray-400">
              <span className="material-symbols-outlined">visibility</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-[#616f89] text-xs font-bold uppercase tracking-wider mb-3">Password Requirements</h3>
          <div className="bg-gray-50 rounded-xl p-2 space-y-1">
            <div className="flex items-center gap-3 py-2 px-4">
              <div className="size-5 rounded-full bg-green-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-600 text-[14px] font-bold">check</span>
              </div>
              <p className="text-sm">At least 8 characters</p>
            </div>
            <div className="flex items-center gap-3 py-2 px-4">
              <div className="size-5 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-gray-400 text-[14px]">circle</span>
              </div>
              <p className="text-sm">One number</p>
            </div>
            <div className="flex items-center gap-3 py-2 px-4">
              <div className="size-5 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-gray-400 text-[14px]">circle</span>
              </div>
              <p className="text-sm">One special character</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-2">
        <button 
          onClick={onNext}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
        >
          <span>Update Password</span>
          <span className="material-symbols-outlined">lock_reset</span>
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
