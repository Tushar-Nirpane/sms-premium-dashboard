import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Eye } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [role, setRole] = useState('Student');
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAutoFill = () => {
    setStudentId('STU2024001');
    setPassword('student123');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (studentId && password) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container preserve-3d">
      <div className="login-card animate-entrance hover-3d">
        
        <div className="login-header">
          <div className="login-logo">
            <GraduationCap size={28} />
            <h2>SMS Login</h2>
          </div>
          <p className="login-subtitle">Sign in to access your dashboard</p>
        </div>

        <div className="role-selector">
          {['Student', 'Teacher', 'Admin'].map(r => (
            <button 
              key={r}
              className={`role-btn ${role === r ? 'active' : ''}`}
              onClick={() => setRole(r)}
              type="button"
            >
              {r}
            </button>
          ))}
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Student ID</label>
            <input 
              type="text" 
              placeholder="e.g. STU2024001" 
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <div className="password-input">
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Eye className="eye-icon" size={20} />
            </div>
          </div>

          <button type="submit" className="btn-primary btn-submit">
            Sign In as {role}
          </button>
        </form>

        <div className="demo-credentials">
          <p className="demo-title">Demo Credentials ({role.toLowerCase()}):</p>
          <p className="demo-text">ID: <span className="mono">STU2024001</span></p>
          <p className="demo-text">Password: <span className="mono">student123</span></p>
          <button type="button" className="demo-autofill" onClick={handleAutoFill}>
            Auto-fill credentials &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;
