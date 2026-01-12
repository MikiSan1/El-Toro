
import React, { useState, useEffect } from 'react';
import BiometricScanner from '../components/BiometricScanner';

interface LoginProps {
  onNext: () => void;
}

const Login: React.FC<LoginProps> = ({ onNext }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [biometricsEnabled, setBiometricsEnabled] = useState(false);

  useEffect(() => {
    const isEnabled = localStorage.getItem('eltoro_biometrics_enabled') === 'true';
    setBiometricsEnabled(isEnabled);
  }, []);

  const handleBiometricLogin = () => {
    setIsScanning(true);
  };

  const handleScanComplete = () => {
    setIsScanning(false);
    onNext();
  };

  return (
    <div className="flex flex-col h-full bg-white px-6">
      {isScanning && (
        <BiometricScanner 
          type="face" 
          onComplete={handleScanComplete}
          onCancel={() => setIsScanning(false)}
        />
      )}

      <div className="flex items-center pt-8 pb-4">
        <div className="text-[#111318] flex size-12 shrink-0 items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-[#111318] text-lg font-bold flex-1 text-center pr-12">Login</h2>
      </div>

      <div className="mt-4">
        <div 
          className="w-full h-40 bg-center bg-no-repeat bg-cover rounded-xl"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBq96dC-I4xCbnGzmTXw2ipwPcGSNilhAkOSiLyk4RoCiUNUtlSv_jYg3fvSn2m3oWifaRvwGJmpgnSG0MOUKQPHS6E2UzwfIhRXwcm7bbbiYhLP4Ydv_RzzFlMtMPFdMLAuXtnZ0sMK9cR7lRe4yAPHkYRrpjJpC00tUNGOyEBtBdu603Bd3AzNYKzjd8U-UCi8RQi0YEchMWSKyl1HlWmEFDuQODxbk1GJcqjFuPaanNc-QHvqFxgAW2QnZx1Dh-gYYzVditlY7hj")' }}
        />
      </div>

      <h2 className="text-[#111318] text-[28px] font-bold text-center pt-8 leading-tight">Welcome to El Toro</h2>
      <p className="text-[#616f89] text-sm text-center pt-1 pb-6 px-4">
        Enter your email and the temporary password provided by your admin to get started.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-[#111318] text-sm font-semibold">Email Address</p>
          <input 
            className="w-full rounded-xl border-[#dbdfe6] h-14 p-4 text-base focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="name@company.com" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[#111318] text-sm font-semibold">Temporary Password</p>
          <div className="relative">
            <input 
              className="w-full rounded-xl border-[#dbdfe6] h-14 p-4 pr-12 text-base focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Enter temp password" 
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="pt-8 flex gap-3">
        <button 
          onClick={onNext}
          className={`flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98]`}
        >
          <span>Login</span>
          <span className="material-symbols-outlined text-[20px]">login</span>
        </button>
        
        {biometricsEnabled && (
          <button 
            onClick={handleBiometricLogin}
            className="size-14 bg-primary/5 hover:bg-primary/10 text-primary border border-primary/20 rounded-xl flex items-center justify-center active:scale-[0.98] transition-all"
            title="Biometric Login"
          >
            <span className="material-symbols-outlined text-3xl">face</span>
          </button>
        )}
      </div>

      <div className="mt-auto mb-8 pt-6">
        <button className="text-primary hover:underline text-sm font-medium text-center w-full">
          Help: I didn't receive my password
        </button>
      </div>
    </div>
  );
};

export default Login;
