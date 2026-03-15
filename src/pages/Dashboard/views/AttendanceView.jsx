import React from 'react';
import { CalendarDays, Filter } from 'lucide-react';
import './Views.css';

const AttendanceView = () => {
  const attendanceRecords = [
    { date: '2026-03-15', course: 'CS301', status: 'Present', remarks: '-' },
    { date: '2026-03-15', course: 'EE205', status: 'Present', remarks: '-' },
    { date: '2026-03-14', course: 'CS301', status: 'Absent', remarks: 'Medical Leave' },
    { date: '2026-03-14', course: 'ME402', status: 'Present', remarks: '-' },
    { date: '2026-03-13', course: 'EE205', status: 'Late', remarks: 'Arrived 15m late' },
    { date: '2026-03-13', course: 'CE101', status: 'Present', remarks: '-' },
  ];

  return (
    <div className="view-container">
      <div className="view-header">
        <div className="view-title">
          <CalendarDays size={24} className="text-blue" />
          <h2>My Attendance</h2>
        </div>
        <div className="view-actions">
           <button className="btn-secondary">
            <Filter size={18} />
            Filter by Month
          </button>
        </div>
      </div>

      <div className="card table-card full-width hover-3d animate-entrance">
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Course Code</th>
                <th>Status</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record, index) => (
                <tr key={index}>
                  <td className="font-medium">{record.date}</td>
                  <td className="text-muted">{record.course}</td>
                  <td>
                    <span className={`status-badge ${record.status.toLowerCase()}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="text-muted">{record.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceView;
