
import React, { useEffect, useState } from 'react';

interface BiometricScannerProps {
  type: 'face' | 'fingerprint';
  onComplete: () => void;
  onCancel: () => void;
  title?: string;
}

const BiometricScanner: React.FC<BiometricScannerProps> = ({ type, onComplete, onCancel, title = "Verifying Identity" }) => {
  const [status, setStatus] = useState<'scanning' | 'success' | 'error'>('scanning');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('success');
      setTimeout(onComplete, 1200);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="w-[85%] max-w-[320px] bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-8 flex flex-col items-center shadow-2xl border border-white/20">
        <div className="relative mb-8">
          {/* Scanner Pulse Effect */}
          <div className={`absolute inset-0 rounded-full bg-primary/20 animate-ping ${status === 'scanning' ? 'block' : 'hidden'}`}></div>
          <div className={`size-24 rounded-full flex items-center justify-center transition-all duration-500 ${status === 'success' ? 'bg-green-500 scale-110' : 'bg-primary/10'}`}>
            <span className={`material-symbols-outlined text-5xl transition-all duration-500 ${status === 'success' ? 'text-white' : 'text-primary'}`}>
              {status === 'success' ? 'check' : (type === 'face' ? 'face' : 'fingerprint')}
            </span>
          </div>
          
          {/* Scanning Line */}
          {status === 'scanning' && (
            <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
              <div className="w-full h-0.5 bg-primary/50 shadow-[0_0_15px_rgba(19,91,236,0.8)] absolute top-0 animate-[scan_2s_ease-in-out_infinite]"></div>
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{status === 'success' ? 'Identity Verified' : title}</h3>
        <p className="text-sm text-gray-500 text-center mb-8 px-4 leading-relaxed">
          {status === 'scanning' ? `Scanning ${type === 'face' ? 'Face ID' : 'fingerprint'}...` : 'Success! Redirecting you now.'}
        </p>

        <button 
          onClick={onCancel}
          className="text-primary font-bold text-sm px-6 py-2 hover:bg-primary/5 rounded-full transition-colors"
        >
          Cancel
        </button>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default BiometricScanner;
