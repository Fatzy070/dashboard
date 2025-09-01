import React, { useState, useEffect } from 'react';
import Nav from '../navigations/Nav';
import Head from './Head';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
const username = localStorage.getItem("username");
  useEffect(() => {
    // Simulate fetching notifications from an API
    const mockNotifications = [
      { id: 1,message: `A new user registered: ${username}`, type: 'user', timestamp: new Date().toISOString() },
      { id: 2, message: 'Server disk space is low (15% remaining)', type: 'system', timestamp: '2025-09-01T21:45:00Z' },
      { id: 3, message: 'New order placed: #12345', type: 'order', timestamp: '2025-09-01T21:30:00Z' },
      { id: 4, message: 'Failed login attempt from IP: 192.168.1.1', type: 'security', timestamp: '2025-09-01T21:15:00Z' },
    ];
    setNotifications(mockNotifications);
  }, []);

  return (
    <div>
        <Head title="Notification" name="Home" />
        <Nav title="Notification" name="Home" />
      <h2 style={{ padding: '10px' }}>Notifications</h2>
      {notifications.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {notifications.map(notification => (
            <li 
              key={notification.id} 
              style={{
                borderBottom: '1px solid #eee',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: notification.type === 'security' ? '#fff5f5' : '#fff', // Example of styling by type
              }}
            >
              <span style={{ marginRight: '10px' }}>
                {notification.type === 'user' && '👤'}
                {notification.type === 'system' && '⚙️'}
                {notification.type === 'order' && '🛒'}
                {notification.type === 'security' && '🔒'}
              </span>
              <span>{notification.message}</span>
              <span style={{ marginLeft: 'auto', fontSize: '0.8em', color: '#888' }}>
                {new Date(notification.timestamp).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ padding: '10px' }}>No new notifications.</p>
      )}
    </div>
  );
};

export default Notifications;