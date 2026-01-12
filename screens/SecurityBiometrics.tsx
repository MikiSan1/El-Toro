
import React, { useState } from 'react';
import BiometricScanner from '../components/BiometricScanner';

interface SecurityBiometricsProps {
  onNext: () => void;
  onBack: () => void;
}

const SecurityBiometrics: React.FC<SecurityBiometricsProps> = ({ onNext, onBack }) => {
  const [isScanning, setIsScanning] = useState(false);

  const handleEnableNow = () => {
    setIsScanning(true);
  };

  const handleScanComplete = () => {
    localStorage.setItem('eltoro_biometrics_enabled', 'true');
    setIsScanning(false);
    onNext();
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {isScanning && (
        <BiometricScanner 
          type="face" 
          title="Setting up Face ID"
          onComplete={handleScanComplete}
          onCancel={() => setIsScanning(false)}
        />
      )}

      <div className="flex items-center p-4 pt-8">
        <button onClick={onBack} className="text-primary flex size-12 items-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-12">Security</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center relative mb-8">
          <span className="material-symbols-outlined text-primary text-[64px]">fingerprint</span>
          <div className="absolute -top-1 -right-1 bg-white p-1 rounded-full shadow-sm">
            <span className="material-symbols-outlined text-primary text-[32px]">face</span>
          </div>
        </div>

        <h1 className="text-[32px] font-bold text-center pb-3 leading-tight">Enable Quick Sign-In</h1>
        <p className="text-gray-500 text-center text-base pb-10 px-4">
          Use your biometrics to access your shifts faster and more securely. You won't need to type your password every time.
        </p>

        <div className="w-full space-y-6">
          <div className="flex items-center gap-4 px-6">
            <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">speed</span>
            </div>
            <div>
              <p className="font-bold text-sm">Instant Access</p>
              <p className="text-xs text-gray-500">Log in in under a second</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <div>
              <p className="font-bold text-sm">Bank-Level Security</p>
              <p className="text-xs text-gray-500">Encrypted biometric storage</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pb-12 space-y-3">
        <button 
          onClick={handleEnableNow}
          className="w-full h-14 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/20 active:scale-[0.98] transition-all"
        >
          Enable Now
        </button>
        <button 
          onClick={onNext}
          className="w-full h-14 bg-gray-50 text-gray-800 rounded-xl font-bold text-lg active:scale-[0.98] transition-all"
        >
          Maybe Later
        </button>
        <p className="text-xs text-gray-400 text-center pt-2 font-medium">
          You can always change this later in your security settings.
        </p>
      </div>
    </div>
  );
};

export default SecurityBiometrics;
