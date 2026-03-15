import React from 'react';
import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Legend as RechartsLegend, Tooltip } from 'recharts';
import { PieChart, Users } from 'lucide-react';
import './Dashboard.css';

const gradeData = [
  { name: 'A Grade', value: 45, color: '#0ea5e9' },
  { name: 'B Grade', value: 30, color: '#10b981' },
  { name: 'C Grade', value: 15, color: '#f59e0b' },
  { name: 'D Grade', value: 10, color: '#ef4444' },
];

const recentStudents = [
  { name: 'MANASVI PATIL', id: 'STU2024001', course: 'Computer Science', gpa: '3.2' },
  { name: 'TUSHAR NIRPANE', id: 'STU2024002', course: 'Electronics', gpa: '3.9' },
  { name: 'ANOKHI PATIL', id: 'STU2024003', course: 'Mechanical', gpa: '3.9' },
  { name: 'PRAHI PATNE', id: 'STU2024004', course: 'Civil', gpa: '3.5' },
  { name: 'MANSI PARMAR', id: 'STU2024005', course: 'Computer Science', gpa: '3.7' },
];

const BottomArea = () => {
  return (
    <div className="bottom-grid">
      {/* Grade Distribution */}
      <div className="card chart-card hover-3d animate-entrance" style={{ animationDelay: '0.6s' }}>
        <div className="chart-header">
          <PieChart size={18} className="text-muted text-orange" />
          <h3>Grade Distribution</h3>
        </div>
        <div className="chart-body flex-center pt-2">
          <ResponsiveContainer width="100%" height={220}>
            <RePieChart>
              <Pie
                data={gradeData}
                cx="50%"
                cy="45%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {gradeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <RechartsLegend 
                iconType="square" 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                wrapperStyle={{ fontSize: 12 }}
              />
            </RePieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Students Table */}
      <div className="card table-card hover-3d animate-entrance" style={{ animationDelay: '0.7s' }}>
        <div className="chart-header">
          <Users size={18} className="text-muted" />
          <h3>Recent Students</h3>
        </div>
        <div className="table-responsive">
          <table className="recent-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Course</th>
                <th className="text-right">GPA</th>
              </tr>
            </thead>
            <tbody>
              {recentStudents.map((student, i) => (
                <tr key={i}>
                  <td className="font-medium text-main">{student.name}</td>
                  <td className="text-muted">{student.id}</td>
                  <td className="text-muted">{student.course}</td>
                  <td className="text-right font-medium text-blue">{student.gpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BottomArea;
