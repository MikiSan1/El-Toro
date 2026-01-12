
import React, { useEffect, useState } from 'react';

interface VerifyPhoneProps {
  onNext: () => void;
  onBack: () => void;
}

const VerifyPhone: React.FC<VerifyPhoneProps> = ({ onNext, onBack }) => {
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-4 pt-8">
        <button onClick={onBack} className="text-[#111318] flex size-12 items-center">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
      </div>

      <div className="p-6 pt-6">
        <h1 className="text-[32px] font-bold text-[#111318] leading-tight">Verify Phone Number</h1>
        <p className="text-[#111318] text-base mt-2">
          Enter the code sent to <span className="text-primary font-medium">+1 ••• ••• 45</span>
        </p>
      </div>

      <div className="px-6 py-8 flex justify-between gap-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <input 
            key={i}
            className="w-12 h-14 bg-gray-50 border-0 border-b-2 border-gray-200 text-center text-xl font-bold focus:border-primary focus:ring-0 transition-all rounded-lg"
            maxLength={1}
            type="number"
            autoFocus={i === 1}
          />
        ))}
      </div>

      <div className="flex flex-col items-center py-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-gray-400 text-lg">schedule</span>
          <p className="text-sm font-medium">
            Resend code in <span className="text-primary font-bold">00:{timer.toString().padStart(2, '0')}</span>
          </p>
        </div>
        <button className={`text-primary text-sm font-semibold ${timer > 0 ? 'opacity-50' : 'opacity-100'}`} disabled={timer > 0}>
          Didn't receive a code? Resend
        </button>
      </div>

      <div className="mt-auto p-6 pb-12">
        <button 
          onClick={onNext}
          className="w-full h-14 bg-primary text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-transform active:scale-95"
        >
          Complete Setup
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <p className="text-center text-[#616f89] text-xs mt-4 px-8">
          By continuing, you agree to receive SMS messages for verification. Standard rates may apply.
        </p>
      </div>
    </div>
  );
};

export default VerifyPhone;
