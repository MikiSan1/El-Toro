
import React from 'react';
import { ScreenName } from '../types';
import Layout from '../components/Layout';

interface NotificationsProps {
  onNavigate: (screen: ScreenName) => void;
}

const Notifications: React.FC<NotificationsProps> = ({ onNavigate }) => {
  const notifications = [
    { title: 'New Shift Assigned', msg: 'You have been assigned to the Morning Shift on Tuesday, Oct 24th.', time: '10m ago', icon: 'calendar_month', color: 'blue', unread: true },
    { title: 'Message from Supervisor', msg: 'Sarah Mitchell: "Hey Team, please remember to log your break times today."', time: '1h ago', icon: 'chat_bubble', color: 'green', unread: true },
    { title: 'Swap Request Approved', msg: 'Your request to swap shifts with David L. has been approved by management.', time: '4h ago', icon: 'published_with_changes', color: 'purple', unread: false },
    { title: 'Payroll Updated', msg: 'Your timesheets for the period of Oct 1-15 have been processed.', time: 'Yesterday', icon: 'info', color: 'gray', unread: false },
  ];

  return (
    <Layout activeScreen="NOTIFICATIONS" onNavigate={onNavigate}>
      <div className="sticky top-0 bg-[#f6f6f8]/90 backdrop-blur-lg border-b border-gray-100 px-6 pt-12 pb-6 z-10">
        <div className="flex justify-between items-center mb-4">
          <button className="text-primary font-bold">Edit</button>
          <button className="text-primary font-bold">Mark all as read</button>
        </div>
        <h1 className="text-3xl font-bold">Notifications</h1>
      </div>

      <div className="mt-2 bg-white border-y border-gray-100">
        {notifications.map((notif, i) => (
          <div key={i} className="flex gap-4 p-5 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50 last:border-0 relative">
            {notif.unread && (
              <div className="absolute left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-primary rounded-full"></div>
            )}
            <div className={`size-12 rounded-full flex-shrink-0 flex items-center justify-center bg-${notif.color}-50 text-${notif.color === 'gray' ? 'gray-600' : notif.color + '-600'}`}>
              <span className="material-symbols-outlined text-[24px]">{notif.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-0.5">
                <h4 className={`text-[15px] font-bold ${notif.unread ? '' : 'text-gray-600'}`}>{notif.title}</h4>
                <span className="text-[11px] text-gray-400 font-bold uppercase">{notif.time}</span>
              </div>
              <p className={`text-sm leading-snug ${notif.unread ? 'text-gray-600' : 'text-gray-400'}`}>{notif.msg}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-4 mt-4">
        <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Yesterday</h2>
      </div>

      <div className="bg-white border-y border-gray-100">
        <div className="flex gap-4 p-5 opacity-60">
          <div className="size-12 rounded-full flex-shrink-0 flex items-center justify-center bg-blue-50 text-primary">
            <span className="material-symbols-outlined text-[24px]">calendar_add_on</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h4 className="text-[15px] font-bold">New Schedule Published</h4>
              <span className="text-[11px] text-gray-400 font-bold uppercase">Oct 23</span>
            </div>
            <p className="text-sm leading-snug text-gray-600 mt-0.5">The schedule for next week (Oct 30 - Nov 5) is now available.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
