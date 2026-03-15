import React from 'react';
import { Bell, AlertCircle, Info, CheckCircle2 } from 'lucide-react';
import './Views.css';

const NotificationsView = () => {
  const notifications = [
    { id: 1, title: 'Exam Schedule Released', message: 'The mid-term exam schedule for Semester 4 is now available in the portal.', time: '2 hours ago', type: 'info', read: false },
    { id: 2, title: 'Fee Payment Overdue', message: 'Your tuition fee for the current semester is past due. Please clear your dues immediately.', time: '1 day ago', type: 'warning', read: false },
    { id: 3, title: 'Assignment Graded', message: 'Your assignment "Data Structures Lab 3" has been graded. Grade: A', time: '2 days ago', type: 'success', read: true },
    { id: 4, title: 'System Maintenance', message: 'The SMS portal will be down for maintenance this Saturday from 2AM to 4AM.', time: '3 days ago', type: 'info', read: true },
    { id: 5, title: 'Welcome to the New Semester', message: 'Classes for Semester 4 begin on Monday. Check your updated course schedule.', time: '1 week ago', type: 'info', read: true },
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'warning': return <AlertCircle size={20} className="text-orange" />;
      case 'success': return <CheckCircle2 size={20} className="text-green" />;
      default: return <Info size={20} className="text-blue" />;
    }
  };

  return (
    <div className="view-container">
      <div className="view-header">
        <div className="view-title">
          <Bell size={24} className="text-blue" />
          <h2>Notifications</h2>
        </div>
        <div className="view-actions">
           <button className="btn-secondary">Mark all as read</button>
        </div>
      </div>

      <div className="notification-list">
        {notifications.map((notif, index) => (
          <div key={notif.id} className={`notification-item ${!notif.read ? 'unread' : ''} animate-entrance`} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="notif-icon-wrap">
              {getIcon(notif.type)}
            </div>
            <div className="notif-content">
              <h4>{notif.title}</h4>
              <p>{notif.message}</p>
              <span className="notif-time">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsView;
