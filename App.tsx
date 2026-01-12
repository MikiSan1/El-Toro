
import React, { useState } from 'react';
import { ScreenName } from './types';
import Login from './screens/Login';
import ChangePassword from './screens/ChangePassword';
import VerifyIdentity from './screens/VerifyIdentity';
import VerifyPhone from './screens/VerifyPhone';
import SecurityBiometrics from './screens/SecurityBiometrics';
import Dashboard from './screens/Dashboard';
import Schedule from './screens/Schedule';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('LOGIN');

  const navigateTo = (screen: ScreenName) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'LOGIN':
        return <Login onNext={() => navigateTo('CHANGE_PASSWORD')} />;
      case 'CHANGE_PASSWORD':
        return <ChangePassword onNext={() => navigateTo('VERIFY_IDENTITY')} onBack={() => navigateTo('LOGIN')} />;
      case 'VERIFY_IDENTITY':
        return <VerifyIdentity onNext={() => navigateTo('VERIFY_PHONE')} onBack={() => navigateTo('CHANGE_PASSWORD')} />;
      case 'VERIFY_PHONE':
        return <VerifyPhone onNext={() => navigateTo('SECURITY_BIOMETRICS')} onBack={() => navigateTo('VERIFY_IDENTITY')} />;
      case 'SECURITY_BIOMETRICS':
        return <SecurityBiometrics onNext={() => navigateTo('DASHBOARD')} onBack={() => navigateTo('VERIFY_PHONE')} />;
      case 'DASHBOARD':
        return <Dashboard onNavigate={navigateTo} />;
      case 'SCHEDULE':
        return <Schedule onNavigate={navigateTo} />;
      case 'NOTIFICATIONS':
        return <Notifications onNavigate={navigateTo} />;
      case 'PROFILE':
        return <Profile onNavigate={navigateTo} />;
      default:
        return <Login onNext={() => navigateTo('CHANGE_PASSWORD')} />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-0 sm:p-4">
      <div className="relative w-full max-w-[430px] h-[900px] max-h-screen bg-white shadow-2xl overflow-hidden sm:rounded-[3rem] border-0 sm:border-[8px] border-gray-900">
        {renderScreen()}
      </div>
    </div>
  );
};

export default App;
