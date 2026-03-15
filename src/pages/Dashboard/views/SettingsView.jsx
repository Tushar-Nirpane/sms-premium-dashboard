import React, { useState } from 'react';
import { Settings, Save } from 'lucide-react';
import './Views.css';

const SettingsView = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <div className="view-container">
      <div className="view-header">
        <div className="view-title">
          <Settings size={24} className="text-blue" />
          <h2>Account Settings</h2>
        </div>
        <div className="view-actions">
           <button className="btn-primary flex-btn">
             <Save size={18} />
             Save Changes
           </button>
        </div>
      </div>

      <div className="settings-grid">
        <div className="settings-nav">
          {['Profile', 'Security', 'Notifications', 'Preferences'].map(tab => (
             <div 
               key={tab} 
               className={`settings-nav-item ${activeTab === tab ? 'active' : ''}`}
               onClick={() => setActiveTab(tab)}
             >
               {tab}
             </div>
          ))}
        </div>

        <div className="card hover-3d animate-entrance">
          {activeTab === 'Profile' && (
             <div className="settings-form">
                <h3>Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" defaultValue="TUSHAR" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" defaultValue="NIRPANE" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" defaultValue="tushar.nirpane@engineering.edu" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" className="form-control" defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Bio</label>
                  <textarea className="form-control" rows="4" defaultValue="Computer Science major interested in full-stack development."></textarea>
                </div>
             </div>
          )}
          {activeTab !== 'Profile' && (
            <div className="text-muted p-4">
              Settings parameters for {activeTab} would be rendered here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
