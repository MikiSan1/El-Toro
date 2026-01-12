
import React from 'react';

interface VerifyIdentityProps {
  onNext: () => void;
  onBack: () => void;
}

const VerifyIdentity: React.FC<VerifyIdentityProps> = ({ onNext, onBack }) => {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-4 pt-8">
        <button onClick={onBack} className="text-[#111318] flex size-12 items-center">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
      </div>

      <div className="px-6 space-y-2">
        <p className="text-sm font-medium text-gray-500">Step 2 of 3</p>
        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-primary w-2/3 rounded-full"></div>
        </div>
      </div>

      <div className="p-6 pt-10">
        <h1 className="text-[32px] font-bold text-[#111318] leading-tight">Verify Your Identity</h1>
        <p className="text-[#616f89] text-base mt-2">
          Please enter your mobile number to secure your account and enable quick access for your profile.
        </p>
      </div>

      <div className="px-6 py-4 space-y-2">
        <p className="text-sm font-semibold">Mobile Number</p>
        <div className="flex gap-3">
          <div className="w-32 h-14 border border-[#dbdfe6] rounded-xl flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              <span>🇺🇸</span>
              <span className="font-medium">+1</span>
            </div>
            <span className="material-symbols-outlined text-gray-400">expand_more</span>
          </div>
          <input 
            className="flex-1 h-14 border border-[#dbdfe6] rounded-xl p-4 text-lg font-medium tracking-wider focus:ring-primary focus:border-primary" 
            placeholder="000-000-0000"
            type="tel"
          />
        </div>
      </div>

      <div className="mt-auto p-6 pb-12 space-y-4">
        <button 
          onClick={onNext}
          className="w-full h-14 bg-primary text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
        >
          Send Verification Code
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <p className="text-center text-[#616f89] text-xs px-6">
          By continuing, you agree to receive an SMS for security purposes. Standard messaging and data rates may apply.
        </p>
      </div>
    </div>
  );
};

export default VerifyIdentity;
