import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend,
  LineChart, Line
} from 'recharts';
import { BarChart3, TrendingUp } from 'lucide-react';
import './Dashboard.css';

const attendanceData = [
  { name: 'Jan', present: 22, absent: 3 },
  { name: 'Feb', present: 20, absent: 4 },
  { name: 'Mar', present: 23, absent: 2 },
  { name: 'Apr', present: 19, absent: 5 },
  { name: 'May', present: 21, absent: 3 },
  { name: 'Jun', present: 18, absent: 4 },
];

const marksData = [
  { name: 'Math', score: 85 },
  { name: 'Physics', score: 78 },
  { name: 'Chemistry', score: 92 },
  { name: 'English', score: 88 },
  { name: 'CS', score: 96 },
];

const ChartsArea = () => {
  return (
    <div className="charts-grid">
      {/* Attendance Overview */}
      <div className="card chart-card hover-3d animate-entrance" style={{ animationDelay: '0.4s' }}>
        <div className="chart-header">
          <BarChart3 size={18} className="text-muted" />
          <h3>Attendance Overview</h3>
        </div>
        <div className="chart-body">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={attendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
              <RechartsTooltip cursor={{ fill: 'transparent' }} />
              <Legend iconType="square" wrapperStyle={{ fontSize: 12, paddingTop: '10px' }} />
              <Bar dataKey="present" fill="#0ea5e9" radius={[4, 4, 0, 0]} barSize={20} />
              <Bar dataKey="absent" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Marks Analytics */}
      <div className="card chart-card hover-3d animate-entrance" style={{ animationDelay: '0.5s' }}>
        <div className="chart-header">
          <TrendingUp size={18} className="text-muted text-green" />
          <h3>Marks Analytics</h3>
        </div>
        <div className="chart-body">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={marksData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
              <YAxis axisLine={false} tickLine={false} domain={[0, 100]} tick={{ fontSize: 12, fill: '#64748b' }} />
              <RechartsTooltip />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={{ r: 4, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartsArea;
