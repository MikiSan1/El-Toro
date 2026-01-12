
export type ScreenName = 
  | 'LOGIN' 
  | 'CHANGE_PASSWORD' 
  | 'VERIFY_IDENTITY' 
  | 'VERIFY_PHONE' 
  | 'SECURITY_BIOMETRICS' 
  | 'DASHBOARD' 
  | 'SCHEDULE' 
  | 'NOTIFICATIONS' 
  | 'PROFILE';

export interface User {
  name: string;
  role: string;
  avatar: string;
}
